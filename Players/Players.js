$(document).on('click', '.dropdown-menu-selecionavel li a', function() {
    $(this).parent().parent().parent().children("button").children("b").text($(this).text());
    $(this).parent().parent().parent().children("button").val($(this).text());
});

$(document).on('click', '#deleta', function() {
    $(this).parent().parent().parent().remove();
});

$(document).on('click', '#ApagarPlayer', function() {
  $('#ModalRemoverPlayer').modal('show');
});

$(document).on('click', '#ConfirmaApagarPlayer', function() {
	var idParaApagar = $("#IDPlayer").val();
	// delete global_personagens_campanha[idParaApagar];

	firebase.database().ref('personagens/').update({
		[idParaApagar]: null
	}).then(function() {
		// saveThisCampaignOnline()
	}).catch(function(error) {
		console.log({error});
	});

	$('#ModalRemoverPlayer').modal('hide');
	$('#ModalAdicionarPlayer').modal('hide');
	$('#'+idParaApagar+'CabecalhoButton').remove();
	$('#collapsePlayer'+idParaApagar).remove();
});

$(document).on('click', '#novoPlayer', function() {
  $("#addPlayerModalDivContainer").empty();
  $("#addPlayerModalDivContainer").load('Players/AddPlayers.html div[id="addPlayerModalDiv"]');
});

$(document).on('click', '#NovaPericia', function() {

  var stringNovaPericia = `
    <li class="btn-group" style="width: 100%;padding-right: 5px;padding-bottom: 5px;">
		<button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 100%;padding-top: 4px;padding-bottom: 4px;font-size: 13px !important;text-transform: Capitalize;">
			<b>Pericia</b>
			<span class="caret"></span>
		</button>
		<ul class="dropdown-menu dropdown-menu-selecionavel" style="text-transform: Capitalize">
			<input onkeyup="filtrarEste(this)" type="text" class="custom-select" style="background: none;width: 96%;margin-left: 2%;margin-right: 2%;border-radius: 3px;">
			<li role="separator" class="divider"></li>
			<li><a id="deleta" href="#">Deletar Perícia</a></li>
			<li role="separator" class="divider"></li>
			<li><a href="#">Acrobacia</a></li>
			<li><a href="#">Arcanismo</a></li>
			<li><a href="#">Atletismo</a></li>
			<li><a href="#">Atuação</a></li>
			<li><a href="#">Blefar</a></li>
			<li><a href="#">Furtividade</a></li>
			<li><a href="#">História</a></li>
			<li><a href="#">Intimidação</a></li>
			<li><a href="#">Intução</a></li>
			<li><a href="#">Investigação</a></li>
			<li><a href="#">Lidar com Animais</a></li>
			<li><a href="#">Medicina</a></li>
			<li><a href="#">Natureza</a></li>
			<li><a href="#">Percepção</a></li>
			<li><a href="#">Persuasão</a></li>
			<li><a href="#">Prestidigitação</a></li>
			<li><a href="#">Religião</a></li>
			<li><a href="#">Sobrevivência</a></li>
		</ul>
    </li>`;
  $("#ulPericias").append(stringNovaPericia);
});

$(document).on('click', '#NovoItem', function() {

  var stringNovoItem =
  "<li class=\"btn-group\" style=\"width: 100%;padding-right: 5px;padding-bottom: 5px;\">"
    +"<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;font-size: 13px !important;text-transform: Capitalize;\">"
      +"<b>Item Mágico</b>"
      +"<span class=\"caret\"></span>"
    +"</button>"
    +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\" style=\"text-transform: Capitalize\">"
      +"<input onkeyup=\"filtrarEste(this)\" type=\"text\" class=\"custom-select\" style=\"background: none;width: 96%;margin-left: 2%;margin-right: 2%;border-radius: 3px;\">"
      +"<li role=\"separator\" class=\"divider\"></li>"
      +"<li><a id=\"deleta\" href=\"#\">Deletar Item</a></li>"
      +"<li role=\"separator\" class=\"divider\"></li>"
      +"<li><a href=\"#\">Another action</a></li>"
      +"<li><a href=\"#\">Something else here</a></li>"
      +"<li><a href=\"#\">Separated link</a></li>"
    +"</ul>"
  +"</li>";
  $("#ulItens").append(stringNovoItem);

});

