$(document).on('click', '.dropdown-menu-selecionavel li a', function() {
    $(this).parent().parent().parent().children("button").children("b").text($(this).text());
    $(this).parent().parent().parent().children("button").val($(this).text());
});

$(document).on('click', '#deleta', function() {
    $(this).parent().parent().parent().remove();
});

$(document).on('click', '#ApagarPlayer', function() {
  $('#ModalRemoverPlayer').modal('show');
});

$(document).on('click', '#ConfirmaApagarPlayer', function() {
  var idParaApagar = $("#IDPlayer").val();
  var indice;

  $.each(listaDePlayers["Campanha1"], function(index, value) {
    if (idParaApagar == listaDePlayers["Campanha1"][index][0]) {
      indice = index;
    }
  });
  listaDePlayers["Campanha1"].splice(indice, 1);
  alert(listaDePlayers["Campanha1"])
  $('#ModalRemoverPlayer').modal('hide');
  $('#ModalAdicionarPlayer').modal('hide');
  $('#'+idParaApagar+'CabecalhoButton').remove();
  $('#collapsePlayer'+idParaApagar).remove();


});

$(document).on('click', '#novoPlayer', function() {
  $("#addPlayerModalDivContainer").empty();
  $("#addPlayerModalDivContainer").load('Players/AddPlayers.html div[id="addPlayerModalDiv"]', function() {
    numPlayers = listaDePlayers["Campanha1"].length;
    if (numPlayers > 0) { idUltimoPlayer = listaDePlayers["Campanha1"][numPlayers-1][0]; }

    if (idUltimoPlayer != 0) { $("#IDPlayer").val(eval(idUltimoPlayer)+1); }
    if (idUltimoPlayer == 0) { $("#IDPlayer").val(2019000001); }
  });
});

$(document).on('click', '#NovaPericia', function() {

  var stringNovaPericia =
  "<li class=\"btn-group\" style=\"width: 100%;padding-right: 5px;padding-bottom: 5px;\">"
    +"<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;font-size: 13px !important;\">"
      +"<b>Pericia</b>"
      +"<span class=\"caret\"></span>"
    +"</button>"
    +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\">"
      +"<li><a id=\"deleta\" href=\"#\">Deletar Perícia</a></li>"
      +"<li role=\"separator\" class=\"divider\"></li>"
      +"<li><a href=\"#\">Another action</a></li>"
      +"<li><a href=\"#\">Something else here</a></li>"
      +"<li><a href=\"#\">Separated link</a></li>"
    +"</ul>"
  +"</li>";
  $("#ulPericias").append(stringNovaPericia);

});

$(document).on('click', '#NovoItem', function() {

  var stringNovoItem =
  "<li class=\"btn-group\" style=\"width: 100%;padding-right: 5px;padding-bottom: 5px;\">"
    +"<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;font-size: 13px !important;\">"
      +"<b>Item Mágico</b>"
      +"<span class=\"caret\"></span>"
    +"</button>"
    +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\">"
      +"<li><a id=\"deleta\" href=\"#\">Deletar Item</a></li>"
      +"<li role=\"separator\" class=\"divider\"></li>"
      +"<li><a href=\"#\">Another action</a></li>"
      +"<li><a href=\"#\">Something else here</a></li>"
      +"<li><a href=\"#\">Separated link</a></li>"
    +"</ul>"
  +"</li>";
  $("#ulItens").append(stringNovoItem);

});

$(document).on('click', '#NovaMagia', function() {

  var stringNovaMagias =
  "<li class=\"btn-group\" style=\"width: 100%;padding-right: 5px;padding-bottom: 5px;\">"
    +"<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;font-size: 13px !important;\">"
      +"<b>Magia</b>"
      +"<span class=\"caret\"></span>"
    +"</button>"
    +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\">"
      +"<li><a id=\"deleta\" href=\"#\">Deletar Item</a></li>"
      +"<li role=\"separator\" class=\"divider\"></li>"
      +"<li><a href=\"#\">Another action</a></li>"
      +"<li><a href=\"#\">Something else here</a></li>"
      +"<li><a href=\"#\">Separated link</a></li>"
    +"</ul>"
  +"</li>";
  $("#ulMagias").append(stringNovaMagias);

});

