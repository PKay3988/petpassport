var express = require('express');
var router = express.Router();
const db = require('../model/helper');

/* GET treatments */
router.get('/', async function(req, res, next) {
    res.send('treatments')
});

/* GET treatment by id */
router.get('/:id', async function(req, res) {
    await db(`SELECT * FROM treatment WHERE id = ${req.params.id}`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* DELETE a treatment - doesnt send anything back, do we need a list of treatments? */
router.delete('/:id', async function(req, res) {
    await db(`DELETE FROM treatment WHERE id = ${req.params.id}`)
});

/* POST a new treatment - linked to a pet and vet id. it's also assuming that the completed status will be an automatic false */
router.post('/', async function(req, res) {
    await db(`INSERT INTO treatment (
        name,
        date,
        completed,
        frequency,
        pet_id,
        vet_id
    ) VALUES (
        '${req.body.name}',
        '${req.body.date}',
        'false',
        '${req.body.frequency}',
        '${req.body.pet_id}',
        '${req.body.vet_id}'
    )`)
});

/* PUT - this one only updates the completed status to true & sends it back, updated */
router.put('/complete/:id', async function(req, res) {
    await db(`UPDATE treatment SET completed = 'true' WHERE id = ${req.params.id}`)
    await db(`SELECT * FROM treatment WHERE id = ${req.params.id}`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* PUT - edit treatment information, doesn't change the completed status. assumes that vet_id and pet_id will stay the same */
router.put('/:id', async function(req, res) {
    await db(`UPDATE treatment SET 
    name = '${req.body.name}',
    date = '${req.body.date}',
    frequency = '${req.body.frequency}'
    WHERE id = ${req.params.id}`)
});

/* PUT - to change the vet_id? */

module.exports = router;
