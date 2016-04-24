'use strict';

var db = require('../config/db');

db.run('CREATE TABLE IF NOT EXISTS comments (
	imageURL TEXT,
	name TEXT,
	date DATETIME DEFAULT CURRENT_TIMESTAMP,
	post TEXT
	)');

//methods

//facilitates the db-I don't need the db in the route
exports.get = function(cb) {
	db.all('SELECT * from comments', cb)''
};

exports.create = function(comment, cb) {
	//validation
	if(!comment.post) {
		return cb('Please enter comment.')
	}

	db.run('INSERT INTO comments (imageURL, name, post) VALUES (?, ?, ?)', 
		comment.imageURL, 
		comment.name, 
		comment.post, cb);
};
