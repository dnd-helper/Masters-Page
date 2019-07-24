var quantPlayersTotal = 0;
$( document ).ready(function() {


  function CalculaPlayers() {
    var xpTotal = [0,0,0,0];
    // alert($(this).text());

    //ERASE THIRD BUTTON, BECAUSE ITS NOT NECESSARY.
    var cont = 0;
    var valor = []
    quantPlayersTotal = 0;
    $('#ulPlayersAdicionados > .btn-group > .btn-group').each(function(){
      valor[cont] = $(this).children("button").val();
      // alert(valor[cont]);
      //   linhaDePericias.push(nomeDaPericia);

      if (cont == 0) { cont = 1; } else {
        // alert("CONT ZERO");
        // alert("CONT UM");
        valor[0] = valor[0].replace(' Player','');
        valor[0] = valor[0].replace('s','');
        valor[1] = valor[1].replace('Nivel ','');

        if (valor[0] != '' && valor[1] != '') {
          quantPlayersTotal = eval(quantPlayersTotal) + eval(valor[0]);
          $.each(database["NivelEXP"], function(index, value) {
            if (valor[1] == database["NivelEXP"][index][0]) {

              xpTotal[0] = xpTotal[0] + valor[0]*database["NivelEXP"][index][1];
              xpTotal[1] = xpTotal[1] + valor[0]*database["NivelEXP"][index][2];
              xpTotal[2] = xpTotal[2] + valor[0]*database["NivelEXP"][index][3];
              xpTotal[3] = xpTotal[3] + valor[0]*database["NivelEXP"][index][4];

            }
          });

          // alert(xpTotal);
        }
        cont = 0;
      }

    });
    $("#XP1").children("span").empty().text(xpTotal[0]+" xp");
    $("#XP2").children("span").empty().text(xpTotal[1]+" xp");
    $("#XP3").children("span").empty().text(xpTotal[2]+" xp");
    $("#XP4").children("span").empty().text(xpTotal[3]+" xp");
    //FOR EACH #divPlayers div GET BOTH QUANTITY AND LEVEL BUTTON VALUES, EVALUE IF BOTH ARE NOT EMPTY, MULTIPLY FIRST BY THE SECOND'S
      // EASY, MEDIUM, HARD AND DEADLY XP'S VALUES, CALL 4 VARS AND SUM THIS VALUE FOR EACH LINE, AND APPEND THIS VALUE TO EACH CELL FROM
      // THE FIRST TABLE RESPECTIVELY.
    //AFTER

    MudouValor()
  }



///CLICAR NO BOTAO DE PEGAR PLAYERS DA CAMPANHA, CRIAR MATRIZ PARA CONTER VETORES COM NIVEL E QUANTIDADE, CONFERE O NIVEL SOMADO DE CADA PLAYER,
  /// E EM CADA ITERACAO, CONFERE SE ESSE NIVEL ESTA CONTIDO NO VETOR. CASO ESTEJA, ADICIONA MAIS 1 NO VETOR NO CAMPO DE QUANTIDADE.
  /// APOS GERAR TODO O VETOR E SAIR DO EACH, PARA CADA LINHA DA MATRIZ, ADICIONA UM BOTAO, PREENCHENDO OS CAMPOS VAL E TEXT DO BOTAO
  /// COM O VALOR DA MATRIZ NESSA POSICAO


  $(document).on('click', '#botaoAddPlayerGerador', function() {

    var stringAddPlayerGerador =
    "<div class=\"btn-group\" style=\"width: 100%;height: min-content;display: inline-flex;margin-top: -1px;\" role=\"group\" aria-label=\"...\">"
      +"<div class=\"btn-group\" style=\"width: 100%;\">"
        +"<button type=\"button\" id=\"BotaoQuantPlayers\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;border-top-left-radius: 0;\">"
          +"<b>Quantidade</b>"
          +"<span class=\"caret\"></span>"
        +"</button>"
        +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\">"
          +"<li><a href=\"#\">1 Player</a></li>"
          +"<li><a href=\"#\">2 Players</a></li>"
          +"<li><a href=\"#\">3 Players</a></li>"
          +"<li><a href=\"#\">4 Players</a></li>"
          +"<li><a href=\"#\">5 Players</a></li>"
          +"<li><a href=\"#\">6 Players</a></li>"
          +"<li><a href=\"#\">7 Players</a></li>"
          +"<li><a href=\"#\">8 Players</a></li>"
          +"<li><a href=\"#\">9 Players</a></li>"
        +"</ul>"
      +"</div>"
      +"<button type=\"button\" class=\"btn btn-default btn-sm\" disabled=\"\" style=\"cursor: default;opacity: 1;\">X</button>"
      +"<!-- <button type=\"button\" class=\"btn btn-default btn-sm\" style=\"width: 100%;\">Nivel</button> -->"
      +"<div class=\"btn-group\" style=\"width: 100%;\">"
        +"<button type=\"button\" id=\"\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;\">"
          +"<b>Nivel</b>"
          +"<span class=\"caret\"></span>"
        +"</button>"
        +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\">"
          +"<li><a href=\"#\">Nivel 1</a></li>"
          +"<li><a href=\"#\">Nivel 2</a></li>"
          +"<li><a href=\"#\">Nivel 3</a></li>"
          +"<li><a href=\"#\">Nivel 4</a></li>"
          +"<li><a href=\"#\">Nivel 5</a></li>"
          +"<li><a href=\"#\">Nivel 6</a></li>"
          +"<li><a href=\"#\">Nivel 7</a></li>"
          +"<li><a href=\"#\">Nivel 8</a></li>"
          +"<li><a href=\"#\">Nivel 9</a></li>"
          +"<li><a href=\"#\">Nivel 10</a></li>"
          +"<li><a href=\"#\">Nivel 11</a></li>"
          +"<li><a href=\"#\">Nivel 12</a></li>"
          +"<li><a href=\"#\">Nivel 13</a></li>"
          +"<li><a href=\"#\">Nivel 14</a></li>"
          +"<li><a href=\"#\">Nivel 15</a></li>"
          +"<li><a href=\"#\">Nivel 16</a></li>"
          +"<li><a href=\"#\">Nivel 17</a></li>"
          +"<li><a href=\"#\">Nivel 18</a></li>"
          +"<li><a href=\"#\">Nivel 19</a></li>"
          +"<li><a href=\"#\">Nivel 20</a></li>"
        +"</ul>"
      +"</div>"
      +"<button type=\"button\" class=\"btn btn-danger btn-sm\" style=\"margin-right: 1px;border-top-right-radius: 0;\">"
        +"<span class=\"glyphicon glyphicon-remove\"></span>"
      +"</button>"
    +"</div>";
    $("#ulPlayersAdicionados").append(stringAddPlayerGerador);

  });

  $(document).on('click', '#botaoAddPlayersCampanha', function() {

    var arrayLevelQuant = {};
    arrayLevelQuant["Todos"] = [];
    // $("#ulPlayersAdicionados").empty();
    var allPlayers = usuario.CampanhasMestre[usuario.InformacoesdoUsuario.CampanhaAtual].Players;
    var nomesPlayers = Object.keys(allPlayers);
    var numDePlayers = Object.keys(allPlayers).length;
    if (numDePlayers > 0) {
      $.each(nomesPlayers, function(index, value) {
        var contFoi = false;

        var nivel1 = allPlayers[value].InfoPlayer[8];
        var nivel2 = allPlayers[value].InfoPlayer[10];
        var nivel3 = allPlayers[value].InfoPlayer[12];

        if (nivel1 == "") { nivel1 = 0}
        if (nivel2 == "") { nivel2 = 0}
        if (nivel3 == "") { nivel3 = 0}

        var levelTotal = eval(nivel1) + eval(nivel2) + eval(nivel3);
        if (levelTotal > 0) {

          if (arrayLevelQuant["Todos"].length > 0) {
            $.each(arrayLevelQuant["Todos"], function(index, value) {
              if (levelTotal == arrayLevelQuant["Todos"][index][1]) {
                arrayLevelQuant["Todos"][index][0] = arrayLevelQuant["Todos"][index][0] + 1;
                contFoi = true;
              }
            });
          }

          if (contFoi == false) {
            var linhaLevelQuant = [1,levelTotal];
            arrayLevelQuant["Todos"].push(linhaLevelQuant);
          }
        }
      });

      $.each(arrayLevelQuant["Todos"], function(index, value) {
        var plural = "";
        if (arrayLevelQuant["Todos"][index][0] != 1) { plural = "s"}

        var stringAddPlayerGerador =
        "<div class=\"btn-group\" style=\"width: 100%;height: min-content;display: inline-flex;margin-top: -1px;\" role=\"group\" aria-label=\"...\">"
          +"<div class=\"btn-group\" style=\"width: 100%;\">"
            +"<button value=\""+arrayLevelQuant["Todos"][index][0]+" Players\" type=\"button\" id=\"BotaoQuantPlayers\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;border-top-left-radius: 0;\">"
              +"<b>"+arrayLevelQuant["Todos"][index][0]+" Player"+plural+"</b>"
              +"<span class=\"caret\"></span>"
            +"</button>"
            +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\">"
              +"<li><a href=\"#\">1 Player</a></li>"
              +"<li><a href=\"#\">2 Players</a></li>"
              +"<li><a href=\"#\">3 Players</a></li>"
              +"<li><a href=\"#\">4 Players</a></li>"
              +"<li><a href=\"#\">5 Players</a></li>"
              +"<li><a href=\"#\">6 Players</a></li>"
              +"<li><a href=\"#\">7 Players</a></li>"
              +"<li><a href=\"#\">8 Players</a></li>"
              +"<li><a href=\"#\">9 Players</a></li>"
            +"</ul>"
          +"</div>"
          +"<button type=\"button\" class=\"btn btn-default btn-sm\" disabled=\"\" style=\"cursor: default;opacity: 1;\">X</button>"
          +"<div class=\"btn-group\" style=\"width: 100%;\">"
            +"<button value=\"Nivel "+arrayLevelQuant["Todos"][index][1]+"\" type=\"button\" id=\"\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;\">"
              +"<b>Nivel "+arrayLevelQuant["Todos"][index][1]+"</b>"
              +"<span class=\"caret\"></span>"
            +"</button>"
            +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\">"
              +"<li><a href=\"#\">Nivel 1</a></li>"
              +"<li><a href=\"#\">Nivel 2</a></li>"
              +"<li><a href=\"#\">Nivel 3</a></li>"
              +"<li><a href=\"#\">Nivel 4</a></li>"
              +"<li><a href=\"#\">Nivel 5</a></li>"
              +"<li><a href=\"#\">Nivel 6</a></li>"
              +"<li><a href=\"#\">Nivel 7</a></li>"
              +"<li><a href=\"#\">Nivel 8</a></li>"
              +"<li><a href=\"#\">Nivel 9</a></li>"
              +"<li><a href=\"#\">Nivel 10</a></li>"
              +"<li><a href=\"#\">Nivel 11</a></li>"
              +"<li><a href=\"#\">Nivel 12</a></li>"
              +"<li><a href=\"#\">Nivel 13</a></li>"
              +"<li><a href=\"#\">Nivel 14</a></li>"
              +"<li><a href=\"#\">Nivel 15</a></li>"
              +"<li><a href=\"#\">Nivel 16</a></li>"
              +"<li><a href=\"#\">Nivel 17</a></li>"
              +"<li><a href=\"#\">Nivel 18</a></li>"
              +"<li><a href=\"#\">Nivel 19</a></li>"
              +"<li><a href=\"#\">Nivel 20</a></li>"
            +"</ul>"
          +"</div>"
          +"<button type=\"button\" class=\"btn btn-danger btn-sm\" style=\"margin-right: 1px;border-top-right-radius: 0;\">"
            +"<span class=\"glyphicon glyphicon-remove\"></span>"
          +"</button>"
        +"</div>";
        $("#ulPlayersAdicionados").append(stringAddPlayerGerador);
      });

    }
    CalculaPlayers();

  });

  $(document).on('click', '#ulPlayersAdicionados div div .dropdown-menu-selecionavel li a', function() {
    CalculaPlayers();
  });
  $(document).on('click', '#ulPlayersAdicionados > div > button', function() {
    $(this).parent().remove();
    CalculaPlayers();
  });
  // $(document).on('click', '#ulPlayersAdicionados div div .dropdown-menu-selecionavel li a', function() {
  //   CalculaPlayers();
  // });
  // $(document).on('click', '#ulPlayersAdicionados div div .dropdown-menu-selecionavel li a', function() {
  //   CalculaPlayers();
  // });

  $('#accordion2').on('show.bs.collapse', function () {
     $('#accordion2 .in').collapse('hide');
  });
  // $('#accordion1').on('show.bs.collapse', function () {
  //    $('#accordion1 .in').collapse('hide');
  // });
});

