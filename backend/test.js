const express = require('express');
const morgan = require("morgan");
const apicache = require("apicache");
const axios = require('axios');

// Create Express Server
const app = express();


//configure apicache
let cache = apicache.middleware

//caching all routes for 5 minutes
app.use(cache('1 minutes'))

app.get('/', (req, res) => {
	const data = axios.get(
	'https://jsonplaceholder.typicode.com/posts').then((response) => {
		res.send(response.data)
	})
})

app.get('/users', (req, res) => {
	const userData = axios.get(
	'https://jsonplaceholder.typicode.com/users').then((response) => {
		res.send(response.data)
	})
})
app.listen(4000, function() {
	console.log("Server is running on port 3000");
})
