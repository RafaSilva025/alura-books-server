const { Router } = require("express");
const { getLivros } = require("../controllers/livros");

const router = Router()


router.get("/", getLivros)
router.post("/", (req, res) => {
    res.send("você fez um POST livros")
})
router.patch("/", (req, res) => {
    res.send("você fez um POST livros")
})
router.delete("/", (req, res) => {
    res.send("você fez um POST livros")
})
module.exports = router