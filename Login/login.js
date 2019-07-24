// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyChiqQX2sD8RgDahTSVkQNe18AoZdYq8C8",
  authDomain: "dnd-helper-project.firebaseapp.com",
  databaseURL: "https://dnd-helper-project.firebaseio.com",
  projectId: "dnd-helper-project",
  storageBucket: "dnd-helper-project.appspot.com",
  messagingSenderId: "297880874955",
  appId: "1:297880874955:web:8cdbb7bb09ebdfe5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var provider = new firebase.auth.GoogleAuthProvider();
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      // document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  // signInSuccessUrl: null,
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // scopes: [
      //   'https://www.googleapis.com/auth/contacts.readonly'
      // ],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account'
      }
    }
    // Leave the lines as is for the providers you want to offer your users.
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  // tosUrl: '<your-tos-url>',
  // Privacy policy url.
  // privacyPolicyUrl: '<your-privacy-policy-url>'
};
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    $("#user_div").css("display", "inline-grid");
    $("#login_div").css("display", "none");
    var user = firebase.auth().currentUser;
    if (user.displayName === null) {
      //MOSTRA A JANELA PARA INSERIR DADOS DO USUARIO
      $("#full_info_div").css("display", "none");
      $("#missing_info_div").css("display", "inline-grid");
    } else {

      var ifUserData = firebase.database().ref('/users/'+user.uid);
      ifUserData.once('value', function(snapshot) {
        var dataIsPresent = snapshot.val();
        if (dataIsPresent == null) {

          sendDataToServer()
          var user = firebase.auth().currentUser;

          $("#first_name").text(user.displayName);
          $("#logged_user").text(user.displayName);
          $("#logged_user_name").text(user.displayName);
          $("#logged_user_cel").text(user.phoneNumber);
          $("#logged_user_email").text(user.email);
          $("#logged_user_lastlogin").text(user.metadata.lastSignInTime);

          $("#logged_user_top").text(user.displayName);
          $("#logged_user_name_top").text(user.displayName);
          $("#logged_user_cel_top").text(user.phoneNumber);
          $("#logged_user_email_top").text(user.email);
          $("#logged_user_lastlogin_top").text(user.metadata.lastSignInTime);


          //APOS O LOGIN, E CONFIRMAR QUE OS DADOS ESTÃO ATUALIZADOS, CHAMA A DATABASE.
          // var user = firebase.auth().currentUser;
          // var lastCampaingRef = firebase.database().ref('users/' + user.uid + '/CampanhasMestre/');
          var lastCampaingRef = firebase.database().ref('users/' + user.uid);
          lastCampaingRef.on('value', function(snapshot) {
            loadDataFromLogin(snapshot.val())
          });

          //MOSTRA OS DADOS DO USUARIO
          $("#full_info_div").css("display", "inline-grid");
          $("#missing_info_div").css("display", "none");

        } else {

          var user = firebase.auth().currentUser;

          //CARREGA OS DADOS DO USUARIO
          $("#logged_user").text(user.displayName);
          $("#first_name").text(user.displayName);
          $("#logged_user_email").text(user.email);
          $("#logged_user_name").text(user.displayName);
          $("#logged_user_cel").text(user.phoneNumber);
          $("#logged_user_lastlogin").text(user.metadata.lastSignInTime);

          $("#logged_user_top").text(user.displayName);
          $("#logged_user_name_top").text(user.displayName);
          $("#logged_user_cel_top").text(user.phoneNumber);
          $("#logged_user_email_top").text(user.email);
          $("#logged_user_lastlogin_top").text(user.metadata.lastSignInTime);

          //MOSTRA OS DADOS DO USUARIO
          $("#full_info_div").css("display", "inline-grid");
          $("#missing_info_div").css("display", "none");

          //APOS O LOGIN, E CONFIRMAR QUE OS DADOS ESTÃO ATUALIZADOS, CHAMA A DATABASE.
          // var user = firebase.auth().currentUser;
          // var lastCampaingRef = firebase.database().ref('users/' + user.uid + '/CampanhasMestre/');
          var lastCampaingRef = firebase.database().ref('users/' + user.uid);
          lastCampaingRef.on('value', function(snapshot) {
            loadDataFromLogin(snapshot.val())
          });
        }
      })
    }
  } else {
    // No user is signed in.

    $("#user_div").css("display", "none");
    $("#login_top_LI").css("display", "none");
    $("#call_login_top_LI").css("display", "");
    $("#login_div").css("display", "inline-grid");
    $("#first_name").text("Login");
    $("#miniLogin").css("display", "none");

  }
});

