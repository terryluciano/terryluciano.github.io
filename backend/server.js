const server = require('express')();
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const port = process.env.PORT;

server.get('/', (req, res) => {
	res.send('Hello');
});

server.get('/api/projects', (req, res) => {
	fs.readFile(path.resolve(__dirname, 'main.json'), 'utf-8', (json, err) => {
		if (err) {
			console.error(err);
		} else {
			console.log(json);
			res.json(JSON.parse(json));
		}
	});
});

server.listen(port, () => {
	console.log('Listening on Port: ' + port);
});
