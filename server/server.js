const path = require('path');
const express = require('express');

const DIST_DIR = path.join(__dirname, '../dist');
const PORT = 3000;

const app = express();
const db = require('./db');

// Setup middleware
// Parse JSON body
app.use(express.json());
app.use(express.urlencoded())

// Serve dist folder
app.use(express.static(DIST_DIR));
app.get('/', function(req, res) {
	res.sendFile(path.join(DIST_DIR, 'index.html'));
});

// Routes
// Get all study spots
app.get('/api/studyspot', function(req, res) {
	const studyspots = db.get('studyspots').value();
	res.json(studyspots);
});

// Get study spot by ID
app.get('/api/studyspot/:id', function(req, res) {
	const id = req.params['id'];
	const collection = db.get('studyspots');
	const result = collection.getById(id);
	res.json(result);
});

// Create new study spot
app.post('/api/studyspot', function(req, res) {
	const studyspot = req.body;
	// TODO validate
	const collection = db.get('studyspots');
	const result = collection.insert(studyspot).write();
	res.json(result);
});

// Update study spot by ID
app.put('/api/studyspot/:id', function(req, res) {
	const id = req.params['id'];
	const studyspot = req.body;
	// TODO validate
	const collection = db.get('studyspots');
	const result = collection.updateById(id, studyspot).write();
	res.json(result);
});

// Delete study spot by ID
app.delete('/api/studyspot/:id', function(req, res) {
	const id = req.params['id'];
	const collection = db.get('studyspots');
	const result = collection.removeById(id).write();
	if (result) {
		res.json(result);
	} else {
		res.status(500).send('Something went wrong.');
	}
});

// Start server
app.listen(PORT, function() {
	console.log('Listening on http://localhost:' + PORT);
});
