var express = require('express');
var router = express.Router();
const db = require('../model/helper');

/* GET pets listing - sends array of pets */
router.get('/', async function(req, res, next) {
    await db(`SELECT * FROM diet`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* GET one diet by pet_id - sends it back */
router.get('/diet/:pet_id', async function(req, res) {
    await db(`SELECT * FROM diet WHERE pet_id = ${req.params.pet_id}`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* POST a new diet */
router.post('/', async function(req, res) {
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