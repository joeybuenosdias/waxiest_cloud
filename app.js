const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//LIBRARIES
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/waxiest_cloud';
mongoose.connect(mongoUri);

const app = express();

//AUTH CONTROLLER
const auth = require('./routes/auth');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './client/build')));

//SET UP EXPRESS SESSION
app.use(
	require('express-session')({
		secret: process.env.SESSION_SECRET || 'secret',
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: false,
			secure: false
		}
	})
);

//SET UP PASSPORT
app.use(passport.initialize());
app.use(passport.session());
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//AUTH ROUTES
app.use('/api/auth', auth);

app.get('*', (request, response) => {
	response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app;
