var linkImagem;
$(document).on('click', '.dropdown-menu-monstro li a', function() {
     $(".btn-monstro:first-child").text($(this).text());
     $(".btn-monstro:first-child").val($(this).text());

     var nome = $(".btn-monstro:first-child").val();
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
     $( "#selectedMonster" ).load('monsters/Dnd5Monsters.html div[data-name="'+nomeIngles+'"]');
     $('#selectedMonsterPicture img').attr("src","monsters/Images/"+linkImagem);
});


$( document ).ready(function() {
  var monstrosVisiveis = database["Monstros"];
  $.each(monstrosVisiveis, function(index, value) {
    // if (monstrosVisiveis[index][1] == nivelSelecionado) {
      $("#ULdropdownMonstro").append(
        "<li data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseOneOne1\" aria-expanded=\"true\" aria-controls=\"collapseOneOne1\"><a href=\"#\">"+monstrosVisiveis[index][0]+"</a></li>"
      );
    // }
  });
});


$(document).on('click', '.dropdown-menu-CDMin li a', function() {
  $(".btn-CDMin:first-child").text($(this).text());
  $(".btn-CDMin:first-child").val($(this).text());
  AdicionaMonstros();
});

$(document).on('click', '.dropdown-menu-CDMax li a', function() {
  $(".btn-CDMax:first-child").text($(this).text());
  $(".btn-CDMax:first-child").val($(this).text());
  AdicionaMonstros();
});

$(document).on('click', '.dropdown-menu-Tamanho li a', function() {
  $(".btn-Tamanho:first-child").text($(this).text());
  $(".btn-Tamanho:first-child").val($(this).text());
  AdicionaMonstros();
});

$(document).on('click', '.dropdown-menu-Tipo li a', function() {
  $(".btn-Tipo:first-child").text($(this).text());
  $(".btn-Tipo:first-child").val($(this).text());
  AdicionaMonstros();
});

$(document).on('click', '.dropdown-menu-Secao li a', function() {
  $(".btn-Secao:first-child").text($(this).text());
  $(".btn-Secao:first-child").val($(this).text());
  AdicionaMonstros();
});

$(document).on('click', '.dropdown-menu-Alinhamento1 li a', function() {
  $(".btn-Alinhamento1:first-child").text($(this).text());
  $(".btn-Alinhamento1:first-child").val($(this).text());
  AdicionaMonstros();
});

$(document).on('click', '.dropdown-menu-Alinhamento2 li a', function() {
  $(".btn-Alinhamento2:first-child").text($(this).text());
  $(".btn-Alinhamento2:first-child").val($(this).text());
  AdicionaMonstros();
});

$(document).on('click', '.dropdown-menu-Ambiente li a', function() {
  $(".btn-Ambiente:first-child").text($(this).text());
  $(".btn-Ambiente:first-child").val($(this).text());
  AdicionaMonstros();
});

$(document).on('click', '.dropdown-menu-Lendario li a', function() {
  $(".btn-Lendario:first-child").text($(this).text());
  $(".btn-Lendario:first-child").val($(this).text());
  AdicionaMonstros();
});