var monstrosAdicionados = {};

monstrosAdicionados["Campanha1"] = [];
var numeroDeMonstrosAdicionados = 0;
function addMonstroEncontro(ctl) {
  numeroDeMonstrosAdicionados = numeroDeMonstrosAdicionados+1;
  // var linkImagem;
  // $('#accordion2 .in').collapse('hide');
  $("#collapseZero2").collapse('show');
  var linhaDeMonstrosAdicionados = [];
  var nome = $(ctl).parents("tr").children("th").first().text();
  if ($(ctl).attr("id") == "addFromShow") { var nome = $(ctl).parents("div").children("h1").first().text(); }
  var hpMonstro;
  var cdMonstro;
  var xpMonstro;
  var tamMonstro;
  // $("#nomeMonstro").empty();
  // $( "#nomeMonstro" ).append(nome);
  $.each(database["Monstros"], function(index, value) {
    if (nome == database["Monstros"][index][0]) {

      cdMonstro = database["Monstros"][index][1];
      tamMonstro = database["Monstros"][index][2];
      hpMonstro = database["Monstros"][index][8];
    }
  });

  $.each(database["CdEXP"], function(index, value) {
    if (eval(cdMonstro) == eval(database["CdEXP"][index][0])) {
      xpMonstro = database["CdEXP"][index][1];
    }
  });

  linhaDeMonstrosAdicionados.push(nome);
  linhaDeMonstrosAdicionados.push(cdMonstro);
  linhaDeMonstrosAdicionados.push(xpMonstro);
  linhaDeMonstrosAdicionados.push(hpMonstro); //HP TOTAL
  linhaDeMonstrosAdicionados.push(hpMonstro); //HP ATUAL
  linhaDeMonstrosAdicionados.push("black");
  linhaDeMonstrosAdicionados.push(tamMonstro);
  linhaDeMonstrosAdicionados.push("Monstro"+numeroDeMonstrosAdicionados);

  monstrosAdicionados["Campanha1"].push(linhaDeMonstrosAdicionados);
  // alert(monstrosAdicionados["Campanha1"]);

  var  linhaMonstro =
  "<tr><th>"+nome+"</th><th>"+cdMonstro+"</th><th class=\"xp\">"+xpMonstro+"</th><th contenteditable style=\"font-weight: bold\" class=\"hp-monstro\">"+hpMonstro+"</th>"
    +"<th style=\"padding: 3px;\">"
      +"<button onclick=\"abreModalCor(this)\" class=\"btn btn-success\" role=\"button\" aria-expanded=\"true\" style=\"padding-top: 3px;padding-bottom: 3px;padding-left: 6px;padding-right: 6px;\">"
        +"<span class=\"glyphicon glyphicon-plus\"></span></button></th>"
    +"<th style=\"padding: 3px;\">"
      +"<button onclick=\"getMonstro(this)\" class=\"btn btn-default\" role=\"button\" style=\"padding-top: 3px;padding-bottom: 3px;padding-left: 6px;padding-right: 6px;\">"
        +"<span class=\"glyphicon glyphicon-search\"></span></button></th>"
    +"<th style=\"padding: 3px;\">"
      +"<button value=\"Monstro"+numeroDeMonstrosAdicionados+"\" onclick=\"delMontroEncontro(this)\" class=\"btn btn-danger\" role=\"button\" aria-expanded=\"true\" style=\"padding-top: 3px;padding-bottom: 3px;padding-left: 6px;padding-right: 6px;\">"
        +"<span class=\"glyphicon glyphicon-remove\"></span></button></th></tr>"

  $( "#tbodyMonstrosSelecionados" ).append(linhaMonstro);

  CalculaMonstros()
}