$(document).on('click', '#NovaMagia', function() {

  var stringNovaMagias =
  "<li class=\"btn-group\" style=\"width: 100%;padding-right: 5px;padding-bottom: 5px;\">"
    +"<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;font-size: 13px !important;text-transform: Capitalize;\">"
      +"<b>Magia</b>"
      +"<span class=\"caret\"></span>"
    +"</button>"
    +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\" style=\"text-transform: Capitalize\">"
      +"<input onkeyup=\"filtrarEste(this)\" type=\"text\" class=\"custom-select\" style=\"background: none;width: 96%;margin-left: 2%;margin-right: 2%;border-radius: 3px;\">"
      +"<li role=\"separator\" class=\"divider\"></li>"
      +"<li><a id=\"deleta\" href=\"#\">Deletar Magia</a></li>"
      +"<li role=\"separator\" class=\"divider\"></li>"
      +"<li><a href=\"#\">acalmar emoções</a></li>"
      +"<li><a href=\"#\">adivinhação</a></li>"
      +"<li><a href=\"#\">ajuda</a></li>"
      +"<li><a href=\"#\">alarme</a></li>"
      +"<li><a href=\"#\">aliado planar</a></li>"
      +"<li><a href=\"#\">aljava veloz</a></li>"
      +"<li><a href=\"#\">alterar forma</a></li>"
      +"<li><a href=\"#\">alterar-se</a></li>"
      +"<li><a href=\"#\">amizade animal</a></li>"
      +"<li><a href=\"#\">amizade</a></li>"
      +"<li><a href=\"#\">ampliar plantas</a></li>"
      +"<li><a href=\"#\">âncora planar</a></li>"
      +"<li><a href=\"#\">andar na água</a></li>"
      +"<li><a href=\"#\">animar mortos</a></li>"
      +"<li><a href=\"#\">animar objetos</a></li>"
      +"<li><a href=\"#\">antipatia/simpatia</a></li>"
      +"<li><a href=\"#\">aprimorar habilidade</a></li>"
      +"<li><a href=\"#\">aprisionamento</a></li>"
      +"<li><a href=\"#\">arca secreta de leomund</a></li>"
      +"<li><a href=\"#\">área escorregadia</a></li>"
      +"<li><a href=\"#\">arma elemental</a></li>"
      +"<li><a href=\"#\">arma espiritual</a></li>"
      +"<li><a href=\"#\">arma mágica</a></li>"
      +"<li><a href=\"#\">armadura arcana</a></li>"
      +"<li><a href=\"#\">armadura de agathys</a></li>"
      +"<li><a href=\"#\">arrombar</a></li>"
      +"<li><a href=\"#\">assassino fantasmagórico</a></li>"
      +"<li><a href=\"#\">ataque certeiro</a></li>"
      +"<li><a href=\"#\">ataque visual</a></li>"
      +"<li><a href=\"#\">augúrio</a></li>"
      +"<li><a href=\"#\">aumentar/reduzir</a></li>"
      +"<li><a href=\"#\">aura de pureza</a></li>"
      +"<li><a href=\"#\">aura de vida</a></li>"
      +"<li><a href=\"#\">aura de vitalidade</a></li>"
      +"<li><a href=\"#\">aura mágica de nystul</a></li>"
      +"<li><a href=\"#\">aura sagrada</a></li>"
      +"<li><a href=\"#\">auxílio divino</a></li>"
      +"<li><a href=\"#\">banimento</a></li>"
      +"<li><a href=\"#\">banquete dos heróis</a></li>"
      +"<li><a href=\"#\">barreira de lâminas</a></li>"
      +"<li><a href=\"#\">boca encantada</a></li>"
      +"<li><a href=\"#\">bola de fogo controlável</a></li>"
      +"<li><a href=\"#\">bola de fogo</a></li>"
      +"<li><a href=\"#\">bom fruto</a></li>"
      +"<li><a href=\"#\">bordão místico</a></li>"
      +"<li><a href=\"#\">braços de hadar</a></li>"
      +"<li><a href=\"#\">bruxaria</a></li>"
      +"<li><a href=\"#\">bênção</a></li>"
      +"<li><a href=\"#\">caminhar em árvores</a></li>"
      +"<li><a href=\"#\">caminhar no vento</a></li>"
      +"<li><a href=\"#\">campo antimagia</a></li>"
      +"<li><a href=\"#\">carne para pedra</a></li>"
      +"<li><a href=\"#\">cativar</a></li>"
      +"<li><a href=\"#\">cegueira/surdez</a></li>"
      +"<li><a href=\"#\">chama contínua</a></li>"
      +"<li><a href=\"#\">chama sagrada</a></li>"
      +"<li><a href=\"#\">chicote de espinhos</a></li>"
      +"<li><a href=\"#\">chuva de meteoros</a></li>"
      +"<li><a href=\"#\">clarividência</a></li>"
      +"<li><a href=\"#\">clone</a></li>"
      +"<li><a href=\"#\">coluna de chamas</a></li>"
      +"<li><a href=\"#\">comando</a></li>"
      +"<li><a href=\"#\">compreender idiomas</a></li>"
      +"<li><a href=\"#\">compulsão</a></li>"
      +"<li><a href=\"#\">comunhão com a natureza</a></li>"
      +"<li><a href=\"#\">comunhão</a></li>"
      +"<li><a href=\"#\">cone de frio</a></li>"
      +"<li><a href=\"#\">confusão</a></li>"
      +"<li><a href=\"#\">conhecimento lendário</a></li>"
      +"<li><a href=\"#\">conjurar animais</a></li>"
      +"<li><a href=\"#\">conjurar celestial</a></li>"
      +"<li><a href=\"#\">conjurar elementais menores</a></li>"
      +"<li><a href=\"#\">conjurar elemental</a></li>"
      +"<li><a href=\"#\">conjurar fada</a></li>"
      +"<li><a href=\"#\">conjurar rajada</a></li>"
      +"<li><a href=\"#\">conjurar saraivada</a></li>"
      +"<li><a href=\"#\">conjurar seres da floresta</a></li>"
      +"<li><a href=\"#\">consagrar</a></li>"
      +"<li><a href=\"#\">consertar</a></li>"
      +"<li><a href=\"#\">constrição</a></li>"
      +"<li><a href=\"#\">contato extraplanar</a></li>"
      +"<li><a href=\"#\">contingência</a></li>"
      +"<li><a href=\"#\">contramágica</a></li>"
      +"<li><a href=\"#\">controlar a água</a></li>"
      +"<li><a href=\"#\">controlar o clima</a></li>"
      +"<li><a href=\"#\">convocar familiar</a></li>"
      +"<li><a href=\"#\">convocar montaria</a></li>"
      +"<li><a href=\"#\">convocar relâmpagos</a></li>"
      +"<li><a href=\"#\">cordão de flechas</a></li>"
      +"<li><a href=\"#\">coroa da loucura</a></li>"
      +"<li><a href=\"#\">corrente de relâmpagos</a></li>"
      +"<li><a href=\"#\">crescer espinhos</a></li>"
      +"<li><a href=\"#\">criar alimentos</a></li>"
      +"<li><a href=\"#\">criar chamas</a></li>"
      +"<li><a href=\"#\">criar mortos-vivos</a></li>"
      +"<li><a href=\"#\">criar ou destruir água</a></li>"
      +"<li><a href=\"#\">criar passagem</a></li>"
      +"<li><a href=\"#\">criação</a></li>"
      +"<li><a href=\"#\">cura completa em massa</a></li>"
      +"<li><a href=\"#\">cura completa</a></li>"
      +"<li><a href=\"#\">curar ferimentos em massa</a></li>"
      +"<li><a href=\"#\">curar ferimentos</a></li>"
      +"<li><a href=\"#\">cão fiel de mordenkainen</a></li>"
      +"<li><a href=\"#\">círculo da morte</a></li>"
      +"<li><a href=\"#\">círculo de poder</a></li>"
      +"<li><a href=\"#\">círculo de teletransporte</a></li>"
      +"<li><a href=\"#\">círculo mágico</a></li>"
      +"<li><a href=\"#\">cúpula antivida</a></li>"
      +"<li><a href=\"#\">dança irresistível de otto</a></li>"
      +"<li><a href=\"#\">dedo da morte</a></li>"
      +"<li><a href=\"#\">desejo</a></li>"
      +"<li><a href=\"#\">desintegrar</a></li>"
      +"<li><a href=\"#\">despedaçar</a></li>"
      +"<li><a href=\"#\">despertar</a></li>"
      +"<li><a href=\"#\">despistar</a></li>"
      +"<li><a href=\"#\">destruição banidora</a></li>"
      +"<li><a href=\"#\">destruição cegante</a></li>"
      +"<li><a href=\"#\">destruição colérica</a></li>"
      +"<li><a href=\"#\">destruição estonteante</a></li>"
      +"<li><a href=\"#\">destruição lancinante</a></li>"
      +"<li><a href=\"#\">destruição trovejante</a></li>"
      +"<li><a href=\"#\">detectar magia</a></li>"
      +"<li><a href=\"#\">detectar o bem e mal</a></li>"
      +"<li><a href=\"#\">detectar pensamentos</a></li>"
      +"<li><a href=\"#\">detectar veneno e doença</a></li>"
      +"<li><a href=\"#\">dificultar detecção</a></li>"
      +"<li><a href=\"#\">disco flutuante de tenser</a></li>"
      +"<li><a href=\"#\">disfarçar-se</a></li>"
      +"<li><a href=\"#\">dissipar magia</a></li>"
      +"<li><a href=\"#\">dissipar o bem e mal</a></li>"
      +"<li><a href=\"#\">doença plena</a></li>"
      +"<li><a href=\"#\">dominar besta</a></li>"
      +"<li><a href=\"#\">dominar monstro</a></li>"
      +"<li><a href=\"#\">dominar pessoa</a></li>"
      +"<li><a href=\"#\">druidismo</a></li>"
      +"<li><a href=\"#\">duelo compelido</a></li>"
      +"<li><a href=\"#\">encarnação fantasmagórica</a></li>"
      +"<li><a href=\"#\">encontrar armadilhas</a></li>"
      +"<li><a href=\"#\">encontrar o caminho</a></li>"
      +"<li><a href=\"#\">enfeitiçar pessoa</a></li>"
      +"<li><a href=\"#\">enfraquecer intelecto</a></li>"
      +"<li><a href=\"#\">enviar mensagem</a></li>"
      +"<li><a href=\"#\">escrita ilusória</a></li>"
      +"<li><a href=\"#\">escudo arcano</a></li>"
      +"<li><a href=\"#\">escudo da fé</a></li>"
      +"<li><a href=\"#\">escudo de fogo</a></li>"
      +"<li><a href=\"#\">escuridão</a></li>"
      +"<li><a href=\"#\">esfera congelante de otiluke</a></li>"
      +"<li><a href=\"#\">esfera flamejante</a></li>"
      +"<li><a href=\"#\">esfera resiliente de otiluke</a></li>"
      +"<li><a href=\"#\">espada de mordenkainen</a></li>"
      +"<li><a href=\"#\">espirro ácido</a></li>"
      +"<li><a href=\"#\">espíritos guardiões</a></li>"
      +"<li><a href=\"#\">esquentar metal</a></li>"
      +"<li><a href=\"#\">estabilizar</a></li>"
      +"<li><a href=\"#\">explosão solar</a></li>"
      +"<li><a href=\"#\">fabricar</a></li>"
      +"<li><a href=\"#\">falar com animais</a></li>"
      +"<li><a href=\"#\">falar com os mortos</a></li>"
      +"<li><a href=\"#\">falar com plantas</a></li>"
      +"<li><a href=\"#\">flecha relampejante</a></li>"
      +"<li><a href=\"#\">flecha ácida de melf</a></li>"
      +"<li><a href=\"#\">fogo das fadas</a></li>"
      +"<li><a href=\"#\">fome de hadar</a></li>"
      +"<li><a href=\"#\">forjar morte</a></li>"
      +"<li><a href=\"#\">forma etérea</a></li>"
      +"<li><a href=\"#\">forma gasosa</a></li>"
      +"<li><a href=\"#\">formas animais</a></li>"
      +"<li><a href=\"#\">força fantasmagórica</a></li>"
      +"<li><a href=\"#\">glifo de vigilância</a></li>"
      +"<li><a href=\"#\">globo de invulnerabilidade</a></li>"
      +"<li><a href=\"#\">globos de luz</a></li>"
      +"<li><a href=\"#\">golpe constritor</a></li>"
      +"<li><a href=\"#\">guardião da fé</a></li>"
      +"<li><a href=\"#\">heroísmo</a></li>"
      +"<li><a href=\"#\">identificação</a></li>"
      +"<li><a href=\"#\">idiomas</a></li>"
      +"<li><a href=\"#\">ilusão menor</a></li>"
      +"<li><a href=\"#\">ilusão programada</a></li>"
      +"<li><a href=\"#\">imagem maior</a></li>"
      +"<li><a href=\"#\">imagem silenciosa</a></li>"
      +"<li><a href=\"#\">imobilizar monstro</a></li>"
      +"<li><a href=\"#\">imobilizar pessoa</a></li>"
      +"<li><a href=\"#\">infligir ferimentos</a></li>"
      +"<li><a href=\"#\">inseto gigante</a></li>"
      +"<li><a href=\"#\">inverter a gravidade</a></li>"
      +"<li><a href=\"#\">invisibilidade maior</a></li>"
      +"<li><a href=\"#\">invisibilidade</a></li>"
      +"<li><a href=\"#\">invocação instantânea de drawmij</a></li>"
      +"<li><a href=\"#\">isolamento</a></li>"
      +"<li><a href=\"#\">labirinto</a></li>"
      +"<li><a href=\"#\">lentidão</a></li>"
      +"<li><a href=\"#\">leque cromático</a></li>"
      +"<li><a href=\"#\">levitação</a></li>"
      +"<li><a href=\"#\">ligação telepática de rary</a></li>"
      +"<li><a href=\"#\">limpar a mente</a></li>"
      +"<li><a href=\"#\">localizar animais ou plantas</a></li>"
      +"<li><a href=\"#\">localizar criatura</a></li>"
      +"<li><a href=\"#\">localizar objeto</a></li>"
      +"<li><a href=\"#\">loquacidade</a></li>"
      +"<li><a href=\"#\">lufada de vento</a></li>"
      +"<li><a href=\"#\">luz do dia</a></li>"
      +"<li><a href=\"#\">luz</a></li>"
      +"<li><a href=\"#\">lâmina flamejante</a></li>"
      +"<li><a href=\"#\">malogro</a></li>"
      +"<li><a href=\"#\">mansão magnífica de mordenkainen</a></li>"
      +"<li><a href=\"#\">manto do cruzado</a></li>"
      +"<li><a href=\"#\">marca da punição</a></li>"
      +"<li><a href=\"#\">marca do caçador</a></li>"
      +"<li><a href=\"#\">medo</a></li>"
      +"<li><a href=\"#\">mensageiro animal</a></li>"
      +"<li><a href=\"#\">mensagem</a></li>"
      +"<li><a href=\"#\">mesclar-se às rochas</a></li>"
      +"<li><a href=\"#\">metamorfose verdadeira</a></li>"
      +"<li><a href=\"#\">metamorfose</a></li>"
      +"<li><a href=\"#\">miragem</a></li>"
      +"<li><a href=\"#\">missão</a></li>"
      +"<li><a href=\"#\">modificar memória</a></li>"
      +"<li><a href=\"#\">moldar rochas</a></li>"
      +"<li><a href=\"#\">montaria fantasmagórica</a></li>"
      +"<li><a href=\"#\">mover terra</a></li>"
      +"<li><a href=\"#\">movimentação livre</a></li>"
      +"<li><a href=\"#\">muralha de energia</a></li>"
      +"<li><a href=\"#\">muralha de espinhos</a></li>"
      +"<li><a href=\"#\">muralha de fogo</a></li>"
      +"<li><a href=\"#\">muralha de gelo</a></li>"
      +"<li><a href=\"#\">muralha de pedra</a></li>"
      +"<li><a href=\"#\">muralha de vento</a></li>"
      +"<li><a href=\"#\">muralha prismática</a></li>"
      +"<li><a href=\"#\">mão de bigby</a></li>"
      +"<li><a href=\"#\">mãos flamejantes</a></li>"
      +"<li><a href=\"#\">mãos mágicas</a></li>"
      +"<li><a href=\"#\">mísseis mágicos</a></li>"
      +"<li><a href=\"#\">nevasca</a></li>"
      +"<li><a href=\"#\">nublar</a></li>"
      +"<li><a href=\"#\">nuvem de adagas</a></li>"
      +"<li><a href=\"#\">nuvem incendiária</a></li>"
      +"<li><a href=\"#\">névoa fétida</a></li>"
      +"<li><a href=\"#\">névoa mortal</a></li>"
      +"<li><a href=\"#\">névoa obscurecente</a></li>"
      +"<li><a href=\"#\">olho arcano</a></li>"
      +"<li><a href=\"#\">onda destrutiva</a></li>"
      +"<li><a href=\"#\">onda trovejante</a></li>"
      +"<li><a href=\"#\">oração curativa</a></li>"
      +"<li><a href=\"#\">orbe cromática</a></li>"
      +"<li><a href=\"#\">orientação</a></li>"
      +"<li><a href=\"#\">padrão hipnótico</a></li>"
      +"<li><a href=\"#\">palavra curativa em massa</a></li>"
      +"<li><a href=\"#\">palavra curativa em massa</a></li>"
      +"<li><a href=\"#\">palavra curativa</a></li>"
      +"<li><a href=\"#\">palavra de poder atordoar</a></li>"
      +"<li><a href=\"#\">palavra de poder curar</a></li>"
      +"<li><a href=\"#\">palavra de poder matar</a></li>"
      +"<li><a href=\"#\">palavra de recordação</a></li>"
      +"<li><a href=\"#\">palavra divina</a></li>"
      +"<li><a href=\"#\">parar o tempo</a></li>"
      +"<li><a href=\"#\">passo nebuloso</a></li>"
      +"<li><a href=\"#\">passos longos</a></li>"
      +"<li><a href=\"#\">passos sem pegadas</a></li>"
      +"<li><a href=\"#\">patas de aranha</a></li>"
      +"<li><a href=\"#\">pele de pedra</a></li>"
      +"<li><a href=\"#\">pele de árvore</a></li>"
      +"<li><a href=\"#\">pequena cabana de leomund</a></li>"
      +"<li><a href=\"#\">perdição</a></li>"
      +"<li><a href=\"#\">piscar</a></li>"
      +"<li><a href=\"#\">porta dimensional</a></li>"
      +"<li><a href=\"#\">portal arcano</a></li>"
      +"<li><a href=\"#\">portal</a></li>"
      +"<li><a href=\"#\">praga de insetos</a></li>"
      +"<li><a href=\"#\">praga</a></li>"
      +"<li><a href=\"#\">prestidigitação</a></li>"
      +"<li><a href=\"#\">prisão de energia</a></li>"
      +"<li><a href=\"#\">proibição</a></li>"
      +"<li><a href=\"#\">projetar imagem</a></li>"
      +"<li><a href=\"#\">projeção astral</a></li>"
      +"<li><a href=\"#\">proteger fortaleza</a></li>"
      +"<li><a href=\"#\">proteção contra a morte</a></li>"
      +"<li><a href=\"#\">proteção contra energia</a></li>"
      +"<li><a href=\"#\">proteção contra lâminas</a></li>"
      +"<li><a href=\"#\">proteção contra o bem e mal</a></li>"
      +"<li><a href=\"#\">proteção contra veneno</a></li>"
      +"<li><a href=\"#\">purificar alimentos</a></li>"
      +"<li><a href=\"#\">queda suave</a></li>"
      +"<li><a href=\"#\">raio adoecente</a></li>"
      +"<li><a href=\"#\">raio ardente</a></li>"
      +"<li><a href=\"#\">raio de bruxa</a></li>"
      +"<li><a href=\"#\">raio de fogo</a></li>"
      +"<li><a href=\"#\">raio de gelo</a></li>"
      +"<li><a href=\"#\">raio do enfraquecimento</a></li>"
      +"<li><a href=\"#\">raio guiador</a></li>"
      +"<li><a href=\"#\">raio lunar</a></li>"
      +"<li><a href=\"#\">raio solar</a></li>"
      +"<li><a href=\"#\">rajada de veneno</a></li>"
      +"<li><a href=\"#\">rajada mística</a></li>"
      +"<li><a href=\"#\">rajada prismática</a></li>"
      +"<li><a href=\"#\">recipiente arcano</a></li>"
      +"<li><a href=\"#\">recuo acelerado</a></li>"
      +"<li><a href=\"#\">reencarnação</a></li>"
      +"<li><a href=\"#\">reflexos</a></li>"
      +"<li><a href=\"#\">regeneração</a></li>"
      +"<li><a href=\"#\">relâmpago</a></li>"
      +"<li><a href=\"#\">remover maldição</a></li>"
      +"<li><a href=\"#\">repouso tranquilo</a></li>"
      +"<li><a href=\"#\">repreensão infernal</a></li>"
      +"<li><a href=\"#\">resistência</a></li>"
      +"<li><a href=\"#\">respirar na água</a></li>"
      +"<li><a href=\"#\">ressurreição verdadeira</a></li>"
      +"<li><a href=\"#\">ressurreição</a></li>"
      +"<li><a href=\"#\">restauração maior</a></li>"
      +"<li><a href=\"#\">restauração menor</a></li>"
      +"<li><a href=\"#\">reviver os mortos</a></li>"
      +"<li><a href=\"#\">revivificar</a></li>"
      +"<li><a href=\"#\">riso histérico de tasha</a></li>"
      +"<li><a href=\"#\">rogar maldição</a></li>"
      +"<li><a href=\"#\">salto</a></li>"
      +"<li><a href=\"#\">santuário particular de mordenkainen</a></li>"
      +"<li><a href=\"#\">santuário</a></li>"
      +"<li><a href=\"#\">saraivada de espinhos</a></li>"
      +"<li><a href=\"#\">semiplano</a></li>"
      +"<li><a href=\"#\">sentido bestial</a></li>"
      +"<li><a href=\"#\">servo invisível</a></li>"
      +"<li><a href=\"#\">sexto sentido</a></li>"
      +"<li><a href=\"#\">silêncio</a></li>"
      +"<li><a href=\"#\">similaridade</a></li>"
      +"<li><a href=\"#\">simulacro</a></li>"
      +"<li><a href=\"#\">sinal de esperança</a></li>"
      +"<li><a href=\"#\">sonho</a></li>"
      +"<li><a href=\"#\">sono</a></li>"
      +"<li><a href=\"#\">sugestão em massa</a></li>"
      +"<li><a href=\"#\">sugestão</a></li>"
      +"<li><a href=\"#\">sussurros dissonantes</a></li>"
      +"<li><a href=\"#\">símbolo</a></li>"
      +"<li><a href=\"#\">taumaturgia</a></li>"
      +"<li><a href=\"#\">teia</a></li>"
      +"<li><a href=\"#\">telecinésia</a></li>"
      +"<li><a href=\"#\">telepatia</a></li>"
      +"<li><a href=\"#\">teletransporte por árvores</a></li>"
      +"<li><a href=\"#\">teletransporte</a></li>"
      +"<li><a href=\"#\">tempestade da vingança</a></li>"
      +"<li><a href=\"#\">tempestade de fogo</a></li>"
      +"<li><a href=\"#\">tempestade de gelo</a></li>"
      +"<li><a href=\"#\">tentáculos negros de evard</a></li>"
      +"<li><a href=\"#\">terremoto</a></li>"
      +"<li><a href=\"#\">terreno alucinógeno</a></li>"
      +"<li><a href=\"#\">toque arrepiante</a></li>"
      +"<li><a href=\"#\">toque chocante</a></li>"
      +"<li><a href=\"#\">toque vampírico</a></li>"
      +"<li><a href=\"#\">tranca arcana</a></li>"
      +"<li><a href=\"#\">truque de corda</a></li>"
      +"<li><a href=\"#\">tsunami</a></li>"
      +"<li><a href=\"#\">velocidade</a></li>"
      +"<li><a href=\"#\">ver o invisível</a></li>"
      +"<li><a href=\"#\">viagem planar</a></li>"
      +"<li><a href=\"#\">vidência</a></li>"
      +"<li><a href=\"#\">vinha esmagadora</a></li>"
      +"<li><a href=\"#\">visão da verdade</a></li>"
      +"<li><a href=\"#\">visão no escuro</a></li>"
      +"<li><a href=\"#\">vitalidade falsa</a></li>"
      +"<li><a href=\"#\">voo</a></li>"
      +"<li><a href=\"#\">vínculo protetor</a></li>"
      +"<li><a href=\"#\">zombaria viciosa</a></li>"
      +"<li><a href=\"#\">zona da verdade</a></li>"
    +"</ul>"
  +"</li>";
  $("#ulMagias").append(stringNovaMagias);

});

