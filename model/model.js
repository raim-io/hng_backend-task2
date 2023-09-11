const { default: mongoose } = require("mongoose");


const schema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	}
}, {
	timestamps: true,
});

const Person = mongoose.model("Person", schema);

module.exports = Person;
