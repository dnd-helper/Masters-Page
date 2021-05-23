// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyChiqQX2sD8RgDahTSVkQNe18AoZdYq8C8",
	authDomain: "dnd-helper-project.firebaseapp.com",
	databaseURL: "https://dnd-helper-project.firebaseio.com",
	projectId: "dnd-helper-project",
	storageBucket: "dnd-helper-project.appspot.com",
	messagingSenderId: "297880874955",
	appId: "1:297880874955:web:8cdbb7bb09ebdfe5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var provider = new firebase.auth.GoogleAuthProvider();
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      // document.getElementById('loader').style.display = 'none';
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
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
        prompt: "select_account",
      },
    },
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
ui.start("#firebaseui-auth-container", uiConfig);

// let global_user;
// let global_userData;
// let global_userId;
// let global_campanhas;
// let global_campanhaAtualId;
// let global_campanhaAtualDados;
// let global_personagens;
// let global_personagens_campanha;

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		// User is signed in.
		// $("#user_div").css("display", "inline-grid");
		// $("#login_div").css("display", "none");
		setAttrAll('#user_div', 'style', 'display', 'inline-grid');
		setAttrAll('#login_div', 'style', 'display', 'none');
		
		global_user = firebase.auth().currentUser;
		global_userId = global_user.uid;
		console.log({global_userId});

		if (global_user.displayName === null) {
			//MOSTRA A JANELA PARA INSERIR DADOS DO USUARIO
			// $("#full_info_div").css("display", "none");
			// $("#missing_info_div").css("display", "inline-grid");
			setAttrAll('#full_info_div', 'style', 'display', 'none');
			setAttrAll('#missing_info_div', 'style', 'display', 'inline-grid');
		} else {
			firebase.database().ref("/users/" + global_userId).once("value", function (snapshot) {
				
				global_userData = snapshot.val();
				global_campanhaAtualId = global_userData.CampanhaAtual;
				console.log({global_userData});
				
				if (global_userData == null) {
					createUpdateUserData(global_user);
				}

				//CARREGA OS DADOS DO USUARIO
				updateFieldsUserHTML(global_user);

				//APOS O LOGIN, E CONFIRMAR QUE OS DADOS ESTÃO ATUALIZADOS, CHAMA A DATABASE.
				loadDataFromLogin(global_userData);

				//MOSTRA OS DADOS DO USUARIO
				setAttrAll('#full_info_div', 'style', 'display', 'inline-grid');
				setAttrAll('#missing_info_div', 'style', 'display', 'none');
				// $("#full_info_div").css("display", "inline-grid");
				// $("#missing_info_div").css("display", "none");
			});
		}
	} else {
		// No user is signed in.

		setAttrAll('#user_div', 'style', 'display', 'none');
		setAttrAll('#login_top_LI', 'style', 'display', 'none');
		setAttrAll('#call_login_top_LI', 'style', 'display', 'unset');
		setAttrAll('#login_div', 'style', 'display', 'inline-grid');
		replaceAll("#first_name", 'Login')
		setAttrAll('#miniLogin', 'style', 'display', 'none');
		// $("#user_div").css("display", "none");
		// $("#login_top_LI").css("display", "none");
		// $("#call_login_top_LI").css("display", "");
		// $("#login_div").css("display", "inline-grid");
		// $("#first_name").text("Login");
		// $("#miniLogin").css("display", "none");
	}
});

function createUpdateUserData(user) {
  	firebase.database().ref(`users/${global_userId}`).set({
		name: user.displayName,
		email: user.email,
		phone: user.phoneNumber,
		CampanhaAtual: "",
		PersonagemAtual: "",
	}).then(function () {
		alert("Dados criados com sucesso!");
	}).catch(function (error) {
		alert("Error: " + error.message);
	});
}

function updateFieldsUserHTML(user){
	replaceAll("#logged_user", user.displayName);
	replaceAll("#first_name", user.displayName);
	replaceAll("#logged_user_email", user.email);
	replaceAll("#logged_user_name", user.displayName);
	replaceAll("#logged_user_cel", user.phoneNumber);
	replaceAll("#logged_user_lastlogin", user.metadata.lastSignInTime);
	replaceAll("#logged_user_top", user.displayName);
	replaceAll("#logged_user_name_top", user.displayName);
	replaceAll("#logged_user_cel_top", user.phoneNumber);
	replaceAll("#logged_user_email_top", user.email);
	replaceAll("#logged_user_lastlogin_top", user.metadata.lastSignInTime);
	
	setAttrAll('#call_login_top_LI', 'style', 'display', 'none');
	setAttrAll('#login_top_LI', 'style', 'display', 'unset');

	// $("#logged_user").text(user.displayName);
	// $("#first_name").text(user.displayName);
	// $("#logged_user_email").text(user.email);
	// $("#logged_user_name").text(user.displayName);
	// $("#logged_user_cel").text(user.phoneNumber);
	// $("#logged_user_lastlogin").text(user.metadata.lastSignInTime);

	// $("#logged_user_top").text(user.displayName);
	// $("#logged_user_name_top").text(user.displayName);
	// $("#logged_user_cel_top").text(user.phoneNumber);
	// $("#logged_user_email_top").text(user.email);
	// $("#logged_user_lastlogin_top").text(user.metadata.lastSignInTime);
}

