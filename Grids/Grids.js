var altura;
var comprimento;
var quantx;
var tamanho;
var quanty;
var paddingWid;
var paddingHei;

$( document ).ready(function() {

	//   // var canvas = new fabric.Canvas('canvasGrid1');
	//   altura = $("#myTabContent").height();
	//   comprimento = $("#myTabContent").width();
	//   quantx = 16;

	//   tamanho = Math.floor(comprimento/quantx);
	//   quanty = Math.floor(altura/tamanho);

	//   paddingWid = ((comprimento-(quantx*tamanho))/2)-1;
	//   paddingHei = ((altura-(quanty*tamanho))/2)-1;
	//   if (paddingWid < 1) { paddingWid = 1}
	//   if (paddingHei < 1) { paddingHei = 1}
	//   $("#dropdownA1").css({"padding-left":paddingWid-1, "padding-right":paddingWid, "padding-top":paddingHei-1, "padding-bottom":paddingHei});

	//   // var paddingUti;
	//   // if (paddingWid > paddingHei)  { paddingUti = paddingHei }
	//   // if (paddingWid <= paddingHei) { paddingUti = paddingWid }
	//   // $("#dropdownA1").css({"padding-left":paddingUti-1, "padding-right":paddingUti, "padding-top":paddingUti-1, "padding-bottom":paddingUti});
	//   // $("#dropdownA1").css("height", ((quanty*tamanho)+2*paddingUti) )

	//   // canvas = new fabric.CanvasEx(canvasGrid1,{
	//   //   selection: false,
	//   //   height:	tamanho*(quanty)+2,
	//   //   width: tamanho*quantx+2
	//   //  }),
	//   // options = {
	//   //     distance: tamanho,
	//   //     width: canvas.width,
	//   //     height: canvas.height,
	//   //     param: {
	//   //       stroke: '#aaaaaa',
	//   //       strokeWidth: 2,
	//   //       selectable: false,
	//   //       hoverCursor: 'default'
	//   //     }
	//   //  },
	// 	// gridLen = options.width / options.distance;

	//   var count1to6x = 1; //0 SOBE, 1 DESCE
	//   var count1to6y = 1; //0 SOBE, 1 DESCE

	//   function adicionaImagem(nomeimagem,i,j) {
	//     fabric.Image.fromURL('Grids/Concreto/'+nomeimagem, function(oImg) {
	//       oImg.scale(tamanho/71);
	//       oImg.set({
	//         top:i*tamanho,
	//         left:j*tamanho,
	//         selectable: false,
	//         hoverCursor: 'default'
	//       })
	//       canvas.add(oImg);
	//       canvas.sendToBack(oImg);
	//     });
	//   }

	//   for (var i = 0; i < quanty; i++) {
	//     for (var j = 0; j < quantx; j++) {
	//       var nomeimagem = count1to6x+""+count1to6y+".png";
	//       adicionaImagem(nomeimagem,i,j)
	//       count1to6y = count1to6y + 1;
	//       if (count1to6y == 7) { count1to6y = 1}
	//     };
	//     count1to6y = 1;
	//     count1to6x = count1to6x + 1;
	//     if (count1to6x == 7) { count1to6x = 1}
	//   };
	//   for (var i = 0; i < gridLen; i++) {
	//     var distance   = i * options.distance,
	//         horizontal = new fabric.Line([ distance, 0, distance, options.height], options.param);
	//     canvas.add(horizontal);
	//   };
	//   for (var i = 0; i < (quanty+1); i++) {
	//     var distance   = i * options.distance,
	//         vertical   = new fabric.Line([ 0, distance, options.width, distance], options.param);
	//     canvas.add(vertical);
	//   };

	//   // var rect = new fabric.Rect({
	//   //   id: "rect01",
	//   //   left: 0,
	//   //   top: 0,
	//   //   fill: 'red',
	//   //   width: tamanho,
	//   //   height: tamanho,
	//   //   hasControls: false,
	//   //   hasBorders: false
	//   // });
	//   // rect.on('object:dblclick', function (options) {
	//   //   window.alert(rect.id);
	//   // });
	//   // canvas.add(rect);

	//   // var cicle = new fabric.Circle({
	//   //   left: 300,
	//   //   top: 300,
	//   //   radius: tamanho,
	//   //   fill: 'black',
	//   //   originX: 'left',
	//   //   originY: 'top',
	//   //   centeredRotation: true,
	//   //   hasControls: false,
	//   //   hasBorders: false
	//   // });
	//   // cicle.on('object:dblclick', function (options) {
	//   //   window.alert(cicle.id);
	//   // });
	//   // canvas.add(cicle);

	//   canvas.on('object:moving', function(options) {
	//     options.target.set({
	//       left: Math.round(options.target.left / tamanho) * tamanho,
	//       top: Math.round(options.target.top / tamanho) * tamanho
	//     });
	//   });

	//   // "add" rectangle onto canvas

	//   canvas.on('object:moving', function (e) {
	//     var obj = e.target;
	//      // if object is too big ignore
	//     if(obj.currentHeight > obj.canvas.height || obj.currentWidth > obj.canvas.width){
	//         return;
	//     }
	//     obj.setCoords();
	//     // top-left  corner
	//     if(obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0){
	//         obj.top = Math.max(obj.top, obj.top-obj.getBoundingRect().top);
	//         obj.left = Math.max(obj.left, obj.left-obj.getBoundingRect().left);
	//     }
	//     // bot-right corner
	//     if(obj.getBoundingRect().top+obj.getBoundingRect().height  > obj.canvas.height || obj.getBoundingRect().left+obj.getBoundingRect().width  > obj.canvas.width){
	//         obj.top = Math.min(obj.top, obj.canvas.height-obj.getBoundingRect().height+obj.top-obj.getBoundingRect().top);
	//         obj.left = Math.min(obj.left, obj.canvas.width-obj.getBoundingRect().width+obj.left-obj.getBoundingRect().left);
	//     }
	//   });

	//   $(document).on('click', '#PlayerOnGridButton', function() {

	//     var todosPlayers = usuario.CampanhasMestre[usuario.InformacoesdoUsuario.CampanhaAtual].Players;
	//     var count = 0;
	//     $.each(todosPlayers, function(index, value) {
	//         // canvas.fabric.getItemByAttr('id', todosPlayers[index][0]).remove();

	//         var player = new fabric.Circle({
	//           id: index,
	//           left: count*tamanho,
	//           top: 0,
	//           radius: tamanho/2,
	//           fill: todosPlayers[index][45],
	//           originX: 'left',
	//           originY: 'top',
	//           centeredRotation: true,
	//           hasControls: false,
	//           hasBorders: false
	//         });
	//         canvas.add(player);
	//         player.on('object:dblclick', function (options) {
	//           var txt = player.id +""+player.left+""+player.top;
	//           window.alert(txt);
	//         });
	//       count = count + 1;
	//     });

	//   });

	//   $('#InputNCol').change(function() {
	//     if ($("#InputNLin").attr("disabled") == "disabled") {
	//       // var entrada = $('#InputNCol');
	//       // var ratio = eval(quanty/quantx);
	//       // $("#InputNLin").val(Math.floor(entrada*ratio));
	//       altura = $("#myTabContent").height();
	//       comprimento = $("#myTabContent").width();
	//       quantx = $("#InputNCol").val();
	//       quanty = Math.floor(altura*quantx/comprimento);
	//       $("#InputNLin").val(quanty);
	//     }
	//   });

	//   // $('#checkboxMax').val(this.checked);
	//   $('#checkboxMax').change(function() {
	//       if(this.checked) {
	//         $("#InputNLin").attr("disabled","disabled");
	//         if ($("#InputNCol").val() != ""){
	//           altura = $("#myTabContent").height();
	//           comprimento = $("#myTabContent").width();
	//           quantx = $("#InputNCol").val();
	//           quanty = Math.floor(altura*quantx/comprimento);
	//           $("#InputNLin").val(quanty);
	//         }
	//       } else {
	//         $("#InputNLin").removeAttr('disabled');

	//       }
	//       // $('#checkboxMax').val(this.checked);
	//   });

	//   $(document).on('click', '#buttonConfirmaConfigGrid', function() {

	//     atualizaGrid();
	//     $("#ModalEditarGrids").modal("hide");
	//   });

	//   function atualizaGrid() {

	//     canvas.clear()
	//     altura = $("#myTabContent").height();
	//     comprimento = $("#myTabContent").width();
	//     tamanho = Math.floor(comprimento/quantx);
	//     paddingWid = ((comprimento-(quantx*tamanho))/2)-1;
	//     paddingHei = ((altura-(quanty*tamanho))/2)-1;
	//     // alert(paddingWid+" x "+paddingHei)
	//     if (paddingWid < 1) { paddingWid = 1}
	//     if (paddingHei < 1) { paddingHei = 1}
	//     // alert(paddingWid+" x "+paddingHei)
	//     $("#dropdownA1").css({"padding-left":paddingWid-1, "padding-right":paddingWid, "padding-top":paddingHei-1, "padding-bottom":paddingHei});

	//     canvas = new fabric.CanvasEx(canvasGrid1,{
	//       selection: false,
	//       height:	tamanho*(quanty)+2,
	//       width: tamanho*quantx+2
	//      }),
	//     options = {
	//         distance: tamanho,
	//         width: canvas.width,
	//         height: canvas.height,
	//         param: {
	//           stroke: '#aaaaaa',
	//           strokeWidth: 2,
	//           selectable: false,
	//           hoverCursor: 'default'
	//         }
	//      },
	//   	gridLen = options.width / options.distance;

	//     var count1to6x = 1; //0 SOBE, 1 DESCE
	//     var count1to6y = 1; //0 SOBE, 1 DESCE

	//     function adicionaImagem(nomeimagem,i,j) {
	//       fabric.Image.fromURL('Grids/Concreto/'+nomeimagem, function(oImg) {
	//         oImg.scale(tamanho/71);
	//         oImg.set({
	//           top:i*tamanho,
	//           left:j*tamanho,
	//           selectable: false,
	//           hoverCursor: 'default'
	//         })
	//         canvas.add(oImg);
	//         canvas.sendToBack(oImg);
	//       });
	//     }

	//     for (var i = 0; i < quanty; i++) {
	//       for (var j = 0; j < quantx; j++) {
	//         var nomeimagem = count1to6x+""+count1to6y+".png";
	//         adicionaImagem(nomeimagem,i,j)
	//         count1to6y = count1to6y + 1;
	//         if (count1to6y == 7) { count1to6y = 1}
	//       };
	//       count1to6y = 1;
	//       count1to6x = count1to6x + 1;
	//       if (count1to6x == 7) { count1to6x = 1}
	//     };
	//     for (var i = 0; i < gridLen; i++) {
	//       var distance   = i * options.distance,
	//           horizontal = new fabric.Line([ distance, 0, distance, options.height], options.param);
	//       canvas.add(horizontal);
	//     };
	//     for (var i = 0; i < (quanty+1); i++) {
	//       var distance   = i * options.distance,
	//           vertical   = new fabric.Line([ 0, distance, options.width, distance], options.param);
	//       canvas.add(vertical);
	//     };
	//   }

	//   $(document).on('click', '#buttonAdicionaMonstrosNoGrid', function() {
	//     $.each(monstrosAdicionados["Campanha1"], function(index, value) {
	//       // removeObjectFromCanvas()
	//       const canvasObject = canvas.getObjects().filter((item) => {
	//         return item.id === parseInt(monstrosAdicionados["Campanha1"][index][7])
	//       })
	//       canvas.remove(canvasObject)
	//       // canvas.forEachObject(function(obj) {
	//       //     if (obj.id && obj.id === monstrosAdicionados["Campanha1"][index][7]) {
	//       //         obj.set('active', true);
	//       //         canvas.remove(canvas.getActiveObject());
	//       //     }
	//       // });
	//       var multipTamanho = 1;
	//       if (monstrosAdicionados["Campanha1"][index][6] == "Miúdo")    {  multipTamanho = 1 }
	//       if (monstrosAdicionados["Campanha1"][index][6] == "Pequeno")  {  multipTamanho = 1 }
	//       if (monstrosAdicionados["Campanha1"][index][6] == "Médio")    {  multipTamanho = 1 }
	//       if (monstrosAdicionados["Campanha1"][index][6] == "Grande")   {  multipTamanho = 2 }
	//       if (monstrosAdicionados["Campanha1"][index][6] == "Enorme")   {  multipTamanho = 3 }
	//       if (monstrosAdicionados["Campanha1"][index][6] == "Imenso")   {  multipTamanho = 4 }
	//       //   var tamanhoMonstro = monstrosVisiveis[index][2];
	//       //   linkImagem = monstrosVisiveis[index][9];

	//       var cicle = new fabric.Circle({
	//         id: monstrosAdicionados["Campanha1"][index][7],
	//         left: 0,
	//         top: 0,
	//         radius: tamanho*multipTamanho/2,
	//         fill: monstrosAdicionados["Campanha1"][index][5],
	//         originX: 'left',
	//         originY: 'top',
	//         centeredRotation: true,
	//         hasControls: false,
	//         hasBorders: false
	//       });
	//       cicle.on('object:dblclick', function (options) {
	//         window.alert(cicle.id);
	//       });
	//       canvas.add(cicle);
	//     });
	//   });
	// // valor2 = eval($(this).children(".quant-monstros").text());
	// // xpTotalMonstros = xpTotalMonstros + valor1;
	// // quantidadeMonstrosAjustado = quantidadeMonstrosAjustado + 1;
	// // });
	// // }
	// // getObjectFromCanvasById(id) {
	// //
	// //   return canvasObject[0]
	// // }
	// //
	// // removeObjectFromCanvas(objectId) {
	// //   // const canvasObject = this.getObjectFromCanvasById(objectId)
	// //
	// // }
	renderizaGrid();
});

