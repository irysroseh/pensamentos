const express = require("express");

const ThoughtsController = require("../controllers/ThoughtsController");

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);
router.get("/thoughts-create", ThoughtsController.registerThought);
router.post("/thoughts/create", ThoughtsController.createThought);

router.get("/thoughts/edit/:id", ThoughtsController.showPageEditThought);
router.post("/thoughts/update/:id", ThoughtsController.updateThought);

router.post("/thoughts/remove/:id", ThoughtsController.deleteThought);


module.exports = router;
