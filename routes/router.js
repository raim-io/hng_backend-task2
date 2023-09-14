const express = require('express');
const {
	readPersonByIdOrName,
	updatePerson,
	deletePerson
} = require('../controller/controller');

const router = express.Router();

router.route('/:user_id')
	.get(readPersonByIdOrName)
	.put(updatePerson)
	.delete(deletePerson);

module.exports = router;
