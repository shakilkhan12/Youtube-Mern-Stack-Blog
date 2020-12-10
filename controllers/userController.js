const {body, validationResult} = require("express-validator");
module.exports.registerValiations = [
   body("name").not().isEmpty().trim().withMessage("Name is required"),
   body("email").not().isEmpty().trim().withMessage("Email is required"),
   body("password").isLength({min: 6}).withMessage('Password must be 6 characters long')
];
module.exports.register = (req, res) => {
    const {name, email, password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json(errors.array())
    } else {
        res.json('You have done')
    }
}