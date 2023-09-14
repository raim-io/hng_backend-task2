const fetch = require("node-fetch");


const pingServer = async (req, res) => {

	try {
		const response = await fetch('http://localhost:8080/ping');
		const message = await response.text();

		console.log(`ping response: ${message}`);
	} catch (error) {
		console.log(`ping error: ${error.message}`)
	}

	// define ping interval as 15 minutes
	const pingInterval = 1000 * 60 * 15;

	// start pinging
	setInterval(pingServer, pingInterval);
}
