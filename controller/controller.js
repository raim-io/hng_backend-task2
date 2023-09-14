const expressAsyncHandler = require("express-async-handler");
const Person = require("../model/model");


// create a person
const createPerson = expressAsyncHandler(async (req, res) => {
	
	const { name } = req.body;
	
	// logs
	console.log(`Requested URL: ${req.originalUrl}`);
	console.log(`name from request body: ${name}`);

	// handle blank name field request body
	if (!name) {
		res.status(400);
		throw new Error("{/api}: name field cannot be blank...");
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
			throw new Error(`{/api}: "${name}" was not found...`);
		} else {
			res.status(200).json(newPerson);
			console.log(`{/api}: "${name}" was successfully created...`);
		}
	} catch (error) {
		res.status(400);
		throw new Error(error.message);
	}
});


// read the details of a person
const readPersonByIdOrName = expressAsyncHandler(async (req, res) => {

	const personIdOrName = req.params.user_id;

	// logs
	console.log(`Requested URL: ${req.originalUrl}`);
	console.log(`user_id/name from params: ${personIdOrName}`);
	
	// handle blank id or name field in request body
	if (!personIdOrName) {
		res.status(400);
		throw new Error('{/api/user_id}: user_id field (id or name) cannot be blank...')
	}

	try {

		// person variable
		let person;

		// try to find a person by ID if it matches the id format
		if (personIdOrName.match(/^[0-9a-fA-F]{24}$/)) {
			person = await Person.findById(personIdOrName);
		}

		// if person was not found by id, find by name
		if (!person) {
			person = await Person.findOne({ name: personIdOrName });
		}

		// handle reading unregistered person and 
		// handle sending registered person as json response 
		if (!person) {
			res.status(404);
			throw new Error(`{/api/user_id}: user_id or name "${personIdOrName}" was not found...`);
		} else {
			res.status(200).json(person);
			console.log(`{/api/user_id}: user_id or name "${personIdOrName}" was successfully read...`)
		}
	} catch (error) {
		res.status(400);
		throw new Error(error.message);
	}
});

// update the details of a person
const updatePerson = expressAsyncHandler(async (req, res) => {
	
	const personIdOrCurrentName = req.params.user_id
	const { name } = req.body;

	// logs
	console.log(`Requested URL: ${req.originalUrl}`);
	console.log(`user_id/name from params: ${personIdOrCurrentName}`);
	console.log(`New name from request body: ${name}`);

	// handle blank id and name fields
	if (!personIdOrCurrentName || !name) {
		res.status(400);
		throw new Error("{/api/user_id}: Neither user_id field (id or name} nor request body {name field} can be blank...");
	}

	try {

		// person variable
		let person;

		// try to find a person by ID and update 
		// if it matches the id format
		if (personIdOrCurrentName.match(/^[0-9a-fA-F]{24}$/)) {
			person = await Person.findByIdAndUpdate(
				personIdOrCurrentName,
				{ name: name },
				{ new: true },
			);
		}

		// if person was not found by id, find one by name and update
		if (!person) {
			person = await Person.findOneAndUpdate(
				{name: personIdOrCurrentName},
				{ name: name },
				{ new: true },
			);
		}

		// handle updating unregistered person and
		// handle sending regitered person as json response
		if (!person) {
			res.status(404);
			throw new Error(`{/api/user_id}: user_id or name "${personIdOrCurrentName}" was not found...`)
		} else {
			res.status(200).json(person);
			console.log(`{/api/user_id}: user_id or name "${personIdOrCurrentName}" was successfully updated to '${name}'...`)
		}
	} catch (error) {
		res.status(400);
		throw new Error(error.message);
	}
});


// delete a person
const deletePerson = expressAsyncHandler(async (req, res) => {

	const personIdOrName = req.params.user_id;

	// logs
	console.log(`Requested URL: ${req.originalUrl}`);
	console.log(`user_id/name from params: ${personIdOrName}`);

	if (!personIdOrName) {
		res.status(400);
		throw new Error('{/api/user_id}: user_id field (id or name} cannot be blank...');
	}

	// try-catch delete operation
	try {

		// person variable
		let person;

		// try find person by id and delete
		// if it matches the id format
		if (personIdOrName.match(/^[0-9a-fA-F]{24}$/)) {
			person = await Person.findByIdAndDelete(personIdOrName);
		}

		// if person was not found by id, find person by name and delete
		if (!person) {
			person = await Person.findOneAndDelete({ name: personIdOrName });
		}

		// // handle deleting unregistered person and 
		// handle sending registered person as json response 
		if (!person) {
			res.status(404);
			throw new Error(`{/api/user_id}: user_id or name "${personIdOrName}" was not found...`)
		} else {
			res.status(200).json(person);
			console.log(`{/api/user_id}: user_id or name "${personIdOrName}" was successfully deleted...`);
		}
	} catch (error) {
		res.status(500);
		throw new Error(error.message);
	}
});


module.exports = {
	createPerson,
	readPersonByIdOrName,
	updatePerson,
	deletePerson,
};