$(document).on('change', '#listaStatusPlayer li input:nth-child(4)', function() { //FUNCAO PARA ATUALIZAR BONIFICACAO DA SEGUNDA COLUNA
    var valorCampo = $(this).val();
    var nomeCampo = $(this).prev().prev().text();
    if (valorCampo >= 1 && valorCampo <= 1) {
      $(this).next().val(-5);
    } if (valorCampo >= 2 && valorCampo <= 3) {
      $(this).next().val(-4);
    } if (valorCampo >= 4 && valorCampo <= 5) {
      $(this).next().val(-3);
    } if (valorCampo >= 6 && valorCampo <= 7) {
      $(this).next().val(-2);
    } if (valorCampo >= 8 && valorCampo <= 9) {
      $(this).next().val(-1);
    } if (valorCampo >= 10 && valorCampo <= 11) {
      $(this).next().val(0);
    } if (valorCampo >= 12 && valorCampo <= 13) {
      $(this).next().val(1);
    } if (valorCampo >= 14 && valorCampo <= 15) {
      $(this).next().val(2);
    } if (valorCampo >= 16 && valorCampo <= 17) {
      $(this).next().val(3);
    } if (valorCampo >= 18 && valorCampo <= 19) {
      $(this).next().val(4);
    } if (valorCampo >= 20 && valorCampo <= 21) {
      $(this).next().val(5);
    } if (valorCampo >= 22 && valorCampo <= 23) {
      $(this).next().val(6);
    } if (valorCampo >= 24 && valorCampo <= 25) {
      $(this).next().val(7);
    } if (valorCampo >= 26 && valorCampo <= 27) {
      $(this).next().val(8);
    } if (valorCampo >= 28 && valorCampo <= 29) {
      $(this).next().val(9);
    } if (valorCampo >= 30 && valorCampo <= 30) {
      $(this).next().val(10);
    }
});

$(document).on('change', '#listaStatusPlayer li input:nth-child(3)', function() { //FUNCAO PARA ATUALIZAR BONIFICACAO DA PRIMEIRA COLUNA
    var valorCampo = $(this).val();
    var nomeCampo = $(this).prev().text();
    if (valorCampo == "") { valorCampo = 0; }
    var valorTotal = eval("raca"+nomeCampo)+ eval(valorCampo);
    $(this).next().val(valorTotal).trigger( "change" );
});

$(document).on('click', '.botao-nivel li a', function() {
    var val1 = $('#BotaoNivelClasseBase').val();   if (val1 == "") { val1=0;}
    var val2 = $('#BotaoNivelMulticlasse1').val(); if (val2 == "") { val2=0;}
    var val3 = $('#BotaoNivelMulticlasse2').val(); if (val3 == "") { val3=0;}
    var val4 = eval(val1)+eval(val2)+eval(val3);
    if (val4 >= 1 && val4 <= 4) {
      $("#Inputproef").val("+2");
    } if (val4 >= 5 && val4 <= 8) {
      $("#Inputproef").val("+3");
    } if (val4 >= 9 && val4 <= 12) {
      $("#Inputproef").val("+4");
    } if (val4 >= 13 && val4 <= 16) {
      $("#Inputproef").val("+5");
    } if (val4 >= 17 && val4 <= 20) {
      $("#Inputproef").val("+6");
    }
});

var racaFor = 0;
var racaDes = 0;
var racaCon = 0;
var racaInt = 0;
var racaSab = 0;
var racaCar = 0;

$(document).on('click', '.botao-raca li a', function() {  //FUNCAO PARA ADICIONAR BONIFICADORES DE RACA NOS STATUS
    var valorCampo = $(this).text(); //NOME DA RACA

    racaFor = database["Racas"][valorCampo][0];
    racaDes = database["Racas"][valorCampo][1];
    racaCon = database["Racas"][valorCampo][2];
    racaInt = database["Racas"][valorCampo][3];
    racaSab = database["Racas"][valorCampo][4];
    racaCar = database["Racas"][valorCampo][5];

    var somaFor = $("#InputFor1").val();
    var somaDes = $("#InputDes1").val();
    var somaCon = $("#InputCon1").val();
    var somaInt = $("#InputInt1").val();
    var somaSab = $("#InputSab1").val();
    var somaCar = $("#InputCar1").val();

    if (somaFor == "") { somaFor = 0; }
    if (somaDes == "") { somaDes = 0; }
    if (somaCon == "") { somaCon = 0; }
    if (somaInt == "") { somaInt = 0; }
    if (somaSab == "") { somaSab = 0; }
    if (somaCar == "") { somaCar = 0; }

    var totalFor = eval(somaFor) + eval(racaFor);
    var totalDes = eval(somaDes) + eval(racaDes);
    var totalCon = eval(somaCon) + eval(racaCon);
    var totalInt = eval(somaInt) + eval(racaInt);
    var totalSab = eval(somaSab) + eval(racaSab);
    var totalCar = eval(somaCar) + eval(racaCar);

    $("#InputFor2").val( totalFor ).trigger( "change" );
    $("#InputDes2").val( totalDes ).trigger( "change" );
    $("#InputCon2").val( totalCon ).trigger( "change" );
    $("#InputInt2").val( totalInt ).trigger( "change" );
    $("#InputSab2").val( totalSab ).trigger( "change" );
    $("#InputCar2").val( totalCar ).trigger( "change" );
});