$(document).on('change', '#listaStatusPlayer li input:nth-child(3)', function() { //FUNCAO PARA ATUALIZAR BONIFICACAO DA SEGUNDA COLUNA
    var valorCampo = $(this).val();
    var nomeCampo = $(this).prev().prev().text();
    if (valorCampo >= 1 && valorCampo <= 1) {
      $(this).next().val(-5);
    } if (valorCampo >= 2 && valorCampo <= 3) {
      $(this).next().val(-4);
    } if (valorCampo >= 4 && valorCampo <= 5) {
      $(this).next().val(-3);
    } if (valorCampo >= 6 && valorCampo <= 7) {
      $(this).next().val(-2);
    } if (valorCampo >= 8 && valorCampo <= 9) {
      $(this).next().val(-1);
    } if (valorCampo >= 10 && valorCampo <= 11) {
      $(this).next().val(0);
    } if (valorCampo >= 12 && valorCampo <= 13) {
      $(this).next().val(1);
    } if (valorCampo >= 14 && valorCampo <= 15) {
      $(this).next().val(2);
    } if (valorCampo >= 16 && valorCampo <= 17) {
      $(this).next().val(3);
    } if (valorCampo >= 18 && valorCampo <= 19) {
      $(this).next().val(4);
    } if (valorCampo >= 20 && valorCampo <= 21) {
      $(this).next().val(5);
    } if (valorCampo >= 22 && valorCampo <= 23) {
      $(this).next().val(6);
    } if (valorCampo >= 24 && valorCampo <= 25) {
      $(this).next().val(7);
    } if (valorCampo >= 26 && valorCampo <= 27) {
      $(this).next().val(8);
    } if (valorCampo >= 28 && valorCampo <= 29) {
      $(this).next().val(9);
    } if (valorCampo >= 30 && valorCampo <= 30) {
      $(this).next().val(10);
    }
});

$(document).on('change', '#listaStatusPlayer li input:nth-child(2)', function() { //FUNCAO PARA ATUALIZAR BONIFICACAO DA PRIMEIRA COLUNA
    var valorCampo = $(this).val();
    var nomeCampo = $(this).prev().text();
    if (valorCampo == "") { valorCampo = 0; }
    var valorTotal = eval("raca"+nomeCampo)+ eval(valorCampo);
    $(this).next().val(valorTotal).trigger( "change" );
});

$(document).on('click', '.botao-nivel li a', function() {
    var val1 = $('#BotaoNivelClasseBase').val();   if (val1 == "") { val1=0;}
    var val2 = $('#BotaoNivelMulticlasse1').val(); if (val2 == "") { val2=0;}
    var val3 = $('#BotaoNivelMulticlasse2').val(); if (val3 == "") { val3=0;}
    var val4 = eval(val1)+eval(val2)+eval(val3);
    if (val4 >= 1 && val4 <= 4) {
      $("#Inputproef").val("+2");
    } if (val4 >= 5 && val4 <= 8) {
      $("#Inputproef").val("+3");
    } if (val4 >= 9 && val4 <= 12) {
      $("#Inputproef").val("+4");
    } if (val4 >= 13 && val4 <= 16) {
      $("#Inputproef").val("+5");
    } if (val4 >= 17 && val4 <= 20) {
      $("#Inputproef").val("+6");
    }
});

var racaFor = 0;
var racaDes = 0;
var racaCon = 0;
var racaInt = 0;
var racaSab = 0;
var racaCar = 0;

$(document).on('click', '.botao-raca li a', function() {  //FUNCAO PARA ADICIONAR BONIFICADORES DE RACA NOS STATUS
    var valorCampo = $(this).text(); //NOME DA RACA

    racaFor = database["Racas"][valorCampo][0][0];
    racaDes = database["Racas"][valorCampo][0][1];
    racaCon = database["Racas"][valorCampo][0][2];
    racaInt = database["Racas"][valorCampo][0][3];
    racaSab = database["Racas"][valorCampo][0][4];
    racaCar = database["Racas"][valorCampo][0][5];

    var somaFor = $("#InputFor1").val();
    var somaDes = $("#InputDes1").val();
    var somaCon = $("#InputCon1").val();
    var somaInt = $("#InputInt1").val();
    var somaSab = $("#InputSab1").val();
    var somaCar = $("#InputCar1").val();

    if (somaFor == "") { somaFor = 0; }
    if (somaDes == "") { somaDes = 0; }
    if (somaCon == "") { somaCon = 0; }
    if (somaInt == "") { somaInt = 0; }
    if (somaSab == "") { somaSab = 0; }
    if (somaCar == "") { somaCar = 0; }

    var totalFor = eval(somaFor) + eval(racaFor);
    var totalDes = eval(somaDes) + eval(racaDes);
    var totalCon = eval(somaCon) + eval(racaCon);
    var totalInt = eval(somaInt) + eval(racaInt);
    var totalSab = eval(somaSab) + eval(racaSab);
    var totalCar = eval(somaCar) + eval(racaCar);

    $("#InputFor2").val( totalFor ).trigger( "change" );
    $("#InputDes2").val( totalDes ).trigger( "change" );
    $("#InputCon2").val( totalCon ).trigger( "change" );
    $("#InputInt2").val( totalInt ).trigger( "change" );
    $("#InputSab2").val( totalSab ).trigger( "change" );
    $("#InputCar2").val( totalCar ).trigger( "change" );
});

