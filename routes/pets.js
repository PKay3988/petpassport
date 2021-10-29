var express = require('express');
var router = express.Router();
const db = require('../model/helper');

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

/* DELETE a pet by id - sends array of pets minus the deleted one */
router.delete('/:id', async function(req, res) {
    await db(`DELETE FROM pets WHERE id = ${req.params.id}`)
    await db(`SELECT * FROM pets`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* POST a new pet - not adding yet vet_id */
router.post('/', async function(req, res) {
    await db(`INSERT INTO pets (
        pet_name,
        breed,
        dob,
        user_id
    ) VALUES (
        '${req.body.pet_name}',
        '${req.body.breed}',
        '${req.body.dob}',
        '${req.body.user_id}'
    )`)
    await db(`SELECT * FROM pets`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* PUT - edit something. for now, this one updates the vet_id */
router.post('/vet/:id', async function(req, res) {
    await db(`UPDATE pets SET 
    vet_id = '${req.body.vet_id}'
    WHERE id = ${req.params.id}`
    )
});

module.exports = router;
