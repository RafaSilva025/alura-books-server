const fs = require('fs')

function getTodosLivros() {
    JSON.parse( fs.readFileSync("livros.json"))
}

function getLivrosPorID(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id) [0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [ ...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivrosPorID(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrados = livros.filter( livro => livro.id === id)
    fs.writeFileSync("livros.json", JSON.stringify(livroFiltrados))
}

module.exports = {
    getTodosLivros, 
    getLivrosPorID,
    insereLivro,
    modificaLivro,
    deletaLivrosPorID
}