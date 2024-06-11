const { Router } = require("express");
const UsersController = require('../controllers/UsersController');

const controller = new UsersController();
const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUsers);
//router.delete("/:id", controller.deleteUsers);

module.exports = router;