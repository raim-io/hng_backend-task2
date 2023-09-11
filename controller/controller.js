const expressAsyncHandler = require("express-async-handler");
const Person = require("../model/model");


// create a person
const createPerson = expressAsyncHandler(async (req, res) => {
	
	const { name } = req.body;
	
	// handle blank name field request body
	if (!name) {
		res.status(400);
		throw new Error("name field cannot be blank...");
		// big shoutout to hacksultan :)
	}

	// try-catch person creation
	try {
		const person = await Person.create({
			name,
		});

		const newPerson = await Person.findOne({ _id: person._id });

		// handle unregistered person after creation
		if (!newPerson) {
			res.status(404);
			throw new Error('Newly created person was not found...');
		} else {
			res.status(200).json(newPerson);
			console.log(`Person with the name "${name}" was successfully created...`);
		}
	} catch (error) {
		res.status(400);
		throw new Error(error.message);
	}
});


// read the details of a person
const readPerson = expressAsyncHandler(async (req, res) => {

	const personId = req.body.id;

	// handle blank id field in request body
	if (!personId) {
		res.status(400);
		throw new Error('id field cannot be blank...')
	}

	// try-catch reading a registered person
	try {
		const person = await Person.findById(personId);

		// handle reading unregistered person
		if (!person) {
			res.status(404);
			throw new Error(`Person with the id ${personId} was not found...`);
		} else {
			res.status(200).json(person);
			console.log(`person with the id "${personId}" was read...`)
		}
	} catch (error) {
		res.status(400);
		throw new Error(error.message);
	}
});


// update the details of a person
const updatePerson = expressAsyncHandler(async (req, res) => {
	
	const { id, name } = req.body;

	// handle blank id and name fields
	if (!id || !name) {
		res.status(400);
		throw new Error("Neither id field nor name field can be blank...");
	}

	try {
		// define findById and update operation
		const person = await Person.findByIdAndUpdate(
			id,
			{ name: name },
			{ new: true },
		);

		if (!person) {
			res.status(404);
			throw new Error(`Person with the id ${id} and name ${name} was not found`)
		} else {
			res.status(200).json(person);
			console.log(`Name of person with the id "${id}" was updated to "${name}"...`)
		}
	} catch (error) {
		res.status(400);
		throw new Error(error.message);
	}
});


// delete a person
const deletePerson = expressAsyncHandler(async (req, res) => {

	const { id } = req.body;

	if (!id) {
		res.status(400);
		throw new Error('id field cannot be blank...');
	}

	// try-catch delete operation
	try {
		// define findById and Delete operation
		const person = await Person.findByIdAndDelete(id);

		// handle unregistered person
		if (!person) {
			res.status(404);
			throw new Error(`Person with id ${id} not found...`)
		} else {
			res.status(200).json(person);
			console.log(`Person with id "${id}" was successfully deleted`);
		}
	} catch (error) {
		res.status(500);
		throw new Error(error.message);
	}
});


module.exports = {
	createPerson,
	readPerson,
	updatePerson,
	deletePerson,
};
