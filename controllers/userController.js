const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');
module.exports.registerValiations = [
	body('name').not().isEmpty().trim().withMessage('Name is required'),
	body('email').not().isEmpty().trim().withMessage('Email is required'),
	body('password')
		.isLength({ min: 6 })
		.withMessage('Password must be 6 characters long'),
];
module.exports.register = async (req, res) => {
	const { name, email, password } = req.body;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		const checkUser = await User.findOne({ email });
		if (checkUser) {
			return res
				.status(400)
				.json({ errors: [{ msg: 'Email is already taken' }] });
		}
		// Hash password
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);
		try {
			const user = await User.create({
				name,
				email,
				password: hash,
			});
			const token = jwt.sign({ user }, process.env.SECRET, {
				expiresIn: '7d',
			});
			return res
				.status(200)
				.json({ msg: 'Your account has been created', token });
		} catch (error) {
			return res.status(500).json({ errors: error });
		}
	} catch (error) {
		return res.status(500).json({ errors: error });
	}
};
