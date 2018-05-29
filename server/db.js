const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('database.json');
const db = low(adapter);

// Mixin lodash-id
db._.mixin(require('lodash-id'));

// Set some defaults (required if your JSON file is empty)
db.defaults({
	studyspots: []
}).write();

module.exports = db;