function login(){

  var userEmail = $("#email_field").val();
  var userPass = $("#password_field").val();


  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    alert("Error: "+errorMessage)
  });

}
function logout(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    location.reload();
  }).catch(function(error) {
    // An error happened.
  });
}

function login_top(){

  var userEmail = $("#email_field_top").val();
  var userPass = $("#password_field_top").val();


  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    alert("Error: "+errorMessage)
  });
}


function criarUser(){
  var userEmail = $("#new_email_field").val();
  var userPass = $("#new_password_field").val();

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    alert("Error: "+errorMessage)
  });
}
function deleteUser() {
  var user = firebase.auth().currentUser;
  user.delete().then(function() {
    // User deleted.
  }).catch(function(error) {
    // An error happened.
  });
}

function updateData() {
  var user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: $("#name_field").val(),
    phoneNumber: $("#cel_field").val()
  }).then(function() {
    // Update successful.
    sendDataToServer()
    var user = firebase.auth().currentUser;
    $("#logged_user_email").text(user.email);
    $("#first_name").text(user.displayName);
    $("#logged_user_name").text(user.displayName);
    $("#logged_user_cel").text(user.phoneNumber);
    $("#logged_user_lastlogin").text(user.metadata.lastSignInTime);
    $("#full_info_div").css("display", "inline-grid");
    $("#missing_info_div").css("display", "none");

    var lastCampaingRef = firebase.database().ref('users/' + user.uid);
    lastCampaingRef.on('value', function(snapshot) {
      loadDataFromLogin(snapshot.val())
    });

    alert("Dados Atualizados!")

  }).catch(function(error) {
    // An error happened.
    var errorMessage = error.message;
    alert("Error: "+errorMessage)
  });
}
function sendDataToServer(){
  var database = firebase.database();
  var user = firebase.auth().currentUser;

  firebase.database().ref('users/' + user.uid + '/InformacoesdoUsuario').set({
    name: user.displayName,
    email: user.email,
    phone: user.phoneNumber,
    "CampanhaAtual": "",
    "PersonagemAtual": ""
  }).then(function() {
    // Update successful.
    alert("Dados criados com sucesso!")
  }).catch(function(error) {
    // An error happened.
    alert("Error: "+ error.message)
  });
}
function newCampaign(){
  var lastCampaingRef = firebase.database().ref('/lastCreatedCampaign');
  lastCampaingRef.once('value', function(snapshot) {
    var lastCampaingId = snapshot.val();

    var database = firebase.database();
    var user = firebase.auth().currentUser;
    var CampaingId = eval(eval(lastCampaingId) + 1);
    var CampaingFullId = "Campanha"+CampaingId;

    firebase.database().ref('users/' + user.uid + '/CampanhasMestre/' + CampaingFullId).set({
      // "Grid": {},
      // "Encontro": {},
      // "Contadores": {},
      "Cidade": "",
      "Mundo": {
        "Historico": {},
        "MapaAtual": {}
      },
      "CampanhaInfo": {
        "BlocInfo": true,
        "CidaInfo": false,
        "DungInfo": true,
        "MundInfo": false,
        "PlayInfo": 0,
        "TabeInfo": false
      },
      "Dungeon": {
        "Nome": "",
        "Dados": {
          "map_style": "standard",
          "grid": "square",
          "dungeon_layout": "square",
          "dungeon_size": "dimin",
          "add_stairs": "yes",
          "room_layout": "scattered",
          "room_size": "medium",
          "doors": "standard",
          "corridor_layout": "errant",
          "remove_deadends": "some"
        }
      },
      "BlocoDeNotas": "<h2><span class=\"text-big\"><strong>Olá! Bem vindo à Página do Mestre do DnD Helper!</strong></span></h2><p><span class=\"text-big\">Aqui você encontrará diversas ferramentas para auxiliar em sua mesa de D&amp;D, e melhorar suas mestragens!</span><br><span class=\"text-big\">Há varias ferramentas para agilizar sua pesquisa de magias, poder gerenciar seu grupo, melhorar os combates do seu personagem, tabelas úteis, grids, e muito mais!</span></p>",
      "Tabela": {},
      "Players": {
        "ListaDePlayers": {},
        "ListaDeMagias": {},
        "ListaDePericias": {},
        // "ListaDeProeficiencias": {},
        "ListaDeItens": {}
      }
    }).then(function() {
      // Update successful.
      firebase.database().ref('/').update({ lastCreatedCampaign: CampaingId })
      firebase.database().ref('users/' + user.uid + '/InformacoesdoUsuario/').update({ CampanhaAtual: CampaingFullId })
      alert("Campanha criada com sucesso!")

      var lastCampaingRef = firebase.database().ref('users/' + user.uid);
      lastCampaingRef.on('value', function(snapshot) {
        loadDataFromLogin(snapshot.val())
      });
    }).catch(function(error) {
      // An error happened.
      alert("Error: "+ error.message)
    });
  });
}

