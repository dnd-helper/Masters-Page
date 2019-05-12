$(document).on('click', '.dropdown-menu-classe li a', function() {
  $(".btn-classe:first-child").text($(this).text());
  $(".btn-classe:first-child").val($(this).text());

  var nivelSelecionado = $("#dropdownNivel").val();
  var className = $(".btn-classe:first-child").val();
  visibleSpells = spellByClass[className];

  $("#ULdropdownMagia").empty();
  $("#spell-list").empty();

  //ADICIONA CADA OPCAO DE MAGIA
  if (nivelSelecionado == "Todos") {
    $.each(visibleSpells, function(index, value) {
      $("#ULdropdownMagia").append(
        "<li><a href=\"#\">"+visibleSpells[index][0]+"</a></li>"
      );
    });
  }
  else {
    nivelSelecionado = nivelSelecionado.replace('Nivel ','');
    $.each(visibleSpells, function(index, value) {
      if (visibleSpells[index][1] == nivelSelecionado) {
        $("#ULdropdownMagia").append(
          "<li><a href=\"#\">"+visibleSpells[index][0]+"</a></li>"
        );
      }
    });
  }

  sortUnorderedList("ULdropdownMagia");
});

$(document).on('click', '.dropdown-menu-nivel li a', function() {
  $(".btn-nivel:first-child").text($(this).text());
  $(".btn-nivel:first-child").val($(this).text());

  var nivelSelecionado = $(".btn-nivel:first-child").val();
  var className = $("#dropdownClasses").val();
  visibleSpells = spellByClass[className];

  $("#ULdropdownMagia").empty();
  $("#spell-list").empty();

  //ADICIONA CADA OPCAO DE MAGIA
  if (className == "Todas") {
    $.each(visibleSpells, function(index, value) {
      $("#ULdropdownMagia").append(
        "<li><a href=\"#\">"+visibleSpells[index][0]+"</a></li>"
      );
    });
  }
  else {
    nivelSelecionado = nivelSelecionado.replace('Nivel ','');
      $.each(visibleSpells, function(index, value) {
      if (visibleSpells[index][1] == nivelSelecionado) {
        $("#ULdropdownMagia").append(
          "<li><a href=\"#\">"+visibleSpells[index][0]+"</a></li>"
        );
      }
    });
  }
  sortUnorderedList("ULdropdownMagia");
});


$(document).on('click', '.dropdown-menu-magia li a', function() {
     $(".btn-magia:first-child").text($(this).text());
     $(".btn-magia:first-child").val($(this).text());

     var spellName = $(".btn-magia:first-child").val();
     $( "#spell-list" ).load('spells/spells.html div[data-name="'+spellName+'"]');
});

// FUNCAO PARA ORDENAR LISTAS
function sortUnorderedList(ul, sortDescending) {
  if(typeof ul == "string")
    ul = document.getElementById(ul);

  // Idiot-proof, remove if you want
  if(!ul) {
    alert("The UL object is null!");
    return;
  }

  // Get the list items and setup an array for sorting
  var lis = ul.getElementsByTagName("LI");
  var vals = [];

  // Populate the array
  for(var i = 0, l = lis.length; i < l; i++)
    vals.push(lis[i].innerHTML);

  // Sort it
  vals.sort();

  // Sometimes you gotta DESC
  if(sortDescending)
    vals.reverse();

  // Change the list on the page
  for(var i = 0, l = lis.length; i < l; i++)
    lis[i].innerHTML = vals[i];
}
