//[ID DO PLAYER, RAÇA, ALINHAMENTO, ANTECENDENTES, CLASSE BASE, NIVEL CLASSE BASE, MULTICLASSE 1, NIVEL MULTICLASSE 1,
  // MULTICLASSE 2, NIVEL MULTICLASSE 2, XP DO PLAYER, FOR, DES, CON, SAB, CAR, INT, HP DISPONIVEL, TRACOS DE PERSONALIDADE, IDEAIS,
  // LIGACOES, DEFEITOS, ATAQUES E MAGIAS, CARACTERISTICAS E HABILIDADES, EQUIPAMENTOS E NOTAS]


//Lista de Players

var usuario = {};
usuario["InformacoesdoUsuario"] = {};
usuario["InformacoesdoUsuario"]["CampanhaAtual"] = "Campanha1";
usuario["InformacoesdoUsuario"]["NomeDoUsuario"] = "Admin - Luan";
usuario["InformacoesdeVersao"] = {};
usuario["CampanhasPlayer"] = {};
usuario["CampanhasMestre"] = {};
usuario["CampanhasMestre"]["Campanha1"] = {};
// usuario["CampanhasMestre"]["Campanha2"] = {};
// usuario["CampanhasMestre"]["Campanha3"] = {};
usuario["CampanhasMestre"]["Campanha1"]["Grid"] = {};
usuario["CampanhasMestre"]["Campanha1"]["Encontro"] = {};
usuario["CampanhasMestre"]["Campanha1"]["Contadores"] = {};
usuario["CampanhasMestre"]["Campanha1"]["Cidade"];
usuario["CampanhasMestre"]["Campanha1"]["Mundo"] = {};
usuario["CampanhasMestre"]["Campanha1"]["Mundo"]["Historico"] = {};
usuario["CampanhasMestre"]["Campanha1"]["Mundo"]["MapaAtual"] = {};
usuario["CampanhasMestre"]["Campanha1"]["Dungeon"] = {};
usuario["CampanhasMestre"]["Campanha1"]["Dungeon"]["Nome"] = "";
usuario["CampanhasMestre"]["Campanha1"]["Dungeon"]["Dados"] = {
    map_style: "standard",
    grid: "square",
    dungeon_layout: "square",
    dungeon_size: "dimin",
    add_stairs: "yes",
    room_layout: "scattered",
    room_size: "medium",
    doors: "standard",
    corridor_layout: "errant",
    remove_deadends: "some"
};
usuario["CampanhasMestre"]["Campanha1"]["BlocoDeNotas"] = "<h2><span class=\"text-big\"><strong>Olá! Bem vindo à Página do Mestre do DnD Helper!</strong></span></h2><p><span class=\"text-big\">Aqui você encontrará diversas ferramentas para auxiliar em sua mesa de D&amp;D, e melhorar suas mestragens!</span><br><span class=\"text-big\">Há varias ferramentas para agilizar sua pesquisa de magias, poder gerenciar seu grupo, melhorar os combates do seu personagem, tabelas úteis, grids, e muito mais!</span></p>";
usuario["CampanhasMestre"]["Campanha1"]["Tabela"] = {};
usuario["CampanhasMestre"]["Campanha1"]["Players"] = {};
usuario["CampanhasMestre"]["Campanha1"]["Players"]["ListaDePlayers"] = [];
usuario["CampanhasMestre"]["Campanha1"]["Players"]["ListaDeMagias"] = [];
usuario["CampanhasMestre"]["Campanha1"]["Players"]["ListaDePericias"] = [];
usuario["CampanhasMestre"]["Campanha1"]["Players"]["ListaDeProeficiencias"] = [];
usuario["CampanhasMestre"]["Campanha1"]["Players"]["ListaDeItens"] = [];



// var objetoClasse = Object.keys(database["NPCGerador"]["Possibilidades"][nomeRaca]);
// var randomClasse = (Math.floor(Math.random() * objetoClasse.length));
// var nomeClasse = objetoClasse[randomClasse];

var listaDePlayers = {};
var listaDeMagias = {};
var listaDePericias = {};
var listaDeProeficiencias = {};
var listaDeItens = {};


listaDePlayers["Campanha1"] = [
];

listaDeMagias["Campanha1"] = [
  //[ID DO PLAYER, NUMERO DE MAGIAS SELECIONADAS (X), NOME MAGIA 1, NOME MAGIA 2, NOME MAGIA ..., NOME MAGIA X, ]
];
listaDePericias["Campanha1"] = [
  //[ID DO PLAYER, NUMERO DE MAGIAS SELECIONADAS (X), NOME MAGIA 1, NOME MAGIA 2, NOME MAGIA ..., NOME MAGIA X, ]
];
listaDeProeficiencias["Campanha1"] = [
  //[ID DO PLAYER, NUMERO DE MAGIAS SELECIONADAS (X), NOME MAGIA 1, NOME MAGIA 2, NOME MAGIA ..., NOME MAGIA X, ]
];
listaDeItens["Campanha1"] = [
  //[ID DO PLAYER, NUMERO DE ITENS SELECIONADOS (X), NOME ITENS 1, NOME ITENS 2, NOME ITENS ..., NOME ITENS X, ]
];
