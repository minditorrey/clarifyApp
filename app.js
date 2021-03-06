'use strict';

const PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var Comment = require('./models/comment');

var app = express();

//plug in middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs')

//plug in router
app.use('/api', require('./routes/api'));


app.get('/', (req, res) => {

	Comment.get((err, comments) => {
	res.render('home');
	})
})




app.listen(PORT, err => {
	console.log(err || `Server listening on port ${PORT}`);
});


