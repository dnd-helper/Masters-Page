$(document).on('click', '.dropdown-menu-mapadungeon li a', function() {
    $(this).parent().parent().parent().children("button").text($(this).text());
    $(this).parent().parent().parent().children("button").append("<span class=\"caret\"></span>");
    $(this).parent().parent().parent().children("button").val($(this).parent().val());
});

$(document).ready( function() {

  $( ".ativoDropdown" ).trigger( "click" );

})


var NS = (document.layers) ? 1 : 0;
var NS6 = (document.getElementById) ? 1 : 0;
var IE = (document.all) ? 1 : 0;

var browser = navigator.appName;
var version = navigator.appVersion;
var bVer = browser + " " + version;

var xFilter = 1;
var xSeed = "";
var xSeed2 = "";

function loadData() {
  var seedvalue = document.form1.load.value;

  if (seedvalue != null && seedvalue != "") {
    var dataToSend = seedvalue.split(',');
    for (i = 0; (i < dataToSend.length); i++) {
        dataToSend[i] = unescape(dataToSend[i]);
    }
    document.form1.halllength.value = dataToSend[0];
    document.form1.dungeonrooms.value = dataToSend[1] ;
    document.form1.hallways.value = dataToSend[2] ;
    document.form1.size.value = dataToSend[3] ;
    document.form1.exits.value = dataToSend[4] ;
    document.form1.secretdoors.value = dataToSend[5] ;
    document.form1.portcullises.value = dataToSend[6] ;

    document.form1.skin.value = dataToSend[7] ;
    document.form1.startroomtype.value = dataToSend[8] ;
    document.form1.startexits.value = dataToSend[9] ;
    document.form1.grid.value = dataToSend[10] ;
    xSeed = dataToSend[11] ;
    document.form1.level.value = dataToSend[12] ;
    document.form1.map.value = dataToSend[13] ;
    xSeed2 = dataToSend[14] ;
    document.form1.details.value = dataToSend[15] ;
    xFilter = dataToSend[16] ;
    document.form1.theme.value = dataToSend[17] ;
    xSrcdata = dataToSend[18]

    if (xSrcdata.search(/C/i) >=0) { document.form1.corebooks.checked = 1 } else { document.form1.corebooks.checked = 0 };
    if (xSrcdata.search(/2/i) >=0) { document.form1.mm2.checked = 1 } else { document.form1.mm2.checked = 0 };
    if (xSrcdata.search(/3/i) >=0) { document.form1.mm3.checked = 1 } else { document.form1.mm3.checked = 0 };
    if (xSrcdata.search(/4/i) >=0) { document.form1.mm4.checked = 1 } else { document.form1.mm4.checked = 0 };
    if (xSrcdata.search(/F/i) >=0) { document.form1.ff.checked = 1 } else { document.form1.ff.checked = 0 };
    if (xSrcdata.search(/X/i) >=0) { document.form1.xph.checked = 1 } else { document.form1.xph.checked = 0 };
    if (xSrcdata.search(/P/i) >=0) { document.form1.cpsi.checked = 1 } else { document.form1.cpsi.checked = 0 };
    if (xSrcdata.search(/H/i) >=0) { document.form1.fci.checked = 1 } else { document.form1.fci.checked = 0 };
    if (xSrcdata.search(/L/i) >=0) { document.form1.lm.checked = 1 } else { document.form1.lm.checked = 0 };
    if (xSrcdata.search(/A/i) >=0) { document.form1.ab.checked = 1 } else { document.form1.ab.checked = 0 };

    document.form1.intro.value = dataToSend[19] ;
    document.form1.features.value = dataToSend[20] ;
    document.form1.traps.value = dataToSend[21] ;
    document.form1.hooks.value = dataToSend[22] ;
    document.form1.randenc.value = dataToSend[23] ;
    // document.form1.advseed.value = dataToSend[24] ;

    alert("Save Value Loaded");
    sendData()
  }
}

function sendData() {

  var dataToSend = [];
  dataToSend.push(document.form1.halllength.value);
  dataToSend.push(document.form1.dungeonrooms.value);
  dataToSend.push(document.form1.hallways.value);
  dataToSend.push(document.form1.size.value);
  dataToSend.push(document.form1.exits.value);
  dataToSend.push(document.form1.secretdoors.value);
  dataToSend.push(document.form1.portcullises.value);
  dataToSend.push(document.form1.skin.value);
  dataToSend.push(document.form1.startroomtype.value);
  dataToSend.push(document.form1.startexits.value);
  dataToSend.push(document.form1.grid.value);
  dataToSend.push(xSeed);
  dataToSend.push(document.form1.level.value);
  dataToSend.push(document.form1.map.value);
  dataToSend.push(xSeed2);
  dataToSend.push(document.form1.details.value);
  dataToSend.push(xFilter);
  dataToSend.push(document.form1.theme.value);

  alert(dataToSend)
  var srcdata = "";

  if (document.form1.corebooks.checked == 1) { srcdata += document.form1.corebooks.value };
  if (document.form1.mm2.checked == 1) { srcdata += document.form1.mm2.value };
  if (document.form1.mm3.checked == 1) { srcdata += document.form1.mm3.value };
  if (document.form1.mm4.checked == 1) { srcdata += document.form1.mm4.value };
  if (document.form1.ff.checked == 1) { srcdata += document.form1.ff.value };
  if (document.form1.xph.checked == 1) { srcdata += document.form1.xph.value };
  if (document.form1.cpsi.checked == 1) { srcdata += document.form1.cpsi.value };
  if (document.form1.fci.checked == 1) { srcdata += document.form1.fci.value };
  if (document.form1.lm.checked == 1) { srcdata += document.form1.lm.value };
  if (document.form1.ab.checked == 1) { srcdata += document.form1.ab.value };

  dataToSend.push(srcdata);

  dataToSend.push(document.form1.intro.value);
  dataToSend.push(document.form1.features.value);
  dataToSend.push(document.form1.traps.value);
  dataToSend.push(document.form1.hooks.value);
  dataToSend.push(document.form1.randenc.value);
  // dataToSend.push(document.form1.advseed.value);

  // alert (srcdata);

  //corebooks
  //mm2
  //mm3
  //mm4
  //ff
  //xph
  //cpsi
  //fci
  //lm

  // Initialize packed or we get the word 'undefined'
  var packed = "";
  for (i = 0; (i < dataToSend.length); i++) {
    if (i > 0) {
      packed += ",";
    }
    packed += escape(dataToSend[i]);
  }
  //alert("mapper.htm?" + packed);
  //  window.location = "mapper.htm?" + packed;
  var pagedisp = "<a id=\"" + packed + "\"><b id=\"ButtonIframe\">GENERATE</b></a>";
  alert(pagedisp)

  // display("generate", pagedisp);
}

$(document).on("click", "#ButtonIframe", function() {
  var value = "mapper.htm?" + $("#generate").children("a").attr("id");
  // alert("O Link é "+value)
  $("#IframeMapLoad").attr("src", value)
})