function formataTimestamp(timestamp) {
	let timeBr = timestamp - 60*60*3*1000;
	let data = new Date(timeBr);
	let dataForm = data.toISOString();
	let dataArray = dataForm.replaceAll('-','_').replaceAll('T','_').replaceAll('.','_').replaceAll(':','_').split('_');
	let dataFormatada = `${dataArray[2]}/${dataArray[1]}/${dataArray[0]} ${dataArray[3]}:${dataArray[4]}:${dataArray[5]}`;
	return dataFormatada;
}

function replaceAll(itemFind, text) {
	this.document.querySelectorAll(itemFind).forEach((item) => { item.innerText = text});
}
function setAttrAll(itemFind, path, attr, value) {
	this.document.querySelectorAll(itemFind).forEach((item) => { item[path][attr] = value});
}

function loadDataFromLogin() {
	// usuario = JSON.parse(rc4("DNDHELPER",text));
	buscaCampanhasUsuario(global_userId);
	buscaPersonagensUsuario(global_userId);
}

function buscaCampanhasUsuario(idUser) {
	firebase.database().ref("campanhas/").orderByChild("Dono").equalTo(idUser).on("value", function (snapshot) {
		
		let campanha = global_userData["CampanhaAtual"];
		global_campanhas = snapshot.val();

		this.document.querySelectorAll("#ulCampanhas").forEach((element) => {
			element.querySelectorAll('.removable').forEach(el => el.remove());
		});


		for (const key in global_campanhas) {

			let nomeCamp = global_campanhas[key].Nome.replace("Campanha", "");
			if (campanha == key) {
				global_campanhaAtualId = key;
				global_campanhaAtualDados = global_campanhas[key];
				console.log('CAMPANHA ATUAL DO USUÁRIO:');
				console.log({global_campanhaAtualDados});
				replaceAll("#lastSaveTime", formataTimestamp(global_campanhaAtualDados.lastUpdate));
			}
			
			this.document.querySelectorAll("#ulCampanhas").forEach((element) => {
				// element.querySelectorAll('.removable').forEach(el => el.remove());

				let classeItem = (campanha == key ? 'removable default leaf first selected' : 'removable default leaf first');
				var textToAppend = `
					<li class="${classeItem}" value="Campanha${nomeCamp}" id="${key}" onclick="carregaCampanhaMenu($(this).attr(\'id\'))">
						<a><span>Campanha #${nomeCamp}</span></a>
					</li>`;
				element.insertAdjacentHTML("beforeend", textToAppend);
			});
		}
		
		// $("#ulOpcoesPagMestre").empty();

		this.document.querySelectorAll(".ulOpcoesPagMestre").forEach((element) => {
			// element.innerHTML = "";
			element.querySelectorAll('.removable').forEach(el => el.remove());
			var textToAppend = `
				<li class="removable default leaf first"><a title=""><span class="">Abrir Painel</span></a></li>
				<li class="removable default leaf"><a href="https://dnd-helper.github.io/Masters-Page/" title=""><span class="">Configurar Campanhas</span></a></li>
				<li class="removable default leaf last"><a onclick="newCampaign()" title=""><span class="">Criar nova Campanha</span></a></li>
				<li class="removable default leaf first" onclick="saveThisCampaignOnline()"><a><span>Salvar Dados</span></a></>`;
			element.insertAdjacentHTML("beforeend", textToAppend);
		});

		if (campanha == "" || campanha == null || campanha == undefined) {
			campanha = Object.keys(global_campanhas)[0];
		}

		$("#loginBlock").css("display", "none");
		$("#loginBackground").css("display", "none");
		$("#login_top_LI").css("display", "");
		$("#call_login_top_LI").css("display", "none");
		$("#miniLogin").css("display", "");
		carregaCampanhaSemUpdate(campanha);
		// buscaPersonagensDaCampanha(campanha);
	});
}