var xpTotalMonstros = 0;
var xpTotalMonstrosAjustado = 0;

function CalculaMonstros() {
// WHEN CLICKED ON "ADD MONSTER" GREEN BUTTON ON MONSTERS LIST, OR WHEN MONSTER QUANTITY FIELD CHANGES, OR WHEN MONSTER IS DELETED FROM
// ENCOUNTER GENERATOR, CALL FUNCTION TO RECALCULATE ALL DIFICULTIES. FOR EACH LINE ON TABLE WITH ENCOUNTER MONTERS, IF THERE IS ANY
// LINE, SUM THEIR XP, THEN, IF SUM IS BETWEEN TWO DIFICULTIES FROM FIRST TABLE, HIGHLIGHT ITS LOWER VALUE. IF THERES NOT ANY LINE,
// DO NOTHING AND CLEAR PREVIOUS STATES.

  var quantidadeMonstrosAjustado = 0;
  xpTotalMonstros = 0;
  xpTotalMonstrosAjustado = 0;
  $('#tbodyMonstrosSelecionados > tr').each(function(){
    valor1 = eval($(this).children(".xp").text());
    // valor2 = eval($(this).children(".quant-monstros").text());
    xpTotalMonstros = xpTotalMonstros + valor1;
    quantidadeMonstrosAjustado = quantidadeMonstrosAjustado + 1;
  });
  if (quantidadeMonstrosAjustado == 1) {
    xpTotalMonstrosAjustado = xpTotalMonstros*1;
  } if (quantidadeMonstrosAjustado == 2) {
    xpTotalMonstrosAjustado = xpTotalMonstros*1.5;
  } if (quantidadeMonstrosAjustado >= 3 && quantidadeMonstrosAjustado <= 6) {
    xpTotalMonstrosAjustado = xpTotalMonstros*2;
  } if (quantidadeMonstrosAjustado >= 7 && quantidadeMonstrosAjustado <= 10) {
    xpTotalMonstrosAjustado = xpTotalMonstros*2.5;
  } if (quantidadeMonstrosAjustado >= 11 && quantidadeMonstrosAjustado <= 14) {
    xpTotalMonstrosAjustado = xpTotalMonstros*3;
  } if (quantidadeMonstrosAjustado >= 15) {
    xpTotalMonstrosAjustado = xpTotalMonstros*4;
  }

  MudouValor()
}

