var express = require('express');
var router = express.Router();
const db = require('../model/helper');

/* GET vets listing - sends array of stored vets */
router.get('/', async function(req, res, next) {
    await db(`SELECT * FROM vet`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* GET one vet by id  - sends that vet back */
router.get('/vet/:id', async function(req, res) {
    await db(`SELECT * FROM vet WHERE id = ${req.params.id}`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* DELETE a vet - sends the updated array of vets back */
router.delete('/:id', async function(req, res) {
    await db(`DELETE FROM vet WHERE id = ${req.params.id}`)
    await db(`SELECT * FROM vet`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* POST a new vet - sends back the whole array of vets */
router.post('/', async function(req, res) {
    await db(`INSERT INTO vet (
        name,
        street_name,
        postal_code,
        phone_number,
        street_number,
        city,
        country
    ) VALUES (
        '${req.body.name}',
        '${req.body.street_name}',
        '${req.body.postal_code}',
        '${req.body.phone_number}',
        '${req.body.street_number}',
        '${req.body.city}',
        '${req.body.country}'
    )`)
    await db(`SELECT * FROM vet`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* PUT edit vet info - temporary generic one with all vet fields, sends whole array back */
router.put('/:id', async function(req, res) {
    await db(`UPDATE vet SET 
        name = '${req.body.name}',
        phone_number = '${req.body.phone_number}'
        WHERE id = ${req.params.id}`)
    await db(`SELECT * FROM vet`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

module.exports = router;