function mostrarCriarUser() {
  $("#buttonLogin").css("color", "#ccc");
  $("#buttonSignin").css("color", "white");
  $("#enter_div").css("display", "none");
  $("#create_div").css("display", "inline-grid");
}
function voltar() {
  $("#buttonLogin").css("color", "white");
  $("#buttonSignin").css("color", "#ccc");
  $("#enter_div").css("display", "inline-grid");
  $("#create_div").css("display", "none");
}

function mostrarCriarUser_top() {
  $("#buttonLogin_top").css("color", "#ccc");
  $("#buttonSignin_top").css("color", "white");
  $("#enter_div_top").css("display", "none");
  $("#create_div_top").css("display", "inline-grid");
}
function voltar_top() {
  $("#buttonLogin_top").css("color", "white");
  $("#buttonSignin_top").css("color", "#ccc");
  $("#enter_div_top").css("display", "inline-grid");
  $("#create_div_top").css("display", "none");
}


////FUNCOES DE DADOS DAS CAMPANHAS
// var objetoCarregado;
function loadDataFromLogin(objetoCarregado) {
  // objetoCarregado = JSON.parse(rc4("DNDHELPER",text));
  // usuario = [];
  usuario = objetoCarregado;
  if (usuario["InformacoesdoUsuario"]["CampanhaAtual"] != "") {
    var campanha = (usuario["InformacoesdoUsuario"]["CampanhaAtual"]);
    allPlayers = usuario["CampanhasMestre"][campanha]["Players"]
    // console.log(usuario)

    var nomesCampanhas = Object.keys(objetoCarregado["CampanhasMestre"]);
    var numDeCampanhas = nomesCampanhas.length;
    $("#ulCampanhas").empty();
    for (var i = 0; i < numDeCampanhas; i++) {
      var textToAppend = "<li class=\"default leaf first\" value=\"Campanha"+nomesCampanhas[i].replace("Campanha","")+"\" onclick=\"carregaDados($(this).attr('value'))\"><a><span>Campanha #"+nomesCampanhas[i].replace("Campanha","")+"</span></a></li>";
      $("#ulCampanhas").append(textToAppend);
    }

    $("#ulPersonagens").empty();
    var allPersonagens = objetoCarregado.PersonagensPlayer;
    if (allPersonagens != undefined) {
      var nomesPersonagens = Object.keys(objetoCarregado.PersonagensPlayer);
      var numDePersonagens = Object.keys(allPersonagens).length;
      for (var i = 0; i < numDePersonagens; i++) {
        var textToAppend = "<li class=\"default leaf first\" value=\""+nomesPersonagens[i]+"\"><a><span>"+allPersonagens[nomesPersonagens[i]].Nome+"</span></a></li>";
        $("#ulPersonagens").append(textToAppend);
      }
    } else {
      $("#ulPersonagens").append("<li class=\"default leaf first\" data-toggle=\"modal\" data-target=\"#criarNovoPersonagem\"><a><span>Crie um Personagem</span></a></li>");
    }

    $("#ulOpcoesPagMestre").empty();
    var textToAppend = "<li class=\"default leaf first\"><a title=\"\"><span class=\"\">Abrir Painel</span></a></li>" +
    "<li class=\"default leaf\"><a href=\"https://dnd-helper.github.io/Masters-Page/\" title=\"\"><span class=\"\">Configurar Campanhas</span></a></li>" +
    "<li class=\"default leaf last\"><a onclick=\"novaCampanha()\" title=\"\"><span class=\"\">Criar nova Campanha</span></a></li>" +
    "<li class=\"default leaf first\" onclick=\"saveThisCampaignOnline()\"><a><span>Salvar Dados da Campanha</span></a></li>";
    $("#ulOpcoesPagMestre").append(textToAppend);

    carregaDadosSemUpdate(usuario["InformacoesdoUsuario"]["CampanhaAtual"])
  }

  if (usuario["InformacoesdoUsuario"]["CampanhaAtual"] != "") {
    $("#loginBlock").css("display", "none");
    $("#loginBackground").css("display", "none");
    $("#login_top_LI").css("display", "");
    $("#call_login_top_LI").css("display", "none");
    $("#miniLogin").css("display", "");
  }
}

