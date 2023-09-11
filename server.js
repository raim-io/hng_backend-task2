const express = require('express');
const bodyParser = require('body-parser');

const validateData = require('./middlewares/dataValidator');
const { body } = require('express-validator');

const {createPerson} = require('./controller/controller');
const routes = require('./routes/router');

const dotenv = require('dotenv');
const { connectDB } = require('./database/connection');

const app = express();

dotenv.config();
connectDB();

PORT = process.env.PORT || 8081;

// define validation rules
const postValidationRules = [
	// validate that name field is non empty
	body('name').isString().notEmpty(),
] 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// test route
app.get('/', (req, res) => {
	res.send('API server is running...')
})

// CREATE ROUTE
app.post('/api', postValidationRules, validateData, createPerson);

// READ, UPDATE AND DELETE ROUTES
app.use('/api/:user_id', routes)

app.listen(PORT, console.log(`server is running on port ${PORT}`));
