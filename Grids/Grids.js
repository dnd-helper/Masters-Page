var altura;
var comprimento;
var quantx;
var tamanho;
var quanty;
var paddingWid;
var paddingHei;

$( document ).ready(function() {

  // var canvas = new fabric.Canvas('canvasGrid1');
  altura = $("#myTabContent").height();
  comprimento = $("#myTabContent").width();
  quantx = 16;

  tamanho = Math.floor(comprimento/quantx);
  quanty = Math.floor(altura/tamanho);

  paddingWid = ((comprimento-(quantx*tamanho))/2)-1;
  paddingHei = ((altura-(quanty*tamanho))/2)-1;
  $("#dropdownA1").css({"padding-left":paddingWid-1, "padding-right":paddingWid, "padding-top":paddingHei-1, "padding-bottom":paddingHei});

  // var paddingUti;
  // if (paddingWid > paddingHei)  { paddingUti = paddingHei }
  // if (paddingWid <= paddingHei) { paddingUti = paddingWid }
  // $("#dropdownA1").css({"padding-left":paddingUti-1, "padding-right":paddingUti, "padding-top":paddingUti-1, "padding-bottom":paddingUti});
  // $("#dropdownA1").css("height", ((quanty*tamanho)+2*paddingUti) )

  var canvas = new fabric.CanvasEx(canvasGrid1,{
    selection: false,
    height:	tamanho*(quanty)+2,
    width: tamanho*quantx+2
   }),
  options = {
      distance: tamanho,
      width: canvas.width,
      height: canvas.height,
      param: {
        stroke: '#aaaaaa',
        strokeWidth: 2,
        selectable: false,
        hoverCursor: 'default'
      }
   },
	gridLen = options.width / options.distance;

  var escadax = 0; //0 SOBE, 1 DESCE
  var escaday = 0; //0 SOBE, 1 DESCE
  var count1to6x = 1; //0 SOBE, 1 DESCE
  var count1to6y = 1; //0 SOBE, 1 DESCE

  function adicionaImagem(nomeimagem,i,j) {
    fabric.Image.fromURL('Grids/Concreto/'+nomeimagem, function(oImg) {
      oImg.scale(tamanho/71);
      oImg.set({
        top:i*tamanho,
        left:j*tamanho,
        selectable: false,
        hoverCursor: 'default'
      })
      canvas.add(oImg);
      canvas.sendToBack(oImg);
    });
  }

  for (var i = 0; i < quanty; i++) {
    for (var j = 0; j < quantx; j++) {
      var nomeimagem = count1to6x+""+count1to6y+".png";
      adicionaImagem(nomeimagem,i,j)
      count1to6y = count1to6y + 1;
      if (count1to6y == 7) { count1to6y = 1}
    };
    count1to6y = 1;
    escaday = 0;
    count1to6x = count1to6x + 1;
    if (count1to6x == 7) { count1to6x = 1}
  };
  for (var i = 0; i < gridLen; i++) {
    var distance   = i * options.distance,
        horizontal = new fabric.Line([ distance, 0, distance, options.height], options.param);
    canvas.add(horizontal);
  };
  for (var i = 0; i < (quanty+1); i++) {
    var distance   = i * options.distance,
        vertical   = new fabric.Line([ 0, distance, options.width, distance], options.param);
    canvas.add(vertical);
  };

  // var rect = new fabric.Rect({
  //   id: "rect01",
  //   left: 0,
  //   top: 0,
  //   fill: 'red',
  //   width: tamanho,
  //   height: tamanho,
  //   hasControls: false,
  //   hasBorders: false
  // });
  // rect.on('object:dblclick', function (options) {
  //   window.alert(rect.id);
  // });
  // canvas.add(rect);

  // var cicle = new fabric.Circle({
  //   left: 300,
  //   top: 300,
  //   radius: tamanho,
  //   fill: 'black',
  //   originX: 'left',
  //   originY: 'top',
  //   centeredRotation: true,
  //   hasControls: false,
  //   hasBorders: false
  // });
  // cicle.on('object:dblclick', function (options) {
  //   window.alert(cicle.id);
  // });
  // canvas.add(cicle);

  canvas.on('object:moving', function(options) {
    options.target.set({
      left: Math.round(options.target.left / tamanho) * tamanho,
      top: Math.round(options.target.top / tamanho) * tamanho
    });
  });

  // "add" rectangle onto canvas

  canvas.on('object:moving', function (e) {
    var obj = e.target;
     // if object is too big ignore
    if(obj.currentHeight > obj.canvas.height || obj.currentWidth > obj.canvas.width){
        return;
    }
    obj.setCoords();
    // top-left  corner
    if(obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0){
        obj.top = Math.max(obj.top, obj.top-obj.getBoundingRect().top);
        obj.left = Math.max(obj.left, obj.left-obj.getBoundingRect().left);
    }
    // bot-right corner
    if(obj.getBoundingRect().top+obj.getBoundingRect().height  > obj.canvas.height || obj.getBoundingRect().left+obj.getBoundingRect().width  > obj.canvas.width){
        obj.top = Math.min(obj.top, obj.canvas.height-obj.getBoundingRect().height+obj.top-obj.getBoundingRect().top);
        obj.left = Math.min(obj.left, obj.canvas.width-obj.getBoundingRect().width+obj.left-obj.getBoundingRect().left);
    }
  });

  $(document).on('click', '#PlayerOnGridButton', function() {

    var todosPlayers = listaDePlayers["Campanha1"];
    $.each(todosPlayers, function(index, value) {

        // canvas.fabric.getItemByAttr('id', todosPlayers[index][0]).remove();

        var player = new fabric.Circle({
          id: todosPlayers[index][0],
          left: index*tamanho,
          top: 0,
          radius: tamanho/2,
          fill: todosPlayers[index][45],
          originX: 'left',
          originY: 'top',
          centeredRotation: true,
          hasControls: false,
          hasBorders: false
        });
        canvas.add(player);
        player.on('object:dblclick', function (options) {
          var txt = player.id +""+player.left+""+player.top;
          window.alert(txt);
        });
    });


  });

  // $('#checkboxMax').val(this.checked);
  $('#checkboxMax').change(function() {
      if(this.checked) {
        $("#InputNLin").attr("disabled","");
        if ($("#InputNCol").val() != ""){
          var altura = $("#dropdownA1").height() - 30;
          var comprimento = $("#dropdownA1").width() - 10;
          var quantx = $("#InputNCol").val();
          // var tamanho = Math.floor(comprimento/quantx);
          var quanty = Math.floor(altura*quantx/comprimento);
          $("#InputNLin").val(quanty);
        }
      } else {
        $("#InputNLin").removeAttr('disabled');

      }
      // $('#checkboxMax').val(this.checked);
  });

  $(document).on('click', '#buttonAdicionaMontrosNoGrid', function() {
    $.each(monstrosAdicionados["Campanha1"], function(index, value) {
      // removeObjectFromCanvas()
      const canvasObject = canvas.getObjects().filter((item) => {
        return item.id === parseInt(monstrosAdicionados["Campanha1"][index][7])
      })
      canvas.remove(canvasObject)
      // canvas.forEachObject(function(obj) {
      //     if (obj.id && obj.id === monstrosAdicionados["Campanha1"][index][7]) {
      //         obj.set('active', true);
      //         canvas.remove(canvas.getActiveObject());
      //     }
      // });
      var multipTamanho = 1;
      if (monstrosAdicionados["Campanha1"][index][6] == "Miúdo")    {  multipTamanho = 1 }
      if (monstrosAdicionados["Campanha1"][index][6] == "Pequeno")  {  multipTamanho = 1 }
      if (monstrosAdicionados["Campanha1"][index][6] == "Médio")    {  multipTamanho = 1 }
      if (monstrosAdicionados["Campanha1"][index][6] == "Grande")   {  multipTamanho = 2 }
      if (monstrosAdicionados["Campanha1"][index][6] == "Enorme")   {  multipTamanho = 3 }
      if (monstrosAdicionados["Campanha1"][index][6] == "Imenso")   {  multipTamanho = 4 }
      //   var tamanhoMonstro = monstrosVisiveis[index][2];
      //   linkImagem = monstrosVisiveis[index][9];

      var cicle = new fabric.Circle({
        id: monstrosAdicionados["Campanha1"][index][7],
        left: 0,
        top: 0,
        radius: tamanho*multipTamanho/2,
        fill: monstrosAdicionados["Campanha1"][index][5],
        originX: 'left',
        originY: 'top',
        centeredRotation: true,
        hasControls: false,
        hasBorders: false
      });
      cicle.on('object:dblclick', function (options) {
        window.alert(cicle.id);
      });
      canvas.add(cicle);
    });
  });
// valor2 = eval($(this).children(".quant-monstros").text());
// xpTotalMonstros = xpTotalMonstros + valor1;
// quantidadeMonstrosAjustado = quantidadeMonstrosAjustado + 1;
// });
// }
// getObjectFromCanvasById(id) {
//
//   return canvasObject[0]
// }
//
// removeObjectFromCanvas(objectId) {
//   // const canvasObject = this.getObjectFromCanvasById(objectId)
//
// }

});
