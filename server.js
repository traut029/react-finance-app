const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");

var passport   = require('passport')
var session    = require('express-session')
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');

//Require models
var models=require("./models")

////////////////////////////////////////////////////////////////////////////
// START PASSPORT
// The order of the passport server lines is important - no step on snek 
////////////////////////////////////////////////////////////////////////////
// Note that process.env.sessionsecret is a variable that I configured Heroku for to keep it out of github for security issues, otherwise it can be any random string. -Mark
app.use(session({ secret: 'shepsvacationphotos2357',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Routes for authroization 
var authRoute = require('./routes/auth.js')(app,passport);

// console.log("\n\n\n\nmodels:", (models.User? "User model exists":"User dont exist"))
//load passport strategies
require('./config/passport/passport.js')(passport,models.User);


////////////////
// END PASSPORT
////////////////

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Sync Database
// var sequelize = require("./db/connection.js")
models.sequelize.sync().then(function () {
  console.log('Nice! Database looks fine')

}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Import routes 
var apiRoutes = require("./routes/api-routes.js");

//Run routes
app.use(apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
