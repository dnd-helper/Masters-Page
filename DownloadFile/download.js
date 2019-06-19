$(document).ready( function() {
  var numDeCampanhas = Object.keys(usuario["CampanhasMestre"]).length;
  // $("#ulCampanhas").empty();
  for (var i = 0; i < numDeCampanhas; i++) {
    var textToAppend = "<li class=\"default leaf first\" value=\"Campanha"+eval(i+1)+"\" onclick=\"carregaDados(usuario,$(this).attr('value'))\"><a><span>Campanha #"+eval(i+1)+"</span></a></li>";
    $("#ulCampanhas").append(textToAppend);
  }
})

$(document).ready(function() {
  var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;
  };

  var create = document.getElementById('downloadlink');
  create.addEventListener('click', function () {

    updateData(usuario["InformacoesdoUsuario"]["CampanhaAtual"])

    dataToBeSaved = JSON.stringify(usuario);
    var password = "DNDHELPER"
    var dataEncrypted = rc4(password,dataToBeSaved)

    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(dataEncrypted);
    link.style.display = 'block';
  }, false);
})


var objetoCarregado;
var openFile = function(event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    // console.log(reader.result.substring(0, 15000));
    objetoCarregado = JSON.parse(rc4("DNDHELPER",text));

    var numDeCampanhas = Object.keys(objetoCarregado["CampanhasMestre"]).length;
    $("#ulCampanhas").empty();
    for (var i = 0; i < numDeCampanhas; i++) {
      var textToAppend = "<li class=\"default leaf first\" value=\"Campanha"+eval(i+1)+"\" onclick=\"carregaDados(objetoCarregado,$(this).attr('value'))\"><a><span>Campanha #"+eval(i+1)+"</span></a></li>";
      $("#ulCampanhas").append(textToAppend);
    }
    // carregaDados(objetoCarregado,"Campanha1")
  };
  reader.readAsText(input.files[0]);
};

function carregaDados(objetoCarregado,campanha) {
  usuario["InformacoesdoUsuario"]["CampanhaAtual"] = campanha; //SALVA NO USUARIO, QUAL CAMPANHA É A ATUAL
  $("#AdicionaPlayers").empty();
  usuario = [];
  usuario = objetoCarregado;
  $.each(usuario["CampanhasMestre"][campanha]["Players"]["ListaDePlayers"], function(index, value) {
    CarregarPlayer(usuario,index)
  });
  if (renderized == false) { configTabela() }
  hot.loadData(usuario["CampanhasMestre"][campanha]["Tabela"]);
  editor.setData(usuario["CampanhasMestre"][campanha]["BlocoDeNotas"]);

  function CarregarPlayer(usuario,index) {
    // var linhaPlayer = usuario[campanha].length-1;
    var linhaSelecionada = usuario["CampanhasMestre"][campanha]["Players"]["ListaDePlayers"][index];

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
}

function updateData(campanha) {
  usuario["CampanhasMestre"][campanha]["BlocoDeNotas"] = editor.getData();
  if (renderized == false) { configTabela() }
  usuario["CampanhasMestre"][campanha]["Tabela"] = hot.getData();
  usuario["CampanhasMestre"][campanha]["Cidade"] = $("#linkCidade").attr("value");
}







// "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% \n"
// +"%%%%....................................................................................................................................................%%%% \n"
// +"%%%%....................................................................................................................................................%%%% \n"
// +"%%%%...........%%%%%%%%%....%%%%%%%...%%%%..%%%%%%%%%.........%%%%.....%%%%..%%%%%%%%%%%..%%%%.........%%%%%%%%%%%%..%%%%%%%%%%%..%%%%%%%%%%%%..........%%%% \n"
// +"%%%%...........%%%%%%%%%%...%%%%%%%%..%%%%..%%%%%%%%%%........%%%%.....%%%%..%%%%%%%%%%%..%%%%.........%%%%%%%%%%%%..%%%%%%%%%%%..%%%%%%%%%%%%..........%%%% \n"
// +"%%%%...........%%%%...%%%%..%%%%.%%%%.%%%%..%%%%...%%%%.......%%%%.....%%%%..%%%%.........%%%%.........%%%%....%%%%..%%%%.........%%%%....%%%%..........%%%% \n"
// +"%%%%...........%%%%...%%%%..%%%%..%%%%%%%%..%%%%...%%%%.......%%%%%%%%%%%%%..%%%%%%%%%%%..%%%%.........%%%%%%%%%%%%..%%%%%%%%%%%..%%%%%%%%%%%%..........%%%% \n"
// +"%%%%...........%%%%...%%%%..%%%%..%%%%%%%%..%%%%...%%%%.......%%%%%%%%%%%%%..%%%%%%%%%%%..%%%%.........%%%%%%%%%%%%..%%%%%%%%%%%..%%%%%%%%%%%%..........%%%% \n"
// +"%%%%...........%%%%...%%%%..%%%%....%%%%%%..%%%%...%%%%.......%%%%.....%%%%..%%%%.........%%%%.........%%%%..........%%%%.........%%%%..%%%%............%%%% \n"
// +"%%%%...........%%%%%%%%%%...%%%%.....%%%%%..%%%%%%%%%%........%%%%.....%%%%..%%%%%%%%%%%..%%%%%%%%%%%..%%%%..........%%%%%%%%%%%..%%%%...%%%%...........%%%% \n"
// +"%%%%...........%%%%%%%%%....%%%%......%%%%..%%%%%%%%%.........%%%%.....%%%%..%%%%%%%%%%%..%%%%%%%%%%%..%%%%..........%%%%%%%%%%%..%%%%....%%%%..........%%%% \n"
// +"%%%%....................................................................................................................................................%%%% \n"
// +"%%%%....................................................................................................................................................%%%% \n"
// +"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% \n"
// +" \n ARQUIVO DE CARREGAMENTO DE DADOS DO DND HELPER.\nFAVOR NÃO EDITAR ESTE ARQUIVO.\nTODOS OS DADOS CONTIDOS AQUI PODEM SER EDITADOS ATRAVÉS DO SOFTWARE, E QUALQUER MODIFICAÇÃO PODE CAUSAR QUEBRA DOS DADOS, E CONSEQUENTEMENTE, PERDA TOTAL DOS DADOS DA CAMPANHA."
// +"\nCAMPANHA COD:"
// +"\n2019C000001"
// +"\nLISTA DE PLAYERS:"
// +"\n"
