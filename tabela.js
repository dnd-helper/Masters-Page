const data = [
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
];



// var hotElement = document.querySelector('#hot');
// var hotElementContainer = hotElement.parentNode;
// var hotSettings = {
//
// };
var hot = new Handsontable(hotElement, hotSettings);
const container = document.getElementById('example');
const hot = new Handsontable(container, {
  // data: data,
  // rowHeaders: true,
  // colHeaders: true
  data: dataObject,
  stretchH: 'all',
  autoWrapRow: true,
  height: 500,
  maxRows: 22,
  rowHeaders: true,
  colHeaders: true,
  columnSorting: {
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
  exportFile: true
});
