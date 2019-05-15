npcDados = {}

$(document).on('click', '#GerarNPC', function() {
  var nome = npcDados["PrimeiroNome"][Math.floor(Math.random() * 20)]+npcDados["SegundoNome"][Math.floor(Math.random() * 20)]+npcDados["TerceiroNome"][Math.floor(Math.random() * 20)];
  nome = nome.toLowerCase().replace(/\b[a-z]/g, function(letter) { return letter.toUpperCase();});
  $("#nomeNPC").empty().append("<b>Nome:</b> "+nome+".");
  $("#caracNPC").empty().append("<b>Caracteristica:</b> "+npcDados["Caracteristica"][Math.floor(Math.random() * 20)]+".");
  $("#idealNPC").empty().append("<b>Ideal:</b> "+npcDados["Ideais"][Math.floor(Math.random() * 20)]+".");
  $("#vincNPC").empty().append("<b>Vínculo:</b> "+npcDados["Vinculos"][Math.floor(Math.random() * 10)]+".");
  $("#falhaNPC").empty().append("<b>Falha:</b> "+npcDados["Falha"][Math.floor(Math.random() * 12)]+".");
  $("#nivelNPC").empty().append("<b>Nível:</b> "+(Math.floor(Math.random() * 20))+".");
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

npcDados["Falha"] = [
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
