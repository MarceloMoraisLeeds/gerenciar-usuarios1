const usuarios = ['mateus','marcos','lucas','joao'];

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