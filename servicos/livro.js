const fs = require('fs')

function getTodosLivros() {
    JSON.parse( fs.readFileSync("livros.json"))
}

function getLivrosPorID(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id) [0]
}

module.exports = {
    getTodosLivros, 
    getLivrosPorID
}