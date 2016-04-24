'use strict';

var express = require('express');
var router = express.Router();

var Comment = require('../models/comment');

//actual routes for get & send:
router.route('/')
	.get((req, res) => {
	//db.run will be calling this
		Comment.get((err, comments) => {
			if(err) {
				return res.status(400).send(err);
		}
		res.send(comments);
	});
})

	.post((req, res) => {
	//db.run will be calling this

	//req.body (data object)
		Comment.create(req.body, err => {
		if(err) {
			return res.status(400).send(err);
		}
		res.send(todo);
		});
	});




module.exports = router;