function delMontroEncontro(ctl) {
  var idMonstro = $(ctl).val();
  var indice;
  // alert(idMonstro)

  $.each(monstrosAdicionados["Campanha1"], function(index, value) {
    if (idMonstro == monstrosAdicionados["Campanha1"][index][7]) {
      indice = index;
    }
  });
  monstrosAdicionados["Campanha1"].splice(indice, 1);

  $(ctl).parents("tr").remove();
  CalculaMonstros()
}

function delTodosMontrosEncontro(ctl) {
  $("#tbodyMonstrosSelecionados").empty();
  CalculaMonstros()
}

function abreModalCor(ctl) {
  $('#ModalMudaCorMonstro').modal('show');

  $(ctl).attr("id","idGenerico");
  // CalculaMonstros()
}

$(document).on("click","#selecionarCor2", function(color){
  $("#idGenerico").css("background-color",$("#selecionarCor2").css("background-color"));
  $("#idGenerico").css("border-color", "rgba(0, 0, 0, 0.42)");
  $("#idGenerico").val($("#selecionarCor2").css("background-color"));

  var indiceMonstro = $("#idGenerico").parents("tr").children("th").children(".btn-danger").val();
  $.each(monstrosAdicionados["Campanha1"], function(index, value) {
    if (indiceMonstro == monstrosAdicionados["Campanha1"][index][7]) {
      monstrosAdicionados["Campanha1"][index][5] = $("#selecionarCor2").css("background-color");
    }
  });


  $("#idGenerico").attr("id","");
  $('#ModalMudaCorMonstro').modal('hide');
});


