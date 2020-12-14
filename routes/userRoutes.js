const app = require('express');
const router = app.Router();
const {
	register,
	registerValiations,
	login,
	loginValiations,
} = require('../controllers/userController');
router.post('/register', registerValiations, register);
router.post('/login', loginValiations, login);
module.exports = router;
