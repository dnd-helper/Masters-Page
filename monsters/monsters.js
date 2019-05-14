$(document).on('click', '.dropdown-menu-monstro li a', function() {
     $(".btn-monstro:first-child").text($(this).text());
     $(".btn-monstro:first-child").val($(this).text());

     var spellName = $(".btn-monstro:first-child").val();
     // $( "#spell-list" ).load('spells/spells.html div[data-name="'+spellName+'"]');
});
