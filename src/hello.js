var notas = function(nome, notas){
	var nomesSabores = ['Marguerita', 'Quatro queijos', 'Escarola', 'Portuguesa', 'Frango+Catupiry', 'Napolitana'];
	// var notasJson =
	// 	{ 'Roberto' :
	// 		{
	// 			'Marguerita' : 4,
	// 			'Quatro queijos' : 5,
	// 			'Escarola' : 4,
	// 			'Portuguesa' : 5,
	// 			'Frango+Catupiry' : 4,
	// 			'Napolitana' : 3
	// 		}
	// 	};
	var notasJson = {};

	notasJson[nome] = {};

	for(var i=0; i<nomesSabores.length; i++) {
		notasJson[nome][nomesSabores[i]] = notas[i];
	}

	return notasJson;
};

var encontrarAmigo = function(eu, amigos){
		var pontuacoes = {};
		for(var i = 0; i < amigos.length; i++){
			var diff = eu
		}
	 return amigos[0];
};

module.exports.notas = notas;
module.exports.encontrarAmigo = encontrarAmigo;