function carregaDadosSemUpdate(campanha) {

  usuario["InformacoesdoUsuario"]["CampanhaAtual"] = campanha; //SALVA NO USUARIO, QUAL CAMPANHA É A ATUAL

  //FUNÇÃO QUE CARREGA OS PLAYERS NA DIV CORRETA
  // console.log(campanha)
  if (usuario["CampanhasMestre"][campanha]["CampanhaInfo"]["PlayInfo"] > 0) {
    $("#AdicionaPlayers").empty();
    // var idsPlayers = Object.keys(usuario["CampanhasMestre"][campanha]["Players"]);
    $.each(usuario["CampanhasMestre"][campanha]["Players"], function(index, value) {
      // var idPlayer = idsPlayers[index]
      // alert(index);
      CarregarPlayer(usuario,index,campanha)
    });
  }

  //FUNÇÃO QUE CONFERE SE A TABELA JÁ FOI CARREGADA, E CARREGA OS DADOS DA TABELA
  if (usuario["CampanhasMestre"][campanha]["CampanhaInfo"]["TabeInfo"] == true) {
    if (renderized == false) { configTabela() }
    hot.loadData(transformaDadosVoltaTabela(usuario["CampanhasMestre"][campanha]["Tabela"]));
  }

  //FUNÇÃO QUE CARREGA OS DADOS DO EDITOR DE TEXTOS
  if (usuario["CampanhasMestre"][campanha]["CampanhaInfo"]["BlocInfo"] == true) {
    editor.setData(usuario["CampanhasMestre"][campanha]["BlocoDeNotas"]);
  }

  //FUNÇÃO QUE CARREGA OS DADOS NO GERADOR DE DUNGEONS
  if (usuario["CampanhasMestre"][campanha]["CampanhaInfo"]["DungInfo"] == true) {
    if (contDungeon == 1) { $("#iframeDungeon").attr("src","Dungeon2.0/index.html");}
  }

  //FUNÇÃO QUE CARREGA OS DADOS NO MAPA DA CIDADE
  if (usuario["CampanhasMestre"][campanha]["CampanhaInfo"]["CidaInfo"] == true) {
    if (usuario["CampanhasMestre"][usuario["InformacoesdoUsuario"]["CampanhaAtual"]]["Cidade"] != $("#linkCidade").attr("value")) {
      $("#linkCidade").attr("value", usuario["CampanhasMestre"][usuario["InformacoesdoUsuario"]["CampanhaAtual"]]["Cidade"]);
      if (contCidade == 1 && usuario["CampanhasMestre"][usuario["InformacoesdoUsuario"]["CampanhaAtual"]]["Cidade"] != "") {
        var linkCidade = "MapaCidade/index.html" + usuario["CampanhasMestre"][usuario["InformacoesdoUsuario"]["CampanhaAtual"]]["Cidade"];
        $("#iframeCidade").attr("src",linkCidade); contCidade = 1;
      }
    }
  }

  //FUNÇÃO QUE CARREGA OS DADOS NO MAPA MUNDO
  if (usuario["CampanhasMestre"][campanha]["CampanhaInfo"]["MundInfo"] == true) {
    mapaMundo["Mundo"]["Historico"] = usuario["CampanhasMestre"][campanha]["Mundo"]["Historico"];
    mapaMundo["Mundo"]["MapaAtual"] = usuario["CampanhasMestre"][campanha]["Mundo"]["MapaAtual"];
    // if (contDungeon == 1) { $("#iframeDungeon").attr("src","Dungeon2.0/index.html");}
  }
  //  else {
  //   mapaMundo["Mundo"]["Historico"] = "";
  //   mapaMundo["Mundo"]["MapaAtual"] = "";
  // }
  // contCidade = 0;
  // contMundo = 0;
  // contDungeon = 0;
}
function carregaDados(campanha) {
  saveThisCampaignOnline()
  // updateData(usuario["InformacoesdoUsuario"]["CampanhaAtual"])
  var database = firebase.database();
  var user = firebase.auth().currentUser;
  firebase.database().ref('users/' + user.uid + '/InformacoesdoUsuario/').update({ CampanhaAtual: campanha })
  carregaDadosSemUpdate(campanha)
  // saveThisCampaignOnline()
}
function CarregarPlayer(usuario,index,campanha) {
  // var linhaPlayer = usuario[campanha].length-1;
  var linhaSelecionada = usuario["CampanhasMestre"][campanha]["Players"][index]["InfoPlayer"];

  var stringAddPlayer =
  "<div id=\""+linhaSelecionada[0]+"CabecalhoButton"+"\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#PlayersAdicionados\" href=\"#collapsePlayer"+linhaSelecionada[0]+"\" aria-expanded=\"true\""
  +"aria-controls=\"collapsePlayer"+linhaSelecionada[0]+"\" class=\"btn btn-default delPlayerline\" style=\"width: 100%;display: inline-block;\">"
  +"<p id=\""+linhaSelecionada[0]+"Cabecalho"+"\" style=\"float: left;position: absolute;top:50%;transform: translateY(-50%);height: 75%;\">"
  +"<b style=\"font-size: 13px;\">"
  +linhaSelecionada[1]+" - HP:"+linhaSelecionada[32]+"/"+linhaSelecionada[31]+" - XP:"+linhaSelecionada[6]
  +"</b>"
  +"</p>"
  +"<button style=\"float: right; background-color:"+linhaSelecionada[45]+"\" type=\"button\" class=\"btn btn-primary delPlayerbutton\" onclick=\"alert('teste')\">"
  +"<span class=\"glyphicon glyphicon-certificate\" aria-hidden=\"true\"></span>"
  +"</button>"
  +"</div>"


  +"<div id=\"collapsePlayer"+linhaSelecionada[0]+"\" style=\"border: 1px solid rgb(204, 204, 204); margin-top: -1px; "
  +"margin-bottom: -1px; overflow: hidden auto; max-height: calc(-387px + 100vh);\" class=\"panel-collapse collapse\" role=\"tabpanel\" "
  +"aria-labelledby=\""+linhaSelecionada[0]+"CabecalhoButton"+"\" aria-expanded=\"true\">"

  +"<div id=\""+linhaSelecionada[0]+"Body"+"\" class=\"panel-body\" style=\"padding: 7px\">"
  +"<div class=\"grid-item player-item\">"
  +"<div class=\"player-body\">"
  +"<div class=\"player-title\">"
  +"<div class=\"player-name\">"
  +"<p>"+linhaSelecionada[7]+" "+linhaSelecionada[8]+" / "+linhaSelecionada[9]+" "+linhaSelecionada[10]+" / "+linhaSelecionada[11]+" "+linhaSelecionada[12]+"</p>"
  +"<p class=\"player-id\">#"+linhaSelecionada[0]+"</p>"
  +"</div>"
  +"<button style=\"float: right;\" type=\"button\" onclick=\"EditarPlayer(this)\" class=\"btn btn-info delPlayerbutton\" data-toggle=\"modal\" data-target=\"#ModalAdicionarPlayer\">"
  +"<span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>"
  +"</button>"
  +"</div>"
  +"<div class=\"player-details\">"
  +"<div class=\"description\" style=\"padding-top: 0px;margin-top: -5px;padding-bottom: 6px;\">"
  +"<div class=\"carac\"><strong>FOR</strong><br>"+linhaSelecionada[19]+" (+"+linhaSelecionada[25]+")</div>"
  +"<div class=\"carac\"><strong>DES</strong><br>"+linhaSelecionada[20]+" (+"+linhaSelecionada[26]+")</div>"
  +"<div class=\"carac\"><strong>CON</strong><br>"+linhaSelecionada[21]+" (+"+linhaSelecionada[27]+")</div>"
  +"<div class=\"carac\"><strong>INT</strong><br>"+linhaSelecionada[22]+" (+"+linhaSelecionada[28]+")</div>"
  +"<div class=\"carac\"><strong>SAB</strong><br>"+linhaSelecionada[23]+" (+"+linhaSelecionada[29]+")</div>"
  +"<div class=\"carac\"><strong>CAR</strong><br>"+linhaSelecionada[24]+" (+"+linhaSelecionada[30]+")</div>"
  +"<div class=\"rub\"></div>"
  +"<table id=\"TabelaPlayer\" class=\"table table-striped table-condensed\">"
  +"<tbody>"
  +"<tr>"
  +"<th><b>Raça</b></th>"
  +"<th>"+linhaSelecionada[3]+"</th>"
  +"<th><b>Bonus de Proficiencia</b></th>"
  +"<th>"+linhaSelecionada[33]+"</th>"
  +"</tr>"
  +"<tr>"
  +"<th><b>Alinhamento</b></th>"
  +"<th>"+linhaSelecionada[4]+"</th>"
  +"<th><b>Classe de Armadura</b></th>"
  +"<th>"+linhaSelecionada[34]+"</th>"
  +"</tr>"
  +"<tr>"
  +"<th><b>Antecedente</b></th>"
  +"<th>"+linhaSelecionada[5]+"</th>"
  +"<th><b>Inspiração</b></th>"
  +"<th>"+linhaSelecionada[35]+"</th>"
  +"</tr>"
  +"<tr>"
  +"<th><b>Deslocamento</b></th>"
  +"<th>"+linhaSelecionada[37]+"</th>"
  +"<th><b>Iniciativa</b></th>"
  +"<th>"+linhaSelecionada[36]+"</th>"
  +"</tr>"
  +"</tbody>"
  +"</table>"
  +"<table id=\"TabelaPlayer\" class=\"table table-striped table-condensed\">"
  +"<tbody>"
  +"<tr>"
  +"<th><b>Traços de Personalidade</b></th>"
  +"<th>"+linhaSelecionada[38]+"</th>"
  +"</tr>"
  +"<tr>"
  +"<th><b>Ideais</b></th>"
  +"<th>"+linhaSelecionada[39]+"</th>"
  +"</tr>"
  +"<tr>"
  +"<th><b>Ligações</b></th>"
  +"<th>"+linhaSelecionada[40]+"</th>"
  +"</tr>"
  +"<tr>"
  +"<th><b>Defeitos</b></th>"
  +"<th>"+linhaSelecionada[41]+"</th>"
  +"</tr>"
  +"</tbody>"
  +"</table>"
  +"</div>"
  +"</div>"
  +"</div>"
  +"</div>"
  +"</div>"
  +"</div>";
  $("#AdicionaPlayers").append(stringAddPlayer);
}

