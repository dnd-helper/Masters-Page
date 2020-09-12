$(document).on('click', '.dropdown-menu-classe li a', function() {
  $(".btn-classe:first-child").text($(this).text());
  $(".btn-classe:first-child").val($(this).text());

  var nivelSelecionado = $(".btn-nivel:first-child").val().replace('Nivel ','');
  var className = $(".btn-classe:first-child").val();
  visibleSpells = spellByClass[className];

  $("#ULdropdownMagia").empty();
  $("#ULdropdownMagia").append(
    "<input onkeyup=\"filtrarEsteSemDelete(this)\" type=\"text\" class=\"custom-select\" style=\"background: none;width: 96%;margin-left: 2%;margin-right: 2%;border-radius: 3px;\">"
    +"<li role=\"separator\" class=\"divider\"></li>"
  );
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

  var nivelSelecionado = $(".btn-nivel:first-child").val().replace('Nivel ','');
  var className = $("#dropdownClasses").val();
  visibleSpells = spellByClass[className];

  $("#ULdropdownMagia").empty();
  $("#ULdropdownMagia").append(
    "<input onkeyup=\"filtrarEsteSemDelete(this)\" type=\"text\" class=\"custom-select\" style=\"background: none;width: 96%;margin-left: 2%;margin-right: 2%;border-radius: 3px;\">"
    +"<li role=\"separator\" class=\"divider\"></li>"
  );
  $("#spell-list").empty();

  //ADICIONA CADA OPCAO DE MAGIA
  if (nivelSelecionado == "Todos") {
    $.each(visibleSpells, function(index, value) {
      // if (visibleSpells[index][1] == nivelSelecionado) {
        $("#ULdropdownMagia").append(
          "<li><a href=\"#\">"+visibleSpells[index][0]+"</a></li>"
        );
      // }
    });
  }
  else {
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

$(document).ready( function() {
  visibleSpells = spellByClass["Todas"];

  $("#ULdropdownMagia").append(
    "<input onkeyup=\"filtrarEsteSemDelete(this)\" type=\"text\" class=\"custom-select\" style=\"background: none;width: 96%;margin-left: 2%;margin-right: 2%;border-radius: 3px;\">"
    +"<li role=\"separator\" class=\"divider\"></li>"
  );
  $("#spell-list").empty();


  //ADICIONA CADA OPCAO DE MAGIA
  $.each(visibleSpells, function(index, value) {
    $("#ULdropdownMagia").append(
      "<li><a href=\"#\">"+visibleSpells[index][0]+"</a></li>"
    );
  });

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
    // alert("The UL object is null!");
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
