/*
    Exemplo:
    {
        primeiraPropriedade: 'valor',
        segundaPropriedade: 'valor'
    }
    */

const usuarios = [
    {
        nome: 'Mateus',
        email:'mateus@gospel.com'
    },
    { 
        nome: 'Marcos',
        email:'marcos@gospel.com'
    },
    {
        nome: 'Lucas',
        email:'lucas@gospel.com'
    },
    {
        nome: 'Joao',
        email:'joao@gospel.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario (nome) {
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}