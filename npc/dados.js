npcDados = {}

$(document).on('click', '#GerarNPC', function() {
  var nome = database["NPCGerador"]["PrimeiroNome"][Math.floor(Math.random() * 20)]+database["NPCGerador"]["SegundoNome"][Math.floor(Math.random() * 20)]+database["NPCGerador"]["TerceiroNome"][Math.floor(Math.random() * 20)];
  nome = nome.toLowerCase().replace(/\b[a-z]/g, function(letter) { return letter.toUpperCase();});
  var objetoRacas = Object.keys(database["NPCGerador"]["Possibilidades"]);
  var randomRaca = (Math.floor(Math.random() * objetoRacas.length));
  var nomeRaca = objetoRacas[randomRaca];
  var objetoClasse = Object.keys(database["NPCGerador"]["Possibilidades"][nomeRaca]);
  var randomClasse = (Math.floor(Math.random() * objetoClasse.length));
  var nomeClasse = objetoClasse[randomClasse];
  var quantNivel = database["NPCGerador"]["Possibilidades"][nomeRaca][nomeClasse].length;
  // alert(database["NPCGerador"]["Possibilidades"][nomeRaca][nomeClasse])
  var randomNivel = (Math.floor(Math.random() * quantNivel));
  // var nomeClasse = objetoRacas[randomClasse];
  $("#nomeNPC").empty().append("<b>Nome:</b> "+nome+".");
  $("#racaNPC").empty().append("<b>Raça:</b> "+nomeRaca+".");
  $("#classeNPC").empty().append("<b>Classe:</b> "+nomeClasse+".");
  $("#forNPC").empty().text(eval(database["NPCGerador"]["Possibilidades"][nomeRaca][nomeClasse][randomNivel][0] + database["Racas"][nomeRaca][0])).trigger( "change" );;
  $("#desNPC").empty().text(eval(database["NPCGerador"]["Possibilidades"][nomeRaca][nomeClasse][randomNivel][1] + database["Racas"][nomeRaca][1])).trigger( "change" );;
  $("#conNPC").empty().text(eval(database["NPCGerador"]["Possibilidades"][nomeRaca][nomeClasse][randomNivel][2] + database["Racas"][nomeRaca][2])).trigger( "change" );;
  $("#intNPC").empty().text(eval(database["NPCGerador"]["Possibilidades"][nomeRaca][nomeClasse][randomNivel][3] + database["Racas"][nomeRaca][3])).trigger( "change" );;
  $("#sabNPC").empty().text(eval(database["NPCGerador"]["Possibilidades"][nomeRaca][nomeClasse][randomNivel][4] + database["Racas"][nomeRaca][4])).trigger( "change" );;
  $("#carNPC").empty().text(eval(database["NPCGerador"]["Possibilidades"][nomeRaca][nomeClasse][randomNivel][5] + database["Racas"][nomeRaca][5])).trigger( "change" );;
  // $("#forBonNPC").empty().text(+1);
  // $("#desBonNPC").empty().text(+1);
  // $("#conBonNPC").empty().text(+2);
  // $("#sabBonNPC").empty().text(+0);
  // $("#carBonNPC").empty().text(+3);
  // $("#intBonNPC").empty().text(+1);
  $("#caracNPC").empty().append("<b>Caracteristica:</b> "+database["NPCGerador"]["Caracteristicas"][Math.floor(Math.random() * 20)]+".");
  $("#idealNPC").empty().append("<b>Ideal:</b> "+database["NPCGerador"]["Ideais"][Math.floor(Math.random() * 20)]+".");
  $("#vincNPC").empty().append("<b>Vínculo:</b> "+database["NPCGerador"]["Vinculos"][Math.floor(Math.random() * 10)]+".");
  $("#falhaNPC").empty().append("<b>Falha:</b> "+database["NPCGerador"]["Falhas"][Math.floor(Math.random() * 12)]+".");
  $("#nivelNPC").empty().append("<b>Nível:</b> "+eval(randomNivel+1)+".");
});

