const { getTodosLivros, getLivrosPorID } = require("../servicos/livro")

function getLivros( req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro( req, res) {
    try {
        req.params.id
        const livros = getLivrosPorID(id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros, 
    getLivro
}