function MudouValor() {

  var valFacil =    eval($("#XP1").children("span").text().replace(' xp',''));
  var valMedio =    eval($("#XP2").children("span").text().replace(' xp',''));
  var valDificil =  eval($("#XP3").children("span").text().replace(' xp',''));
  var valMortal =   eval($("#XP4").children("span").text().replace(' xp',''));

  if (xpTotalMonstrosAjustado == 0 || quantPlayersTotal == 0) {
    $("#XP1").css("font-weight","normal");
    $("#XP2").css("font-weight","normal");
    $("#XP3").css("font-weight","normal");
    $("#XP4").css("font-weight","normal");
    $("#dificEncontro").empty();
  }
  if (xpTotalMonstrosAjustado != 0 && quantPlayersTotal != 0) {

    if (xpTotalMonstrosAjustado <= valFacil) {
      $("#XP1").css("font-weight","bold");
      $("#XP2").css("font-weight","normal");
      $("#XP3").css("font-weight","normal");
      $("#XP4").css("font-weight","normal");
      $("#dificEncontro").empty().text("Fácil");
    } if (xpTotalMonstrosAjustado >= valFacil && xpTotalMonstrosAjustado < valMedio ) {
      $("#XP1").css("font-weight","bold");
      $("#XP2").css("font-weight","normal");
      $("#XP3").css("font-weight","normal");
      $("#XP4").css("font-weight","normal");
      $("#dificEncontro").empty().text("Fácil");
    } if (xpTotalMonstrosAjustado >= valMedio && xpTotalMonstrosAjustado < valDificil ) {
      $("#XP1").css("font-weight","normal");
      $("#XP2").css("font-weight","bold");
      $("#XP3").css("font-weight","normal");
      $("#XP4").css("font-weight","normal");
      $("#dificEncontro").empty().text("Médio");
    } if (xpTotalMonstrosAjustado >= valDificil  && xpTotalMonstrosAjustado < valMortal ) {
      $("#XP1").css("font-weight","normal");
      $("#XP2").css("font-weight","normal");
      $("#XP3").css("font-weight","bold");
      $("#XP4").css("font-weight","normal");
      $("#dificEncontro").empty().text("Difícil");
    } if (xpTotalMonstrosAjustado >= valMortal ) {
      $("#XP1").css("font-weight","normal");
      $("#XP2").css("font-weight","normal");
      $("#XP3").css("font-weight","normal");
      $("#XP4").css("font-weight","bold");
      $("#dificEncontro").empty().text("Mortal");
    }
  }

  $("#valXp1").empty().text(xpTotalMonstros);
  $("#valXp2").empty().text(xpTotalMonstrosAjustado);
  if (quantPlayersTotal != 0) { $("#valXp3").empty().text(Math.round(xpTotalMonstros*100/quantPlayersTotal)/100);}
  if (quantPlayersTotal != 0) { $("#valXp4").empty().text(Math.round(xpTotalMonstrosAjustado*100/quantPlayersTotal)/100);}
  if (quantPlayersTotal == 0) { $("#valXp3").empty().text(0);}
  if (quantPlayersTotal == 0) { $("#valXp4").empty().text(0);}

}

