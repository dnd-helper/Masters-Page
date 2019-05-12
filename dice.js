function addDado(clicked_id) {
  // var Text = $(this).id();
  var totalRowCount = $("#ListaDeDados tr").length;
  var rowCount = totalRowCount-1;
  $("#ListaDeDados tbody").append(
      "<tr>" +
        "<td style=\"padding: 2px;\"><button type=\"button\" class=\"btn btn-danger delbutton\" onclick=\"delDado(this)\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button></td>" +
        "<td>"+
        clicked_id
        +"</td>" +
        "<td></td>" +
      "</tr>"
  );
}
function delDado(ctl) {
  $(ctl).parents("tr").remove();
}

function rollDado() {
  var totalRowCount = $("#ListaDeDados tr").length;
  var rowCount = totalRowCount-1;
  for (var i = 1; i < totalRowCount; i++) {
    strValue = $( "#ListaDeDados tbody tr:nth-child("+i+") td:nth-child(2)" ).html();
    strValue = strValue.replace('D','');
    var number = 1 + Math.floor(Math.random() * strValue);
    $( "#ListaDeDados tbody tr:nth-child("+i+") td:nth-child(3)" ).empty();
    $( "#ListaDeDados tbody tr:nth-child("+i+") td:nth-child(3)" ).append( number );
  }
}

function delAll() {
  $("#ListaDeDados tbody").empty();
}
