var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require("express-fileupload");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var petsRouter = require('./routes/pets');
var vetsRouter = require('./routes/vets');
var treatmentsRouter = require('./routes/treatments');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//where to store your file temporarily
app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "./tmp/",
    })
  );
  //img is inside of public folder
  app.use(express.static("public"));

// Location of static assets
app.use(express.static(path.join(__dirname, '/client/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pets', petsRouter);
app.use('/vets', vetsRouter);
app.use('/treatments', treatmentsRouter);

// Respond with index.html for unmatched routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build', 'index.html'));
  });  

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/build/index.html"));
});

module.exports = app;
