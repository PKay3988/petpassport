require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "plants",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = "DROP TABLE if exists plantsTable; CREATE TABLE plantsTable (plantId INT NOT NULL AUTO_INCREMENT, plantName VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, wateringFrequency INT NULL, isWatered TINYINT(1) DEFAULT(0) NOT NULL, lastWatered TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (plantId));";
  let sql2 = "DROP TABLE if exists usersTable; CREATE TABLE usersTable (username VARCHAR(255) NOT NULL, emailAddress VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, phoneNumber INT NOT NULL, PRIMARY KEY (username));";
 con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `plantTables` was successful!");

    console.log("Closing...");
  });

  con.query(sql2, function (err, result) {
    if (err) throw err;
    console.log("Table creation `usersTables` was successful!");

    console.log("Closing...");
  });
  con.end();
});