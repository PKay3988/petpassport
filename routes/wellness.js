var express = require('express');
var router = express.Router();
const db = require('../model/helper');

/* GET food listing - sends array of food */
router.get('/diet', async function(req, res, next) {
    await db(`SELECT * FROM diet`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* GET one food by pet_id - sends it back */
router.get('/diet/:pet_id', async function(req, res) {
    await db(`SELECT * FROM diet WHERE pet_id = ${req.params.pet_id}`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* POST a new food */
router.post('/diet', async function(req, res) {
    await db(`INSERT INTO diet (
        brand,
        date,
        unit,
        notes,
        pet_id

    ) VALUES (
        '${req.body.brand}',
        '${req.body.date}',
        '${req.body.unit}',
        '${req.body.notes}',
        '${req.body.pet_id}'
    )`)
    await db(`SELECT * FROM diet`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* GET grooming listing - sends array of grooming */
router.get('/grooming', async function(req, res, next) {
    await db(`SELECT * FROM grooming`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* GET one grooming by pet_id - sends it back */
router.get('/grooming/:pet_id', async function(req, res) {
    await db(`SELECT * FROM grooming WHERE pet_id = ${req.params.pet_id}`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* POST a new grooming */
router.post('/grooming', async function(req, res) {
    await db(`INSERT INTO grooming (
        type,
        date,
        notes,
        pet_id
    ) VALUES (
        '${req.body.type}',
        '${req.body.date}',
        '${req.body.notes}',
        '${req.body.pet_id}'
    )`)
    await db(`SELECT * FROM grooming`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

module.exports = router;