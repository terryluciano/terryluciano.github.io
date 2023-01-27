const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

const server = express();

const port = process.env.PORT || 4000;

server.use(cors());
server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
	res.send('Hello');
});

// used to pull project images from the public folder
server.get('/api/projects/:imageID', (req, res) => {
	const { imageID } = req.params;

	fs.readdir(path.resolve(__dirname, 'public', 'projects'), (err, files) => {
		if (err) {
			console.error(err);
		} else {
			let imagePath = '';
			let imageFound = false;

			files.forEach((file) => {
				if (file === imageID) {
					imagePath = path.resolve(
						__dirname,
						'public',
						'projects',
						file
					);
					imageFound = true;
					console.log('Image Found: ' + imagePath);
				}
			});

			if (!imageFound) {
				imagePath = path.resolve(
					__dirname,
					'public',
					'projects',
					'default.png'
				);
				console.log('Image Not Found: ' + imagePath);
			}

			res.sendFile(imagePath);
		}
	});
});

// used to pull icon images from the public/program-icons folder
server.get('/api/program-icon/:iconID', (req, res) => {
	const { iconID } = req.params;

	fs.readdir(
		path.resolve(__dirname, 'public', 'program-icons'),
		(err, files) => {
			if (err) {
				console.error(err);
			} else {
				let imagePath = '';
				let imageFound = false;

				files.forEach((file) => {
					const fileName = file.split('-')[0];
					if (fileName === iconID) {
						imagePath = path.resolve(
							__dirname,
							'public',
							'program-icons',
							file
						);
						imageFound = true;
						console.log('Image Found: ' + imagePath);
					}
				});

				if (!imageFound) {
					imagePath = path.resolve(
						__dirname,
						'public',
						'default.png'
					);
					console.log('Image Not Found: ' + imagePath);
				}

				res.sendFile(imagePath);
			}
		}
	);
});

server.get('/api/projects', (req, res) => {
	fs.readFile(path.resolve(__dirname, 'main.json'), 'utf-8', (err, json) => {
		if (err) {
			console.error(err);
		} else {
			const parsedJson = JSON.parse(json);
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
			res.json(parsedJson['skills']);
		}
	});
});

server.post('/api/contact', (req, res) => {
	console.log('Contact Form Submitted');
	console.log(req);
	if (process.env.ENV == 'dev') {
		res.redirect('http://localhost:8080');
	} else {
		res.redirect('/');
	}
});

server.listen(port, '192.168.7.77' || 'localhost', () => {
	console.log('Listening on Port: ' + port);
});
