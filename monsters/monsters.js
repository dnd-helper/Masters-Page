var linkImagem;
$(document).on('click', '.dropdown-menu-monstro li a', function() {
     $(".btn-monstro:first-child").text($(this).text());
     $(".btn-monstro:first-child").val($(this).text());

     var nome = $(".btn-monstro:first-child").val();
     var nomeIngles;
     var monstrosVisiveis = monstros["Todos"];
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
  var monstrosVisiveis = monstros["Todos"];
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
  // AdicionaMonstros();
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
  var op7 = $("#dropdownLendario").val();     var t7 = false; // INDEX = - //OP3 = VALOR DO CAMPO 3 // T3 SE CAMPO 3 BATE COM VALOR SALVO DO MONSTRO
  var op10 = $("#dropdownAmbiente").val();     var t10 = false; // INDEX = 10 //OP2 = VALOR DO CAMPO 2 // T2 SE CAMPO 2 BATE COM VALOR SALVO DO MONSTRO

  var monstrosVisiveis = monstros["Todos"];
  $.each(monstrosVisiveis, function(index, value) {
    if (op1a != "Todos") {
      // alert(monstrosVisiveis[index][2]);
      if (eval(op1a) <= eval(monstrosVisiveis[index][1])) {
        t1a = true;
      } else {
        t1a = false;
      }
    } else {
      t1a = true;
    }

    if (op1b != "Todos") {
      alert(monstrosVisiveis[index][1]);
      alert(op1b);
      // alert(eval(op1b));
      if (eval(op1b) >= eval(monstrosVisiveis[index][1])) {
        t1b = true;
      } else {
        t1b = false;
      }
    } else {
      t1b = true;
    }

    if (op2 != "Todos") {
      // alert(monstrosVisiveis[index][2]);
      if (op2 == monstrosVisiveis[index][2]) {
        t2 = true;
      } else {
        t2 = false;
      }
    } else {
      t2 = true;
    }

    if (op3 != "Todos") {
      // alert(monstrosVisiveis[index][3]);
      if (op3 == monstrosVisiveis[index][3]) {
        t3 = true;
      } else {
        t3 = false;
      }
    } else {
      t3 = true;
    }

    if (op4 != "Todos") {
      // alert(monstrosVisiveis[index][4]);
      if (op4 == monstrosVisiveis[index][4]) {
        t4 = true;
      } else {
        t4 = false;
      }
    } else {
      t4 = true;
    }

    if (op5 != "Todos") {
      // alert(monstrosVisiveis[index][5]);
      if (op5 == monstrosVisiveis[index][5]) {
        t5 = true;
      } else {
        t5 = false;
      }
    } else {
      t5 = true;
    }

    if (op6 != "Todos") {
      // alert(monstrosVisiveis[index][6]);
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

    if (t1a == true && t1b == true && t2 == true && t3 == true && t4 == true && t5 == true && t6 == true && t10 == true) {
      $("#ULdropdownMonstro").append(
        "<li data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseOneOne1\" aria-expanded=\"true\" aria-controls=\"collapseOneOne1\"><a href=\"#\">"+monstrosVisiveis[index][0]+"</a></li>"
      );

      $("#tbodyMonstros").append(
        // "<li><a href=\"#\">"+monstrosVisiveis[index][0]+"</a></li>"
        "<tr><th>"+monstrosVisiveis[index][0]+"</th><th>"+monstrosVisiveis[index][1]+"</th><th>"+monstrosVisiveis[index][3]+"</th><th>"+monstrosVisiveis[index][5]+" e "+monstrosVisiveis[index][6]+"</th><th>"+monstrosVisiveis[index][2]+"</th>"+
          "<th style=\"padding-top: 1px;padding-bottom: 1px;padding-left: 0px;padding-right: 0px;\">"+
            "<button onclick=\"getNome(this)\" class=\"btn btn-default\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseOneOne1\" aria-expanded=\"true\" aria-controls=\"collapseOneOne1\" style=\"padding-top: 3px;padding-bottom: 3px;padding-left: 6px;padding-right: 6px;\">"
              +"<span class=\"glyphicon glyphicon-search\"></span>"
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

function getNome(ctl) {
  // var linkImagem;
  var nome = $(ctl).parents("tr").children("th").first().text();
  var nomeIngles;
  var monstrosVisiveis = monstros["Todos"];
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

var monstros = {}

monstros["Todos"] = [
  ["Aarakocra","1/4","Médio","Humanoide","Não-Definida","Neutro","Bom","Aarakocra","13","aarakocra.jpg","Montanha, Planos"],
  ["Abocanhador Matraqueante","2","Médio","Aberração","Não-Definida","Neutro","Neutro","Gibbering Mouther","67","gibberingMouther.jpg","Caverna, Masmorra, Planos, Subterrâneo"],
  ["Abolete","10","Grande","Aberração","Não-Definida","Leal","Mau","Aboleth","135","aboleth.jpg","Aquático, Costa"],
  ["Abutre","0","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Vulture","5","none","Deserto, Planicies, Ruínas"],
  ["Abutre Gigante","1","Grande","Besta","Criaturas Diversas","Neutro","Mal","Giant Vulture","22","none","Deserto, Planicies, Ruínas"],
  ["Acólito","1/4","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Acolyte","9","none","Ártico, Deserto, Masmorra, Floresta, Planicies, Montanha, Pântano, Subterrâneo, Urbano"],
  ["Águia","0","Pequeno","Besta","Criaturas Diversas","Nenhum","Nenhum","Eagle","3","eagle.jpg","Ártico, Planicies, Montanha"],
  ["Águia Gigante","1","Grande","Besta","Criaturas Diversas","Neutro","Bom","Giant Eagle","26","none","Planicies, Montanha"],
  ["Alce","1/4","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Elk","13","none","Floresta, Planicies"],
  ["Alce gigante","2","Enorme","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Elk","42","none","Floresta, Planicies"],
  ["Allossauro","2","Grande","Besta","Dinossauros","Nenhum","Nenhum","Allosaurus","51","none","Costa, Planicies, Pântano"],
  ["Androesfinge","17","Grande","Monstruosidade","Esfinges","Leal","Neutro","Androsphinx","199","sphinx.jpg","Masmorra, Ruínas"],
  ["Animalia da Água","3","Grande","Elemental","Não-Definida","Neutro","Neutro","Water Weird","58","waterWeird.jpg","Caverna, Costa, Floresta, Montanha, Planos, Pântano, Subterrâneo"],
  ["Ankheg","2","Grande","Monstruosidade","Não-Definida","Nenhum","Nenhum","Ankheg","39","ankheg.jpg","Costa, Floresta, Planicies, Subterrâneo"],
  ["Anquilossauro","3","Enorme","Besta","Dinossauros","Nenhum","Nenhum","Ankylosaurus","68","ankylosaurus.jpg","Planicies"],
  ["Aparição","5","Médio","Morto-vivo","Não-Definida","Neutro","Mal","Wraith","67","wraith.jpg","Masmorra, Ruínas, Pântano, Urbano"],
  ["Aranha","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Spider","1","spider.jpg","Caverna, Costa, Masmorra, Floresta, Planicies, Montanha, Planos, Ruínas, Pântano, Subterrâneo"],
  ["Aranha gigante","1","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Spider","26","giantSpider.jpg","Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Aranha Interplanar","3","Grande","Monstruosidade","Criaturas Diversas","Nenhum","Nenhum","Phase Spider","32","phaseSpider.jpg","Caverna, Costa, Masmorra, Floresta, Planicies, Montanha, Planos, Ruínas, Pântano, Subterrâneo"],
  ["Aranha-lobo gigante","1/4","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Wolf Spider","11","none","Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Arbusto Desperto","0","Pequeno","Planta","Criaturas Diversas","Nenhum","Nenhum","Awakened Shrub","10","none","Floresta, Planicies"],
  ["Arbusto Errante","5","Grande","Planta","Não-Definida","Nenhum","Nenhum","Shambling Mound","136","shamblingMound.jpg","Floresta, Pântano"],
  ["Arcanaloth","12","Médio","Corruptor","Yugoloths","Neutro","Mal","Arcanaloth","104","arcanaloth.jpg","Masmorra, Planos"],
  ["Arcano","6","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Mage","40","none","Urbano"],
  ["Armadura animada","1","Médio","Constructo","Objetos Animados","Nenhum","Nenhum","Animated Armor","33","animatedArmor.jpg","Masmorra, Ruínas, Urbano"],
  ["Arminho","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Badger","3","badger.jpg","Floresta"],
  ["Arminho gigante","1/4","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Badger","13","none","Floresta, Planicies"],
  ["Arquimago","12","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Archmage","99","archmage.jpg","Ruínas, Urbano"],
  ["Árvore Desperta","2","Enorme","Planta","Criaturas Diversas","Nenhum","Nenhum","Awakened Tree","59","none","Floresta"],
  ["Assassino","8","Médio","Humanoide","Personagens do Mestre","Qualquer","Não-Bom","Assassin","78","none","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Azer","2","Médio","Elemental","Não-Definida","Leal","Neutro","Azer","39","azer.jpg","Planos, Subterrâneo"],
  ["Babuíno","0","Pequeno","Besta","Criaturas Diversas","Nenhum","Nenhum","Baboon","3","none","Floresta, Planicies"],
  ["Baleia Assassina","3","Enorme","Besta","Criaturas Diversas","Nenhum","Nenhum","Killer Whale","90","none","Aquático"],
  ["Balor","19","Enorme","Corruptor","Demônios","Caótico","Mau","Balor","262","demonBalor.jpg","Masmorra, Planos"],
  ["Bandido","1/8","Médio","Humanoide","Personagens do Mestre","Não-Leal","Qualquer","Bandit","11","none","Ártico, Costa, Deserto, Floresta, Planicies, Montanha, Ruínas, Urbano"],
  ["Banshee","4","Médio","Morto-vivo","Não-Definida","Caótico","Mau","Banshee","58","banshee.jpg","Masmorra, Floresta, Ruínas, Pântano"],
  ["Barão Sahuagin","5","Grande","Humanoide","Sahuagin","Leal","Mau","Sahuagin Baron","76","sahuaginBaron.jpg","Aquático, Costa"],
  ["Barlgura","5","Grande","Corruptor","Demônios","Caótico","Mau","Barlgura","68","barlgura.jpg","Masmorra, Planos"],
  ["Basilisco","3","Médio","Monstruosidade","Não-Definida","Nenhum","Nenhum","Basilisk","52","basilisk.jpg","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo"],
  ["Batedor","1/2","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Scout","16","scout.jpg","Ártico, Costa, Deserto, Floresta, Planicies, Montanha, Pântano"],
  ["Behir","11","Enorme","Monstruosidade","Não-Definida","Neutro","Mal","Behir","168","behir.jpg","Caverna, Montanha, Subterrâneo"],
  ["Besouro De Fogo Gigante","0","Pequeno","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Fire Beetle","4","giantFireBeetle.jpg","Caverna, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo"],
  ["Bico de Machado","1/4","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Axe Beak","19","axeBeak.jpg","Planicies"],
  ["Bidrone","1/4","Médio","Constructo","Modrons","Leal","Neutro","Duodrone","11","duodrone.jpg","Planos"],
  ["Bode","0","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Goat","4","none","Planicies, Urbano"],
  ["Bode gigante","1/2","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Goat","19","none","Floresta, Planicies, Montanha"],
  ["Bruxa da Noite","5","Médio","Corruptor","Bruxas","Neutro","Mal","Night Hag","112","nightHag.jpg","Planos, Subterrâneo"],
  ["Bruxa da Noite (covil)","7","Médio","Corruptor","Bruxas","Neutro","Mal","Night Hag (coven)","112","nightHag.jpg","Planos, Subterrâneo"],
  ["Bruxa do Mar","2","Médio","Fada","Bruxas","Caótico","Mau","Sea Hag","52","seaHag.jpg","Aquático, Costa, Subterrâneo"],
  ["Bruxa do Mar (covil)","4","Médio","Fada","Bruxas","Caótico","Mau","Sea Hag (coven)","52","seaHag.jpg","Aquático, Costa, Subterrâneo"],
  ["Bruxa Verde","3","Médio","Fada","Bruxas","Neutro","Mal","Green Hag","82","greenHag.jpg","Floresta, Pântano"],
  ["Bruxa Verde (covil)","5","Médio","Fada","Bruxas","Neutro","Mal","Green Hag (coven)","82","greenHag.jpg","Floresta, Pântano"],
  ["Bugbear","1","Médio","Humanoide","Bugbears","Caótico","Mau","Bugbear","27","bugbear.jpg","Caverna, Masmorra, Floresta, Montanha, Ruínas, Urbano"],
  ["Bugbear Comandante","3","Médio","Humanoide","Bugbears","Caótico","Mau","Bugbear Chief","65","none","Caverna, Masmorra, Floresta, Montanha, Ruínas, Urbano"],
  ["Bulette","5","Grande","Monstruosidade","Não-Definida","Nenhum","Nenhum","Bulette","94","bulette.jpg","Caverna, Deserto, Planicies, Montanha, Subterrâneo"],
  ["Bullywug","1/4","Médio","Humanoide","Não-Definida","Neutro","Mal","Bullywug","11","bullywug.jpg","Costa, Pântano"],
  ["Caçador Invisível","6","Médio","Elemental","Não-Definida","Neutro","Neutro","Invisible Stalker","104","invisibleStalker.jpg","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Planos, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Cambion","5","Médio","Corruptor","Não-Definida","Qualquer","Mau","Cambion","82","cambion.jpg","Masmorra, Planos, Urbano"],
  ["Camelo","1/8","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Camel","15","none","Deserto"],
  ["Cão da Morte","1","Médio","Monstruosidade","Criaturas Diversas","Neutro","Mal","Death Dog","39","deathDog.jpg","Deserto, Planicies, Subterrâneo"],
  ["Cão Infernal","3","Médio","Corruptor","Não-Definida","Leal","Mau","Hell Hound","45","hellHound.jpg","Masmorra, Planos, Urbano"],
  ["Cão Teleportador","1/4","Médio","Fada","Criaturas Diversas","Leal","Bom","Blink Dog","22","blinkDog.jpg","Floresta, Planicies"],
  ["Capitão dos Bandidos","2","Médio","Humanoide","Personagens do Mestre","Não-Leal","Qualquer","Bandit Captain","65","banditCaptain.jpg","Ártico, Costa, Deserto, Floresta, Planicies, Montanha, Ruínas, Urbano"],
  ["Capitão Hobgoblin","3","Médio","Humanoide","Hobgoblins","Leal","Mau","Hobgoblin Captain","39","none","Ártico, Costa, Planicies, Montanha, Urbano"],
  ["Caranguejo","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Crab","2","none","Aquático, Costa"],
  ["Caranguejo Gigante","1/8","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Crab","13","none","Aquático, Costa"],
  ["Carniçal","1","Médio","Morto-vivo","Carniçais","Caótico","Mau","Ghoul","22","ghoul.jpg","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Cavaleiro","3","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Knight","52","none","Urbano"],
  ["Cavaleiro da Morte","17","Médio","Morto-vivo","Não-Definida","Caótico","Mau","Death Knight","180","none","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Cavaleiro githyanki","8","Médio","Humanoide","Gith","Leal","Mau","Githyanki Knight","91","none","Planos, Pântano"],
  ["Cavalo de Carga","1/4","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Draft Horse","19","none","Urbano"],
  ["Cavalo de Guerra","1/2","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Warhorse","19","none","Planicies, Urbano"],
  ["Cavalo de Montaria","1/4","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Riding Horse","13","horse.jpg","Urbano"],
  ["Cavalo-Marinho","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Sea Horse","1","none","Aquático"],
  ["Cavalo-marinho gigante","1/2","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Sea Horse","16","none","Aquático"],
  ["Caveira Flamejante","4","Miúdo","Morto-vivo","Não-Definida","Neutro","Mal","Flameskull","40","flameskull.jpg","Masmorra, Ruínas"],
  ["Centauro","2","Grande","Monstruosidade","Não-Definida","Neutro","Bom","Centaur","45","centaur.jpg","Costa, Deserto, Planicies"],
  ["Centopéia Gigante","1/4","Pequeno","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Centipede","4","none","Caverna, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo"],
  ["Chacal","0","Pequeno","Besta","Criaturas Diversas","Nenhum","Nenhum","Jackal","3","none","Deserto, Planicies"],
  ["Chasme","6","Grande","Corruptor","Demônios","Caótico","Mau","Chasme","84","none","Masmorra, Planos"],
  ["Chefe Goblin","1","Pequeno","Humanoide","Goblins","Neutro","Mal","Goblin Boss","21","none","Caverna, Masmorra, Floresta, Planicies, Montanha, Ruínas, Urbano"],
  ["Chuul","4","Grande","Aberração","Não-Definida","Caótico","Mau","Chuul","93","chuul.jpg","Aquático, Costa"],
  ["Ciclope","6","Enorme","Gigante","Não-Definida","Caótico","Neutro","Cyclops","138","cyclops.jpg","Caverna, Costa, Planicies, Montanha, Ruínas, Pântano"],
  ["Cobra Constritora","1/4","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Constrictor Snake","13","none","Floresta, Pântano"],
  ["Cobra Constritora Gigante","2","Enorme","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Constrictor Snake","60","none","Floresta, Planicies, Pântano"],
  ["Cobra Voadora","1/8","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Flying Snake","5","flyingSnake.jpg","Floresta, Pântano"],
  ["Cocatriz","1/2","Pequeno","Monstruosidade","Não-Definida","Nenhum","Nenhum","Cockatrice","27","cockatrice.jpg","Floresta, Planicies, Pântano"],
  ["Comandante de Guerra Orc","4","Médio","Humanoide","Orcs","Caótico","Mau","Orc War Chief","93","none","Ártico, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Urbano"],
  ["Coruja","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Owl","1","owl.jpg","Floresta, Urbano"],
  ["Coruja gigante","1/4","Grande","Besta","Criaturas Diversas","Neutro","Neutro","Giant Owl","19","none","Floresta, Planicies, Urbano"],
  ["Corvo","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Raven","1","raven.jpg","Floresta, Planicies"],
  ["Couatl","4","Médio","Celestial","Não-Definida","Leal","Bom","Couatl","97","couatl.jpg","Planos"],
  ["Cria Vampírica","5","Médio","Morto-vivo","Vampiros","Neutro","Mal","Vampire Spawn","82","vampireSpawn.jpg","Masmorra, Ruínas, Urbano"],
  ["Crocodilo","1/2","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Crocodile","19","none","Aquático, Costa, Pântano"],
  ["Crocodilo gigante","5","Enorme","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Crocodile","85","none","Aquático, Costa, Pântano"],
  ["Cubo Gelatinoso","2","Grande","Limo","Limos","Nenhum","Nenhum","Gelatinous Cube","84","cube.jpg","Masmorra"],
  ["Cultista","1/8","Médio","Humanoide","Personagens do Mestre","Qualquer","Não-Bom","Cultist","9","none","Masmorra, Urbano"],
  ["Dao","11","Grande","Elemental","Gênios","Neutro","Mal","Dao","187","dao.jpg","Caverna, Masmorra, Montanha, Planos, Subterrâneo"],
  ["Demilich","18","Miúdo","Morto-vivo","Não-Definida","Neutro","Mal","Demilich","80","demilich.jpg","Masmorra"],
  ["Demilich (Acererak no covil)","23","Miúdo","Morto-vivo","Não-Definida","Neutro","Mal","Demilich (Acererak in lair)","80","demilich.jpg","Masmorra"],
  ["Demilich (Acererak)","21","Miúdo","Morto-vivo","Não-Definida","Neutro","Mal","Demilich (Acererak)","80","demilich.jpg","Masmorra"],
  ["Demilich (covil)","20","Miúdo","Morto-vivo","Não-Definida","Neutro","Mal","Demilich (in lair)","80","demilich.jpg","Masmorra"],
  ["Demônio das Sombras","4","Médio","Corruptor","Demônios","Caótico","Mau","Shadow Demon","66","shadowDemon.jpg","Masmorra, Planos"],
  ["Deva","10","Médio","Celestial","Anjos","Leal","Bom","Deva","136","deva.jpg","Planos"],
  ["Devorador de Intelecto","2","Miúdo","Aberração","Não-Definida","Leal","Mau","Intellect Devourer","21","none","Masmorra, Subterrâneo"],
  ["Devorador de Mentes","7","Médio","Aberração","Devorador de Mentes","Leal","Mau","Mind Flayer","71","mindFlayer.jpg","Masmorra, Subterrâneo, Urbano"],
  ["Devorador de Mentes Arcanista","8","Médio","Aberração","Devorador de Mentes","Leal","Mau","Mind Flayer Arcanist","71","mindFlayer.jpg","Masmorra, Subterrâneo, Urbano"],
  ["Diabo Barbado","3","Médio","Corruptor","Diabos","Leal","Mau","Bearded Devil","52","devilBearded.jpg","Masmorra, Planos"],
  ["Diabo das Correntes","8","Médio","Corruptor","Diabos","Leal","Mau","Chain Devil","85","devilChain.jpg","Masmorra, Planos"],
  ["Diabo de Chifres","11","Grande","Corruptor","Diabos","Leal","Mau","Horned Devil","178","devilHorned.jpg","Masmorra, Planos"],
  ["Diabo do Gelo","14","Grande","Corruptor","Diabos","Leal","Mau","Ice Devil","180","devilIce.jpg","Masmorra, Planos"],
  ["Diabo dos Espinhos","2","Pequeno","Corruptor","Diabos","Leal","Mau","Spined Devil","22","none","Masmorra, Planos"],
  ["Diabo dos Ossos","9","Grande","Corruptor","Diabos","Leal","Mau","Bone Devil","142","devilBone.jpg","Masmorra, Planos"],
  ["Diabo Farpado","5","Médio","Corruptor","Diabos","Leal","Mau","Barbed Devil","110","devilBarbed.jpg","Masmorra, Planos"],
  ["Diabrete","1","Miúdo","Corruptor","Diabos","Leal","Mau","Imp","10","devilImp.jpg","Masmorra, Planos"],
  ["Djinni","11","Grande","Elemental","Gênios","Caótico","Bom","Djinni","161","djinni.jpg","Ártico, Costa, Masmorra, Planicies, Planos"],
  ["Doninha","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Weasel","1","none","Planicies"],
  ["Doninha Gigante","1/8","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Weasel","9","none","Floresta, Planicies"],
  ["Dracolich Azul Adulto","17","Enorme","Morto-vivo","Dracolich","Leal","Mau","Adult Blue Dracolich","225","none","Deserto, Masmorra"],
  ["Dragão Azul Adulto","16","Enorme","Dragão","Dragões","Leal","Mau","Adult Blue Dragon","225","dragonBlue.jpg","Deserto"],
  ["Dragão Azul Ancião","23","Imenso","Dragão","Dragões","Leal","Mau","Ancient Blue Dragon","481","dragonBlue.jpg","Deserto"],
  ["Dragão Azul Filhote","3","Médio","Dragão","Dragões","Leal","Mau","Blue Dragon Wyrmling","52","dragonBlue.jpg","Deserto"],
  ["Dragão Azul Jovem","9","Grande","Dragão","Dragões","Leal","Mau","Young Blue Dragon","152","dragonBlue.jpg","Deserto"],
  ["Dragão Branco Adulto","13","Enorme","Dragão","Dragões","Caótico","Mau","Adult White Dragon","200","dragonWhite.jpg","Ártico, Caverna, Subterrâneo"],
  ["Dragão Branco Ancião","20","Imenso","Dragão","Dragões","Caótico","Mau","Ancient White Dragon","333","dragonWhite.jpg","Ártico, Caverna, Subterrâneo"],
  ["Dragão Branco Filhote","2","Médio","Dragão","Dragões","Caótico","Mau","White Dragon Wyrmling","32","dragonWhite.jpg","Ártico, Caverna, Subterrâneo"],
  ["Dragão Branco Jovem","6","Grande","Dragão","Dragões","Caótico","Mau","Young White Dragon","133","dragonWhite.jpg","Ártico, Caverna, Subterrâneo"],
  ["Dragão de Bronze Adulto","15","Enorme","Dragão","Dragões","Leal","Bom","Adult Bronze Dragon","212","dragonBronze.jpg","Costa"],
  ["Dragão de Bronze Ancião","22","Imenso","Dragão","Dragões","Leal","Bom","Ancient Bronze Dragon","444","dragonBronze.jpg","Costa"],
  ["Dragão de Bronze Filhote","2","Médio","Dragão","Dragões","Leal","Bom","Bronze Dragon Wyrmling","32","dragonBronze.jpg","Costa"],
  ["Dragão de Bronze Jovem","8","Grande","Dragão","Dragões","Leal","Bom","Young Bronze Dragon","142","dragonBronze.jpg","Costa"],
  ["Dragão de cobre adulto","14","Enorme","Dragão","Dragões","Caótico","Bom","Adult Copper Dragon","184","dragonCopper.jpg","Caverna, Deserto, Planicies"],
  ["Dragão de cobre Ancião","21","Imenso","Dragão","Dragões","Caótico","Bom","Ancient Copper Dragon","350","dragonCopper.jpg","Caverna, Deserto, Planicies"],
  ["Dragão de cobre Filhote","1","Médio","Dragão","Dragões","Caótico","Bom","Copper Dragon Wyrmling","22","dragonCopper.jpg","Caverna, Deserto, Planicies"],
  ["Dragão de cobre Jovem","7","Grande","Dragão","Dragões","Caótico","Bom","Young Copper Dragon","119","dragonCopper.jpg","Caverna, Deserto, Planicies"],
  ["Dragão de latão adulto","13","Enorme","Dragão","Dragões","Caótico","Bom","Adult Brass Dragon","172","dragonBrass.jpg","Caverna, Subterrâneo"],
  ["Dragão de latão Ancião","20","Imenso","Dragão","Dragões","Caótico","Bom","Ancient Brass Dragon","297","dragonBrass.jpg","Caverna, Subterrâneo"],
  ["Dragão de latão Filhote","1","Médio","Dragão","Dragões","Caótico","Bom","Brass Dragon Wyrmling","16","dragonBrass.jpg","Caverna, Subterrâneo"],
  ["Dragão de latão Jovem","6","Grande","Dragão","Dragões","Caótico","Bom","Young Brass Dragon","110","dragonBrass.jpg","Caverna, Subterrâneo"],
  ["Dragão de ouro Adulto","17","Enorme","Dragão","Dragões","Leal","Bom","Adult Gold Dragon","256","dragonGold.jpg","Montanha, Ruínas"],
  ["Dragão de ouro Ancião","24","Imenso","Dragão","Dragões","Leal","Bom","Ancient Gold Dragon","546","dragonGold.jpg","Montanha, Ruínas"],
  ["Dragão de ouro Filhote","3","Médio","Dragão","Dragões","Leal","Bom","Gold Dragon Wyrmling","60","dragonGold.jpg","Montanha, Ruínas"],
  ["Dragão de ouro Jovem","10","Grande","Dragão","Dragões","Leal","Bom","Young Gold Dragon","178","dragonGold.jpg","Montanha, Ruínas"],
  ["Dragão de Prata Adulto","16","Enorme","Dragão","Dragões","Leal","Bom","Adult Silver Dragon","243","dragonSilver.jpg","Ártico, Montanha"],
  ["Dragão de Prata Ancião","23","Imenso","Dragão","Dragões","Leal","Bom","Ancient Silver Dragon","487","dragonSilver.jpg","Ártico, Montanha"],
  ["Dragão de Prata Filhote","2","Médio","Dragão","Dragões","Leal","Bom","Silver Dragon Wyrmling","45","dragonSilver.jpg","Ártico, Montanha"],
  ["Dragão de Prata Jovem","9","Grande","Dragão","Dragões","Leal","Bom","Young Silver Dragon","168","dragonSilver.jpg","Ártico, Montanha"],
  ["Dragão Negro Adulto","14","Enorme","Dragão","Dragões","Caótico","Mau","Adult Black Dragon","195","dragonBlack.jpg","Pântano"],
  ["Dragão Negro Ancião","21","Imenso","Dragão","Dragões","Caótico","Mau","Ancient Black Dragon","367","dragonBlack.jpg","Pântano"],
  ["Dragão Negro Filhote","2","Médio","Dragão","Dragões","Caótico","Mau","Black Dragon Wyrmling","33","dragonBlack.jpg","Pântano"],
  ["Dragão Negro Jovem","7","Grande","Dragão","Dragões","Caótico","Mau","Young Black Dragon","127","dragonBlack.jpg","Pântano"],
  ["Dragão Verde Adulto","15","Enorme","Dragão","Dragões","Leal","Mau","Adult Green Dragon","207","dragonGreen.jpg","Floresta"],
  ["Dragão Verde Ancião","22","Imenso","Dragão","Dragões","Leal","Mau","Ancient Green Dragon","385","dragonGreen.jpg","Floresta"],
  ["Dragão Verde Filhote","2","Médio","Dragão","Dragões","Leal","Mau","Green Dragon Wyrmling","38","dragonGreen.jpg","Floresta"],
  ["Dragão Verde Jovem","8","Grande","Dragão","Dragões","Leal","Mau","Young Green Dragon","136","dragonGreen.jpg","Floresta"],
  ["Dragão Vermelho Adulto","17","Enorme","Dragão","Dragões","Caótico","Mau","Adult Red Dragon","256","dragonRed.jpg","Montanha"],
  ["Dragão Vermelho Ancião","24","Imenso","Dragão","Dragões","Caótico","Mau","Ancient Red Dragon","546","dragonRed.jpg","Montanha"],
  ["Dragão Vermelho das Sombras Jovem","13","Grande","Dragão","Dragon, Shadow","Caótico","Mau","Young Red Shadow Dragon","178","dragonRed.jpg","Planos"],
  ["Dragão Vermelho Filhote","4","Médio","Dragão","Dragões","Caótico","Mau","Red Dragon Wyrmling","75","dragonRed.jpg","Montanha"],
  ["Dragão Vermelho Jovem","10","Grande","Dragão","Dragões","Caótico","Mau","Young Red Dragon","178","dragonRed.jpg","Montanha"],
  ["Dragão-fada (amarelo)","1","Miúdo","Dragão","Não-Definida","Caótico","Bom","Faerie Dragon (yellow)","14","none","Floresta, Planicies, Montanha, Ruínas, Pântano"],
  ["Dragão-fada (azul)","2","Miúdo","Dragão","Não-Definida","Caótico","Bom","Faerie Dragon (blue)","14","none","Floresta, Planicies, Montanha, Ruínas, Pântano"],
  ["Dragão-fada (índigo)","2","Miúdo","Dragão","Não-Definida","Caótico","Bom","Faerie Dragon (indigo)","14","none","Floresta, Planicies, Montanha, Ruínas, Pântano"],
  ["Dragão-fada (laranja)","1","Miúdo","Dragão","Não-Definida","Caótico","Bom","Faerie Dragon (orange)","14","none","Floresta, Planicies, Montanha, Ruínas, Pântano"],
  ["Dragão-fada (verde)","2","Miúdo","Dragão","Não-Definida","Caótico","Bom","Faerie Dragon (green)","14","none","Floresta, Planicies, Montanha, Ruínas, Pântano"],
  ["Dragão-fada (vermelho)","1","Miúdo","Dragão","Não-Definida","Caótico","Bom","Faerie Dragon (red)","14","none","Floresta, Planicies, Montanha, Ruínas, Pântano"],
  ["Dragão-fada (violeta)","2","Miúdo","Dragão","Não-Definida","Caótico","Bom","Faerie Dragon (violet)","14","none","Floresta, Planicies, Montanha, Ruínas, Pântano"],
  ["Dretch","1/4","Pequeno","Corruptor","Demônios","Caótico","Mau","Dretch","18","demonDretch.jpg","Masmorra, Planos"],
  ["Dríade","1","Médio","Fada","Não-Definida","Neutro","Neutro","Dryad","22","dryad.jpg","Floresta"],
  ["Drider","6","Grande","Monstruosidade","Não-Definida","Caótico","Mau","Drider","123","drider.jpg","Masmorra, Subterrâneo"],
  ["Drow","1/4","Médio","Humanoide","Elfos: Drow","Neutro","Mal","Drow","13","drow.jpg","Masmorra, Subterrâneo, Urbano"],
  ["Drow Arcano","7","Médio","Humanoide","Elfos: Drow","Neutro","Mal","Drow Mage","45","drowMage.jpg","Masmorra, Subterrâneo, Urbano"],
  ["Drow Guerreiro de Elite","5","Médio","Humanoide","Elfos: Drow","Neutro","Mal","Drow Elite Warrior","71","none","Masmorra, Subterrâneo, Urbano"],
  ["Drow Sacerdotiza de Lolth","8","Médio","Humanoide","Elfos: Drow","Neutro","Mal","Drow Priestess of Lolth","71","none","Masmorra, Subterrâneo, Urbano"],
  ["Druída","2","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Druid","27","druid.jpg","Ártico, Caverna, Costa, Deserto, Floresta, Planicies, Montanha, Pântano, Subterrâneo"],
  ["Duergar","1","Médio","Humanoide","Não-Definida","Leal","Mau","Duergar","26","duergar.jpg","Masmorra, Subterrâneo"],
  ["Duplo","3","Médio","Monstruosidade","Não-Definida","Neutro","Neutro","Doppelganger","52","doppelganger.jpg","Masmorra, Ruínas, Urbano"],
  ["Efreeti","11","Grande","Elemental","Gênios","Leal","Mau","Efreeti","200","efreeti.jpg","Deserto, Masmorra, Montanha, Planos"],
  ["Elefante","4","Enorme","Besta","Criaturas Diversas","Nenhum","Nenhum","Elephant","76","none","Planicies"],
  ["Elemental da Água","5","Grande","Elemental","Elementais","Neutro","Neutro","Water Elemental","114","water-elemental.jpg","Aquático, Ártico, Caverna, Costa, Masmorra, Floresta, Planicies, Montanha, Planos, Ruínas, Pântano, Subterrâneo"],
  ["Elemental da Terra","5","Grande","Elemental","Elementais","Neutro","Neutro","Earth Elemental","126","earth-elemental.jpg","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Planos, Ruínas, Pântano, Subterrâneo"],
  ["Elemental do Ar","5","Grande","Elemental","Elementais","Neutro","Neutro","Air Elemental","90","air-elemental.jpg","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Planos, Ruínas, Pântano, Subterrâneo"],
  ["Elemental do Fogo","5","Grande","Elemental","Elementais","Neutro","Neutro","Fire Elemental","102","fire-elemental.jpg","Caverna, Costa, Deserto, Masmorra, Planicies, Montanha, Planos, Ruínas, Subterrâneo"],
  ["Empírico","23","Enorme","Celestial","Não-Definida","Não-Leal","Não-Neutro","Empyrean","313","empyrean.jpg","Planos"],
  ["Ente","9","Enorme","Planta","Não-Definida","Caótico","Bom","Treant","138","treant.jpg","Floresta, Pântano"],
  ["Enxame de Corvos","1/4","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Swarm of Ravens","24","none","Floresta, Planicies, Montanha, Ruínas, Urbano"],
  ["Enxame de Insetos","1/2","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Swarm of Insects","22","none","Caverna, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Enxame de Morcegos","1/4","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Swarm of Bats","22","swarmBat.jpg","Caverna, Masmorra, Floresta, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Enxame de Piranhas","1","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Swarm of Quippers","28","none","Aquático"],
  ["Enxame de Ratos","1/4","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Swarm of Rats","24","none","Caverna, Masmorra, Floresta, Planicies, Ruínas, Pântano, Urbano"],
  ["Enxame de Serpentes Venenosas","2","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Swarm of Poisonous Snakes","36","none","Deserto, Masmorra, Floresta, Planicies, Pântano"],
  ["Erínia","12","Médio","Corruptor","Diabos","Leal","Mau","Erinyes","153","devilErinyes.jpg","Masmorra, Planos"],
  ["Escorpião","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Scorpion","1","none","Caverna, Deserto, Planicies, Montanha, Pântano"],
  ["Escorpião Gigante","3","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Scorpion","52","none","Caverna, Costa, Deserto, Masmorra, Planicies, Ruínas, Pântano, Subterrâneo"],
  ["Espada Voadora","1/4","Pequeno","Constructo","Objetos Animados","Nenhum","Nenhum","Flying Sword","17","flyingSword.jpg","Masmorra, Ruínas, Urbano"],
  ["Espantalho","1","Médio","Constructo","Não-Definida","Caótico","Mau","Scarecrow","36","scarecrow.jpg","Planicies, Urbano"],
  ["Espectador","3","Médio","Aberração","Observadores","Leal","Neutro","Spectator","39","spectator.jpg","Caverna, Masmorra, Ruínas, Subterrâneo, Urbano"],
  ["Espectro","1","Médio","Morto-vivo","Espectro","Caótico","Mau","Specter","22","spectre.jpg","Masmorra, Ruínas, Urbano"],
  ["Espeto Infectado","1/4","Médio","Planta","Blights","Neutro","Mal","Needle Blight","11","none","Floresta, Planicies, Pântano"],
  ["Espião","1","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Spy","27","none","Ártico, Caverna, Costa, Deserto, Floresta, Planicies, Montanha, Ruínas, Pântano, Urbano"],
  ["Esporo de Gás","1/2","Grande","Planta","Fungos","Nenhum","Nenhum","Gas Spore","1","none","Caverna, Masmorra, Subterrâneo"],
  ["Esqueleto","1/4","Médio","Morto-vivo","Esqueletos","Leal","Mau","Skeleton","13","skeleton.jpg","Masmorra, Ruínas, Urbano"],
  ["Esqueleto de Cavalo de Guerra","1/2","Grande","Morto-vivo","Esqueletos","Leal","Mau","Warhorse Skeleton","22","none","Planicies, Ruínas"],
  ["Esqueleto de Minotauro","2","Grande","Morto-vivo","Esqueletos","Leal","Mau","Minotaur Skeleton","67","minotaurSkeleton.jpg","Masmorra, Subterrâneo, Urbano"],
  ["Estrangulador","5","Grande","Monstruosidade","Não-Definida","Neutro","Mal","Roper","93","roper.jpg","Caverna, Subterrâneo"],
  ["Ettercap","2","Médio","Monstruosidade","Não-Definida","Neutro","Mal","Ettercap","44","ettercap.jpg","Caverna, Masmorra, Floresta, Ruínas, Pântano, Subterrâneo"],
  ["Ettin","4","Grande","Gigante","Não-Definida","Caótico","Mau","Ettin","85","ettin.jpg","Caverna, Planicies, Montanha, Pântano"],
  ["Falcão","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Hawk","1","hawk.jpg","Planicies, Montanha"],
  ["Falcão de Sangue","1/8","Pequeno","Besta","Criaturas Diversas","Nenhum","Nenhum","Blood Hawk","7","none","Costa, Planicies, Montanha"],
  ["Fanático do Culto","2","Médio","Humanoide","Personagens do Mestre","Qualquer","Não-Bom","Cult Fanatic","33","cultFanatic.jpg","Masmorra, Urbano"],
  ["Fantasma","4","Médio","Morto-vivo","Não-Definida","Qualquer","Qualquer","Ghost","45","ghost.jpg","Caverna, Masmorra, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Flumph","1/8","Pequeno","Aberração","Não-Definida","Leal","Bom","Flumph","7","flumph.jpg","Masmorra, Subterrâneo"],
  ["Fogo-Fátuo","2","Miúdo","Morto-vivo","Não-Definida","Caótico","Mau","Will-o'-Wisp","22","willOWisp.jpg","Pântano"],
  ["Fomori","8","Enorme","Gigante","Não-Definida","Caótico","Mau","Fomorian","149","fomorian.jpg","Caverna, Subterrâneo"],
  ["Fungo Violeta","1/4","Médio","Planta","Fungos","Nenhum","Nenhum","Violet Fungus","18","violetFungus.jpg","Caverna, Masmorra, Subterrâneo"],
  ["Furioso","2","Médio","Humanoide","Personagens do Mestre","Caótico","Qualquer","Berserker","67","none","Ártico, Caverna, Deserto, Floresta, Planicies, Montanha, Pântano, Urbano"],
  ["Galeb Duhr","6","Médio","Elemental","Não-Definida","Neutro","Neutro","Galeb Duhr","85","galebDuhr.jpg","Caverna, Masmorra, Montanha, Planos, Subterrâneo"],
  ["Galho Infectado","1/8","Pequeno","Planta","Blights","Neutro","Mal","Twig Blight","4","twigBlight.jpg","Floresta, Planicies, Pântano"],
  ["Gárgula","2","Médio","Elemental","Não-Definida","Caótico","Mau","Gargoyle","52","gargoyle.jpg","Masmorra, Urbano"],
  ["Garra Rastejante","0","Miúdo","Morto-vivo","Não-Definida","Neutro","Mal","Crawling Claw","2","crawlingClaw.jpg","Masmorra, Ruínas, Pântano"],
  ["Gato","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Cat","2","none","Urbano"],
  ["Gigante da Colina","5","Enorme","Gigante","Gigantes","Caótico","Mau","Hill Giant","105","giantHill.jpg","Ártico, Costa, Planicies"],
  ["Gigante da Tempestade","13","Enorme","Gigante","Gigantes","Caótico","Bom","Storm Giant","230","giantStorm.jpg","Ártico, Costa, Deserto, Montanha, Planos"],
  ["Gigante das Nuvens","9","Enorme","Gigante","Gigantes","Neutro","Não-Neutro","Cloud Giant","200","giantCloud.jpg","Montanha, Planos"],
  ["Gigante de Ferro","16","Grande","Constructo","Golens","Nenhum","Nenhum","Iron Golem","210","ironGolem.jpg","Masmorra, Ruínas, Urbano"],
  ["Gigante de Pedra","7","Enorme","Gigante","Gigantes","Neutro","Neutro","Stone Giant","126","giantStone.jpg","Caverna, Montanha, Subterrâneo"],
  ["Gigante do Fogo","9","Enorme","Gigante","Gigantes","Leal","Mau","Fire Giant","162","giantFire.jpg","Montanha, Planos"],
  ["Gigante do Gelo","8","Enorme","Gigante","Gigantes","Neutro","Mal","Frost Giant","138","giantFrost.jpg","Ártico, Montanha, Planos"],
  ["Ginoesfinge","11","Grande","Monstruosidade","Esfinges","Leal","Neutro","Gynosphinx","136","gynosphinx.jpg","Masmorra, Ruínas"],
  ["Glabrezu","9","Grande","Corruptor","Demônios","Caótico","Mau","Glabrezu","157","demonGlabrezu.jpg","Masmorra, Planos"],
  ["Gladiador","5","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Gladiator","112","none","Urbano"],
  ["Gnoll","1/2","Médio","Humanoide","Gnolls","Caótico","Mau","Gnoll","22","gnoll.jpg","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Urbano"],
  ["Gnoll Lider de Matilha","2","Médio","Humanoide","Gnolls","Caótico","Mau","Gnoll Pack Lord","49","none","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Urbano"],
  ["Gnoll Presa de Yeenoghu","4","Médio","Corruptor","Gnolls","Caótico","Mau","Gnoll Fang of Yeenoghu","65","none","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Urbano"],
  ["Gnomo das Profundezas (Svirfneblin)","1/2","Pequeno","Humanoide","Gnomos, Profundezas (Svirfneblin)","Neutro","Bom","Deep Gnome (Svirfneblin)","16","deepGnome.jpg","Caverna, Masmorra, Planos, Subterrâneo"],
  ["Goblin","1/4","Pequeno","Humanoide","Goblins","Neutro","Mal","Goblin","7","goblin.jpg","Caverna, Masmorra, Floresta, Planicies, Montanha, Ruínas, Urbano"],
  ["Golem de Barro","9","Grande","Constructo","Golens","Nenhum","Nenhum","Clay Golem","133","golemClay.jpg","Masmorra, Ruínas, Urbano"],
  ["Golem de Carne","5","Médio","Constructo","Golens","Nenhum","Nenhum","Flesh Golem","93","golemFlesh.jpg","Masmorra, Ruínas"],
  ["Golem de pedra","10","Grande","Constructo","Golens","Nenhum","Nenhum","Stone Golem","178","golemStone.jpg","Masmorra, Ruínas, Urbano"],
  ["Gorgon","5","Grande","Monstruosidade","Não-Definida","Nenhum","Nenhum","Gorgon","114","gorgon.jpg","Montanha, Ruínas"],
  ["Gorila","1/2","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Ape","19","none","Floresta"],
  ["Gorila gigante","7","Enorme","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Ape","157","none","Floresta"],
  ["Goristro","17","Enorme","Corruptor","Demônios","Caótico","Mau","Goristro","310","none","Masmorra, Planos"],
  ["Gosma Ocre","2","Grande","Limo","Limos","Nenhum","Nenhum","Ochre Jelly","45","ochreJelly.jpg","Masmorra"],
  ["Grell","3","Médio","Aberração","Não-Definida","Neutro","Mal","Grell","55","grell.jpg","Masmorra, Subterrâneo"],
  ["Grick","2","Médio","Monstruosidade","Grick","Neutro","Neutro","Grick","27","grick.jpg","Caverna, Masmorra, Subterrâneo"],
  ["Grick Alpha","7","Grande","Monstruosidade","Grick","Neutro","Neutro","Grick Alpha","75","none","Caverna, Masmorra, Subterrâneo"],
  ["Grifo","2","Grande","Monstruosidade","Não-Definida","Nenhum","Nenhum","Griffon","59","griffon.jpg","Ártico, Costa, Planicies, Montanha"],
  ["Grimlock","1/4","Médio","Humanoide","Não-Definida","Neutro","Mal","Grimlock","11","grimlock.jpg","Caverna, Masmorra, Subterrâneo"],
  ["Guarda","1/8","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Guard","11","none","Urbano"],
  ["Guardião do Escudo","7","Grande","Constructo","Não-Definida","Nenhum","Nenhum","Shield Guardian","142","shieldGuardian.jpg","Masmorra, Ruínas, Urbano"],
  ["Guerreiro Githyanki","3","Médio","Humanoide","Gith","Leal","Mau","Githyanki Warrior","49","none","Planos"],
  ["Guerreiro Tribal","1/8","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Tribal Warrior","11","none","Ártico, Caverna, Deserto, Floresta, Planicies, Montanha, Pântano"],
  ["Guinchador","0","Médio","Planta","Fungos","Nenhum","Nenhum","Shrieker","13","shrieker.jpg","Caverna, Masmorra, Pântano"],
  ["Harpia","1","Médio","Monstruosidade","Não-Definida","Caótico","Mau","Harpy","38","harpy.jpg","Costa, Floresta, Montanha"],
  ["Hezrou","8","Grande","Corruptor","Demônios","Caótico","Mau","Hezrou","136","demonHezrou.jpg","Masmorra, Planos"],
  ["Hidra","8","Enorme","Monstruosidade","Não-Definida","Nenhum","Nenhum","Hydra","172","hydra.jpg","Aquático, Caverna, Costa, Masmorra, Floresta, Montanha, Ruínas, Pântano, Subterrâneo"],
  ["Hiena","0","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Hyena","5","hyena.jpg","Floresta, Planicies"],
  ["Hiena Gigante","1","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Hyena","45","none","Costa, Deserto, Floresta, Planicies"],
  ["Hipogrifo","1","Grande","Monstruosidade","Não-Definida","Nenhum","Nenhum","Hippogriff","19","hippogriff.jpg","Montanha"],
  ["Hobgoblin","1/2","Médio","Humanoide","Hobgoblins","Leal","Mau","Hobgoblin","11","hobgoblin.jpg","Ártico, Costa, Planicies, Montanha, Urbano"],
  ["Hobgoblin Senhor da Guerra","6","Médio","Humanoide","Hobgoblins","Leal","Mau","Hobgoblin Warlord","97","none","Ártico, Costa, Planicies, Montanha, Urbano"],
  ["Homem-Chacal","1/2","Médio","Humanoide","Não-Definida","Caótico","Mau","Jackalwere","18","jackalwere.jpg","Deserto, Planicies, Urbano"],
  ["Homem-Javali","4","Médio","Humanoide","Licantropos","Neutro","Mal","Wereboar","78","wereBoar.jpg","Floresta, Planicies, Pântano, Urbano"],
  ["Homem-Rato","2","Médio","Humanoide","Licantropos","Leal","Mau","Wererat","33","wereRat.jpg","Caverna, Masmorra, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Homem-Tigre","4","Médio","Humanoide","Licantropos","Neutro","Neutro","Weretiger","120","wereTiger.jpg","Floresta, Urbano"],
  ["Homem-Urso","5","Médio","Humanoide","Licantropos","Neutro","Bom","Werebear","135","wereBear.jpg","Caverna, Floresta, Montanha, Urbano"],
  ["Homúnculo","0","Miúdo","Constructo","Não-Definida","Neutro","Neutro","Homunculus","5","homunculus.jpg","Masmorra, Urbano"],
  ["Horror de Elmo","4","Médio","Constructo","Não-Definida","Neutro","Neutro","Helmed Horror","60","helmedHorror.jpg","Masmorra, Ruínas, Urbano"],
  ["Horror de Gancho","3","Grande","Monstruosidade","Não-Definida","Neutro","Neutro","Hook Horror","75","hookHorror.jpg","Masmorra, Subterrâneo"],
  ["Inumano","3","Médio","Morto-vivo","Não-Definida","Neutro","Mal","Wight","45","wight.jpg","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Javali","1/4","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Boar","11","none","Floresta, Planicies"],
  ["Javali Gigante","2","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Boar","42","none","Floresta, Planicies"],
  ["Kenku","1/4","Médio","Humanoide","Não-Definida","Caótico","Neutro","Kenku","13","kenku.jpg","Ártico, Costa, Deserto, Floresta, Planicies, Montanha, Ruínas, Urbano"],
  ["Kobold","1/8","Pequeno","Humanoide","Kobolds","Leal","Mau","Kobold","5","kobold.jpg","Caverna, Masmorra, Montanha, Subterrâneo"],
  ["Kobold Alado","1/4","Pequeno","Humanoide","Kobolds","Leal","Mau","Winged Kobold","7","wingedKobold.jpg","Montanha, Subterrâneo"],
  ["Kraken","23","Imenso","Monstruosidade","Não-Definida","Caótico","Mau","Kraken","472","kraken.jpg","Aquático, Costa"],
  ["Kuo-toa","1/4","Médio","Humanoide","Kuo-toa","Neutro","Mal","Kuo-toa","18","kuotoa.jpg","Aquático, Costa"],
  ["Kuo-toa Açoitador","1","Médio","Humanoide","Kuo-toa","Neutro","Mal","Kuo-toa Whip","65","kuotoaWhip.jpg","Aquático, Costa"],
  ["Kuo-toa Arcebispo","6","Médio","Humanoide","Kuo-toa","Neutro","Mal","Kuo-toa Archpriest","97","kuotoaArchpriest.jpg","Aquático, Costa"],
  ["Kuo-toa Monitor","3","Médio","Humanoide","Kuo-toa","Neutro","Mal","Kuo-toa Monitor","65","none","Aquático, Costa"],
  ["Lagarto","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Lizard","2","none","Caverna, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo"],
  ["Lagarto gigante","1/4","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Lizard","19","none","Caverna, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo"],
  ["Lâmia","4","Grande","Monstruosidade","Não-Definida","Caótico","Mau","Lamia","97","lamia.jpg","Deserto, Ruínas"],
  ["Larva Slaad","1/8","Miúdo","Aberração","Slaadi","Caótico","Neutro","Slaad Tadpole","10","none","Planos"],
  ["Leão","1","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Lion","26","none","Planicies"],
  ["Lêmure","0","Médio","Corruptor","Diabos","Leal","Mau","Lemure","13","devilLemure.jpg","Masmorra, Planos"],
  ["Lich","21","Médio","Morto-vivo","Não-Definida","Qualquer","Mau","Lich","135","lich.jpg","Masmorra, Ruínas, Urbano"],
  ["Lich (covil)","22","Médio","Morto-vivo","Não-Definida","Qualquer","Mau","Lich (in lair)","135","lich.jpg","Masmorra, Ruínas, Urbano"],
  ["Limo Cinzento","1/2","Médio","Limo","Limos","Nenhum","Nenhum","Gray Ooze","22","grayOoze.jpg","Masmorra"],
  ["Lívido","2","Médio","Morto-vivo","Carniçais","Caótico","Mau","Ghast","36","ghast.jpg","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Lobisomem","3","Médio","Humanoide","Licantropos","Caótico","Mau","Werewolf","58","werewolf.jpg","Masmorra, Floresta, Planicies, Urbano"],
  ["Lobo","1/4","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Wolf","11","giantWolf.jpg","Ártico, Caverna, Floresta, Planicies"],
  ["Lobo Atroz","1","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Dire Wolf","37","direWolf.jpg","Ártico, Caverna, Floresta, Planicies"],
  ["Lobo Invernal","3","Grande","Monstruosidade","Criaturas Diversas","Neutro","Mal","Winter Wolf","75","winterWolf.jpg","Ártico, Caverna, Floresta, Planicies"],
  ["Magmin","1/2","Pequeno","Elemental","Não-Definida","Caótico","Neutro","Magmin","9","magmin.jpg","Masmorra, Planos, Ruínas, Urbano"],
  ["Mamute","6","Enorme","Besta","Criaturas Diversas","Nenhum","Nenhum","Mammoth","126","none","Ártico"],
  ["Manes","1/8","Pequeno","Corruptor","Demônios","Caótico","Mau","Manes","9","none","Masmorra, Planos"],
  ["Manticora","3","Grande","Monstruosidade","Não-Definida","Leal","Mau","Manticore","68","manticore.jpg","Ártico, Caverna, Costa, Planicies, Montanha, Ruínas"],
  ["Manto Negro","1/2","Pequeno","Monstruosidade","Não-Definida","Nenhum","Nenhum","Darkmantle","22","darkmantle.jpg","Caverna, Subterrâneo"],
  ["Mantor","8","Grande","Aberração","Não-Definida","Caótico","Neutro","Cloaker","78","cloaker.jpg","Caverna, Masmorra, Subterrâneo"],
  ["Marid","11","Grande","Elemental","Gênios","Caótico","Neutro","Marid","229","marid.jpg","Aquático, Costa, Masmorra, Planos, Pântano"],
  ["Marilith","16","Grande","Corruptor","Demônios","Caótico","Mau","Marilith","189","demonMarilith.jpg","Masmorra, Planos"],
  ["Mastim","1/8","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Mastiff","5","mastiff.jpg","Urbano"],
  ["Medusa","6","Médio","Monstruosidade","Não-Definida","Leal","Mau","Medusa","127","medusa.jpg","Caverna, Masmorra, Montanha, Ruínas, Urbano"],
  ["Meio-Dragão Vermelho Veterano","5","Médio","Humanoide","Meio-Dragão","Qualquer","Qualquer","Half-Red Dragon Veteran","65","half-redDragon.jpg","Ártico, Costa, Deserto, Planicies, Montanha, Urbano"],
  ["Meio-Ogro","1","Grande","Gigante","Ogros","Caótico","Mau","Half-Ogre","30","halfOgre.jpg","Ártico, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Urbano"],
  ["Mephit da Fumaça","1/4","Pequeno","Elemental","Mephits","Neutro","Mal","Smoke Mephit","2","mephitSmoke.jpg","Masmorra, Planos, Urbano"],
  ["Mephit da Lama","1/4","Pequeno","Elemental","Mephits","Neutro","Mal","Mud Mephit","27","mephitMud.jpg","Costa, Masmorra, Floresta, Planos, Pântano, Urbano"],
  ["Mephit da Poeira","1/2","Pequeno","Elemental","Mephits","Neutro","Mal","Dust Mephit","17","mephitDust.jpg","Masmorra, Planos, Ruínas, Urbano"],
  ["Mephit do Gelo","1/2","Pequeno","Elemental","Mephits","Neutro","Mal","Ice Mephit","21","mephitIce.jpg","Ártico, Masmorra, Planos, Urbano"],
  ["Mephit do Magma","1/2","Pequeno","Elemental","Mephits","Neutro","Mal","Magma Mephit","22","mephitMagma.jpg","Caverna, Masmorra, Montanha, Planos, Urbano"],
  ["Mephit do Vapor","1/4","Pequeno","Elemental","Mephits","Neutro","Mal","Steam Mephit","21","mephitSteam.jpg","Masmorra, Planos, Urbano"],
  ["Mezzoloth","5","Médio","Corruptor","Yugoloths","Neutro","Mal","Mezzoloth","75","mezzoloth.jpg","Masmorra, Planos"],
  ["Miconide Adulto","1/2","Médio","Planta","Miconides","Leal","Neutro","Myconid Adult","22","none","Subterrâneo"],
  ["Miconide Broto","0","Pequeno","Planta","Miconides","Leal","Neutro","Myconid Sprout","7","none","Subterrâneo"],
  ["Miconide Soberano","2","Grande","Planta","Miconides","Leal","Neutro","Myconid Sovereign","60","none","Subterrâneo"],
  ["Mímico","2","Médio","Monstruosidade","Não-Definida","Neutro","Neutro","Mimic","58","mimic.jpg","Masmorra"],
  ["Minotauro","3","Grande","Monstruosidade","Não-Definida","Caótico","Mau","Minotaur","76","minotaur.jpg","Caverna, Masmorra, Ruínas, Subterrâneo"],
  ["Monge Githzerai","2","Médio","Humanoide","Gith","Leal","Neutro","Githzerai Monk","38","none","Planos"],
  ["Monodrone","1/8","Médio","Constructo","Modrons","Leal","Neutro","Monodrone","5","monodrone.jpg","Planos"],
  ["Monstro da Ferrugem","1/2","Médio","Monstruosidade","Não-Definida","Nenhum","Nenhum","Rust Monster","27","rustMonster.jpg","Masmorra, Subterrâneo"],
  ["Morcego","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Bat","1","none","Caverna, Floresta, Montanha, Subterrâneo, Urbano"],
  ["Morcego gigante","1/4","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Bat","22","none","Caverna, Masmorra, Floresta, Ruínas, Pântano, Subterrâneo"],
  ["Mula","1/8","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Mule","11","none","Urbano"],
  ["Múmia","3","Médio","Morto-vivo","Múmias","Leal","Mau","Mummy","58","mummy.jpg","Deserto, Masmorra"],
  ["Naga dos Ossos","4","Grande","Morto-vivo","Nagas","Leal","Mau","Bone Naga","58","none","Masmorra, Ruínas"],
  ["Naga Espiritual","8","Grande","Monstruosidade","Nagas","Caótico","Mau","Spirit Naga","127","spiritNaga.jpg","Caverna, Masmorra, Ruínas, Subterrâneo"],
  ["Naga Guardiã","10","Grande","Monstruosidade","Nagas","Leal","Bom","Guardian Naga","75","guardianNaga.jpg","Caverna, Costa, Floresta, Ruínas"],
  ["Nalfeshnee","13","Grande","Corruptor","Demônios","Caótico","Mau","Nalfeshnee","184","demonNalfeshnee.jpg","Masmorra, Planos"],
  ["Nobre","1/8","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Noble","9","noble.jpg","Urbano"],
  ["Nótico","2","Médio","Aberração","Não-Definida","Neutro","Mal","Nothic","45","nothic.jpg","Masmorra, Ruínas, Urbano"],
  ["Nycaloth","9","Grande","Corruptor","Yugoloths","Neutro","Mal","Nycaloth","123","nycaloth.jpg","Masmorra, Planos"],
  ["Observador","13","Grande","Aberração","Observadores","Leal","Mau","Beholder","180","beholder.jpg","Caverna, Masmorra, Subterrâneo"],
  ["Observador (covil)","14","Grande","Aberração","Observadores","Leal","Mau","Beholder (in lair)","180","beholder.jpg","Caverna, Masmorra, Subterrâneo"],
  ["Observador Zumbi","5","Grande","Morto-vivo","Zumbis","Neutro","Mal","Beholder Zombie","93","beholderZombie.jpg","Caverna, Masmorra, Subterrâneo"],
  ["Ogro","2","Grande","Gigante","Ogros","Caótico","Mau","Ogre","59","ogre.jpg","Masmorra, Floresta, Montanha, Pântano"],
  ["Ogro Zumbi","2","Grande","Morto-vivo","Zumbis","Neutro","Mal","Ogre Zombie","85","ogreZombie.jpg","Masmorra, Floresta, Montanha, Pântano"],
  ["Oni","7","Grande","Gigante","Não-Definida","Leal","Mau","Oni","110","oni.jpg","Masmorra, Planicies, Ruínas, Urbano"],
  ["Orc","1/2","Médio","Humanoide","Orcs","Caótico","Mau","Orc","15","orc.jpg","Ártico, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Urbano"],
  ["Orc Olho de Gruumsh","2","Médio","Humanoide","Orcs","Caótico","Mau","Orc Eye of Gruumsh","45","none","Ártico, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Urbano"],
  ["Orog","2","Médio","Humanoide","Orcs","Caótico","Mau","Orog","42","orog.jpg","Ártico, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Urbano"],
  ["Otyugh","5","Grande","Aberração","Não-Definida","Neutro","Neutro","Otyugh","114","otyugh.jpg","Caverna, Masmorra, Ruínas, Pântano, Subterrâneo"],
  ["Pantera","1/4","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Panther","13","none","Floresta"],
  ["Pantera Deslocadora","3","Grande","Monstruosidade","Não-Definida","Leal","Mau","Displacer Beast","85","displacerBeast.jpg","Floresta, Planicies"],
  ["Pégaso","2","Grande","Celestial","Não-Definida","Caótico","Bom","Pegasus","59","pegasus.jpg","Montanha"],
  ["Pentadrone","2","Grande","Constructo","Modrons","Leal","Neutro","Pentadrone","32","pentadrone.jpg","Planos"],
  ["Perfurador","1/2","Médio","Monstruosidade","Não-Definida","Nenhum","Nenhum","Piercer","22","piercer.jpg","Caverna, Subterrâneo"],
  ["Peryton","2","Grande","Monstruosidade","Não-Definida","Caótico","Mau","Peryton","33","peryton.jpg","Montanha"],
  ["Pesadelo","3","Grande","Corruptor","Não-Definida","Neutro","Mal","Nightmare","68","nightmare.jpg","Planos, Pântano"],
  ["Piranha","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Quipper","1","quipper.jpg","Aquático"],
  ["Pixie","1/4","Miúdo","Fada","Não-Definida","Neutro","Bom","Pixie","1","pixie.jpg","Costa, Floresta, Planicies, Pântano"],
  ["Planetário","16","Grande","Celestial","Anjos","Leal","Bom","Planetar","200","planetar.jpg","Planos"],
  ["Plebeu","0","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Commoner","4","none","Urbano"],
  ["Plesiossauro","2","Grande","Besta","Dinossauros","Nenhum","Nenhum","Plesiosaurus","68","plesiosaurus.jpg","Aquático"],
  ["Poltergeist","2","Médio","Morto-vivo","Espectro","Caótico","Mau","Poltergeist","22","none","Masmorra, Ruínas, Urbano"],
  ["Polvo","0","Pequeno","Besta","Criaturas Diversas","Nenhum","Nenhum","Octopus","3","octopus.jpg","Aquático"],
  ["Polvo Gigante","1","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Octopus","52","octopus.jpg","Aquático"],
  ["Ponei","1/8","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Pony","11","none","Planicies"],
  ["Povo do Mar","1/8","Médio","Humanoide","Não-Definida","Neutro","Neutro","Merfolk","11","merfolk.jpg","Aquático"],
  ["Povo Lagarto","1/2","Médio","Humanoide","Povo Lagarto","Neutro","Neutro","Lizardfolk","22","lizardfolk.jpg","Costa, Masmorra, Floresta, Planicies, Pântano"],
  ["Pseudodragão","1/4","Miúdo","Dragão","Não-Definida","Neutro","Bom","Pseudodragon","7","pseudodragon.jpg","Urbano"],
  ["Pteranodonte","1/4","Médio","Besta","Dinossauros","Nenhum","Nenhum","Pteranodon","13","none","Montanha"],
  ["Pudim Negro","4","Grande","Limo","Limos","Nenhum","Nenhum","Black Pudding","85","blackPudding.jpg","Masmorra"],
  ["Quadrone","1","Médio","Constructo","Modrons","Leal","Neutro","Quadrone","22","quadrone.jpg","Planos"],
  ["Quaggoth","2","Médio","Humanoide","Quaggoth","Caótico","Neutro","Quaggoth","45","quaggoth.jpg","Masmorra, Urbano"],
  ["Quaggoth Thonot","3","Médio","Humanoide","Quaggoth","Caótico","Neutro","Quaggoth Thonot","45","none","Masmorra, Urbano"],
  ["Quasit","1","Miúdo","Corruptor","Demônios","Caótico","Mau","Quasit","7","quasit.jpg","Masmorra, Planos"],
  ["Quimera","6","Grande","Monstruosidade","Não-Definida","Caótico","Mau","Chimera","114","chimera.jpg","Montanha"],
  ["Rã gigante","1/4","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Frog","18","none","Aquático, Costa, Floresta, Pântano"],
  ["Rakshasa","13","Médio","Corruptor","Não-Definida","Leal","Mau","Rakshasa","110","rakshasa.jpg","Planos, Urbano"],
  ["Rato","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Rat","1","rat.jpg","Ártico, Caverna, Costa, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Rato Gigante","1/8","Pequeno","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Rat","7","none","Caverna, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Rei/Rainha do Povo Lagarto","4","Médio","Humanoide","Povo Lagarto","Caótico","Mau","Lizard King/Queen","75","none","Costa, Masmorra, Floresta, Planicies, Pântano"],
  ["Remorhaz","11","Enorme","Monstruosidade","Remorhazes","Nenhum","Nenhum","Remorhaz","195","remorhaz.jpg","Ártico"],
  ["Remorhaz Jovem","5","Grande","Monstruosidade","Remorhazes","Nenhum","Nenhum","Young Remorhaz","93","none","Ártico, Caverna"],
  ["Ressurgido","6","Médio","Morto-vivo","Não-Definida","Neutro","Neutro","Revenant","136","none","Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Rinoceronte","2","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Rhinoceros","45","none","Planicies"],
  ["Roca","11","Imenso","Monstruosidade","Não-Definida","Nenhum","Nenhum","Roc","248","roc.jpg","Costa, Deserto, Montanha"],
  ["Rufião","1/2","Médio","Humanoide","Personagens do Mestre","Qualquer","Não-Bom","Thug","32","thug.jpg","Ártico, Caverna, Costa, Floresta, Planicies, Urbano"],
  ["Sacerdote","2","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Priest","27","none","Urbano"],
  ["Sacerdotisa Sahuagin","2","Médio","Humanoide","Sahuagin","Leal","Mau","Sahuagin Priestess","33","none","Aquático, Costa"],
  ["Sahuagin","1/2","Médio","Humanoide","Sahuagin","Leal","Mau","Sahuagin","22","sahuagin.jpg","Aquático, Costa"],
  ["Salamandra","5","Grande","Elemental","Salamandras","Neutro","Mal","Salamander","90","salamander.jpg","Floresta, Planos"],
  ["Sapo","0","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Frog","1","frog.jpg","Aquático, Costa, Floresta, Pântano"],
  ["Sapo gigante","1","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Toad","39","none","Aquático, Costa, Floresta, Pântano"],
  ["Sátiro","1/2","Médio","Fada","Não-Definida","Caótico","Neutro","Satyr","31","satyr.jpg","Floresta, Planicies, Urbano"],
  ["Senhor das Múmias","15","Médio","Morto-vivo","Múmias","Leal","Mau","Mummy Lord","97","mummyLord.jpg","Deserto, Masmorra"],
  ["Senhor das Profundezas","20","Grande","Corruptor","Diabos","Leal","Mau","Pit Fiend","300","devilPitfiend.jpg","Masmorra, Planos"],
  ["Serpente de Fogo","1","Médio","Elemental","Salamandras","Neutro","Mal","Fire Snake","22","fireSnake.jpg","Floresta, Planos"],
  ["Serpente venenosa","1/8","Miúdo","Besta","Criaturas Diversas","Nenhum","Nenhum","Poisonous Snake","2","none","Deserto, Floresta, Planicies, Pântano"],
  ["Serpente venenosa gigante","1/4","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Poisonous Snake","11","none","Floresta, Planicies, Pântano"],
  ["Servo Esporo Quaggoth","1","Médio","Planta","Miconides","Nenhum","Nenhum","Quaggoth Spore Servant","45","none","Subterrâneo"],
  ["Sirenídeo","2","Grande","Monstruosidade","Não-Definida","Caótico","Mau","Merrow","45","merrow.jpg","Aquático"],
  ["Slaad Azul","7","Grande","Aberração","Slaadi","Caótico","Neutro","Blue Slaad","123","none","Planos"],
  ["Slaad Cinza","9","Médio","Aberração","Slaadi","Caótico","Neutro","Gray Slaad","127","none","Planos"],
  ["Slaad da Morte","10","Médio","Aberração","Slaadi","Caótico","Mau","Death Slaad","170","none","Planos"],
  ["Slaad Verde","8","Grande","Aberração","Slaadi","Caótico","Neutro","Green Slaad","127","none","Planos"],
  ["Slaad Vermelho","5","Grande","Aberração","Slaadi","Caótico","Neutro","Red Slaad","93","none","Planos"],
  ["Solar","21","Grande","Celestial","Anjos","Leal","Bom","Solar","241","solar.jpg","Planos"],
  ["Sombra","1/2","Médio","Morto-vivo","Não-Definida","Caótico","Mau","Shadow","16","shadow.jpg","Masmorra, Ruínas, Pântano, Urbano"],
  ["Sprite","1/4","Miúdo","Fada","Não-Definida","Neutro","Bom","Sprite","2","sprite.jpg","Floresta, Planicies, Pântano"],
  ["Stirge","1/8","Miúdo","Besta","Não-Definida","Nenhum","Nenhum","Stirge","2","stirge.jpg","Floresta, Pântano"],
  ["Súcubo/Íncubo","4","Médio","Corruptor","Não-Definida","Neutro","Mal","Succubus/Incubus","66","succubus.jpg","Masmorra, Planos, Urbano"],
  ["Tapete sufocador","2","Grande","Constructo","Objetos Animados","Nenhum","Nenhum","Rug of Smothering","33","rugSmothering.jpg","Masmorra, Ruínas, Urbano"],
  ["Tarrasque","30","Imenso","Monstruosidade","Não-Definida","Nenhum","Nenhum","Tarrasque","676","tarrasque.jpg","Aquático, Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Planos, Ruínas, Pântano, Subterrâneo, Urbano"],
  ["Tartaruga Dragão","17","Imenso","Dragão","Não-Definida","Neutro","Neutro","Dragon Turtle","341","dragonTurtle.jpg","Aquático"],
  ["Thri-kreen","1","Médio","Humanoide","Não-Definida","Caótico","Neutro","Thri-kreen","33","none","Deserto, Planicies"],
  ["Tigre","1","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Tiger","37","none","Floresta, Planicies"],
  ["Tigre Dentes-de-sabre","2","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Saber-Toothed Tiger","52","none","Floresta, Planicies"],
  ["Tirano da morte","14","Grande","Morto-vivo","Observadores","Leal","Mau","Death Tyrant","187","deathTyrant.jpg","Caverna, Masmorra, Subterrâneo"],
  ["Tirano da morte (covil)","15","Grande","Morto-vivo","Observadores","Leal","Mau","Death Tyrant (in lair)","187","deathTyrant.jpg","Caverna, Masmorra, Subterrâneo"],
  ["Tiranossauro","8","Enorme","Besta","Dinossauros","Nenhum","Nenhum","Tyrannosaurus Rex","136","t-rex.jpg","Planicies"],
  ["Tríbulo Brutal","5","Grande","Monstruosidade","Não-Definida","Caótico","Mau","Umber Hulk","93","umberHulk.jpg","Caverna, Subterrâneo"],
  ["Tricerátops","5","Enorme","Besta","Dinossauros","Nenhum","Nenhum","Triceratops","95","triceratops.jpg","Planicies, Montanha"],
  ["Tridrone","1/2","Médio","Constructo","Modrons","Leal","Neutro","Tridrone","16","tridrone.jpg","Planos"],
  ["Troglodita","1/4","Médio","Humanoide","Não-Definida","Caótico","Mau","Troglodyte","13","troglodyte.jpg","Caverna, Masmorra, Subterrâneo"],
  ["Troll","5","Grande","Gigante","Não-Definida","Caótico","Mau","Troll","84","troll.jpg","Caverna, Masmorra, Floresta, Montanha, Pântano"],
  ["Tubarão caçador","2","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Hunter Shark","45","none","Aquático"],
  ["Tubarão dos Arrecifes","1/2","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Reef Shark","22","none","Aquático"],
  ["Tubarão gigante","5","Enorme","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Shark","126","none","Aquático"],
  ["Ultroloth","13","Médio","Corruptor","Yugoloths","Neutro","Mal","Ultroloth","153","ultroloth.jpg","Masmorra, Planos"],
  ["Unicórnio","5","Grande","Celestial","Não-Definida","Leal","Bom","Unicorn","67","unicorn.jpg","Floresta, Ruínas"],
  ["Urso Marrom","1","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Brown Bear","34","none","Caverna, Floresta"],
  ["Urso Negro","1/2","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Black Bear","19","none","Caverna, Floresta, Planicies, Montanha"],
  ["Urso Polar","2","Grande","Besta","Criaturas Diversas","Nenhum","Nenhum","Polar Bear","42","none","Ártico, Caverna"],
  ["Urso-Coruja","3","Grande","Monstruosidade","Não-Definida","Nenhum","Nenhum","Owlbear","59","owlbear.jpg","Floresta, Montanha"],
  ["Vampiro","13","Médio","Morto-vivo","Vampiros","Leal","Mau","Vampire","144","vampire.jpg","Masmorra, Ruínas, Urbano"],
  ["Vampiro Conjurador","15","Médio","Morto-vivo","Vampiros","Leal","Mau","Vampire Spellcaster","144","none","Masmorra, Ruínas, Urbano"],
  ["Vampiro Guerreiro","15","Médio","Morto-vivo","Vampiros","Leal","Mau","Vampire Warrior","144","none","Masmorra, Ruínas, Urbano"],
  ["Veado","0","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Deer","4","none","Floresta, Planicies"],
  ["Verme da Carniça","2","Grande","Monstruosidade","Não-Definida","Nenhum","Nenhum","Carrion Crawler","51","carrionCrawler.jpg","Caverna, Masmorra, Subterrâneo"],
  ["Verme Púrpura","15","Imenso","Monstruosidade","Não-Definida","Nenhum","Nenhum","Purple Worm","247","purpleWorm.jpg","Subterrâneo"],
  ["Vespa Gigante","1/2","Médio","Besta","Criaturas Diversas","Nenhum","Nenhum","Giant Wasp","13","none","Floresta"],
  ["Veterano","3","Médio","Humanoide","Personagens do Mestre","Qualquer","Qualquer","Veteran","58","none","Urbano"],
  ["Vinha Infectada","1/2","Médio","Planta","Blights","Neutro","Mal","Vine Blight","26","none","Floresta, Planicies, Pântano"],
  ["Vrock","6","Grande","Corruptor","Demônios","Caótico","Mau","Vrock","104","demonVrock.jpg","Masmorra, Planos"],
  ["Worg","1/2","Grande","Monstruosidade","Criaturas Diversas","Neutro","Mal","Worg","26","worg.jpg","Ártico, Caverna, Floresta, Planicies"],
  ["Wyvern","6","Grande","Dragão","Não-Definida","Nenhum","Nenhum","Wyvern","110","wyvern.jpg","Ártico, Costa, Planicies"],
  ["Xamã do Povo Lagarto","2","Médio","Humanoide","Povo Lagarto","Neutro","Neutro","Lizardfolk Shaman","27","none","Costa, Masmorra, Floresta, Planicies, Pântano"],
  ["Xorn","5","Médio","Elemental","Não-Definida","Neutro","Neutro","Xorn","73","xorn.jpg","Masmorra, Planos, Subterrâneo"],
  ["Yeti","3","Grande","Monstruosidade","Yeti","Caótico","Mau","Yeti","51","yeti.jpg","Ártico, Caverna, Montanha"],
  ["Yeti Abominável","9","Enorme","Monstruosidade","Yeti","Caótico","Mau","Abominable Yeti","137","none","Ártico, Caverna, Montanha"],
  ["Yochlol","10","Médio","Corruptor","Demônios","Caótico","Mau","Yochlol","136","none","Masmorra, Planos"],
  ["Yuan-ti Abominação","7","Grande","Monstruosidade","Yuan-ti","Neutro","Mal","Yuan-ti Abomination","127","yuantiAbomination.jpg","Deserto, Floresta, Montanha, Ruínas, Pântano"],
  ["Yuan-ti Mestiço","3","Médio","Monstruosidade","Yuan-ti","Neutro","Mal","Yuan-ti Malison","66","yuantiMalison.jpg","Deserto, Floresta, Montanha, Ruínas, Pântano"],
  ["Yuan-ti Puro-Sangue","1","Médio","Humanoide","Yuan-ti","Neutro","Mal","Yuan-ti Pureblood","40","yuantiPureblood.jpg","Deserto, Floresta, Montanha, Ruínas, Pântano"],
  ["Zerth Githzerai","6","Médio","Humanoide","Gith","Leal","Neutro","Githzerai Zerth","84","none","Planos"],
["Zumbi","1/4","Médio","Morto-vivo","Zumbis","Neutro","Mal","Zombie","22","zombie.jpg","Aquático, Ártico, Caverna, Costa, Deserto, Masmorra, Floresta, Planicies, Montanha, Ruínas, Pântano, Subterrâneo, Urbano"]
];