$(document).on('click', '#SalvarPlayer', function() {  //FUNCAO PARA SALVAR PERSONAGEM NO BD
    var idPlayer = $("#IDPlayer").val();
    var nomePersonagem = $("#NomePersonagem").val();
    var nomePlayer = $("#NomePlayer").val();
    var racaPlayer = $("#BotaoRaca").val();
    var alinhamentoPlayer = $("#BotaoAlinhamento").val();
    var antecedentesPlayer = $("#BotaoAntecedentes").val();
    var xpPlayer = $("#InputXP").val();
    var classebasePlayer = $("#BotaoClasseBase").val();
    var nivelclassebasePlayer = $("#BotaoNivelClasseBase").val();
    var multiclasse1Player = $("#BotaoMulticlasse1").val();
    var nivelmulticlasse1Player = $("#BotaoNivelMulticlasse1").val();
    var multiclasse2Player = $("#BotaoMulticlasse2").val();
    var nivelmulticlasse2Player = $("#BotaoNivelMulticlasse2").val();
    var forPlayer1 = $("#InputFor1").val();
    var desPlayer1 = $("#InputDes1").val();
    var conPlayer1 = $("#InputCon1").val();
    var intPlayer1 = $("#InputInt1").val();
    var sabPlayer1 = $("#InputSab1").val();
    var carPlayer1 = $("#InputCar1").val();
    var forPlayer2 = $("#InputFor2").val();
    var desPlayer2 = $("#InputDes2").val();
    var conPlayer2 = $("#InputCon2").val();
    var intPlayer2 = $("#InputInt2").val();
    var sabPlayer2 = $("#InputSab2").val();
    var carPlayer2 = $("#InputCar2").val();
    var forPlayer3 = $("#InputFor3").val();
    var desPlayer3 = $("#InputDes3").val();
    var conPlayer3 = $("#InputCon3").val();
    var intPlayer3 = $("#InputInt3").val();
    var sabPlayer3 = $("#InputSab3").val();
    var carPlayer3 = $("#InputCar3").val();
    var hpLeftPlayer = $("#InputHPLeft").val();
    var hpAllPlayer = $("#InputHPAll").val();
    var proefPlayer = $("#Inputproef").val();
    var classeArmPlayer = $("#InputclasseArm").val();
    var inspirPlayer = $("#Inputinspir").val();
    var iniciatPlayer = $("#Inputiniciat").val();
    var deslocPlayer = $("#Inputdesloc").val();
    var tracosPlayer = $("#TextareaTracos").val();
    var ideaisPlayer = $("#TextareaIdeais").val();
    var ligacoesPlayer = $("#TextareaLigacoes").val();
    var defeitosPlayer = $("#TextareaDefeitos").val();
    var ataquesPlayer = $("#TextareaAtaques").val();
    var caracEhabilPlayer = $("#TextareaCarac").val();
    var equipamentosPlayer = $("#TextareaEquip").val();
    var corPlayer = $("#inputcolor").val();


    var linhaPAdicionar = [];
    linhaPAdicionar.push(idPlayer);                     //0
    linhaPAdicionar.push(nomePersonagem);               //1
    linhaPAdicionar.push(nomePlayer);                   //2
    linhaPAdicionar.push(racaPlayer);                   //3
    linhaPAdicionar.push(alinhamentoPlayer);            //4
    linhaPAdicionar.push(antecedentesPlayer);           //5
    linhaPAdicionar.push(xpPlayer);                     //6
    linhaPAdicionar.push(classebasePlayer);             //7
    linhaPAdicionar.push(nivelclassebasePlayer);        //8
    linhaPAdicionar.push(multiclasse1Player);           //9
    linhaPAdicionar.push(nivelmulticlasse1Player);      //10
    linhaPAdicionar.push(multiclasse2Player);           //11
    linhaPAdicionar.push(nivelmulticlasse2Player);      //12
    linhaPAdicionar.push(forPlayer1);                   //13
    linhaPAdicionar.push(desPlayer1);                   //14
    linhaPAdicionar.push(conPlayer1);                   //15
    linhaPAdicionar.push(intPlayer1);                   //16
    linhaPAdicionar.push(sabPlayer1);                   //17
    linhaPAdicionar.push(carPlayer1);                   //18
    linhaPAdicionar.push(forPlayer2);                   //19
    linhaPAdicionar.push(desPlayer2);                   //20
    linhaPAdicionar.push(conPlayer2);                   //21
    linhaPAdicionar.push(intPlayer2);                   //22
    linhaPAdicionar.push(sabPlayer2);                   //23
    linhaPAdicionar.push(carPlayer2);                   //24
    linhaPAdicionar.push(forPlayer3);                   //25
    linhaPAdicionar.push(desPlayer3);                   //26
    linhaPAdicionar.push(conPlayer3);                   //27
    linhaPAdicionar.push(intPlayer3);                   //28
    linhaPAdicionar.push(sabPlayer3);                   //29
    linhaPAdicionar.push(carPlayer3);                   //30
    linhaPAdicionar.push(hpLeftPlayer);                 //31
    linhaPAdicionar.push(hpAllPlayer);                  //32
    linhaPAdicionar.push(proefPlayer);                  //33
    linhaPAdicionar.push(classeArmPlayer);              //34
    linhaPAdicionar.push(inspirPlayer);                 //35
    linhaPAdicionar.push(iniciatPlayer);                //36
    linhaPAdicionar.push(deslocPlayer);                 //37
    linhaPAdicionar.push(tracosPlayer);                 //38
    linhaPAdicionar.push(ideaisPlayer);                 //39
    linhaPAdicionar.push(ligacoesPlayer);               //40
    linhaPAdicionar.push(defeitosPlayer);               //41
    linhaPAdicionar.push(ataquesPlayer);                //42
    linhaPAdicionar.push(caracEhabilPlayer);            //43
    linhaPAdicionar.push(equipamentosPlayer);           //44
    linhaPAdicionar.push(corPlayer);                    //45


    listaDePlayers["Campanha1"].push(linhaPAdicionar);
    AppendNovoPlayer();
    SalvaPericias();
    SalvaItens();
    SalvaMagias();

  function SalvaPericias() {
    var numDePericias = 0;
    var linhaDePericias = [];
    linhaDePericias.push(idPlayer);
    linhaDePericias.push(numDePericias);

    $('#ulPericias .btn-group').each(function(){
      if (numDePericias != 0) {
        var nomeDaPericia = $(this).children("button").val();
        linhaDePericias.push(nomeDaPericia);
      }
      numDePericias = numDePericias +1;
    });
    numDePericias = numDePericias -1;


    linhaDePericias[1] = (numDePericias);
    listaDePericias["Campanha1"].push(linhaDePericias);
  }

  function SalvaItens() {
    var numDeItens = 0;
    var linhaDeItens = [];
    linhaDeItens.push(idPlayer);
    linhaDeItens.push(numDeItens);

    $('#ulItens .btn-group').each(function(){
      if (numDeItens != 0) {
        var nomeDaPericia = $(this).children("button").val();
        linhaDeItens.push(nomeDaPericia);
      }
      numDeItens = numDeItens +1;
    });
    numDeItens = numDeItens -1;


    linhaDeItens[1] = (numDeItens);
    listaDeItens["Campanha1"].push(linhaDeItens);
  }

  function SalvaMagias() {
    var numDeMagias = 0;
    var linhaDeMagias = [];
    linhaDeMagias.push(idPlayer);
    linhaDeMagias.push(numDeMagias);

    $('#ulMagias .btn-group').each(function(){
      if (numDeMagias != 0) {
        var nomeDaPericia = $(this).children("button").val();
        linhaDeMagias.push(nomeDaPericia);
      }
      numDeMagias = numDeMagias +1;
    });
    numDeMagias = numDeMagias -1;


    linhaDeMagias[1] = (numDeMagias);
    listaDeMagias["Campanha1"].push(linhaDeMagias);
  }

});

