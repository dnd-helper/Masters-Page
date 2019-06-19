// $( document ).ready(function() {
//   const data = [
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '', '']
//   ];
//
//   const container = document.getElementById('example');
//   const hot = new Handsontable(container, {
//     rowHeaders: true,
//     colHeaders: true,
//     stretchH: 'all',
//     autoWrapRow: true,
//     height: 500,
//     maxRows: 22,
//     startCols: 12,
//     startRows: 16,
//     colWidths: 30,
//     rowSorting: {
//       indicator: true
//     },
//     autoColumnSize: {
//       samplingRatio: 23
//     },
//     mergeCells: true,
//     contextMenu: true,
//     manualRowResize: true,
//     manualColumnResize: true,
//     manualRowMove: true,
//     manualColumnMove: true,
//     dropdownMenu: true,
//     multiColumnSorting: {
//       indicator: true
//     },
//     renderAllRows: true,
//     exportFile: true,
//     showColumns: {
//       columns: [1,2,3]
//     }
//   });
// });




var alturaTabela;
var comprimentoTabela;
var renderized = false;
var quantyTabela = 16;
var quantRenders = 0;
// const hot;
var hot;
var container;
$(document).on("click", "#PainelEditorTabela-tab", function() {
  if (renderized == false) { configTabela() }
  renderTabela()
})
function configTabela() {
  renderized = true;
  if (quantRenders == 0) {
    // var canvas = new fabric.Canvas('canvasGrid1');
    alturaTabela = $("#PainelEditorTabela").height();
    comprimentoTabela = $("#PainelEditorTabela").width();

    // tamanho = Math.floor(comprimento/quantx);
    // tamanhoalt = Math.floor(altura/quantx);
    quantyTabela = Math.floor((alturaTabela-26)/23);
    // alert(quantyTabela)
    // alert(alturaTabela)

    container = document.getElementById('example');
    hot = new Handsontable(container, {
      rowHeaders: true,
      colHeaders: true,
      stretchH: 'all',
      stretchW: 'all',
      height: alturaTabela,
      autoWrapRow: true,
      startCols: 12,
      startRows: quantyTabela,
      colWidths: 30,
      rowSorting: {
        indicator: true
      },
      autoColumnSize: {
        samplingRatio: 23
      },
      mergeCells: true,
      contextMenu: true,
      manualRowResize: true,
      manualColumnResize: true,
      manualRowMove: true,
      manualColumnMove: true,
      dropdownMenu: true,
      multiColumnSorting: {
        indicator: true
      },
      renderAllRows: true,
      exportFile: true,
      showColumns: {
        columns: [1,2,3]
      }
    });
  }
}
function renderTabela() {
  setTimeout(function() {
    hot.render();
  }, 200);
  quantRenders = 1;
  return hot;
}
