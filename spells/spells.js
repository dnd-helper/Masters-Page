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
    alert(nivelSelecionado);
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
  alert(nivelSelecionado);
  alert(className);

  visibleSpells = spellByClass[className];
  alert(visibleSpells);

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
   alert(nivelSelecionado);
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














  // $.get('spells/spells.html', function (data) {
  //       // $('#id2').html(data);
  //       html(data).find('div div').each(function () {
  //           alert($(this).attr('data-name'));
  //           // $("#id1").append($(this).html());
  //       });
  //   });


  // $('spells/spells.html #spell-list').children('div').each(function(){
  //  alert($(this).attr('data-name'));
  // })
  //
  // var ids = {};
  // $("#id2").load("spells/spells.html div div").each(function(i){
  //     ids[i] = $(this).prop('data-name');
  // });
  //
  // console.log(ids);
  // alert(ids[0]);



// $(function(){
// //    $(".dropdown-menu-nivel li a").click(function(){
//      $(".btn-nivel:first-child").text($(this).text());
//      $(".btn-nivel:first-child").val($(this).text());
// });
// };


// $(function(){
$(document).on('click', '.dropdown-menu-magia li a', function() {
   // $(".dropdown-menu-magia li a").click(function(){
//
// $( "#dataTable tbody tr" ).on( "click", function() {
// $('#ULdropdownMagia').on('click', '.dropdown-menu-magia li a', function() {
// $( "ULdropdownMagia" ).delegate( ".dropdown-menu-magia li a", "click", function() {
     $(".btn-magia:first-child").text($(this).text());
     $(".btn-magia:first-child").val($(this).text());

     var spellName = $(".btn-magia:first-child").val();
     alert(spellName);
     // var spellName = "amizade";
     $( "#spell-list" ).load('spells/spells.html div[data-name="'+spellName+'"]');
     // $('div[data-name="'+spellName+'"]').removeClass().removeAttr('style');

});
// });


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