function corrigeDadosTabela(dadosTabelaNaoCorrigidos) {
  // console.log(dadosTabelaNaoCorrigidos);
  function pad(d) {
    if (d < 10) {
      return '000' + d.toString();
    }
    if (d >= 10 && d < 100) {
      return '00' + d.toString();
    }
    if (d >= 100) {
      return '0' + d.toString();
    }
  }

  var dadosTabelaCorrigidos = {};
  $.each(dadosTabelaNaoCorrigidos, function(index1, value) {
    dadosTabelaCorrigidos['lin'+pad(index1)] = {};
    $.each(dadosTabelaNaoCorrigidos[index1], function(index2, value) {
      if (dadosTabelaNaoCorrigidos[index1][index2] == null) {
        dadosTabelaCorrigidos['lin'+pad(index1)]['col'+pad(index2)] = "";
      } else {
        dadosTabelaCorrigidos['lin'+pad(index1)]['col'+pad(index2)] = dadosTabelaNaoCorrigidos[index1][index2];
      }
    });
  });
  return dadosTabelaCorrigidos;
  // console.log(dadosTabelaCorrigidos);
  // transformaDadosVoltaTabela(dadosTabelaCorrigidos)
}
function transformaDadosVoltaTabela(dadosNaoTransformados) {
  // if (renderized == false) { configTabela() } //FUNCAO INICALIZA A TABELA ANTES DE PEGAR DADOS, DESSA FORMA, SEMPRE VIRAO DADOS
  // var dadosTabelaNaoCorrigidos = hot.getData();
  var dadosTransformados = [];
  $.each(dadosNaoTransformados, function(index1, value) {
    // dadosTabelaCorrigidos['lin'+pad(index1)] = {};
    var linhaPAdicionar = [];
    $.each(dadosNaoTransformados[index1], function(index2, value) {
      if (dadosNaoTransformados[index1][index2] == "") {
        linhaPAdicionar.push(null);
      } else {
        linhaPAdicionar.push(dadosNaoTransformados[index1][index2]);
      }
    });
    dadosTransformados.push(linhaPAdicionar)
  });
  return dadosTransformados;
}
function updateData(campanha) {
//   if (campanha != "Nenhuma") {
//     usuario["CampanhasMestre"][campanha]["BlocoDeNotas"] = editor.getData();
//     usuario["CampanhasMestre"][campanha]["CampanhaInfo"]["BlocInfo"] = true;
//
//     if (renderized == false) { configTabela() } //FUNCAO INICALIZA A TABELA ANTES DE PEGAR DADOS, DESSA FORMA, SEMPRE VIRAO DADOS
//     var dadosTabelaNaoCorrigidos = hot.getData();
//     var dadosTabelaCorrigidos = corrigeDadosTabela(dadosTabelaNaoCorrigidos)
//     console.log(dadosTabelaCorrigidos);
//
//     usuario["CampanhasMestre"][campanha]["Tabela"] = dadosTabelaCorrigidos;
//     usuario["CampanhasMestre"][campanha]["CampanhaInfo"]["TabeInfo"] = true;
//
//     usuario["CampanhasMestre"][campanha]["Cidade"] = $("#linkCidade").attr("value");
//     usuario["CampanhasMestre"][campanha]["CampanhaInfo"]["CidaInfo"] = true;
//   }
// }
// function updateDataOnline(campanha) {
//   // if (campanha != "Nenhuma") {
//   // usuario["CampanhasMestre"][campanha]["BlocoDeNotas"] = editor.getData();
//   // usuario["CampanhasMestre"][campanha]["CampanhaInfo"]["BlocInfo"] = true;
//
//   // if (renderized == false) { configTabela() } //FUNCAO INICALIZA A TABELA ANTES DE PEGAR DADOS, DESSA FORMA, SEMPRE VIRAO DADOS
//   // var dadosTabelaNaoCorrigidos = hot.getData();
//   // var dadosTabelaCorrigidos = corrigeDadosTabela(dadosTabelaNaoCorrigidos)
//   // console.log(dadosTabelaCorrigidos);
//
//   // usuario["CampanhasMestre"][campanha]["Tabela"] = dadosTabelaCorrigidos;
//   // usuario["CampanhasMestre"][campanha]["CampanhaInfo"]["TabeInfo"] = true;
//
//   // usuario["CampanhasMestre"][campanha]["Cidade"] = $("#linkCidade").attr("value");
//   // usuario["CampanhasMestre"][campanha]["CampanhaInfo"]["CidaInfo"] = true;
//   // }
}
function saveThisCampaign() {
  var user = firebase.auth().currentUser;
  var campanhaAtualPSalvar = usuario["InformacoesdoUsuario"]["CampanhaAtual"];
  updateData(campanhaAtualPSalvar)

  var saveThisCampaingRef = firebase.database().ref('users/' + user.uid + '/CampanhasMestre')
  var database = firebase.database();
  var user = firebase.auth().currentUser;

  saveThisCampaingRef.update({
    [campanhaAtualPSalvar]: usuario["CampanhasMestre"][campanhaAtualPSalvar]
  }).then(function() {
    // Update successful.
    alert("Dados salvos com sucesso!")
  }).catch(function(error) {
    // An error happened.
    alert("Error: "+ error.message)
  });
}
function saveThisCampaignOnline() {
  var user = firebase.auth().currentUser;
  var campanhaAtualPSalvar = usuario["InformacoesdoUsuario"]["CampanhaAtual"];
  // updateDataOnline(campanhaAtualPSalvar)

  var database = firebase.database();
  var user = firebase.auth().currentUser;

  if (renderized == false) { configTabela() }
  var dadosTabelaCorrigidos = corrigeDadosTabela(hot.getData())

  var dataCidade = $("#linkCidade").attr("value");
  if (dataCidade != "") { var booleanCidade = true } else {  var booleanCidade = false }

  if (allPlayers == undefined) {
    var numDePlayers = 0;
    var playersAdicionados = null;
  } else {
    var numDePlayers = Object.keys(allPlayers).length;
    var playersAdicionados = allPlayers;
  }

  if (mapaMundo["Mundo"]["MapaAtual"] != "") {
    var mapaAtual = mapaMundo["Mundo"]["MapaAtual"];
    var mapaHistorico = mapaMundo["Mundo"]["Historico"];
    var booleanMundo = true;
  } else {
    var mapaAtual = null;
    var mapaHistorico = null;
    var booleanMundo = false;
  }

  var nomeDungeon = usuario["CampanhasMestre"][campanhaAtualPSalvar]["Dungeon"]["Nome"]
  var dadosDungeon = usuario["CampanhasMestre"][campanhaAtualPSalvar]["Dungeon"]["Dados"]


  var saveThisCampaingRef = firebase.database().ref('users/' + user.uid + '/CampanhasMestre')
  saveThisCampaingRef.update({
    [campanhaAtualPSalvar]: {
      "CampanhaInfo": {
        "BlocInfo": true,
        "TabeInfo": true,
        "CidaInfo": booleanCidade,
        "PlayInfo": numDePlayers,
        "DungInfo": true,
        "MundInfo": booleanMundo
      },
      "BlocoDeNotas": editor.getData(),
      "Tabela": dadosTabelaCorrigidos,
      "Cidade": dataCidade,
      "Players": playersAdicionados,
      "Mundo": {
        "MapaAtual": mapaAtual,
        "Historico": mapaHistorico
      },
      "Dungeon":{
        "Dados": dadosDungeon,
        "Nome": nomeDungeon
      }
    }
  // saveThisCampaingRef.update(updates).then(function() {
  }).then(function() {
    // Update successful.
    // alert("Dados salvos com sucesso!")
  }).catch(function(error) {
    // An error happened.
    // alert("Error: "+ error.message)
  });
}