var canvas;

let grid = [
	[{
		"Immeral Varis": {
			"color": 'green',
			"label": 'IV',
			"labelcolor": 'white'
		},
		"Hachizuno": {
			"color": 'black',
			"label": 'HZ',
			"labelcolor": 'white'
		},
	}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}],
	[{}, {}, {}, {}, {}],
];

let gridHTML = `
	<div class="grid" id="gridContainer">
		<div ondrop="handleDrop(event);" class="gridRow">
			<div ondragstart="itemDragStart(event);" class="gridCell">
				<div class="gridItem" draggable="true"></div>
			</div>
		</div>
	</div>
`;
function renderizaGrid() {
	gridHTML = '';
	let contx = 0;
	grid.forEach((row) => {
		gridHTML += '<div class="gridRow">';
		let conty = 0;
		row.forEach((cell) => {
			gridHTML += `<div id="cell_${contx}_${conty}" ondragover="handleDragOver(event);" ondrop="handleDrop(event);" class="gridCell">`;
			for (const playerName in cell) {
				if (Object.hasOwnProperty.call(cell, playerName)) {
					const player = cell[playerName];
					gridHTML += `
					<div ondragstart="itemDragStart(event);" class="gridItem" draggable="true" style="display: flex; background-color: ${player.color};">
						<span style="margin: auto; color: ${player.labelcolor};">${player.label}</span>
					</div>`;
				}
			}
			gridHTML += `</div>`;
			conty++;
		});
		gridHTML += '</div>';
		contx++;
	});
	this.document.querySelector('#gridContainer').innerHTML = gridHTML;
	
}

function handleDrop(evt) {
	console.log(evt.target.id);
	console.log("DROPADO");
}

function handleDragOver(evt) {
	evt.preventDefault();
//   console.log('DRAGOVER');
}

function itemDragStart(event) {
	console.log("DRAG");
	console.log(event.target);
	console.log(event.target.id);
	//<div class="gridItem" draggable="true"></div>
}

