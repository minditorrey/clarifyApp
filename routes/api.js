'use strict';

var express = require('express');
var router = express.Router();

//individual api controller routes
router.use('/comments', require('./comments'));


module.exports = router;