$(document).on('click', '#SalvarPlayer', function() {  //FUNCAO PARA SALVAR PERSONAGEM NO BD

	var nomePersonagem = $("#NomePersonagem").val();
	var nomePlayer = $("#NomePlayer").val();
	var racaPlayer = $("#BotaoRaca").val();
	var alinhamentoPlayer = $("#BotaoAlinhamento").val();
	var antecedentesPlayer = $("#BotaoAntecedentes").val();
	var xpPlayer = $("#InputXP").val();
	var classebasePlayer = $("#BotaoClasseBase").val();
	var nivelclassebasePlayer = $("#BotaoNivelClasseBase").val();
	var multiclasse1Player = $("#BotaoMulticlasse1").val();
	var nivelmulticlasse1Player = $("#BotaoNivelMulticlasse1").val();
	var multiclasse2Player = $("#BotaoMulticlasse2").val();
	var nivelmulticlasse2Player = $("#BotaoNivelMulticlasse2").val();
	var forPlayer1 = $("#InputFor1").val();
	var desPlayer1 = $("#InputDes1").val();
	var conPlayer1 = $("#InputCon1").val();
	var intPlayer1 = $("#InputInt1").val();
	var sabPlayer1 = $("#InputSab1").val();
	var carPlayer1 = $("#InputCar1").val();
	var forPlayer2 = $("#InputFor2").val();
	var desPlayer2 = $("#InputDes2").val();
	var conPlayer2 = $("#InputCon2").val();
	var intPlayer2 = $("#InputInt2").val();
	var sabPlayer2 = $("#InputSab2").val();
	var carPlayer2 = $("#InputCar2").val();
	var forPlayer3 = $("#InputFor3").val();
	var desPlayer3 = $("#InputDes3").val();
	var conPlayer3 = $("#InputCon3").val();
	var intPlayer3 = $("#InputInt3").val();
	var sabPlayer3 = $("#InputSab3").val();
	var carPlayer3 = $("#InputCar3").val();
	var hpLeftPlayer = $("#InputHPLeft").val();
	var hpAllPlayer = $("#InputHPAll").val();
	var proefPlayer = $("#Inputproef").val();
	var classeArmPlayer = $("#InputclasseArm").val();
	var inspirPlayer = $("#Inputinspir").val();
	var iniciatPlayer = $("#Inputiniciat").val();
	var deslocPlayer = $("#Inputdesloc").val();
	var tracosPlayer = $("#TextareaTracos").val();
	var ideaisPlayer = $("#TextareaIdeais").val();
	var ligacoesPlayer = $("#TextareaLigacoes").val();
	var defeitosPlayer = $("#TextareaDefeitos").val();
	var ataquesPlayer = $("#TextareaAtaques").val();
	var caracEhabilPlayer = $("#TextareaCarac").val();
	var equipamentosPlayer = $("#TextareaEquip").val();
	var corPlayer = $("#inputcolor").val();
	if ($("#chkFor").is(":checked")) { var chkForPlayer = "Sim"; } else { var chkForPlayer = "Nao"; }
	if ($("#chkDes").is(":checked")) { var chkDesPlayer = "Sim"; } else { var chkDesPlayer = "Nao"; }
	if ($("#chkCon").is(":checked")) { var chkConPlayer = "Sim"; } else { var chkConPlayer = "Nao"; }
	if ($("#chkInt").is(":checked")) { var chkIntPlayer = "Sim"; } else { var chkIntPlayer = "Nao"; }
	if ($("#chkSab").is(":checked")) { var chkSabPlayer = "Sim"; } else { var chkSabPlayer = "Nao"; }
	if ($("#chkCar").is(":checked")) { var chkCarPlayer = "Sim"; } else { var chkCarPlayer = "Nao"; }


	firebase.database().ref('/lastCreatedPlayer').once('value', function(snapshot) {
		var lastPlayerId = snapshot.val();
		var playerId = eval(eval(lastPlayerId) + 1);
		var playerFullId = "Player"+playerId;
		var idPlayer = playerFullId;

		var linhaPAdicionar = [];
		linhaPAdicionar.push(idPlayer);                     //0
		linhaPAdicionar.push(nomePersonagem);               //1
		linhaPAdicionar.push(nomePlayer);                   //2
		linhaPAdicionar.push(racaPlayer);                   //3
		linhaPAdicionar.push(alinhamentoPlayer);            //4
		linhaPAdicionar.push(antecedentesPlayer);           //5
		linhaPAdicionar.push(xpPlayer);                     //6
		linhaPAdicionar.push(classebasePlayer);             //7
		linhaPAdicionar.push(nivelclassebasePlayer);        //8
		linhaPAdicionar.push(multiclasse1Player);           //9
		linhaPAdicionar.push(nivelmulticlasse1Player);      //10
		linhaPAdicionar.push(multiclasse2Player);           //11
		linhaPAdicionar.push(nivelmulticlasse2Player);      //12
		linhaPAdicionar.push(forPlayer1);                   //13
		linhaPAdicionar.push(desPlayer1);                   //14
		linhaPAdicionar.push(conPlayer1);                   //15
		linhaPAdicionar.push(intPlayer1);                   //16
		linhaPAdicionar.push(sabPlayer1);                   //17
		linhaPAdicionar.push(carPlayer1);                   //18
		linhaPAdicionar.push(forPlayer2);                   //19
		linhaPAdicionar.push(desPlayer2);                   //20
		linhaPAdicionar.push(conPlayer2);                   //21
		linhaPAdicionar.push(intPlayer2);                   //22
		linhaPAdicionar.push(sabPlayer2);                   //23
		linhaPAdicionar.push(carPlayer2);                   //24
		linhaPAdicionar.push(forPlayer3);                   //25
		linhaPAdicionar.push(desPlayer3);                   //26
		linhaPAdicionar.push(conPlayer3);                   //27
		linhaPAdicionar.push(intPlayer3);                   //28
		linhaPAdicionar.push(sabPlayer3);                   //29
		linhaPAdicionar.push(carPlayer3);                   //30
		linhaPAdicionar.push(hpLeftPlayer);                 //31
		linhaPAdicionar.push(hpAllPlayer);                  //32
		linhaPAdicionar.push(proefPlayer);                  //33
		linhaPAdicionar.push(classeArmPlayer);              //34
		linhaPAdicionar.push(inspirPlayer);                 //35
		linhaPAdicionar.push(iniciatPlayer);                //36
		linhaPAdicionar.push(deslocPlayer);                 //37
		linhaPAdicionar.push(tracosPlayer);                 //38
		linhaPAdicionar.push(ideaisPlayer);                 //39
		linhaPAdicionar.push(ligacoesPlayer);               //40
		linhaPAdicionar.push(defeitosPlayer);               //41
		linhaPAdicionar.push(ataquesPlayer);                //42
		linhaPAdicionar.push(caracEhabilPlayer);            //43
		linhaPAdicionar.push(equipamentosPlayer);           //44
		linhaPAdicionar.push(corPlayer);                    //45
		linhaPAdicionar.push(chkForPlayer);                 //46
		linhaPAdicionar.push(chkDesPlayer);                 //47
		linhaPAdicionar.push(chkConPlayer);                 //48
		linhaPAdicionar.push(chkIntPlayer);                 //49
		linhaPAdicionar.push(chkSabPlayer);                 //50
		linhaPAdicionar.push(chkCarPlayer);                 //51

		let setlinhaAdicionar = {
			idPlayer,
			nomePersonagem,
			nomePlayer,
			racaPlayer,
			alinhamentoPlayer,
			antecedentesPlayer,
			xpPlayer,
			classebasePlayer,
			nivelclassebasePlayer,
			multiclasse1Player,
			nivelmulticlasse1Player,
			multiclasse2Player,
			nivelmulticlasse2Player,
			forPlayer1,
			desPlayer1,
			conPlayer1,
			intPlayer1,
			sabPlayer1,
			carPlayer1,
			forPlayer2,
			desPlayer2,
			conPlayer2,
			intPlayer2,
			sabPlayer2,
			carPlayer2,
			forPlayer3,
			desPlayer3,
			conPlayer3,
			intPlayer3,
			sabPlayer3,
			carPlayer3,
			hpLeftPlayer,
			hpAllPlayer,
			proefPlayer,
			classeArmPlayer,
			inspirPlayer,
			iniciatPlayer,
			deslocPlayer,
			tracosPlayer,
			ideaisPlayer,
			ligacoesPlayer,
			defeitosPlayer,
			ataquesPlayer,
			caracEhabilPlayer,
			equipamentosPlayer,
			corPlayer,
			chkForPlayer,
			chkDesPlayer,
			chkConPlayer,
			chkIntPlayer,
			chkSabPlayer,
			chkCarPlayer,
		};
		console.log({setlinhaAdicionar});

		var linhaDePericias = SalvaPericias();
		var linhaDeItens = SalvaItens();
		var linhaDeMagias = SalvaMagias();

		global_personagens_campanha = {}
		global_personagens_campanha[idPlayer] = {
			"InfoPlayer": linhaPAdicionar,
			"InfoPericiasPlayer": linhaDePericias,
			"InfoItensPlayer": linhaDeItens,
			"InfoMagiasPlayer": linhaDeMagias
		}
		// console.log(global_personagens_campanha);

		firebase.database().ref('personagens/').update({
			[idPlayer]: global_personagens_campanha[idPlayer]
		}).then(function() {
			firebase.database().ref('/').update({ lastCreatedPlayer: playerId })
			// firebase.database().ref('/').update({ lastCreatedPlayer: playerId })
			saveThisCampaignOnline()
			// alert("Campanha criada com sucesso!")
		}).catch(function(error) {
		// alert("Error: "+ error.message)
		});

		// usuario["CampanhasMestre"][campanha]["Players"]["ListaDePlayers"].push(linhaPAdicionar);
		// AppendNovoPlayer(idPlayer,campanha)

		function SalvaPericias() {
			var numDePericias = 0;
			var linhaDePericias = [];
			linhaDePericias.push(idPlayer);
			linhaDePericias.push(numDePericias);

			$('#ulPericias .btn-group').each(function(){
				if (numDePericias != 0) {
					var nomeDaPericia = $(this).children("button").val();
					linhaDePericias.push(nomeDaPericia);
				}
				numDePericias = numDePericias +1;
			});
			numDePericias = numDePericias -1;

			linhaDePericias[1] = (numDePericias);
			return linhaDePericias;
			// usuario["CampanhasMestre"]["Campanha1"]["Players"]["ListaDePericias"].push(linhaDePericias);
		}

		function SalvaItens() {
			var numDeItens = 0;
			var linhaDeItens = [];
			linhaDeItens.push(idPlayer);
			linhaDeItens.push(numDeItens);

			$('#ulItens .btn-group').each(function(){
				if (numDeItens != 0) {
				var nomeDaPericia = $(this).children("button").val();
				linhaDeItens.push(nomeDaPericia);
				}
				numDeItens = numDeItens +1;
			});
			numDeItens = numDeItens -1;


			linhaDeItens[1] = (numDeItens);
			return linhaDeItens;
			// usuario["CampanhasMestre"]["Campanha1"]["Players"]["ListaDeItens"].push(linhaDeItens);
		}
		function SalvaMagias() {
			var numDeMagias = 0;
			var linhaDeMagias = [];
			linhaDeMagias.push(idPlayer);
			linhaDeMagias.push(numDeMagias);

			$('#ulMagias .btn-group').each(function(){
				if (numDeMagias != 0) {
				var nomeDaPericia = $(this).children("button").val();
				linhaDeMagias.push(nomeDaPericia);
				}
				numDeMagias = numDeMagias +1;
			});
			numDeMagias = numDeMagias -1;


			linhaDeMagias[1] = (numDeMagias);
			return linhaDeMagias;
			// usuario["CampanhasMestre"]["Campanha1"]["Players"]["ListaDeMagias"].push(linhaDeMagias);
		}
	})
});

