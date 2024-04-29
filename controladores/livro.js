const { getTodosLivros, getLivrosPorID, insereLivro, modificaLivro } = require("../servicos/livro")

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

function postLivro ( req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("Livro inserido com Sucesso")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro ( req, res) {
    try {
        const id = req.params.id
        const body = req.body
        res.send("Item modificado com sucesso")

        modificaLivro(body, id)
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros, 
    getLivro,
    postLivro,
    patchLivro
}