function AdicionaMonstros() {
  // var nivelSelecionado = $(".btn-nivel:first-child").val();
  // var className = $("#dropdownClasses").val();
  // visibleSpells = spellByClass[className];

  $("#ULdropdownMonstro").empty();
  $("#tbodyMonstros").empty();
  // $("#spell-list").empty();

  var op1a = $("#dropdownCDMin").val();       var t1a = false; // INDEX = 1 //.......
  var op1b = $("#dropdownCDMax").val();       var t1b = false; // INDEX = 1 //.......
  var op2 = $("#dropdownTamanhos").val();     var t2 = false; // INDEX = 2 //op2 = VALOR DO CAMPO 1 // T1 SE CAMPO 1 BATE COM VALOR SALVO DO MONSTRO
  var op3 = $("#dropdownTipo").val();         var t3 = false; // INDEX = 3 //.......
  var op4 = $("#dropdownSecao").val();        var t4 = false; // INDEX = 4 //.......
  var op5 = $("#dropdownAlinhamento1").val(); var t5 = false; // INDEX = 5 //.......
  var op6 = $("#dropdownAlinhamento2").val(); var t6 = false; // INDEX = 6 //.......
  var op10 = $("#dropdownAmbiente").val();     var t10 = false; // INDEX = 10 //OP2 = VALOR DO CAMPO 2 // T2 SE CAMPO 2 BATE COM VALOR SALVO DO MONSTRO
  var op11 = $("#dropdownLendario").val();     var t11 = false; // INDEX = 11 - //OP3 = VALOR DO CAMPO 3 // T3 SE CAMPO 3 BATE COM VALOR SALVO DO MONSTRO

  var monstrosVisiveis = database["Monstros"];
  $.each(monstrosVisiveis, function(index, value) {
    if (op1a != "Todos") {
      if (eval(op1a) <= eval(monstrosVisiveis[index][1])) {
        t1a = true;
      } else {
        t1a = false;
      }
    } else {
      t1a = true;
    }

    if (op1b != "Todos") {
      if (eval(op1b) >= eval(monstrosVisiveis[index][1])) {
        t1b = true;
      } else {
        t1b = false;
      }
    } else {
      t1b = true;
    }

    if (op2 != "Todos") {
      if (op2 == monstrosVisiveis[index][2]) {
        t2 = true;
      } else {
        t2 = false;
      }
    } else {
      t2 = true;
    }

    if (op3 != "Todos") {
      if (op3 == monstrosVisiveis[index][3]) {
        t3 = true;
      } else {
        t3 = false;
      }
    } else {
      t3 = true;
    }

    if (op4 != "Todos") {
      if (op4 == monstrosVisiveis[index][4]) {
        t4 = true;
      } else {
        t4 = false;
      }
    } else {
      t4 = true;
    }

    if (op5 != "Todos") {
      if (op5 == monstrosVisiveis[index][5]) {
        t5 = true;
      } else {
        t5 = false;
      }
    } else {
      t5 = true;
    }

    if (op6 != "Todos") {
      if (op6 == monstrosVisiveis[index][6]) {
        t6 = true;
      } else {
        t6 = false;
      }
    } else {
      t6 = true;
    }

    // var ambiente = ;
    if (op10 != "Todos") {
      if (monstrosVisiveis[index][10].indexOf(op10) >= 0) {
        t10 = true;
      } else {
        t10 = false;
      }
    } else {
      t10 = true;
    }

    if (op11 != "Todos") {
      if (op11 == monstrosVisiveis[index][11]) {
        t11 = true;
      } else {
        t11 = false;
      }
    } else {
      t11 = true;
    }

    if (t1a == true && t1b == true && t2 == true && t3 == true && t4 == true && t5 == true && t6 == true && t10 == true && t11 == true) {
      $("#ULdropdownMonstro").append(
        "<li data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseOneOne1\" aria-expanded=\"true\" aria-controls=\"collapseOneOne1\"><a href=\"#\">"+monstrosVisiveis[index][0]+"</a></li>"
      );

      $("#tbodyMonstros").append(
        // "<li><a href=\"#\">"+monstrosVisiveis[index][0]+"</a></li>"
        "<tr><th>"+monstrosVisiveis[index][0]+"</th><th>"+monstrosVisiveis[index][1]+"</th><th>"+monstrosVisiveis[index][3]+"</th><th>"+monstrosVisiveis[index][5]+" e "+monstrosVisiveis[index][6]+"</th><th>"+monstrosVisiveis[index][2]+"</th>"+
          "<th style=\"padding-top: 1px;padding-bottom: 1px;padding-left: 0px;padding-right: 0px;\">"
            +"<button onclick=\"getNome(this)\" class=\"btn btn-default\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseOneOne1\" aria-expanded=\"true\" aria-controls=\"collapseOneOne1\" style=\"padding-top: 3px;padding-bottom: 3px;padding-left: 6px;padding-right: 6px;\">"
              +"<span class=\"glyphicon glyphicon-search\"></span>"
            +"</button></th>"
          +"<th style=\"padding-top: 1px;padding-bottom: 1px;padding-left: 0px;padding-right: 0px;\">"
            +"<button onclick=\"addMonstroEncontro(this)\" class=\"btn btn-success\" role=\"button\" aria-expanded=\"true\" style=\"padding-top: 3px;padding-bottom: 3px;padding-left: 6px;padding-right: 6px;\">"
              +"<span class=\"glyphicon glyphicon-plus\"></span>"
            +"</button></th></tr>"
      );
    }
    t1a = false; t1b = false;t2 = false;t3 = false;t4 = false;t5 = false;t6 = false;t7 = false;t8 = false;
  });
}

  // //ADICIONA CADA OPCAO DE MAGIA
  // if (className == "Todas") {
  //   $.each(visibleSpells, function(index, value) {
  //     $("#ULdropdownMagia").append(
  //       "<li><a href=\"#\">"+visibleSpells[index][0]+"</a></li>"
  //     );
  //   });
  // }
  // else {
  //   nivelSelecionado = nivelSelecionado.replace('Nivel ','');
  //     $.each(visibleSpells, function(index, value) {
  //     if (visibleSpells[index][1] == nivelSelecionado) {
  //       $("#ULdropdownMagia").append(
  //         "<li><a href=\"#\">"+visibleSpells[index][0]+"</a></li>"
  //       );
  //     }
  //   });
  // }


  // sortUnorderedList("ULdropdownMagia");
// });

function voltaMonstro() {
  $('#accordion1 .in').collapse('hide');
  $("#collapseOne1").collapse('show');
}

function getNome(ctl) {
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
  $( "#selectedMonster" ).load('monsters/Dnd5Monsters.html div[data-name="'+nomeIngles+'"]');
  $('#selectedMonsterPicture img').attr("src","monsters/Images/"+linkImagem);
  $('#accordion1 .in').collapse('hide');
  $("#collapseOneOne1").collapse('show');
}

function mostraMonstro(){
  var tipoDisplay = $('#selectedMonsterPicture').css('display');
  if (linkImagem != 'none') {
    if (tipoDisplay == 'none') {
      $('#selectedMonsterPicture').css('display','block');
      $('#selectedMonster').css('display','none');
      $('#glyphiconPicture').attr('class','glyphicon glyphicon-search');
    }
    if (tipoDisplay == 'block') {
      $('#selectedMonsterPicture').css('display','none');
      $('#selectedMonster').css('display','block');
      $('#glyphiconPicture').attr('class','glyphicon glyphicon-picture');
    }
  }
}