$(document).on('click', '#SalvarEdicaoPlayer', function() {  //FUNCAO PARA SALVAR EDICOES NO PERSONAGEM

    var idPlayer = $("#IDPlayer").val();
    var nomePersonagem = $("#NomePersonagem").val();
    var nomePlayer = $("#NomePlayer").val();
    var racaPlayer = $("#BotaoRaca").val();
    var alinhamentoPlayer = $("#BotaoAlinhamento").val();
    var antecedentesPlayer = $("#BotaoAntecedentes").val();
    var xpPlayer = $("#InputXP").val();
    var classebasePlayer = $("#BotaoClasseBase").val();
    var nivelclassebasePlayer = $("#BotaoNivelClasseBase").val();
    var multiclasse1Player = $("#BotaoMulticlasse1").val();
    var nivelmulticlasse1Player = $("#BotaoNivelMulticlasse1").val();
    var multiclasse2Player = $("#BotaoMulticlasse2").val();
    var nivelmulticlasse2Player = $("#BotaoNivelMulticlasse2").val();
    var forPlayer1 = $("#InputFor1").val();
    var desPlayer1 = $("#InputDes1").val();
    var conPlayer1 = $("#InputCon1").val();
    var intPlayer1 = $("#InputInt1").val();
    var sabPlayer1 = $("#InputSab1").val();
    var carPlayer1 = $("#InputCar1").val();
    var forPlayer2 = $("#InputFor2").val();
    var desPlayer2 = $("#InputDes2").val();
    var conPlayer2 = $("#InputCon2").val();
    var intPlayer2 = $("#InputInt2").val();
    var sabPlayer2 = $("#InputSab2").val();
    var carPlayer2 = $("#InputCar2").val();
    var forPlayer3 = $("#InputFor3").val();
    var desPlayer3 = $("#InputDes3").val();
    var conPlayer3 = $("#InputCon3").val();
    var intPlayer3 = $("#InputInt3").val();
    var sabPlayer3 = $("#InputSab3").val();
    var carPlayer3 = $("#InputCar3").val();
    var hpLeftPlayer = $("#InputHPLeft").val();
    var hpAllPlayer = $("#InputHPAll").val();
    var proefPlayer = $("#Inputproef").val();
    var classeArmPlayer = $("#InputclasseArm").val();
    var inspirPlayer = $("#Inputinspir").val();
    var iniciatPlayer = $("#Inputiniciat").val();
    var deslocPlayer = $("#Inputdesloc").val();
    var tracosPlayer = $("#TextareaTracos").val();
    var ideaisPlayer = $("#TextareaIdeais").val();
    var ligacoesPlayer = $("#TextareaLigacoes").val();
    var defeitosPlayer = $("#TextareaDefeitos").val();
    var ataquesPlayer = $("#TextareaAtaques").val();
    var caracEhabilPlayer = $("#TextareaCarac").val();
    var equipamentosPlayer = $("#TextareaEquip").val();
    var corPlayer = $("#inputcolor").val();
    if ($("#chkFor").is(":checked")) { var chkForPlayer = "Sim"; } else { var chkForPlayer = "Nao"; }
    if ($("#chkDes").is(":checked")) { var chkDesPlayer = "Sim"; } else { var chkDesPlayer = "Nao"; }
    if ($("#chkCon").is(":checked")) { var chkConPlayer = "Sim"; } else { var chkConPlayer = "Nao"; }
    if ($("#chkInt").is(":checked")) { var chkIntPlayer = "Sim"; } else { var chkIntPlayer = "Nao"; }
    if ($("#chkSab").is(":checked")) { var chkSabPlayer = "Sim"; } else { var chkSabPlayer = "Nao"; }
    if ($("#chkCar").is(":checked")) { var chkCarPlayer = "Sim"; } else { var chkCarPlayer = "Nao"; }


    var campanha = global_userData.CampanhaAtual;
    // var todosPlayers = usuario["CampanhasMestre"]["Campanha1"]["Players"]["ListaDePlayers"];
    var linhaSelecionada;

    // $.each(todosPlayers, function(index, value) {
      // if (idPlayer == todosPlayers[index][0]) {

		let InfoPlayer = global_personagens_campanha[idPlayer]["InfoPlayer"];
			InfoPlayer[1] = (nomePersonagem);               //1
			InfoPlayer[2] = (nomePlayer);                   //2
			InfoPlayer[3] = (racaPlayer);                   //3
			InfoPlayer[4] = (alinhamentoPlayer);            //4
			InfoPlayer[5] = (antecedentesPlayer);           //5
			InfoPlayer[6] = (xpPlayer);                     //6
			InfoPlayer[7] = (classebasePlayer);             //7
			InfoPlayer[8] = (nivelclassebasePlayer);        //8
			InfoPlayer[9] = (multiclasse1Player);           //9
			InfoPlayer[10] = (nivelmulticlasse1Player);      //10
			InfoPlayer[11] = (multiclasse2Player);           //11
			InfoPlayer[12] = (nivelmulticlasse2Player);      //12
			InfoPlayer[13] = (forPlayer1);                   //13
			InfoPlayer[14] = (desPlayer1);                   //14
			InfoPlayer[15] = (conPlayer1);                   //15
			InfoPlayer[16] = (intPlayer1);                   //16
			InfoPlayer[17] = (sabPlayer1);                   //17
			InfoPlayer[18] = (carPlayer1);                   //18
			InfoPlayer[19] = (forPlayer2);                   //19
			InfoPlayer[20] = (desPlayer2);                   //20
			InfoPlayer[21] = (conPlayer2);                   //21
			InfoPlayer[22] = (intPlayer2);                   //22
			InfoPlayer[23] = (sabPlayer2);                   //23
			InfoPlayer[24] = (carPlayer2);                   //24
			InfoPlayer[25] = (forPlayer3);                   //25
			InfoPlayer[26] = (desPlayer3);                   //26
			InfoPlayer[27] = (conPlayer3);                   //27
			InfoPlayer[28] = (intPlayer3);                   //28
			InfoPlayer[29] = (sabPlayer3);                   //29
			InfoPlayer[30] = (carPlayer3);                   //30
			InfoPlayer[31] = (hpLeftPlayer);                 //31
			InfoPlayer[32] = (hpAllPlayer);                  //32
			InfoPlayer[33] = (proefPlayer);                  //33
			InfoPlayer[34] = (classeArmPlayer);              //34
			InfoPlayer[35] = (inspirPlayer);                 //35
			InfoPlayer[36] = (iniciatPlayer);                //36
			InfoPlayer[37] = (deslocPlayer);                 //37
			InfoPlayer[38] = (tracosPlayer);                 //38
			InfoPlayer[39] = (ideaisPlayer);                 //39
			InfoPlayer[40] = (ligacoesPlayer);               //40
			InfoPlayer[41] = (defeitosPlayer);               //41
			InfoPlayer[42] = (ataquesPlayer);                //42
			InfoPlayer[43] = (caracEhabilPlayer);            //43
			InfoPlayer[44] = (equipamentosPlayer);           //44
			InfoPlayer[45] = (corPlayer);                    //45
			InfoPlayer[46] = (chkForPlayer);                 //46
			InfoPlayer[47] = (chkDesPlayer);                 //47
			InfoPlayer[48] = (chkConPlayer);                 //48
			InfoPlayer[49] = (chkIntPlayer);                 //49
			InfoPlayer[50] = (chkSabPlayer);                 //50
			InfoPlayer[51] = (chkCarPlayer);                 //51
		global_personagens_campanha[idPlayer]["InfoPlayer"] = InfoPlayer;


        global_personagens_campanha[idPlayer]["InfoPericiasPlayer"] = SalvaEdicaoPericias();
        global_personagens_campanha[idPlayer]["InfoItensPlayer"] = SalvaEdicaoItens();
        global_personagens_campanha[idPlayer]["InfoMagiasPlayer"] = SalvaEdicaoMagias();

        linhaSelecionada = global_personagens_campanha[idPlayer]["InfoPlayer"];

      // }
    // });


		var stringEditPlayer1 =
		"<b style=\"font-size: 13px;\">"
		+linhaSelecionada[1]+" - HP:"+linhaSelecionada[32]+"/"+linhaSelecionada[31]+" - XP:"+linhaSelecionada[6]
		+"</b>"

		var stringEditPlayer3 =
		"<button style=\"float: right; background-color:"+linhaSelecionada[45]+"\" type=\"button\" class=\"btn btn-primary delPlayerbutton\" onclick=\"alert('teste')\">"
		+"<span class=\"glyphicon glyphicon-certificate\" aria-hidden=\"true\"></span>"
		+"</button>"

		var stringEditPlayer2 =
		"<div class=\"grid-item player-item\">"
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
		+"</div>";
	$("#"+linhaSelecionada[0]+"Cabecalho").empty();
	$("#"+linhaSelecionada[0]+"Body").empty();
	$("#"+linhaSelecionada[0]+"CabecalhoButton button").remove();
	$("#"+linhaSelecionada[0]+"Cabecalho").append(stringEditPlayer1);
	$("#"+linhaSelecionada[0]+"Body").append(stringEditPlayer2);
	$("#"+linhaSelecionada[0]+"CabecalhoButton").append(stringEditPlayer3);

	firebase.database().ref('personagens/').update({
		[idPlayer]: global_personagens_campanha[idPlayer]
	}).then(function() {
		saveThisCampaignOnline()
		alert("Player salvo com sucesso!")
	}).catch(function(error) {
		// alert("Error: "+ error.message)
	});

	function SalvaEdicaoPericias() {
		var numDePericias = 0;
		var linhaDePericias = [];
		linhaDePericias.push(idPlayer);
		linhaDePericias.push(numDePericias);

		$('#ulPericias .btn-group').each(function(){
			if (numDePericias != 0) {
				var nomeDaPericia = $(this).children("button").val();
				linhaDePericias.push(nomeDaPericia);
			}
			numDePericias = numDePericias +1;
		});
		numDePericias = numDePericias -1;


		linhaDePericias[1] = (numDePericias);
		return linhaDePericias;
		// usuario["CampanhasMestre"]["Campanha1"]["Players"]["ListaDePericias"].push(linhaDePericias);
	}
	function SalvaEdicaoItens() {
		var numDeItens = 0;
		var linhaDeItens = [];
		linhaDeItens.push(idPlayer);
		linhaDeItens.push(numDeItens);

		$('#ulItens .btn-group').each(function(){
			if (numDeItens != 0) {
				var nomeDaPericia = $(this).children("button").val();
				linhaDeItens.push(nomeDaPericia);
			}
			numDeItens = numDeItens +1;
		});
		numDeItens = numDeItens -1;


		linhaDeItens[1] = (numDeItens);
		return linhaDeItens;
		// usuario["CampanhasMestre"]["Campanha1"]["Players"]["ListaDeItens"].push(linhaDeItens);
	}
	function SalvaEdicaoMagias() {
		var numDeMagias = 0;
		var linhaDeMagias = [];
		linhaDeMagias.push(idPlayer);
		linhaDeMagias.push(numDeMagias);

		$('#ulMagias .btn-group').each(function(){
			if (numDeMagias != 0) {
				var nomeDaPericia = $(this).children("button").val();
				linhaDeMagias.push(nomeDaPericia);
			}
		numDeMagias = numDeMagias +1;
		});
		numDeMagias = numDeMagias -1;


		linhaDeMagias[1] = (numDeMagias);
		return linhaDeMagias;
		// usuario["CampanhasMestre"]["Campanha1"]["Players"]["ListaDeMagias"].push(linhaDeMagias);
	}
});

var numPlayers = 0;
var idUltimoPlayer = 0;

