const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar a funcao de gestao de usuarios', function () {
    it('Validar que posso adicionar um novo nome de usuario na lista', function () {
        // 1. Adicionar um novo usuario na lista de usuarios
        adicionarNovoUsuario({
            nome:  'Maria',
            email: 'maria@gospel.com'
        });
        

        // 2. Retornar a lista de usuarios da caixa de lista de usuarios
        const listaDeUsuarios = retornarUsuarios();

        // 3. Comparar se o novo usuario esta no fim da lista de usuarios
        expect(listaDeUsuarios.at(-1)).to.eql({
            nome: 'Maria',
            email: 'maria@gospel.com'
        });

    });

});