const app = require("express")
const router = app.Router();
const {register, registerValiations} = require("../controllers/userController")
router.post("/register", registerValiations, register);
module.exports = router;