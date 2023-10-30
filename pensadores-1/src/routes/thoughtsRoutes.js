const express = require("express")
const ThoughtsController = require("../controllers/ThoughtsController")

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dahsboard)

router.get("/thoughts", ThoughtsController.findALLThoughts);

router.get("/thoughts/:id", ThoughtsController.findOneThoughts);

// Rota responsavel por redirecionar para a página de cadastrar o pensamento
router.get("/thoughts-create", ThoughtsController.registerThought)

router.post("/thoughts", ThoughtsController.createThought);

router.put("/thoughts/:id", ThoughtsController.updateThoughts);

router.delete("/thoughts/:id", ThoughtsController.deleteThoughts);

module.exports = router