function buscaPersonagensUsuario(idUser) {
	let PersonagemAtual = global_userData?.PersonagemAtual;
	firebase.database().ref("personagens/").orderByChild("Dono").equalTo(idUser).on("value", function (snapshot) {
		global_personagens = snapshot.val();
		console.log('LISTA DE PERSONAGENS DO USUÁRIO ATUAL:');
		console.log({global_personagens});
		
		if (global_personagens != undefined && global_personagens != null && global_personagens != '') {

			this.document.querySelectorAll("#ulPersonagens").forEach((element) => {
				// element.innerHTML = "";
				element.querySelectorAll('.removable').forEach(el => el.remove());
				for (const key in global_personagens) {
					const personagem = global_personagens[key];
					let classeItem = (PersonagemAtual == key ? 'removable default leaf first selected' : 'removable default leaf first');
					
					let textToAppend = `<li class="${classeItem}" value="${key}"><a><span>${personagem.Nome}</span></a></li>`;
					element.insertAdjacentHTML("beforeend", textToAppend);
				}
			});
			
		} else {
			this.document.querySelectorAll("#ulPersonagens").forEach((element) => {
				// element.innerHTML = "";
				element.querySelectorAll('.removable').forEach(el => el.remove());
				var textToAppend = `
				<li class="default leaf first" data-toggle="modal" data-target="#criarNovoPersonagem">
					<a><span>Crie um Personagem</span></a>
				</li>`;
				element.insertAdjacentHTML("beforeend", textToAppend);
			});
		}
	});
}

function carregaCampanhaSemUpdate(campanha) {

	this.document.querySelectorAll("#ulCampanhas").forEach((element) => {
		element.querySelectorAll(".default").forEach((item) => {
			let classeItem = (campanha == item.id ? 'removable default leaf first selected' : 'removable default leaf first');
			item.classList.value = classeItem;
		});
	});

	global_userData.CampanhaAtual = campanha; //SALVA NO USUARIO, QUAL CAMPANHA É A ATUAL
	let dadosCampanha = global_campanhas[campanha];
	let campanhaInfo = dadosCampanha?.CampanhaInfo;

	//FUNÇÃO QUE CARREGA OS PLAYERS NA DIV CORRETA
	firebase.database().ref("personagens/").orderByChild("CampanhaAtual").equalTo(campanha).on("value", function (snapshot) {
		console.log('BUSCOU PERSONAGENS DA CAMPANHA CARREGADA');
		global_personagens_campanha = snapshot.val();
		if (global_personagens_campanha == null) {
			global_personagens_campanha = {};
		}
		console.log({global_personagens_campanha});

		$("#AdicionaPlayers").empty();
		for (const key in global_personagens_campanha) {
			carregarPlayer(global_personagens_campanha[key]);
		}
	});

	//FUNÇÃO QUE CONFERE SE A TABELA JÁ FOI CARREGADA, E CARREGA OS DADOS DA TABELA
	if ( campanhaInfo.TabeInfo == true ) {
		if (renderized == false) {
			configTabela();
		}
		let tabela = dadosCampanha.Tabela == null ? tabelaVazia : dadosCampanha.Tabela;
		hot.loadData( transformaDadosVoltaTabela(tabela) );
	}

	//FUNÇÃO QUE CARREGA OS DADOS DO EDITOR DE TEXTOS
	if ( campanhaInfo.BlocInfo == true ) {
		editor.setData(dadosCampanha.BlocoDeNotas);
	}

	//FUNÇÃO QUE CARREGA OS DADOS NO GERADOR DE DUNGEONS
	if ( campanhaInfo.DungInfo == true ) {
		if (contDungeon == 1) {
			$("#iframeDungeon").attr("src", "Dungeon2.0/index.html");
		}
	}

  	//FUNÇÃO QUE CARREGA OS DADOS NO MAPA DA CIDADE
	if ( campanhaInfo.CidaInfo == true ) {
		let cidade = dadosCampanha.Cidade;
		if ( cidade != $("#linkCidade").attr("value") ) {
			$("#linkCidade").attr( "value", cidade);
			if ( contCidade == 1 && cidade != "") {
				var linkCidade = "MapaCidade/index.html" +cidade;
				$("#iframeCidade").attr("src", linkCidade);
				contCidade = 1;
			}
		}
	}

  	//FUNÇÃO QUE CARREGA OS DADOS NO MAPA MUNDO
	if ( campanhaInfo.MundInfo == true ) {
		mapaMundo.Mundo.Historico = dadosCampanha.Mundo.Historico;
		mapaMundo.Mundo.MapaAtual = dadosCampanha.Mundo.MapaAtual;
		// if (contDungeon == 1) { $("#iframeDungeon").attr("src","Dungeon2.0/index.html");}
	}
}