$(document).on('change', '.bonNPC', 'text', function() { //FUNCAO PARA ATUALIZAR BONIFICACAO DA SEGUNDA COLUNA
  // alert("FOI")
    var valorCampo = $(this).text();
    var idCampo = $(this).attr("id");
    var idTarget = idCampo.replace("NPC", "BonNPC");
    if (valorCampo >= 1 && valorCampo <= 1) {
      $("#"+idTarget).text("-5");
    } if (valorCampo >= 2 && valorCampo <= 3) {
      $("#"+idTarget).text("-4");
    } if (valorCampo >= 4 && valorCampo <= 5) {
      $("#"+idTarget).text("-3");
    } if (valorCampo >= 6 && valorCampo <= 7) {
      $("#"+idTarget).text("-2");
    } if (valorCampo >= 8 && valorCampo <= 9) {
      $("#"+idTarget).text("-1");
    } if (valorCampo >= 10 && valorCampo <= 11) {
      $("#"+idTarget).text("+0");
    } if (valorCampo >= 12 && valorCampo <= 13) {
      $("#"+idTarget).text("+1");
    } if (valorCampo >= 14 && valorCampo <= 15) {
      $("#"+idTarget).text("+2");
    } if (valorCampo >= 16 && valorCampo <= 17) {
      $("#"+idTarget).text("+3");
    } if (valorCampo >= 18 && valorCampo <= 19) {
      $("#"+idTarget).text("+4");
    } if (valorCampo >= 20 && valorCampo <= 21) {
      $("#"+idTarget).text("+5");
    } if (valorCampo >= 22 && valorCampo <= 23) {
      $("#"+idTarget).text("+6");
    } if (valorCampo >= 24 && valorCampo <= 25) {
      $("#"+idTarget).text("+7");
    } if (valorCampo >= 26 && valorCampo <= 27) {
      $("#"+idTarget).text("+8");
    } if (valorCampo >= 28 && valorCampo <= 29) {
      $("#"+idTarget).text("+9");
    } if (valorCampo >= 30 && valorCampo <= 30) {
      $("#"+idTarget).text("+10");
    }
});

npcDados["Caracteristica"] = [
["Distraído"],
["Arrogante"],
["Grosseiro"],
["Mastiga algo"],
["Desajeitado"],
["Curioso"],
["Estúpido (Pouco inteligente)"],
["Inquieto e impaciente"],
["Usa palavras erradas com frequência"],
["Amigável"],
["Nervoso"],
["Sempre prevê desgraça"],
["Marcado com cicatrizes"],
["Usa palavras de calúnia, língua presa, ou gagueja"],
["Fala alto ou sussurrando"],
["Vesgo "],
["Olhar distante"],
["Desconfiado"],
["Faz juramentos coloridos"],
["Usa discurso florido ou palavras longas"],
];

npcDados["Ideais"] = [
["Pretenção (qualquer)"],
["Caridade (bom)"],
["Comunidade (leal)"],
["Creatividade (caótico)"],
["Descoberta (qualquer)"],
["Justiça (leal)"],
["Liberdade (caótico)"],
["Gloria (qualquer)"],
["Bem maior (bom)"],
["Ganancia (mau)"],
["Honra (leal)"],
["Independência (caótico)"],
["Conhecimento (neutro)"],
["Vida (bom)"],
["Viva e deixe viver (neutro)"],
["Força (mau)"],
["Nação (qualquer)"],
["Pessoas (neutro)"],
["Poder (mau)"],
["Redenção (qualquer)"]
];

npcDados["Vinculos"] = [
["Objetivo pessoal ou realização"],
["Membros da família "],
["Companheiros ou compatriotas "],
["Benfeitor, patrono ou empregador "],
["Interesse romantico "],
["Lugar especial"],
["Lembrança "],
["Posse de algo valioso "],
["Vingança"],
["Role duas vezes, ignorando rolagens maiores que 10"]
];

npcDados["Falhas"] = [
["Amor proibido ou susceptibilidade romântica"],
["Decadência"],
["Arrogância"],
["Inveja de bens de outra pessoa"],
["Ganância avassaladora"],
["Propenso a raiva"],
["Inimigo poderoso"],
["Fobia específica"],
["História vergonhosa ou escandalosa"],
["Crime secreto ou delito"],
["Porte de conhecimento proibido"],
["Bravura imprudente"]
];

npcDados["PrimeiroNome"] = [
[" "],
[" "],
[" "],
[" "],
["A"],
["Be"],
["De"],
["El"],
["Fa"],
["Jo"],
["Ki"],
["La"],
["Ma"],
["Na"],
["O"],
["Pa"],
["Re"],
["Si"],
["Ta"],
["Va"]
];

npcDados["SegundoNome"] = [
["bar"],
["ched"],
["dell"],
["far"],
["gran"],
["hal"],
["jen"],
["kel"],
["lim"],
["mor"],
["net"],
["penn"],
["quil"],
["rond"],
["sark"],
["shen"],
["tur"],
["vash"],
["yor"],
["zen"]
];

npcDados["TerceiroNome"] = [
[" "],
["a"],
["ac"],
["ai"],
["al"],
["am"],
["an"],
["ar"],
["ea"],
["el"],
["er"],
["ess"],
["ett"],
["ic"],
["id"],
["il"],
["in"],
["is"],
["or"],
["us"]
];
