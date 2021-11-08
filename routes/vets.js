const { json } = require('express');
require("dotenv").config();
var express = require('express');
var router = express.Router();
const db = require('../model/helper');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

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

API_KEY = process.env.API_KEY

/* Get the coordinates from map api */
const getCoords = async (street_number, street_name, postal_code, city, country, country_code) => {
    console.log(street_number, street_name, postal_code, city, country, country_code);
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${street_number}%20${street_name}%20${postal_code}%20${city}%20${country}.json?country=${country_code}&access_token=${API_KEY}`
    // await fetch(url)
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json)
    //         return json})
    //     .catch(err => console.log(err.message))
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);
    return data;
}

router.post('/', async function(req, res) {
    let mapBox = await getCoords(req.body.street_number, req.body.street_name, req.body.postal_code, req.body.city, req.body.country, req.body.country_code);
    // console.log(mapBox)
    await db(`INSERT INTO vets (
        name,
        street_name,
        street_number,
        postal_code,
        city,
        country,
        country_code,
        phone_number,
        coords,
        user_id
    ) VALUES (
        '${req.body.name}',
        '${req.body.street_name}',
        '${req.body.street_number}',
        '${req.body.postal_code}',
        '${req.body.city}',
        '${req.body.country}',
        '${req.body.country_code}',
        '${req.body.phone_number}',
        '${mapBox ? mapBox.features[0].center.join(",") : "none"}',
        '${req.body.user_id}'
    )`)
    await db(`SELECT * FROM vets`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

/* PUT edit vet info - temporary generic one with all vet fields, sends whole array back */
router.put('/:id', async function(req, res) {
    await db(`UPDATE vets SET 
        name = '${req.body.name}',
        phone_number = '${req.body.phone_number}'
        WHERE id = ${req.params.id}`)
    await db(`SELECT * FROM vets`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send({ err: err.message }))
});

module.exports = router;
