var express = require('express');
var router = express.Router();
const db = require('../model/helper');var fs = require("fs/promises");
var path = require("path");

//to stop duplicate names
const { v4: uuidv4 } = require("uuid"); 
//to check file types
var mime = require("mime-types");;

/* GET pets listing - sends array of pets */
router.get('/', async function(req, res, next) {
    await db(`SELECT * FROM pets`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* GET one pet by id - sends it back */
router.get('/pet/:id', async function(req, res) {
    await db(`SELECT * FROM pets WHERE id = ${req.params.id}`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* GET pets by user id */
router.get('/pets/:id', async function(req, res) {
    await db(`SELECT * FROM pets WHERE user_id = ${req.params.id}`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* GET pets by pet id */
router.get('/pets/:pet_id', async function(req, res) {
    await db(`SELECT * FROM pets WHERE pet_id = ${req.params.pet_id}`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* GET petimages by pet id */
router.get('/pet/:pet_img', async function(req, res) {
    await db(`SELECT * FROM pets WHERE pet_img = ${req.params.pet_img}`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* DELETE a pet by id - sends array of pets minus the deleted one */
router.delete('/:id', async function(req, res) {
    await db(`DELETE FROM pets WHERE id = ${req.params.id}`)
    await db(`SELECT * FROM pet`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* POST a new pet - not adding yet vet_id */
router.post('/AddPet', async function(req, res) {
    await db(`INSERT INTO pets (
        pet_name,
        type,
        breed,
        dob,
        user_id
    ) VALUES (
        '${req.body.pet_name}',
        '${req.body.type}',
        '${req.body.breed}',
        '${req.body.dob}',
        '${req.body.user_id}'
    )`)
    await db(`SELECT * FROM pets WHERE user_id = ${req.body.user_id}`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

router.put("/image/:pet_id", async (req, res) => {
    // files are available at req.files
    console.log("hello");
    const { imagefile } = req.files;
    // check the extension of the file
    const extension = mime.extension(imagefile.mimetype);
  
    // create a new random name for the file
    const filename = uuidv4() + "." + extension;
  
    // grab the filepath for the temporary file
    const tmp_path = imagefile.tempFilePath;
  
    // construct the new path for the final file
    const target_path = path.join(__dirname, "../public/img/") + filename;
    try {
        // move the file from tmp folder to the public folder
        await fs.rename(tmp_path, target_path);
        await db(`UPDATE pets SET pet_img = '${filename}' WHERE pet_id = ${req.params.pet_id} `) 
        res.send(`${filename}`);
    } catch (err) {
       res.status(400).send({ message: err });
     } 
  }); 

/* PUT - edit something. for now, this one updates the vet_id */
router.post('/vet/:id', async function(req, res) {
    await db(`UPDATE pets SET 
    vet_id = '${req.body.vet_id}'
    WHERE id = ${req.params.id}`
    )
});

module.exports = router;
