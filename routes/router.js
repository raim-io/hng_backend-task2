const express = require('express');
const {
	readPerson,
	updatePerson,
	deletePerson
} = require('../controller/controller');

const router = express.Router();

router.route('/')
	.get(readPerson)
	.put(updatePerson)
	.delete(deletePerson);

module.exports = router;
