const server = require('express')();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;

server.use(cors());

server.get('/', (req, res) => {
	res.send('Hello');
});

server.get('/api/projects', (req, res) => {
	fs.readFile(path.resolve(__dirname, 'main.json'), 'utf-8', (err, json) => {
		if (err) {
			console.error(err);
		} else {
			const parsedJson = JSON.parse(json);
			console.log(parsedJson.projects);
			res.json(parsedJson['projects']);
		}
	});
});

server.get('/api/skills', (req, res) => {
	fs.readFile(path.resolve(__dirname, 'main.json'), 'utf-8', (err, json) => {
		if (err) {
			console.error(err);
		} else {
			const parsedJson = JSON.parse(json);
			console.log(parsedJson.skills);
			res.json(parsedJson['skills']);
		}
	});
});

server.listen(port, () => {
	console.log('Listening on Port: ' + port);
});