$(document).on('click', '#SalvarEdicaoPlayer', function() {  //FUNCAO PARA SALVAR EDICOES NO PERSONAGEM

    var idPlayer = $("#IDPlayer").val();
    var nomePersonagem = $("#NomePersonagem").val();
    var nomePlayer = $("#NomePlayer").val();
    var racaPlayer = $("#BotaoRaca").val();
    var alinhamentoPlayer = $("#BotaoAlinhamento").val();
    var antecedentesPlayer = $("#BotaoAntecedentes").val();
    var xpPlayer = $("#InputXP").val();
    var classebasePlayer = $("#BotaoClasseBase").val();
    var nivelclassebasePlayer = $("#BotaoNivelClasseBase").val();
    var multiclasse1Player = $("#BotaoMulticlasse1").val();
    var nivelmulticlasse1Player = $("#BotaoNivelMulticlasse1").val();
    var multiclasse2Player = $("#BotaoMulticlasse2").val();
    var nivelmulticlasse2Player = $("#BotaoNivelMulticlasse2").val();
    var forPlayer1 = $("#InputFor1").val();
    var desPlayer1 = $("#InputDes1").val();
    var conPlayer1 = $("#InputCon1").val();
    var intPlayer1 = $("#InputInt1").val();
    var sabPlayer1 = $("#InputSab1").val();
    var carPlayer1 = $("#InputCar1").val();
    var forPlayer2 = $("#InputFor2").val();
    var desPlayer2 = $("#InputDes2").val();
    var conPlayer2 = $("#InputCon2").val();
    var intPlayer2 = $("#InputInt2").val();
    var sabPlayer2 = $("#InputSab2").val();
    var carPlayer2 = $("#InputCar2").val();
    var forPlayer3 = $("#InputFor3").val();
    var desPlayer3 = $("#InputDes3").val();
    var conPlayer3 = $("#InputCon3").val();
    var intPlayer3 = $("#InputInt3").val();
    var sabPlayer3 = $("#InputSab3").val();
    var carPlayer3 = $("#InputCar3").val();
    var hpLeftPlayer = $("#InputHPLeft").val();
    var hpAllPlayer = $("#InputHPAll").val();
    var proefPlayer = $("#Inputproef").val();
    var classeArmPlayer = $("#InputclasseArm").val();
    var inspirPlayer = $("#Inputinspir").val();
    var iniciatPlayer = $("#Inputiniciat").val();
    var deslocPlayer = $("#Inputdesloc").val();
    var tracosPlayer = $("#TextareaTracos").val();
    var ideaisPlayer = $("#TextareaIdeais").val();
    var ligacoesPlayer = $("#TextareaLigacoes").val();
    var defeitosPlayer = $("#TextareaDefeitos").val();
    var ataquesPlayer = $("#TextareaAtaques").val();
    var caracEhabilPlayer = $("#TextareaCarac").val();
    var equipamentosPlayer = $("#TextareaEquip").val();
    var corPlayer = $("#inputcolor").val();


    var todosPlayers = listaDePlayers["Campanha1"];
    var linhaSelecionada;

    $.each(todosPlayers, function(index, value) {
      if (idPlayer == todosPlayers[index][0]) {

        listaDePlayers["Campanha1"][index][1] = (nomePersonagem);               //1
        listaDePlayers["Campanha1"][index][2] = (nomePlayer);                   //2
        listaDePlayers["Campanha1"][index][3] = (racaPlayer);                   //3
        listaDePlayers["Campanha1"][index][4] = (alinhamentoPlayer);            //4
        listaDePlayers["Campanha1"][index][5] = (antecedentesPlayer);           //5
        listaDePlayers["Campanha1"][index][6] = (xpPlayer);                     //6
        listaDePlayers["Campanha1"][index][7] = (classebasePlayer);             //7
        listaDePlayers["Campanha1"][index][8] = (nivelclassebasePlayer);        //8
        listaDePlayers["Campanha1"][index][9] = (multiclasse1Player);           //9
        listaDePlayers["Campanha1"][index][10] = (nivelmulticlasse1Player);      //10
        listaDePlayers["Campanha1"][index][11] = (multiclasse2Player);           //11
        listaDePlayers["Campanha1"][index][12] = (nivelmulticlasse2Player);      //12
        listaDePlayers["Campanha1"][index][13] = (forPlayer1);                   //13
        listaDePlayers["Campanha1"][index][14] = (desPlayer1);                   //14
        listaDePlayers["Campanha1"][index][15] = (conPlayer1);                   //15
        listaDePlayers["Campanha1"][index][16] = (intPlayer1);                   //16
        listaDePlayers["Campanha1"][index][17] = (sabPlayer1);                   //17
        listaDePlayers["Campanha1"][index][18] = (carPlayer1);                   //18
        listaDePlayers["Campanha1"][index][19] = (forPlayer2);                   //19
        listaDePlayers["Campanha1"][index][20] = (desPlayer2);                   //20
        listaDePlayers["Campanha1"][index][21] = (conPlayer2);                   //21
        listaDePlayers["Campanha1"][index][22] = (intPlayer2);                   //22
        listaDePlayers["Campanha1"][index][23] = (sabPlayer2);                   //23
        listaDePlayers["Campanha1"][index][24] = (carPlayer2);                   //24
        listaDePlayers["Campanha1"][index][25] = (forPlayer3);                   //25
        listaDePlayers["Campanha1"][index][26] = (desPlayer3);                   //26
        listaDePlayers["Campanha1"][index][27] = (conPlayer3);                   //27
        listaDePlayers["Campanha1"][index][28] = (intPlayer3);                   //28
        listaDePlayers["Campanha1"][index][29] = (sabPlayer3);                   //29
        listaDePlayers["Campanha1"][index][30] = (carPlayer3);                   //30
        listaDePlayers["Campanha1"][index][31] = (hpLeftPlayer);                 //31
        listaDePlayers["Campanha1"][index][32] = (hpAllPlayer);                  //32
        listaDePlayers["Campanha1"][index][33] = (proefPlayer);                  //33
        listaDePlayers["Campanha1"][index][34] = (classeArmPlayer);              //34
        listaDePlayers["Campanha1"][index][35] = (inspirPlayer);                 //35
        listaDePlayers["Campanha1"][index][36] = (iniciatPlayer);                //36
        listaDePlayers["Campanha1"][index][37] = (deslocPlayer);                 //37
        listaDePlayers["Campanha1"][index][38] = (tracosPlayer);                 //38
        listaDePlayers["Campanha1"][index][39] = (ideaisPlayer);                 //39
        listaDePlayers["Campanha1"][index][40] = (ligacoesPlayer);               //40
        listaDePlayers["Campanha1"][index][41] = (defeitosPlayer);               //41
        listaDePlayers["Campanha1"][index][42] = (ataquesPlayer);                //42
        listaDePlayers["Campanha1"][index][43] = (caracEhabilPlayer);            //43
        listaDePlayers["Campanha1"][index][44] = (equipamentosPlayer);           //44
        listaDePlayers["Campanha1"][index][45] = (corPlayer);                    //45

        linhaSelecionada = listaDePlayers["Campanha1"][index];

      }
    });


    var stringEditPlayer1 =
    "<b style=\"font-size: 13px;\">"
      +linhaSelecionada[1]+" - HP:"+linhaSelecionada[32]+"/"+linhaSelecionada[31]+" - XP:"+linhaSelecionada[6]
    +"</b>"

    var stringEditPlayer3 =
    "<button style=\"float: right; background-color:"+linhaSelecionada[45]+"\" type=\"button\" class=\"btn btn-primary delPlayerbutton\" onclick=\"alert('teste')\">"
      +"<span class=\"glyphicon glyphicon-certificate\" aria-hidden=\"true\"></span>"
    +"</button>"

    var stringEditPlayer2 =
      "<div class=\"grid-item player-item\">"
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
    +"</div>";
  $("#"+linhaSelecionada[0]+"Cabecalho").empty();
  $("#"+linhaSelecionada[0]+"Body").empty();
  $("#"+linhaSelecionada[0]+"CabecalhoButton button").remove();
  $("#"+linhaSelecionada[0]+"Cabecalho").append(stringEditPlayer1);
  $("#"+linhaSelecionada[0]+"Body").append(stringEditPlayer2);
  $("#"+linhaSelecionada[0]+"CabecalhoButton").append(stringEditPlayer3);
});

