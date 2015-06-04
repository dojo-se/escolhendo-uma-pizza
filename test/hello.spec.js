var assert = require('assert');
var pessoas = require('../src/hello');

describe('Montagem de Lista de Notas', function(){
	it('deve montar uma lista de sabores para Roberto', function() {
		assert.deepEqual(pessoas.notas("Roberto",[4,5,4,5,4,3]),
			{ 'Roberto' :
				{
					'Marguerita' : 4,
					'Quatro queijos' : 5,
					'Escarola' : 4,
					'Portuguesa' : 5,
					'Frango+Catupiry' : 4,
					'Napolitana' : 3
				}
			}
		);
	});

	it('deve montar uma lista de sabores para Erick', function() {
		assert.deepEqual(pessoas.notas("Erick",[1,2,3,4,5,5]),
			{ 'Erick' :
				{
					'Marguerita' : 1,
					'Quatro queijos' : 2,
					'Escarola' : 3,
					'Portuguesa' : 4,
					'Frango+Catupiry' : 5,
					'Napolitana' : 5
				}
			}
		);
	});
});

describe('Escolhendo o sabor de Pizza', function() {
	// Para poder acessar no beforeEach e nos 'its' da vida
	// var nomeVariavel;
	var notas;
	var jackson;
	var raphael;
	var kley;
	var fernando;

	beforeEach(function() {
		 jackson = pessoas.notas("Jackson", [1,1,2,3,4,5]);
		 raphael = pessoas.notas("Raphael", [1,2,3,4,5,5]);
		 kley = pessoas.notas("Kley", [5,4,3,2,1,1]);
		 fernando = pessoas.notas("Fernando", [5,5,4,3,2,1]);
		 notas = [jackson, raphael, kley, fernando];
	});

	it('Deve Retornar Unico Parceiro', function() {
		assert.deepEqual(pessoas.encontrarAmigo(jackson, [raphael]), raphael);
	});

	it('Deve Retornar Unico Parceiro dentre 2 amigos', function() {
		assert.deepEqual(pessoas.encontrarAmigo(jackson, [fernando,raphael]), raphael);
	});
})
