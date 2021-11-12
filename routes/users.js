var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config();
var userShouldBeLoggedIn = require("../middleware/userShouldBeLoggedIn");
const saltRounds = 12;
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const supersecret = process.env.SUPER_SECRET;

API_KEY = process.env.API_KEY

// function getting the coordinates from te map api 
const getCoords = async (street_number, street_name, postal_code, city, country, country_code) => {
  console.log(street_number, street_name, postal_code, city, country, country_code);
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${street_number}%20${street_name}%20${postal_code}%20${city}%20${country}.json?country=${country_code}&access_token=${API_KEY}`
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

/* POST new user */ 
router.post('/register', async function(req, res) {
  const { name, city, street_number, street_name, postal_code, country, country_code, email, username, password } = req.body;
  
  let homeCoords = await getCoords(city, street_number, street_name, postal_code, country, country_code);

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    
    await db(
      `INSERT INTO users (
        name,
        username, 
        email, 
        password,
        postal_code,
        city, 
        country,
        street_number, 
        street_name,
        coords
        
      ) VALUES (
        "${name}", 
        "${username}", 
        "${email}", 
        "${hash}", 
        "${postal_code}", 
        "${city}", 
        "${country}", 
        "${street_number}", 
        "${street_name}",
        "${homeCoords ? homeCoords.features[0].center.join(",") : "none"}"
      )`)

    res.send({ message: "Registration successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

/* POST Login */
router.post('/login', async function (req, res) {
  let { username, password } = req.body;

  try {
    let results = await db(`SELECT * FROM users WHERE username = "${username}"`
    );
    const user = results.data[0];
    if(user) {
      const user_id = user.id;

      const correctPassword = await bcrypt.compare(password, user.password);

      if(!correctPassword) throw new Error('Incorrect password!');
      var token = jwt.sign({ user_id }, supersecret);
      delete user.password;
      res.send({ message: "Login successful", token, user});
    } else {
      throw new Error("User doesn't exist!");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
})

/*GET user by id Function */
router.get("/profile", userShouldBeLoggedIn, async (req, res) => {
  //needed to request protected id
  // let id  = req.user_id;
  let sql = `SELECT * FROM users WHERE id = ` + req.user_id;
    
    try {
        let results = await db(sql);
        let user = results.data[0];
        delete user.password;  // don't return the password
        res.send(user);
    } catch (err) {
        next(err);
    }
});

/* GET all users*/
router.get('/', async function(req, res, next) {
  let sql = `SELECT * FROM users ORDER BY username`;

  try {
      let results = await db(sql);
      let users = results.data;
      users.forEach(u => delete u.password);  // don't return passwords
      res.send(users);
  } catch (err) {
      next(err);
  }
});


module.exports = router;