function newCharacter() {
  var database = firebase.database();
  var user = firebase.auth().currentUser;
  var nomePer = $("#persName").val();
  var senhPer = $("#persPass").val();

  firebase.database().ref('/lastCreatedPlayer').once('value', function(snapshot) {
    var lastPlayerId = snapshot.val();
    var playerId = eval(eval(lastPlayerId) + 1);
    var playerFullId = "Player"+playerId;
    var idPlayer = playerFullId;

    firebase.database().ref('users/' + user.uid + '/PersonagensPlayer').update({
      [idPlayer] : {
        "Nome": nomePer,
        "Senha": senhPer,
        "InfoItensPlayer": [
          idPlayer,
          0
        ],
        "InfoMagiasPlayer": [
          idPlayer,
          0
        ],
        "InfoPericiasPlayer": [
          idPlayer,
          0
        ],
        "InfoPlayer": [
          idPlayer,
          nomePer,
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "rgb(4, 255, 0)"
        ]
      }
    });
    firebase.database().ref('/playerUID/').update({
      [idPlayer]: user.uid
    }).then(function() {
      firebase.database().ref('/').update({ lastCreatedPlayer: playerId })
      // Update successful.
      alert("Personagem criado com sucesso!")
    }).catch(function(error) {
      // An error happened.
      alert("Error: "+ error.message)
    });
  });
}