function AppendNovoPlayer(idPlayer,campanha) {

  // var linhaPlayer = global_personagens_campanha[idPlayer]["InfoPlayer"].length-1;
  var linhaSelecionada = global_personagens_campanha[idPlayer]["InfoPlayer"];

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

function EditarPlayer(ctl) {

  $("#addPlayerModalDivContainer").empty();
  $("#addPlayerModalDivContainer").load('Players/EditPlayers.html div[id="addPlayerModalDiv"]', function() {
    var idPlayer = $(ctl).parent().find(".player-id").text();
    idPlayer = idPlayer.replace('#','');

    var playerSelecionado = global_personagens_campanha[idPlayer]["InfoPlayer"];
    var periciasPlayer = global_personagens_campanha[idPlayer]["InfoPericiasPlayer"];
    var itensPlayer = global_personagens_campanha[idPlayer]["InfoItensPlayer"];
    var magiasPlayer = global_personagens_campanha[idPlayer]["InfoMagiasPlayer"];
    // $.each(todosPlayers, function(index, value) {
      // if (idPlayer == playerSelecionado[0]) {
        $("#IDPlayer").val(playerSelecionado[0]);
        // $("#ApagarPlayer").val(playerSelecionado[0]);
        $("#NomePersonagem").val(playerSelecionado[1]);
        $("#NomePlayer").val(playerSelecionado[2]);
        if (playerSelecionado[3] != "") {
          $("#BotaoRaca").val(playerSelecionado[3]);
          $("#BotaoRaca").children("b").text(playerSelecionado[3]);
        }
        if (playerSelecionado[4] != "") {
          $("#BotaoAlinhamento").val(playerSelecionado[4]);
          $("#BotaoAlinhamento").children("b").text(playerSelecionado[4]);
        }
        if (playerSelecionado[5] != "") {
          $("#BotaoAntecedentes").val(playerSelecionado[5]);
          $("#BotaoAntecedentes").children("b").text(playerSelecionado[5]);
        }
        if (playerSelecionado[6] != "") {
          $("#InputXP").val(playerSelecionado[6]);
        }
        if (playerSelecionado[7] != "") {
          $("#BotaoClasseBase").val(playerSelecionado[7]);
          $("#BotaoClasseBase").children("b").text(playerSelecionado[7]);
        }
        if (playerSelecionado[8] != "") {
          $("#BotaoNivelClasseBase").val(playerSelecionado[8]);
          $("#BotaoNivelClasseBase").children("b").text(playerSelecionado[8]);
        }
        if (playerSelecionado[9] != "") {
          $("#BotaoMulticlasse1").val(playerSelecionado[9]);
          $("#BotaoMulticlasse1").children("b").text(playerSelecionado[9]);
        }
        if (playerSelecionado[10] != "") {
          $("#BotaoNivelMulticlasse1").val(playerSelecionado[10]);
          $("#BotaoNivelMulticlasse1").children("b").text(playerSelecionado[10]);
        }
        if (playerSelecionado[11] != "") {
          $("#BotaoMulticlasse2").val(playerSelecionado[11]);
          $("#BotaoMulticlasse2").children("b").text(playerSelecionado[11]);
        }
        if (playerSelecionado[12] != "") {
          $("#BotaoNivelMulticlasse2").val(playerSelecionado[12]);
          $("#BotaoNivelMulticlasse2").children("b").text(playerSelecionado[12]);
        }
        if (playerSelecionado[13] != "") { $("#InputFor1").val(playerSelecionado[13]); }
        if (playerSelecionado[14] != "") { $("#InputDes1").val(playerSelecionado[14]); }
        if (playerSelecionado[15] != "") { $("#InputCon1").val(playerSelecionado[15]); }
        if (playerSelecionado[16] != "") { $("#InputInt1").val(playerSelecionado[16]); }
        if (playerSelecionado[17] != "") { $("#InputSab1").val(playerSelecionado[17]); }
        if (playerSelecionado[18] != "") { $("#InputCar1").val(playerSelecionado[18]); }
        if (playerSelecionado[19] != "") { $("#InputFor2").val(playerSelecionado[19]); }
        if (playerSelecionado[20] != "") { $("#InputDes2").val(playerSelecionado[20]); }
        if (playerSelecionado[21] != "") { $("#InputCon2").val(playerSelecionado[21]); }
        if (playerSelecionado[22] != "") { $("#InputInt2").val(playerSelecionado[22]); }
        if (playerSelecionado[23] != "") { $("#InputSab2").val(playerSelecionado[23]); }
        if (playerSelecionado[24] != "") { $("#InputCar2").val(playerSelecionado[24]); }
        if (playerSelecionado[25] != "") { $("#InputFor3").val(playerSelecionado[25]); }
        if (playerSelecionado[26] != "") { $("#InputDes3").val(playerSelecionado[26]); }
        if (playerSelecionado[27] != "") { $("#InputCon3").val(playerSelecionado[27]); }
        if (playerSelecionado[28] != "") { $("#InputInt3").val(playerSelecionado[28]); }
        if (playerSelecionado[29] != "") { $("#InputSab3").val(playerSelecionado[29]); }
        if (playerSelecionado[30] != "") { $("#InputCar3").val(playerSelecionado[30]); }
        if (playerSelecionado[31] != "") { $("#InputHPLeft").val(playerSelecionado[31]); }
        if (playerSelecionado[32] != "") { $("#InputHPAll").val(playerSelecionado[32]); }
        if (playerSelecionado[33] != "") { $("#Inputproef").val(playerSelecionado[33]); }
        if (playerSelecionado[34] != "") { $("#InputclasseArm").val(playerSelecionado[34]); }
        if (playerSelecionado[35] != "") { $("#Inputinspir").val(playerSelecionado[35]); }
        if (playerSelecionado[36] != "") { $("#Inputiniciat").val(playerSelecionado[36]); }
        if (playerSelecionado[37] != "") { $("#Inputdesloc").val(playerSelecionado[37]); }
        if (playerSelecionado[38] != "") { $("#TextareaTracos").val(playerSelecionado[38]); }
        if (playerSelecionado[39] != "") { $("#TextareaIdeais").val(playerSelecionado[39]); }
        if (playerSelecionado[40] != "") { $("#TextareaLigacoes").val(playerSelecionado[40]); }
        if (playerSelecionado[41] != "") { $("#TextareaDefeitos").val(playerSelecionado[41]); }
        if (playerSelecionado[42] != "") { $("#TextareaAtaques").val(playerSelecionado[42]); }
        if (playerSelecionado[43] != "") { $("#TextareaCarac").val(playerSelecionado[43]); }
        if (playerSelecionado[44] != "") { $("#TextareaEquip").val(playerSelecionado[44]); }
        if (playerSelecionado[45] != "") {
          $("#inputcolor").css("background-color",playerSelecionado[45]);
          $("#inputcolor").css("border-color", "rgba(0, 0, 0, 0.42)");
          $("#inputcolor").val(playerSelecionado[45]);
        }
        if (playerSelecionado[46] == "Sim") { $("#chkFor").prop("checked",true); }
        if (playerSelecionado[47] == "Sim") { $("#chkDes").prop("checked",true); }
        if (playerSelecionado[48] == "Sim") { $("#chkCon").prop("checked",true); }
        if (playerSelecionado[49] == "Sim") { $("#chkInt").prop("checked",true); }
        if (playerSelecionado[50] == "Sim") { $("#chkSab").prop("checked",true); }
        if (playerSelecionado[51] == "Sim") { $("#chkCar").prop("checked",true); }

      // }

    // });

    // $.each(todasPericias, function(index, value) {
      // if (idPlayer == periciasPlayer[0]) {
        for (var i = 0; i < periciasPlayer[1]; i++) {
          var stringNovaPericia =
          "<li class=\"btn-group\" style=\"width: 100%;padding-right: 5px;padding-bottom: 5px;\">"
            +"<button value=\""+periciasPlayer[i+2]+"\" type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;font-size: 13px !important;text-transform: Capitalize;\">"
              +"<b>"+periciasPlayer[i+2]+"</b>"
              +"<span class=\"caret\"></span>"
            +"</button>"
            +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\" style=\"text-transform: Capitalize\">"
              +"<input onkeyup=\"filtrarEste(this)\" type=\"text\" class=\"custom-select\" style=\"background: none;width: 96%;margin-left: 2%;margin-right: 2%;border-radius: 3px;\">"
              +"<li role=\"separator\" class=\"divider\"></li>"
              +"<li><a id=\"deleta\" href=\"#\">Deletar Perícia</a></li>"
              +"<li role=\"separator\" class=\"divider\"></li>"
              +"<li><a href=\"#\">Acrobacia</a></li>"
              +"<li><a href=\"#\">Arcanismo</a></li>"
              +"<li><a href=\"#\">Atletismo</a></li>"
              +"<li><a href=\"#\">Atuação</a></li>"
              +"<li><a href=\"#\">Blefar</a></li>"
              +"<li><a href=\"#\">Furtividade</a></li>"
              +"<li><a href=\"#\">História</a></li>"
              +"<li><a href=\"#\">Intimidação</a></li>"
              +"<li><a href=\"#\">Intução</a></li>"
              +"<li><a href=\"#\">Investigação</a></li>"
              +"<li><a href=\"#\">Lidar com Animais</a></li>"
              +"<li><a href=\"#\">Medicina</a></li>"
              +"<li><a href=\"#\">Natureza</a></li>"
              +"<li><a href=\"#\">Percepção</a></li>"
              +"<li><a href=\"#\">Persuasão</a></li>"
              +"<li><a href=\"#\">Prestidigitação</a></li>"
              +"<li><a href=\"#\">Religião</a></li>"
              +"<li><a href=\"#\">Sobrevivência</a></li>"
            +"</ul>"
          +"</li>";
          $("#ulPericias").append(stringNovaPericia);
        }
      // }
    // });


    // $.each(todosItens, function(index, value) {
      // if (idPlayer == itensPlayer[0]) {
        for (var i = 0; i < itensPlayer[1]; i++) {
          var stringNovoItem =
          "<li class=\"btn-group\" style=\"width: 100%;padding-right: 5px;padding-bottom: 5px;\">"
            +"<button value=\""+itensPlayer[i+2]+"\" type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;font-size: 13px !important;text-transform: Capitalize;\">"
              +"<b>"+itensPlayer[i+2]+"</b>"
              +"<span class=\"caret\"></span>"
            +"</button>"
            +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\" style=\"text-transform: Capitalize\">"
              +"<input onkeyup=\"filtrarEste(this)\" type=\"text\" class=\"custom-select\" style=\"background: none;width: 96%;margin-left: 2%;margin-right: 2%;border-radius: 3px;\">"
              +"<li role=\"separator\" class=\"divider\"></li>"
              +"<li><a id=\"deleta\" href=\"#\">Deletar Item</a></li>"
              +"<li role=\"separator\" class=\"divider\"></li>"
              +"<li><a href=\"#\">Another action</a></li>"
              +"<li><a href=\"#\">Something else here</a></li>"
              +"<li><a href=\"#\">Separated link</a></li>"
            +"</ul>"
          +"</li>";
          $("#ulItens").append(stringNovoItem);
        }
      // }
    // });

    // $.each(todasMagias, function(index, value) {
      // if (idPlayer == magiasPlayer[0]) {
        for (var i = 0; i < magiasPlayer[1]; i++) {
          var stringNovaMagia =
          "<li class=\"btn-group\" style=\"width: 100%;padding-right: 5px;padding-bottom: 5px;\">"
            +"<button value=\""+magiasPlayer[i+2]+"\" type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;padding-top: 4px;padding-bottom: 4px;font-size: 13px !important;text-transform: Capitalize;\">"
              +"<b>"+magiasPlayer[i+2]+"</b>"
              +"<span class=\"caret\"></span>"
            +"</button>"
            +"<ul class=\"dropdown-menu dropdown-menu-selecionavel\" style=\"text-transform: Capitalize\">"
              +"<input onkeyup=\"filtrarEste(this)\" type=\"text\" class=\"custom-select\" style=\"background: none;width: 96%;margin-left: 2%;margin-right: 2%;border-radius: 3px;\">"
              +"<li role=\"separator\" class=\"divider\"></li>"
              +"<li><a id=\"deleta\" href=\"#\">Deletar Magia</a></li>"
              +"<li role=\"separator\" class=\"divider\"></li>"
              +"<li><a href=\"#\">acalmar emoções</a></li>"
              +"<li><a href=\"#\">adivinhação</a></li>"
              +"<li><a href=\"#\">ajuda</a></li>"
              +"<li><a href=\"#\">alarme</a></li>"
              +"<li><a href=\"#\">aliado planar</a></li>"
              +"<li><a href=\"#\">aljava veloz</a></li>"
              +"<li><a href=\"#\">alterar forma</a></li>"
              +"<li><a href=\"#\">alterar-se</a></li>"
              +"<li><a href=\"#\">amizade animal</a></li>"
              +"<li><a href=\"#\">amizade</a></li>"
              +"<li><a href=\"#\">ampliar plantas</a></li>"
              +"<li><a href=\"#\">âncora planar</a></li>"
              +"<li><a href=\"#\">andar na água</a></li>"
              +"<li><a href=\"#\">animar mortos</a></li>"
              +"<li><a href=\"#\">animar objetos</a></li>"
              +"<li><a href=\"#\">antipatia/simpatia</a></li>"
              +"<li><a href=\"#\">aprimorar habilidade</a></li>"
              +"<li><a href=\"#\">aprisionamento</a></li>"
              +"<li><a href=\"#\">arca secreta de leomund</a></li>"
              +"<li><a href=\"#\">área escorregadia</a></li>"
              +"<li><a href=\"#\">arma elemental</a></li>"
              +"<li><a href=\"#\">arma espiritual</a></li>"
              +"<li><a href=\"#\">arma mágica</a></li>"
              +"<li><a href=\"#\">armadura arcana</a></li>"
              +"<li><a href=\"#\">armadura de agathys</a></li>"
              +"<li><a href=\"#\">arrombar</a></li>"
              +"<li><a href=\"#\">assassino fantasmagórico</a></li>"
              +"<li><a href=\"#\">ataque certeiro</a></li>"
              +"<li><a href=\"#\">ataque visual</a></li>"
              +"<li><a href=\"#\">augúrio</a></li>"
              +"<li><a href=\"#\">aumentar/reduzir</a></li>"
              +"<li><a href=\"#\">aura de pureza</a></li>"
              +"<li><a href=\"#\">aura de vida</a></li>"
              +"<li><a href=\"#\">aura de vitalidade</a></li>"
              +"<li><a href=\"#\">aura mágica de nystul</a></li>"
              +"<li><a href=\"#\">aura sagrada</a></li>"
              +"<li><a href=\"#\">auxílio divino</a></li>"
              +"<li><a href=\"#\">banimento</a></li>"
              +"<li><a href=\"#\">banquete dos heróis</a></li>"
              +"<li><a href=\"#\">barreira de lâminas</a></li>"
              +"<li><a href=\"#\">boca encantada</a></li>"
              +"<li><a href=\"#\">bola de fogo controlável</a></li>"
              +"<li><a href=\"#\">bola de fogo</a></li>"
              +"<li><a href=\"#\">bom fruto</a></li>"
              +"<li><a href=\"#\">bordão místico</a></li>"
              +"<li><a href=\"#\">braços de hadar</a></li>"
              +"<li><a href=\"#\">bruxaria</a></li>"
              +"<li><a href=\"#\">bênção</a></li>"
              +"<li><a href=\"#\">caminhar em árvores</a></li>"
              +"<li><a href=\"#\">caminhar no vento</a></li>"
              +"<li><a href=\"#\">campo antimagia</a></li>"
              +"<li><a href=\"#\">carne para pedra</a></li>"
              +"<li><a href=\"#\">cativar</a></li>"
              +"<li><a href=\"#\">cegueira/surdez</a></li>"
              +"<li><a href=\"#\">chama contínua</a></li>"
              +"<li><a href=\"#\">chama sagrada</a></li>"
              +"<li><a href=\"#\">chicote de espinhos</a></li>"
              +"<li><a href=\"#\">chuva de meteoros</a></li>"
              +"<li><a href=\"#\">clarividência</a></li>"
              +"<li><a href=\"#\">clone</a></li>"
              +"<li><a href=\"#\">coluna de chamas</a></li>"
              +"<li><a href=\"#\">comando</a></li>"
              +"<li><a href=\"#\">compreender idiomas</a></li>"
              +"<li><a href=\"#\">compulsão</a></li>"
              +"<li><a href=\"#\">comunhão com a natureza</a></li>"
              +"<li><a href=\"#\">comunhão</a></li>"
              +"<li><a href=\"#\">cone de frio</a></li>"
              +"<li><a href=\"#\">confusão</a></li>"
              +"<li><a href=\"#\">conhecimento lendário</a></li>"
              +"<li><a href=\"#\">conjurar animais</a></li>"
              +"<li><a href=\"#\">conjurar celestial</a></li>"
              +"<li><a href=\"#\">conjurar elementais menores</a></li>"
              +"<li><a href=\"#\">conjurar elemental</a></li>"
              +"<li><a href=\"#\">conjurar fada</a></li>"
              +"<li><a href=\"#\">conjurar rajada</a></li>"
              +"<li><a href=\"#\">conjurar saraivada</a></li>"
              +"<li><a href=\"#\">conjurar seres da floresta</a></li>"
              +"<li><a href=\"#\">consagrar</a></li>"
              +"<li><a href=\"#\">consertar</a></li>"
              +"<li><a href=\"#\">constrição</a></li>"
              +"<li><a href=\"#\">contato extraplanar</a></li>"
              +"<li><a href=\"#\">contingência</a></li>"
              +"<li><a href=\"#\">contramágica</a></li>"
              +"<li><a href=\"#\">controlar a água</a></li>"
              +"<li><a href=\"#\">controlar o clima</a></li>"
              +"<li><a href=\"#\">convocar familiar</a></li>"
              +"<li><a href=\"#\">convocar montaria</a></li>"
              +"<li><a href=\"#\">convocar relâmpagos</a></li>"
              +"<li><a href=\"#\">cordão de flechas</a></li>"
              +"<li><a href=\"#\">coroa da loucura</a></li>"
              +"<li><a href=\"#\">corrente de relâmpagos</a></li>"
              +"<li><a href=\"#\">crescer espinhos</a></li>"
              +"<li><a href=\"#\">criar alimentos</a></li>"
              +"<li><a href=\"#\">criar chamas</a></li>"
              +"<li><a href=\"#\">criar mortos-vivos</a></li>"
              +"<li><a href=\"#\">criar ou destruir água</a></li>"
              +"<li><a href=\"#\">criar passagem</a></li>"
              +"<li><a href=\"#\">criação</a></li>"
              +"<li><a href=\"#\">cura completa em massa</a></li>"
              +"<li><a href=\"#\">cura completa</a></li>"
              +"<li><a href=\"#\">curar ferimentos em massa</a></li>"
              +"<li><a href=\"#\">curar ferimentos</a></li>"
              +"<li><a href=\"#\">cão fiel de mordenkainen</a></li>"
              +"<li><a href=\"#\">círculo da morte</a></li>"
              +"<li><a href=\"#\">círculo de poder</a></li>"
              +"<li><a href=\"#\">círculo de teletransporte</a></li>"
              +"<li><a href=\"#\">círculo mágico</a></li>"
              +"<li><a href=\"#\">cúpula antivida</a></li>"
              +"<li><a href=\"#\">dança irresistível de otto</a></li>"
              +"<li><a href=\"#\">dedo da morte</a></li>"
              +"<li><a href=\"#\">desejo</a></li>"
              +"<li><a href=\"#\">desintegrar</a></li>"
              +"<li><a href=\"#\">despedaçar</a></li>"
              +"<li><a href=\"#\">despertar</a></li>"
              +"<li><a href=\"#\">despistar</a></li>"
              +"<li><a href=\"#\">destruição banidora</a></li>"
              +"<li><a href=\"#\">destruição cegante</a></li>"
              +"<li><a href=\"#\">destruição colérica</a></li>"
              +"<li><a href=\"#\">destruição estonteante</a></li>"
              +"<li><a href=\"#\">destruição lancinante</a></li>"
              +"<li><a href=\"#\">destruição trovejante</a></li>"
              +"<li><a href=\"#\">detectar magia</a></li>"
              +"<li><a href=\"#\">detectar o bem e mal</a></li>"
              +"<li><a href=\"#\">detectar pensamentos</a></li>"
              +"<li><a href=\"#\">detectar veneno e doença</a></li>"
              +"<li><a href=\"#\">dificultar detecção</a></li>"
              +"<li><a href=\"#\">disco flutuante de tenser</a></li>"
              +"<li><a href=\"#\">disfarçar-se</a></li>"
              +"<li><a href=\"#\">dissipar magia</a></li>"
              +"<li><a href=\"#\">dissipar o bem e mal</a></li>"
              +"<li><a href=\"#\">doença plena</a></li>"
              +"<li><a href=\"#\">dominar besta</a></li>"
              +"<li><a href=\"#\">dominar monstro</a></li>"
              +"<li><a href=\"#\">dominar pessoa</a></li>"
              +"<li><a href=\"#\">druidismo</a></li>"
              +"<li><a href=\"#\">duelo compelido</a></li>"
              +"<li><a href=\"#\">encarnação fantasmagórica</a></li>"
              +"<li><a href=\"#\">encontrar armadilhas</a></li>"
              +"<li><a href=\"#\">encontrar o caminho</a></li>"
              +"<li><a href=\"#\">enfeitiçar pessoa</a></li>"
              +"<li><a href=\"#\">enfraquecer intelecto</a></li>"
              +"<li><a href=\"#\">enviar mensagem</a></li>"
              +"<li><a href=\"#\">escrita ilusória</a></li>"
              +"<li><a href=\"#\">escudo arcano</a></li>"
              +"<li><a href=\"#\">escudo da fé</a></li>"
              +"<li><a href=\"#\">escudo de fogo</a></li>"
              +"<li><a href=\"#\">escuridão</a></li>"
              +"<li><a href=\"#\">esfera congelante de otiluke</a></li>"
              +"<li><a href=\"#\">esfera flamejante</a></li>"
              +"<li><a href=\"#\">esfera resiliente de otiluke</a></li>"
              +"<li><a href=\"#\">espada de mordenkainen</a></li>"
              +"<li><a href=\"#\">espirro ácido</a></li>"
              +"<li><a href=\"#\">espíritos guardiões</a></li>"
              +"<li><a href=\"#\">esquentar metal</a></li>"
              +"<li><a href=\"#\">estabilizar</a></li>"
              +"<li><a href=\"#\">explosão solar</a></li>"
              +"<li><a href=\"#\">fabricar</a></li>"
              +"<li><a href=\"#\">falar com animais</a></li>"
              +"<li><a href=\"#\">falar com os mortos</a></li>"
              +"<li><a href=\"#\">falar com plantas</a></li>"
              +"<li><a href=\"#\">flecha relampejante</a></li>"
              +"<li><a href=\"#\">flecha ácida de melf</a></li>"
              +"<li><a href=\"#\">fogo das fadas</a></li>"
              +"<li><a href=\"#\">fome de hadar</a></li>"
              +"<li><a href=\"#\">forjar morte</a></li>"
              +"<li><a href=\"#\">forma etérea</a></li>"
              +"<li><a href=\"#\">forma gasosa</a></li>"
              +"<li><a href=\"#\">formas animais</a></li>"
              +"<li><a href=\"#\">força fantasmagórica</a></li>"
              +"<li><a href=\"#\">glifo de vigilância</a></li>"
              +"<li><a href=\"#\">globo de invulnerabilidade</a></li>"
              +"<li><a href=\"#\">globos de luz</a></li>"
              +"<li><a href=\"#\">golpe constritor</a></li>"
              +"<li><a href=\"#\">guardião da fé</a></li>"
              +"<li><a href=\"#\">heroísmo</a></li>"
              +"<li><a href=\"#\">identificação</a></li>"
              +"<li><a href=\"#\">idiomas</a></li>"
              +"<li><a href=\"#\">ilusão menor</a></li>"
              +"<li><a href=\"#\">ilusão programada</a></li>"
              +"<li><a href=\"#\">imagem maior</a></li>"
              +"<li><a href=\"#\">imagem silenciosa</a></li>"
              +"<li><a href=\"#\">imobilizar monstro</a></li>"
              +"<li><a href=\"#\">imobilizar pessoa</a></li>"
              +"<li><a href=\"#\">infligir ferimentos</a></li>"
              +"<li><a href=\"#\">inseto gigante</a></li>"
              +"<li><a href=\"#\">inverter a gravidade</a></li>"
              +"<li><a href=\"#\">invisibilidade maior</a></li>"
              +"<li><a href=\"#\">invisibilidade</a></li>"
              +"<li><a href=\"#\">invocação instantânea de drawmij</a></li>"
              +"<li><a href=\"#\">isolamento</a></li>"
              +"<li><a href=\"#\">labirinto</a></li>"
              +"<li><a href=\"#\">lentidão</a></li>"
              +"<li><a href=\"#\">leque cromático</a></li>"
              +"<li><a href=\"#\">levitação</a></li>"
              +"<li><a href=\"#\">ligação telepática de rary</a></li>"
              +"<li><a href=\"#\">limpar a mente</a></li>"
              +"<li><a href=\"#\">localizar animais ou plantas</a></li>"
              +"<li><a href=\"#\">localizar criatura</a></li>"
              +"<li><a href=\"#\">localizar objeto</a></li>"
              +"<li><a href=\"#\">loquacidade</a></li>"
              +"<li><a href=\"#\">lufada de vento</a></li>"
              +"<li><a href=\"#\">luz do dia</a></li>"
              +"<li><a href=\"#\">luz</a></li>"
              +"<li><a href=\"#\">lâmina flamejante</a></li>"
              +"<li><a href=\"#\">malogro</a></li>"
              +"<li><a href=\"#\">mansão magnífica de mordenkainen</a></li>"
              +"<li><a href=\"#\">manto do cruzado</a></li>"
              +"<li><a href=\"#\">marca da punição</a></li>"
              +"<li><a href=\"#\">marca do caçador</a></li>"
              +"<li><a href=\"#\">medo</a></li>"
              +"<li><a href=\"#\">mensageiro animal</a></li>"
              +"<li><a href=\"#\">mensagem</a></li>"
              +"<li><a href=\"#\">mesclar-se às rochas</a></li>"
              +"<li><a href=\"#\">metamorfose verdadeira</a></li>"
              +"<li><a href=\"#\">metamorfose</a></li>"
              +"<li><a href=\"#\">miragem</a></li>"
              +"<li><a href=\"#\">missão</a></li>"
              +"<li><a href=\"#\">modificar memória</a></li>"
              +"<li><a href=\"#\">moldar rochas</a></li>"
              +"<li><a href=\"#\">montaria fantasmagórica</a></li>"
              +"<li><a href=\"#\">mover terra</a></li>"
              +"<li><a href=\"#\">movimentação livre</a></li>"
              +"<li><a href=\"#\">muralha de energia</a></li>"
              +"<li><a href=\"#\">muralha de espinhos</a></li>"
              +"<li><a href=\"#\">muralha de fogo</a></li>"
              +"<li><a href=\"#\">muralha de gelo</a></li>"
              +"<li><a href=\"#\">muralha de pedra</a></li>"
              +"<li><a href=\"#\">muralha de vento</a></li>"
              +"<li><a href=\"#\">muralha prismática</a></li>"
              +"<li><a href=\"#\">mão de bigby</a></li>"
              +"<li><a href=\"#\">mãos flamejantes</a></li>"
              +"<li><a href=\"#\">mãos mágicas</a></li>"
              +"<li><a href=\"#\">mísseis mágicos</a></li>"
              +"<li><a href=\"#\">nevasca</a></li>"
              +"<li><a href=\"#\">nublar</a></li>"
              +"<li><a href=\"#\">nuvem de adagas</a></li>"
              +"<li><a href=\"#\">nuvem incendiária</a></li>"
              +"<li><a href=\"#\">névoa fétida</a></li>"
              +"<li><a href=\"#\">névoa mortal</a></li>"
              +"<li><a href=\"#\">névoa obscurecente</a></li>"
              +"<li><a href=\"#\">olho arcano</a></li>"
              +"<li><a href=\"#\">onda destrutiva</a></li>"
              +"<li><a href=\"#\">onda trovejante</a></li>"
              +"<li><a href=\"#\">oração curativa</a></li>"
              +"<li><a href=\"#\">orbe cromática</a></li>"
              +"<li><a href=\"#\">orientação</a></li>"
              +"<li><a href=\"#\">padrão hipnótico</a></li>"
              +"<li><a href=\"#\">palavra curativa em massa</a></li>"
              +"<li><a href=\"#\">palavra curativa em massa</a></li>"
              +"<li><a href=\"#\">palavra curativa</a></li>"
              +"<li><a href=\"#\">palavra de poder atordoar</a></li>"
              +"<li><a href=\"#\">palavra de poder curar</a></li>"
              +"<li><a href=\"#\">palavra de poder matar</a></li>"
              +"<li><a href=\"#\">palavra de recordação</a></li>"
              +"<li><a href=\"#\">palavra divina</a></li>"
              +"<li><a href=\"#\">parar o tempo</a></li>"
              +"<li><a href=\"#\">passo nebuloso</a></li>"
              +"<li><a href=\"#\">passos longos</a></li>"
              +"<li><a href=\"#\">passos sem pegadas</a></li>"
              +"<li><a href=\"#\">patas de aranha</a></li>"
              +"<li><a href=\"#\">pele de pedra</a></li>"
              +"<li><a href=\"#\">pele de árvore</a></li>"
              +"<li><a href=\"#\">pequena cabana de leomund</a></li>"
              +"<li><a href=\"#\">perdição</a></li>"
              +"<li><a href=\"#\">piscar</a></li>"
              +"<li><a href=\"#\">porta dimensional</a></li>"
              +"<li><a href=\"#\">portal arcano</a></li>"
              +"<li><a href=\"#\">portal</a></li>"
              +"<li><a href=\"#\">praga de insetos</a></li>"
              +"<li><a href=\"#\">praga</a></li>"
              +"<li><a href=\"#\">prestidigitação</a></li>"
              +"<li><a href=\"#\">prisão de energia</a></li>"
              +"<li><a href=\"#\">proibição</a></li>"
              +"<li><a href=\"#\">projetar imagem</a></li>"
              +"<li><a href=\"#\">projeção astral</a></li>"
              +"<li><a href=\"#\">proteger fortaleza</a></li>"
              +"<li><a href=\"#\">proteção contra a morte</a></li>"
              +"<li><a href=\"#\">proteção contra energia</a></li>"
              +"<li><a href=\"#\">proteção contra lâminas</a></li>"
              +"<li><a href=\"#\">proteção contra o bem e mal</a></li>"
              +"<li><a href=\"#\">proteção contra veneno</a></li>"
              +"<li><a href=\"#\">purificar alimentos</a></li>"
              +"<li><a href=\"#\">queda suave</a></li>"
              +"<li><a href=\"#\">raio adoecente</a></li>"
              +"<li><a href=\"#\">raio ardente</a></li>"
              +"<li><a href=\"#\">raio de bruxa</a></li>"
              +"<li><a href=\"#\">raio de fogo</a></li>"
              +"<li><a href=\"#\">raio de gelo</a></li>"
              +"<li><a href=\"#\">raio do enfraquecimento</a></li>"
              +"<li><a href=\"#\">raio guiador</a></li>"
              +"<li><a href=\"#\">raio lunar</a></li>"
              +"<li><a href=\"#\">raio solar</a></li>"
              +"<li><a href=\"#\">rajada de veneno</a></li>"
              +"<li><a href=\"#\">rajada mística</a></li>"
              +"<li><a href=\"#\">rajada prismática</a></li>"
              +"<li><a href=\"#\">recipiente arcano</a></li>"
              +"<li><a href=\"#\">recuo acelerado</a></li>"
              +"<li><a href=\"#\">reencarnação</a></li>"
              +"<li><a href=\"#\">reflexos</a></li>"
              +"<li><a href=\"#\">regeneração</a></li>"
              +"<li><a href=\"#\">relâmpago</a></li>"
              +"<li><a href=\"#\">remover maldição</a></li>"
              +"<li><a href=\"#\">repouso tranquilo</a></li>"
              +"<li><a href=\"#\">repreensão infernal</a></li>"
              +"<li><a href=\"#\">resistência</a></li>"
              +"<li><a href=\"#\">respirar na água</a></li>"
              +"<li><a href=\"#\">ressurreição verdadeira</a></li>"
              +"<li><a href=\"#\">ressurreição</a></li>"
              +"<li><a href=\"#\">restauração maior</a></li>"
              +"<li><a href=\"#\">restauração menor</a></li>"
              +"<li><a href=\"#\">reviver os mortos</a></li>"
              +"<li><a href=\"#\">revivificar</a></li>"
              +"<li><a href=\"#\">riso histérico de tasha</a></li>"
              +"<li><a href=\"#\">rogar maldição</a></li>"
              +"<li><a href=\"#\">salto</a></li>"
              +"<li><a href=\"#\">santuário particular de mordenkainen</a></li>"
              +"<li><a href=\"#\">santuário</a></li>"
              +"<li><a href=\"#\">saraivada de espinhos</a></li>"
              +"<li><a href=\"#\">semiplano</a></li>"
              +"<li><a href=\"#\">sentido bestial</a></li>"
              +"<li><a href=\"#\">servo invisível</a></li>"
              +"<li><a href=\"#\">sexto sentido</a></li>"
              +"<li><a href=\"#\">silêncio</a></li>"
              +"<li><a href=\"#\">similaridade</a></li>"
              +"<li><a href=\"#\">simulacro</a></li>"
              +"<li><a href=\"#\">sinal de esperança</a></li>"
              +"<li><a href=\"#\">sonho</a></li>"
              +"<li><a href=\"#\">sono</a></li>"
              +"<li><a href=\"#\">sugestão em massa</a></li>"
              +"<li><a href=\"#\">sugestão</a></li>"
              +"<li><a href=\"#\">sussurros dissonantes</a></li>"
              +"<li><a href=\"#\">símbolo</a></li>"
              +"<li><a href=\"#\">taumaturgia</a></li>"
              +"<li><a href=\"#\">teia</a></li>"
              +"<li><a href=\"#\">telecinésia</a></li>"
              +"<li><a href=\"#\">telepatia</a></li>"
              +"<li><a href=\"#\">teletransporte por árvores</a></li>"
              +"<li><a href=\"#\">teletransporte</a></li>"
              +"<li><a href=\"#\">tempestade da vingança</a></li>"
              +"<li><a href=\"#\">tempestade de fogo</a></li>"
              +"<li><a href=\"#\">tempestade de gelo</a></li>"
              +"<li><a href=\"#\">tentáculos negros de evard</a></li>"
              +"<li><a href=\"#\">terremoto</a></li>"
              +"<li><a href=\"#\">terreno alucinógeno</a></li>"
              +"<li><a href=\"#\">toque arrepiante</a></li>"
              +"<li><a href=\"#\">toque chocante</a></li>"
              +"<li><a href=\"#\">toque vampírico</a></li>"
              +"<li><a href=\"#\">tranca arcana</a></li>"
              +"<li><a href=\"#\">truque de corda</a></li>"
              +"<li><a href=\"#\">tsunami</a></li>"
              +"<li><a href=\"#\">velocidade</a></li>"
              +"<li><a href=\"#\">ver o invisível</a></li>"
              +"<li><a href=\"#\">viagem planar</a></li>"
              +"<li><a href=\"#\">vidência</a></li>"
              +"<li><a href=\"#\">vinha esmagadora</a></li>"
              +"<li><a href=\"#\">visão da verdade</a></li>"
              +"<li><a href=\"#\">visão no escuro</a></li>"
              +"<li><a href=\"#\">vitalidade falsa</a></li>"
              +"<li><a href=\"#\">voo</a></li>"
              +"<li><a href=\"#\">vínculo protetor</a></li>"
              +"<li><a href=\"#\">zombaria viciosa</a></li>"
              +"<li><a href=\"#\">zona da verdade</a></li>"
            +"</ul>"
          +"</li>";
          $("#ulMagias").append(stringNovaMagia);
        }
      // }
    // });
  });
}

function filtrarEste(ctl) {
	var filter, ul, li, a, i;
	filter = $(ctl).val().toUpperCase();
	a = $(ctl).parent().children("li").children("a");

	for (i = 0; i < a.length; i++) {
		txtValue = a[i].textContent || a[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
		} else {
		if (i==0) {
			a[i].style.display = "";
		}
		if (i!=0) {
			a[i].style.display = "none";
		}
		}
	}
}

function filtrarEsteSemDelete(ctl) {
  var filter, ul, li, a, i;
  // input = $(ctl);
  filter = $(ctl).val().toUpperCase();
  a = $(ctl).parent().children("li").children("a");
  // a = div;

  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function limpar(ctl) {
  var filter, ul, li, a, i;
  filter = $(ctl).val().toUpperCase();
  a = $(ctl).parent().children("li").children("a");
  $(ctl).val("");
  for (i = 0; i < a.length; i++) {
  txtValue = a[i].textContent || a[i].innerText;
  a[i].style.display = "";
  }
}
