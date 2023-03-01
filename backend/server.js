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

server.use(express.static(path.resolve(__dirname, 'public')));

server.get('/', (req, res) => {
	res.send('index.html');
});

server.get('/resume', (req, res) => {
	// send link to resume that is stored in the "other" folder
	const resumePath = path.resolve(__dirname, 'other', 'resume.pdf');
	res.sendFile(resumePath);
});

// used to pull project images from the public folder
server.get('/api/projects/:imageID', (req, res) => {
	const { imageID } = req.params;

	fs.readdir(path.resolve(__dirname, 'images', 'projects'), (err, files) => {
		if (err) {
			console.error(err);
		} else {
			let imagePath = '';
			let imageFound = false;

			files.forEach((file) => {
				if (file === imageID) {
					imagePath = path.resolve(
						__dirname,
						'images',
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
					'images',
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
		path.resolve(__dirname, 'images', 'program-icons'),
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
							'images',
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
						'images',
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

server.listen(port, () => {
	console.log('Listening on Port: ' + port);
});
