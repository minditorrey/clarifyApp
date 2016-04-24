'use strict';

var express = require('express');
var router = express.Router();

//actual routes
router.get('/', (req, res) => {
	res.send('send all comments back');
});


module.exports = router;