function carregaCampanhaMenu(campanha) {

	this.document.querySelectorAll("#ulCampanhas").forEach((element) => {
		element.querySelectorAll(".default").forEach((item) => {
			let classeItem = (campanha == item.id ? 'removable default leaf first selected' : 'removable default leaf first');
			item.classList.value = classeItem;
		});
	});

	global_userData.CampanhaAtual = campanha; //SALVA NO USUARIO, QUAL CAMPANHA É A ATUAL
	global_campanhaAtualId = campanha;
	let dadosCampanha = global_campanhas[campanha];
	global_campanhaAtualDados = dadosCampanha;
	let campanhaInfo = dadosCampanha?.CampanhaInfo;

	//FUNÇÃO QUE CARREGA OS PLAYERS NA DIV CORRETA
	firebase.database().ref("personagens/").orderByChild("CampanhaAtual").equalTo(campanha).on("value", function (snapshot) {
		console.log('BUSCOU PERSONAGENS DA CAMPANHA CARREGADA');
		global_personagens_campanha = snapshot.val();
		if (global_personagens_campanha == null) {
			global_personagens_campanha = {};
		}
		console.log({global_personagens_campanha});

		$("#AdicionaPlayers").empty();
		for (const key in global_personagens_campanha) {
			carregarPlayer(global_personagens_campanha[key]);
		}
	});

	//FUNÇÃO QUE CONFERE SE A TABELA JÁ FOI CARREGADA, E CARREGA OS DADOS DA TABELA
	if ( campanhaInfo.TabeInfo == true ) {
		if (renderized == false) {
			configTabela();
		}
		let tabela = dadosCampanha.Tabela == null ? tabelaVazia : dadosCampanha.Tabela;
		hot.loadData( transformaDadosVoltaTabela(tabela) );
	}

	//FUNÇÃO QUE CARREGA OS DADOS DO EDITOR DE TEXTOS
	if ( campanhaInfo.BlocInfo == true ) {
		editor.setData(dadosCampanha.BlocoDeNotas);
	}

	//FUNÇÃO QUE CARREGA OS DADOS NO GERADOR DE DUNGEONS
	if ( campanhaInfo.DungInfo == true ) {
		if (contDungeon == 1) {
			$("#iframeDungeon").attr("src", "Dungeon2.0/index.html");
		}
	}

  	//FUNÇÃO QUE CARREGA OS DADOS NO MAPA DA CIDADE
	if ( campanhaInfo.CidaInfo == true ) {
		let cidade = dadosCampanha.Cidade;
		if ( cidade != $("#linkCidade").attr("value") ) {
			$("#linkCidade").attr( "value", cidade);
			if ( contCidade == 1 && cidade != "") {
				var linkCidade = "MapaCidade/index.html" +cidade;
				$("#iframeCidade").attr("src", linkCidade);
				contCidade = 1;
			}
		}
	}

  	//FUNÇÃO QUE CARREGA OS DADOS NO MAPA MUNDO
	if ( campanhaInfo.MundInfo == true ) {
		mapaMundo.Mundo.Historico = dadosCampanha.Mundo.Historico;
		mapaMundo.Mundo.MapaAtual = dadosCampanha.Mundo.MapaAtual;
		// if (contDungeon == 1) { $("#iframeDungeon").attr("src","Dungeon2.0/index.html");}
	}

	firebase.database().ref(`users/${global_userId}/`).update({ CampanhaAtual: campanha }).then(function() {
		console.log(`ATUALIZOU CAMPANHA ATUAL DO USUÁRIO ${global_userId} PARA ${campanha}/`);
	});
}



