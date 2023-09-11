const { validationResult } = require("express-validator")

// define data validator middleware function
const validateData = (req, res, next) => {
	// define errors
	const errors = validationResult(req);

	// handle the exitence of errors
	if (!errors.isEmpty()) {
		return res.status(400).json({ message: errors.array() });
	}

	// continue on to the next
	next();
}

module.exports = validateData;