function getMonstro(ctl) {
  // var linkImagem;
  var nome = $(ctl).parents("tr").children("th").first().text();
  var nomeIngles;
  var monstrosVisiveis = database["Monstros"];
  $("#nomeMonstro").empty();
  $( "#nomeMonstro" ).append(nome);
  $.each(monstrosVisiveis, function(index, value) {
    if (nome == monstrosVisiveis[index][0]) {
      nomeIngles = monstrosVisiveis[index][7];
      linkImagem = monstrosVisiveis[index][9];
    }
  });
  $("#selectedMonster").load('monsters/Dnd5Monsters.html div[data-name="'+nomeIngles+'"]');
  $('#selectedMonsterPicture img').attr("src","monsters/Images/"+linkImagem);
  $('#accordion1 .in').collapse('hide');
  $("#collapseOneOne1").collapse('show');

}

// if (cont == 0) { cont = 1; } else {
//   // alert("CONT ZERO");
//   // alert("CONT UM");
//   valor[0] = valor[0].replace(' Player','');
//   valor[0] = valor[0].replace('s','');
//   valor[1] = valor[1].replace('Nivel ','');
//   // alert(valor);
//
//   if (valor[0] != '' && valor[1] != '') {
//     $.each(database["NivelEXP"], function(index, value) {
//       if (valor[1] == database["NivelEXP"][index][0]) {
//
//         xpTotal[0] = xpTotal[0] + valor[0]*database["NivelEXP"][index][1];
//         xpTotal[1] = xpTotal[1] + valor[0]*database["NivelEXP"][index][2];
//         xpTotal[2] = xpTotal[2] + valor[0]*database["NivelEXP"][index][3];
//         xpTotal[3] = xpTotal[3] + valor[0]*database["NivelEXP"][index][4];
//
//       }
//     });
//
//     // alert(xpTotal);
//   }
//   cont = 0;
// }