function carregarPlayer(player) {
  // var linhaPlayer = usuario[campanha].length-1;
	var dadosPlayer = player.InfoPlayer;

	var stringAddPlayer =
		`<div id="${dadosPlayer[0]}CabecalhoButton" role="button" data-toggle="collapse" data-parent="#PlayersAdicionados" href="#collapsePlayer${dadosPlayer[0]}" aria-expanded="true" aria-controls="collapsePlayer${dadosPlayer[0]}" class="btn btn-default delPlayerline" style="width: 100%;display: flex;">
			<p id="${dadosPlayer[0]}Cabecalho" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0; line-height: 26px !important; display: flex; flex-direction: column; flex-grow: 1;">
				<b style="font-size: 12px; line-height: 14px;">
					${dadosPlayer[1]}
				</b>
				<b style="font-size: 9px; line-height: 10px;">
					HP:${dadosPlayer[32]}/${dadosPlayer[31]} - XP:${dadosPlayer[6]}
				</b>
			</p>
			<button style="background-color: ${dadosPlayer[45]}; width: 26px; height: 26px;" type="button" class="btn btn-primary delPlayerbutton" onclick="alert(\'teste\')">
				<span class="glyphicon glyphicon-certificate" aria-hidden="true"></span>
			</button>
		</div>
		<div id="collapsePlayer${dadosPlayer[0]}" style="border: 1px solid rgb(204, 204, 204); margin-top: -1px; margin-bottom: -1px; overflow: hidden auto; max-height: calc(-387px + 100vh);" class="panel-collapse collapse" role="tabpanel" aria-labelledby="${dadosPlayer[0]}CabecalhoButton" aria-expanded="true">
			<div id="${dadosPlayer[0]}Body" class="panel-body" style="padding: 7px">
				<div class="grid-item player-item">
					<div class="player-body">
						<div class="player-title">
							<div class="player-name">
								<p>
									${dadosPlayer[7]} ${dadosPlayer[8]} / ${dadosPlayer[9]} ${dadosPlayer[10]} / ${dadosPlayer[11]} ${dadosPlayer[12]}
								</p>
								<p class="player-id">#${dadosPlayer[0]}</p>
							</div>
							<button style="float: right;" type="button" onclick="EditarPlayer(this)" class="btn btn-info delPlayerbutton" data-toggle="modal" data-target="#ModalAdicionarPlayer">
								<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
							</button>
						</div>
						<div class="player-details">
							<div class="description" style="padding-top: 0px;margin-top: -5px;padding-bottom: 6px;">
								<div class="carac">
									<strong>FOR</strong><br>
									${dadosPlayer[19]} (${dadosPlayer[25]})
								</div>
								<div class="carac">
									<strong>DES</strong><br>
									${dadosPlayer[20]} (${dadosPlayer[26]})
								</div>
								<div class="carac">
									<strong>CON</strong><br>
									${dadosPlayer[21]} (${dadosPlayer[27]})
								</div>
								<div class="carac">
									<strong>INT</strong><br>
									${dadosPlayer[22]} (${dadosPlayer[28]})
								</div>
								<div class="carac">
									<strong>SAB</strong><br>
									${dadosPlayer[23]} (${dadosPlayer[29]})
								</div>
								<div class="carac">
									<strong>CAR</strong><br>
									${dadosPlayer[24]} (${dadosPlayer[30]})
								</div>
								<div class="rub"></div>
								<table id="TabelaPlayer" class="table table-striped table-condensed">
									<tbody>
										<tr><th><b>Raça</b></th><th>
											${dadosPlayer[3]}
										</th><th><b>Bonus de Proficiencia</b></th><th>
											${dadosPlayer[33]}
										</th></tr><tr><th><b>Alinhamento</b></th><th>
											${dadosPlayer[4]}
										</th><th><b>Classe de Armadura</b></th><th>
											${dadosPlayer[34]}
										</th></tr><tr><th><b>Antecedente</b></th><th>
											${dadosPlayer[5]}
										</th><th><b>Inspiração</b></th><th>
											${dadosPlayer[35]}
										</th></tr><tr><th><b>Deslocamento</b></th><th>
											${dadosPlayer[37]}
										</th><th><b>Iniciativa</b></th><th>
											${dadosPlayer[36]}
										</th></tr>
									</tbody>
								</table>
								<table id="TabelaPlayer" class="table table-striped table-condensed">
									<tbody>
										<tr><th><b>Traços de Personalidade</b></th><th>
											${dadosPlayer[38]}
										</th></tr><tr><th><b>Ideais</b></th><th>
											${dadosPlayer[39]}
										</th></tr><tr><th><b>Ligações</b></th><th>
											${dadosPlayer[40]}
										</th></tr><tr><th><b>Defeitos</b></th><th>
											${dadosPlayer[41]}
										</th></tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;
	$("#AdicionaPlayers").append(stringAddPlayer);
}

function login() {
	var userEmail = $("#email_field").val();
	var userPass = $("#password_field").val();

  	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		alert("Error: " + errorMessage);
    });
}
function logout() {
  	firebase.auth().signOut().then(function () {
		// Sign-out successful.
		location.reload();
    }).catch(function (error) {
		alert("Error: " + error.message);
    });
}
function login_top() {
	var userEmail = $("#email_field_top").val();
	var userPass = $("#password_field_top").val();

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
		alert("Error: " + error.message);
	});
}
function criarUser() {
	var userEmail = $("#new_email_field").val();
 	var userPass = $("#new_password_field").val();

	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		alert("Error: " + errorMessage);
    });
}
function deleteUser() {
	global_user.delete().then(function () {
		// User deleted.
		alert('Usuário Apagado!');
    }).catch(function (error) {
		// An error happened.
		alert(error);
    });
}

function updateData() {
	global_user.updateProfile({
		displayName: $("#name_field").val(),
		phoneNumber: $("#cel_field").val(),
    }).then(function () {
		// Update successful.
		createUpdateUserData(global_user);
		updateFieldsUserHTML(global_user);
		
		$("#full_info_div").css("display", "inline-grid");
		$("#missing_info_div").css("display", "none");

		// firebase.database().ref("users/" + global_userId).on("value", function (snapshot) {
		// 	loadDataFromLogin(snapshot.val());
		// });
		alert("Dados Atualizados!");
    }).catch(function (error) {
		alert(`Error: ${error.message}`);
    });
}

function newCampaign() {

	firebase.database().ref("/lastCreatedCampaign").once("value", function (snapshot) {
		var lastCampaingId = snapshot.val();
		var CampaignId = eval(eval(lastCampaingId) + 1);
		var CampaingFullId = "Campanha" + CampaignId;
		let dadosCampanha = geraCampanhaLimpa();
		dadosCampanha.Nome = CampaingFullId;
		
		const ref = firebase.database().ref(`campanhas/`).push();
		ref.set( dadosCampanha ).then(function () {
			// Update successful.
			firebase.database().ref("/").update({ lastCreatedCampaign: CampaignId });
			firebase.database().ref(`users/${global_userId}/`).update({ CampanhaAtual: ref.key });

			alert("Campanha criada com sucesso!");

			firebase.database().ref(`users/${global_userId}`).on("value", function (snapshot) {
				loadDataFromLogin(snapshot.val());
			});

		}).catch(function (error) { alert("Error: " + error.message); });
		// firebase.database().ref(`users/${global_userId}/CampanhasMestre/${CampaingFullId}`).set( dadosCampanha ).then(function () {
		// }).catch(function (error) { alert("Error: " + error.message); });
	});
}

function geraCampanhaLimpa() {
	let dadosCampNova = {
		// "Grid": {},
		// "Encontro": {},
		// "Contadores": {},
		Dono: global_userId,
		Cidade: "",
		Mundo: {
			Historico: {},
			MapaAtual: {},
		},
		CampanhaInfo: {
			BlocInfo: true,
			CidaInfo: false,
			DungInfo: true,
			MundInfo: false,
			PlayInfo: 0,
			TabeInfo: false,
		},
		GridInfo: [
			[{},{},{},{},{},{},{},{},{},{}],
			[{},{},{},{},{},{},{},{},{},{}],
			[{},{},{},{},{},{},{},{},{},{}],
			[{},{},{},{},{},{},{},{},{},{}],
			[{},{},{},{},{},{},{},{},{},{}],
			[{},{},{},{},{},{},{},{},{},{}],
			[{},{},{},{},{},{},{},{},{},{}],
			[{},{},{},{},{},{},{},{},{},{}],
		],
		lastUpdate: firebase.database.ServerValue.TIMESTAMP,
		Dungeon: {
			Nome: "",
			Dados: {
				map_style: "standard",
				grid: "square",
				dungeon_layout: "square",
				dungeon_size: "dimin",
				add_stairs: "yes",
				room_layout: "scattered",
				room_size: "medium",
				doors: "standard",
				corridor_layout: "errant",
				remove_deadends: "some",
			},
		},
		BlocoDeNotas:
			'<h2><span class="text-big"><strong>Olá! Bem vindo à Página do Mestre do DnD Helper!</strong></span></h2><p><span class="text-big">Aqui você encontrará diversas ferramentas para auxiliar em sua mesa de D&amp;D, e melhorar suas campanhas!</span><br><span class="text-big">Há varias ferramentas para agilizar sua pesquisa de magias, poder gerenciar seu grupo, melhorar os combates do seu personagem, tabelas úteis, grids, e muito mais!</span></p>',
		Tabela: tabelaVazia,
		Players: {
			ListaDePlayers: {},
			ListaDeMagias: {},
			ListaDePericias: {},
			// "ListaDeProeficiencias": {},
			ListaDeItens: {},
		}
	};
	return dadosCampNova;
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

function carregaDados(campanha) {
	// saveThisCampaignOnline();

	// var idCampanhaAtualPSalvar = global_userData.CampanhaAtual;
	// console.log('MANDOU ATUALIZAR OS DADOS DA CAMPANHA CARREGADA ATUAL');
	// this.atualizaDadosCampanhaAtual();
	
	// firebase.database().ref("campanhas/").update({
	// 	[idCampanhaAtualPSalvar]: global_campanhaAtualDados,
	// }).then(function () {

		// alert("Dados salvos com sucesso!")
		firebase.database().ref(`users/${global_userId}/`).update({ CampanhaAtual: campanha }).then(function() {
			console.log(`ATUALIZOU CAMPANHA ATUAL DO USUÁRIO ${global_userId} PARA ${campanha}/`);
			carregaCampanhaSemUpdate(campanha);
		});

	// }).catch(function (error) {
	// 	alert("Error: "+ error.message)
	// });

	// saveThisCampaignOnline()
}

function atualizaDadosCampanhaAtual() {
	
	let campanhaInfo = global_campanhaAtualDados.CampanhaInfo;
	let dataCidade = $("#linkCidade").attr("value");
	
	// console.log({mapaMundo});

	campanhaInfo.CidaInfo = (dataCidade != "");
	campanhaInfo.PlayInfo = Object.keys(global_personagens_campanha).length;
	campanhaInfo.MundInfo = (mapaMundo != "" && mapaMundo != undefined && mapaMundo != null);
	campanhaInfo.BlocInfo = true;
	campanhaInfo.TabeInfo = true;
	campanhaInfo.DungInfo = true;

	// console.log(hot);
	if (hot != null) {
		let dataTabelaRenderizada = hot.getData();
		global_campanhaAtualDados.Tabela = corrigeDadosTabela(dataTabelaRenderizada);
	}

	global_campanhaAtualDados.BlocoDeNotas = editor.getData();
	global_campanhaAtualDados.Cidade = dataCidade;
	global_campanhaAtualDados.CampanhaInfo = campanhaInfo;
	global_campanhaAtualDados.Mundo = {
		MapaAtual: mapaMundo?.Mundo?.MapaAtual,
		Historico: mapaMundo?.Mundo?.Historico,
	}
	global_campanhaAtualDados.Dungeon = campanhaInfo;
	global_campanhaAtualDados.lastUpdate = firebase.database.ServerValue.TIMESTAMP;
	return global_campanhaAtualDados;
}

function saveThisCampaignOnline() {

	console.log('MANDOU ATUALIZAR OS DADOS DA CAMPANHA CARREGADA ATUAL');
	let dadosSalvar = this.atualizaDadosCampanhaAtual();

	var updates = {};
	updates[`users/${global_userId}/CampanhaAtual`] = global_campanhaAtualId;
	updates[`campanhas/${global_campanhaAtualId}`] = dadosSalvar;
  
	firebase.database().ref().update(updates).then(function() {
		console.log('DADOS DA CAMPANHA SALVOS COM SUCESSO');
		console.log(`ATUALIZOU CAMPANHA ATUAL DO USUÁRIO ${global_userId} PARA ${global_campanhaAtualId}/`);
	});
  

	
	// firebase.database().ref(`campanhas/${idCampanhaAtualPSalvar}`).update(dadosSalvar).then(function () {
	// 	console.log('DADOS DA CAMPANHA SALVOS COM SUCESSO');

	// 	// alert("Dados salvos com sucesso!")
	// 	firebase.database().ref(`users/${global_userId}/`).update({ CampanhaAtual: campanha }).then(function() {
	// 		console.log(`ATUALIZOU CAMPANHA ATUAL DO USUÁRIO ${global_userId} PARA ${campanha}/`);
	// 		// carregaCampanhaSemUpdate(campanha);
	// 	});

	// }).catch(function (error) {
	// 	alert("Error: "+ error.message)
	// });













	// if (renderized == false) {
	// 	configTabela();
	// }
	// var dadosTabelaCorrigidos = corrigeDadosTabela(hot.getData());

	// var dataCidade = $("#linkCidade").attr("value");
	// if (dataCidade != "") {
	// 	var booleanCidade = true;
	// } else {
	// 	var booleanCidade = false;
	// }

	// if (allPlayers == undefined) {
	// 	var numDePlayers = 0;
	// 	var playersAdicionados = null;
	// } else {
	// 	var numDePlayers = Object.keys(global_personagens_campanha).length;
	// 	var playersAdicionados = allPlayers;
	// }

	// var mapaAtual = mapaMundo?.Mundo?.MapaAtual;
	// if (mapaAtual != "" && mapaAtual != undefined && mapaAtual != null) {
	// 	var mapaHistorico = mapaAtual;
	// 	var booleanMundo = true;
	// } else {
	// 	var mapaAtual = null;
	// 	var mapaHistorico = null;
	// 	var booleanMundo = false;
	// }

	// var nomeDungeon  = global_campanhaAtualDados?.Dungeon?.Nome;
	// var dadosDungeon = global_campanhaAtualDados?.Dungeon?.Dados;

	// firebase.database().ref("campanhas/").update({
    //   	[idCampanhaAtualPSalvar]: global_campanhaAtualDados,
    // }).then(function () {
    //   	// alert("Dados salvos com sucesso!")
    // }).catch(function (error) {
	// 	alert("Error: "+ error.message)
    // });
}

function corrigeDadosTabela(dadosTabelaNaoCorrigidos) {
  // console.log(dadosTabelaNaoCorrigidos);
  	function pad(d) {
		if (d < 10) {
			return "000" + d.toString();
		}
		if (d >= 10 && d < 100) {
			return "00" + d.toString();
		}
		if (d >= 100) {
			return "0" + d.toString();
		}
  	}

	var dadosTabelaCorrigidos = {};
	$.each(dadosTabelaNaoCorrigidos, function (index1, value) {
		dadosTabelaCorrigidos["lin" + pad(index1)] = {};

		$.each(dadosTabelaNaoCorrigidos[index1], function (index2, value) {

			if (dadosTabelaNaoCorrigidos[index1][index2] == null) {
				dadosTabelaCorrigidos["lin" + pad(index1)]["col" + pad(index2)] = "";
			} else {
				dadosTabelaCorrigidos["lin" + pad(index1)]["col" + pad(index2)] = dadosTabelaNaoCorrigidos[index1][index2];
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
	$.each(dadosNaoTransformados, function (index1, value) {
		// dadosTabelaCorrigidos['lin'+pad(index1)] = {};
		var linhaPAdicionar = [];
		$.each(dadosNaoTransformados[index1], function (index2, value) {
		if (dadosNaoTransformados[index1][index2] == "") {
			linhaPAdicionar.push(null);
		} else {
			linhaPAdicionar.push(dadosNaoTransformados[index1][index2]);
		}
		});
		dadosTransformados.push(linhaPAdicionar);
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
// function saveThisCampaign() {
// 	var campanhaAtualPSalvar = usuario["CampanhaAtual"];
// 	updateData(campanhaAtualPSalvar);

//   	firebase.database().ref(`users/${global_userId}/CampanhasMestre`).update({
//       	[campanhaAtualPSalvar]: usuario["CampanhasMestre"][campanhaAtualPSalvar],
//     }).then(function () {
//       	alert("Dados salvos com sucesso!");
//     }).catch(function (error) {
//       	alert("Error: " + error.message);
//     });
// }

function newCharacter() {
	var nomePer = $("#persName").val();
	var senhPer = $("#persPass").val();

	firebase.database().ref("/lastCreatedPlayer").once("value", function (snapshot) {
		var lastPlayerId = snapshot.val();
		var playerId = eval(eval(lastPlayerId) + 1);
		var playerFullId = "Player" + playerId;
		var idPlayer = playerFullId;

		let persPlayer = {
			[idPlayer]: {
				Dono: global_userId,
				Nome: nomePer,
				Senha: senhPer,
				InfoItensPlayer: [idPlayer, 0],
				InfoMagiasPlayer: [idPlayer, 0],
				InfoPericiasPlayer: [idPlayer, 0],
				InfoPlayer: [
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
					"rgb(4, 255, 0)",
				],
			},
		};
		// firebase.database().ref("users/" + global_userId + "/PersonagensPlayer").update(persPlayer);
		firebase.database().ref("personagens").update(persPlayer).then((result) => {
			console.log({result});
		});
		firebase.database().ref("/").update({ lastCreatedPlayer: playerId });
		// firebase.database().ref("/playerUID/").update({
		// 	[idPlayer]: global_userId,
		// }).then(function () {
		// 	alert("Personagem criado com sucesso!");
		// }).catch(function (error) {
		// 	alert("Error: " + error.message);
		// });
	});
}

function confirmarAdicionarPlayer() {
	let idplayerdadd = $("#IdPlayerDesktop").val();
	let senhaplayerdadd = $("#SenhaPlayerDesktop").val();

	console.log({idplayerdadd});
	console.log({senhaplayerdadd});

	firebase.database().ref(`personagens/${idplayerdadd}`).update({CampanhaAtual : global_campanhaAtualId}).then((result) => {
		// console.log({result});
		console.log('PLAYER INSERIDO!');
	});

	// firebase.database().ref(`personagens/${idplayerdadd}`).once("value", function (snapshot) {
	// 	console.log(snapshot.val());

	// 	// global_personagens_campanha = snapshot.val();
	// 	// console.log({global_personagens_campanha});

	// 	// $("#AdicionaPlayers").empty();
	// 	// for (const key in global_personagens_campanha) {
	// 	// 	carregarPlayer(global_personagens_campanha[key]);
	// 	// }
	// });

}

const tabelaVazia = {
	"lin0000" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0001" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0002" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0003" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0004" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0005" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0006" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0007" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0008" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0009" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0010" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0011" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0012" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0013" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0014" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0015" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0016" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0017" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0018" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0019" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0020" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0021" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	},
	"lin0022" : {
		"col0000" : "",
		"col0001" : "",
		"col0002" : "",
		"col0003" : "",
		"col0004" : "",
		"col0005" : "",
		"col0006" : "",
		"col0007" : "",
		"col0008" : "",
		"col0009" : "",
		"col0010" : "",
		"col0011" : ""
	}
};