var numPlayers = 0;
var idUltimoPlayer = 0;

function AppendNovoPlayer() {
  var linhaPlayer = listaDePlayers["Campanha1"].length-1;
  var linhaSelecionada = listaDePlayers["Campanha1"][linhaPlayer];

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

function EditarPlayer(ctl) {

  $("#addPlayerModalDivContainer").empty();
  $("#addPlayerModalDivContainer").load('Players/EditPlayers.html div[id="addPlayerModalDiv"]', function() {

    var idPlayer = $(ctl).parent().find(".player-id").text();
    var todosPlayers = listaDePlayers["Campanha1"];
    var todasPericias = listaDePericias["Campanha1"];
    var todosItens = listaDeItens["Campanha1"];
    var todasMagias = listaDeMagias["Campanha1"];
    idPlayer = idPlayer.replace('#','');

    $.each(todosPlayers, function(index, value) {
      if (idPlayer == todosPlayers[index][0]) {
        $("#IDPlayer").val(todosPlayers[index][0]);
        // $("#ApagarPlayer").val(todosPlayers[index][0]);
        $("#NomePersonagem").val(todosPlayers[index][1]);
        $("#NomePlayer").val(todosPlayers[index][2]);
        if (todosPlayers[index][3] != "") {
          $("#BotaoRaca").val(todosPlayers[index][3]);
          $("#BotaoRaca").children("b").text(todosPlayers[index][3]);
        }
        if (todosPlayers[index][4] != "") {
          $("#BotaoAlinhamento").val(todosPlayers[index][4]);
          $("#BotaoAlinhamento").children("b").text(todosPlayers[index][4]);
        }
        if (todosPlayers[index][5] != "") {
          $("#BotaoAntecedentes").val(todosPlayers[index][5]);
          $("#BotaoAntecedentes").children("b").text(todosPlayers[index][5]);
        }
        if (todosPlayers[index][6] != "") {
          $("#InputXP").val(todosPlayers[index][6]);
        }
        if (todosPlayers[index][7] != "") {
          $("#BotaoClasseBase").val(todosPlayers[index][7]);
          $("#BotaoClasseBase").children("b").text(todosPlayers[index][7]);
        }
        if (todosPlayers[index][8] != "") {
          $("#BotaoNivelClasseBase").val(todosPlayers[index][8]);
          $("#BotaoNivelClasseBase").children("b").text(todosPlayers[index][8]);
        }
        if (todosPlayers[index][9] != "") {
          $("#BotaoMulticlasse1").val(todosPlayers[index][9]);
          $("#BotaoMulticlasse1").children("b").text(todosPlayers[index][9]);
        }
        if (todosPlayers[index][10] != "") {
          $("#BotaoNivelMulticlasse1").val(todosPlayers[index][10]);
          $("#BotaoNivelMulticlasse1").children("b").text(todosPlayers[index][10]);
        }
        if (todosPlayers[index][11] != "") {
          $("#BotaoMulticlasse2").val(todosPlayers[index][11]);
          $("#BotaoMulticlasse2").children("b").text(todosPlayers[index][11]);
        }
        if (todosPlayers[index][12] != "") {
          $("#BotaoNivelMulticlasse2").val(todosPlayers[index][12]);
          $("#BotaoNivelMulticlasse2").children("b").text(todosPlayers[index][12]);
        }
        if (todosPlayers[index][13] != "") { $("#InputFor1").val(todosPlayers[index][13]); }
        if (todosPlayers[index][14] != "") { $("#InputDes1").val(todosPlayers[index][14]); }
        if (todosPlayers[index][15] != "") { $("#InputCon1").val(todosPlayers[index][15]); }
        if (todosPlayers[index][16] != "") { $("#InputInt1").val(todosPlayers[index][16]); }
        if (todosPlayers[index][17] != "") { $("#InputSab1").val(todosPlayers[index][17]); }
        if (todosPlayers[index][18] != "") { $("#InputCar1").val(todosPlayers[index][18]); }
        if (todosPlayers[index][19] != "") { $("#InputFor2").val(todosPlayers[index][19]); }
        if (todosPlayers[index][20] != "") { $("#InputDes2").val(todosPlayers[index][20]); }
        if (todosPlayers[index][21] != "") { $("#InputCon2").val(todosPlayers[index][21]); }
        if (todosPlayers[index][22] != "") { $("#InputInt2").val(todosPlayers[index][22]); }
        if (todosPlayers[index][23] != "") { $("#InputSab2").val(todosPlayers[index][23]); }
        if (todosPlayers[index][24] != "") { $("#InputCar2").val(todosPlayers[index][24]); }
        if (todosPlayers[index][25] != "") { $("#InputFor3").val(todosPlayers[index][25]); }
        if (todosPlayers[index][26] != "") { $("#InputDes3").val(todosPlayers[index][26]); }
        if (todosPlayers[index][27] != "") { $("#InputCon3").val(todosPlayers[index][27]); }
        if (todosPlayers[index][28] != "") { $("#InputInt3").val(todosPlayers[index][28]); }
        if (todosPlayers[index][29] != "") { $("#InputSab3").val(todosPlayers[index][29]); }
        if (todosPlayers[index][30] != "") { $("#InputCar3").val(todosPlayers[index][30]); }
        if (todosPlayers[index][31] != "") { $("#InputHPLeft").val(todosPlayers[index][31]); }
        if (todosPlayers[index][32] != "") { $("#InputHPAll").val(todosPlayers[index][32]); }
        if (todosPlayers[index][33] != "") { $("#Inputproef").val(todosPlayers[index][33]); }
        if (todosPlayers[index][34] != "") { $("#InputclasseArm").val(todosPlayers[index][34]); }
        if (todosPlayers[index][35] != "") { $("#Inputinspir").val(todosPlayers[index][35]); }
        if (todosPlayers[index][36] != "") { $("#Inputiniciat").val(todosPlayers[index][36]); }
        if (todosPlayers[index][37] != "") { $("#Inputdesloc").val(todosPlayers[index][37]); }
        if (todosPlayers[index][38] != "") { $("#TextareaTracos").val(todosPlayers[index][38]); }
        if (todosPlayers[index][39] != "") { $("#TextareaIdeais").val(todosPlayers[index][39]); }
        if (todosPlayers[index][40] != "") { $("#TextareaLigacoes").val(todosPlayers[index][40]); }
        if (todosPlayers[index][41] != "") { $("#TextareaDefeitos").val(todosPlayers[index][41]); }
        if (todosPlayers[index][42] != "") { $("#TextareaAtaques").val(todosPlayers[index][42]); }
        if (todosPlayers[index][43] != "") { $("#TextareaCarac").val(todosPlayers[index][43]); }
        if (todosPlayers[index][44] != "") { $("#TextareaEquip").val(todosPlayers[index][44]); }
        if (todosPlayers[index][45] != "") {
          $("#inputcolor").css("background-color",todosPlayers[index][45]);
          $("#inputcolor").css("border-color", "rgba(0, 0, 0, 0.42)");
          $("#inputcolor").val(todosPlayers[index][45]);
        }
      }

    });

    $.each(todasPericias, function(index, value) {
      if (idPlayer == todasPericias[index][0]) {
        for (var i = 0; i < todasPericias[index][1]; i++) {
          var stringNovaPericia =
          "<li class=\"btn-group\" style=\"width: 100%;padding-right: 5px;padding-bottom: 5px;\">"
            +"<button value=\""+todasPericias[index][i+2]+"\" type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;font-size: 13px !important;\">"
              +"<b>"+todasPericias[index][i+2]+"</b>"
              +"<span class=\"caret\"></span>"
            +"</button>"
            +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\">"
              +"<li><a id=\"deleta\" href=\"#\">Deletar Item</a></li>"
              +"<li role=\"separator\" class=\"divider\"></li>"
              +"<li><a href=\"#\">Another action</a></li>"
              +"<li><a href=\"#\">Something else here</a></li>"
              +"<li><a href=\"#\">Separated link</a></li>"
            +"</ul>"
          +"</li>";
          $("#ulPericias").append(stringNovaPericia);
        }
      }
    });

    $.each(todosItens, function(index, value) {
      if (idPlayer == todosItens[index][0]) {
        for (var i = 0; i < todosItens[index][1]; i++) {
          var stringNovoItem =
          "<li class=\"btn-group\" style=\"width: 100%;padding-right: 5px;padding-bottom: 5px;\">"
            +"<button value=\""+todosItens[index][i+2]+"\" type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;font-size: 13px !important;\">"
              +"<b>"+todosItens[index][i+2]+"</b>"
              +"<span class=\"caret\"></span>"
            +"</button>"
            +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\">"
              +"<li><a id=\"deleta\" href=\"#\">Deletar Item</a></li>"
              +"<li role=\"separator\" class=\"divider\"></li>"
              +"<li><a href=\"#\">Another action</a></li>"
              +"<li><a href=\"#\">Something else here</a></li>"
              +"<li><a href=\"#\">Separated link</a></li>"
            +"</ul>"
          +"</li>";
          $("#ulItens").append(stringNovoItem);
        }
      }
    });

    $.each(todasMagias, function(index, value) {
      if (idPlayer == todasMagias[index][0]) {
        for (var i = 0; i < todasMagias[index][1]; i++) {
          var stringNovaMagia =
          "<li class=\"btn-group\" style=\"width: 100%;padding-right: 5px;padding-bottom: 5px;\">"
            +"<button value=\""+todasMagias[index][i+2]+"\" type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;font-size: 13px !important;\">"
              +"<b>"+todasMagias[index][i+2]+"</b>"
              +"<span class=\"caret\"></span>"
            +"</button>"
            +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\">"
              +"<li><a id=\"deleta\" href=\"#\">Deletar Item</a></li>"
              +"<li role=\"separator\" class=\"divider\"></li>"
              +"<li><a href=\"#\">Another action</a></li>"
              +"<li><a href=\"#\">Something else here</a></li>"
              +"<li><a href=\"#\">Separated link</a></li>"
            +"</ul>"
          +"</li>";
          $("#ulMagias").append(stringNovaMagia);
        }
      }
    });
  });
}
