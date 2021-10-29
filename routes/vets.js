var express = require('express');
var router = express.Router();
const db = require('../model/helper');

/* GET vets listing - sends array of stored vets */
router.get('/', async function(req, res, next) {
    await db(`SELECT * FROM vets`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* GET one vet by id  - sends that vet back */
router.get('/vet/:id', async function(req, res) {
    await db(`SELECT * FROM vets WHERE id = ${req.params.id}`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* DELETE a vet - sends the updated array of vets back */
router.delete('/:id', async function(req, res) {
    await db(`DELETE FROM vets WHERE id = ${req.params.id}`)
    await db(`SELECT * FROM vets`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* POST a new vet - sends back the whole array of vets */
router.post('/', async function(req, res) {
    await db(`INSERT INTO vets (
        name,
        address,
        phone_number
    ) VALUES (
        '${req.body.name}',
        '${req.body.address}',
        '${req.body.phone_number}'
    )`)
    await db(`SELECT * FROM vets`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* PUT edit vet info - temporary generic one with all vet fields, sends whole array back */
router.put('/:id', async function(req, res) {
    await db(`UPDATE vets SET 
        name = '${req.body.name}',
        address = '${req.body.address}',
        phone_number = '${req.body.phone_number}'
        WHERE id = ${req.params.id}`)
    await db(`SELECT * FROM vets`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

module.exports = router;
