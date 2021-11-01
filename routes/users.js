var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const saltRounds = 10;

const supersecret = process.env.SUPER_SECRET;

/* POST new user */
router.post('/register', async function(req, res) {
  const { name, city, email, username, password } = req.body;
  
  try {
    const hash = await bcrypt.hash(password, saltRounds);

    await db(
      `INSERT INTO users (name, city, email, username, password) VALUES ("${name}", "${city}", "${email}", "${username}", "${hash}")`
    );

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

/*GET Logged in Profile */
router.get("/profile", userShouldBeLoggedIn, (req, res) => {
  // const user = results.data[0];
  // const user_id = user.id;

  res.send({
    message: "Here is the PROTECTED data for user " + req.body.user_id,/*will this be autopopulated once logged in? */
  });
});

module.exports = router;
