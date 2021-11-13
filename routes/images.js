// var express = require('express');
// var router = express.Router();
// const db = require('../model/helper');

// /* GET images listing - sends array of images */
// router.get('/', async function(req, res, next) {
//     await db(`SELECT * FROM images`)
//         .then(results => res.send(results.data))
//         .catch(err => res.status(500).send({ err: err.message }))
// });

// /* GET one image by id - sends it back */
// router.get('/images/:img_id', async function(req, res) {
//     await db(`SELECT * FROM images WHERE img_id = ${req.params.img_id}`)
//         .then(results => res.send(results.data))
//         .catch(err => res.status(500).send({ err: err.message }))
// });

// /* DELETE a image by id - sends array of images minus the deleted one */
// router.delete('/:img_id', async function(req, res) {
//     await db(`DELETE FROM imagess WHERE img_id = ${req.params.img_id}`)
//     await db(`SELECT * FROM images`)
//         .then(results => res.send(results.data))
//         .catch(err => res.status(500).send({ err: err.message }))
// });

// //DO WE NEED A POST? 
// /* POST a new pet - not adding yet vet_id */ 
// // router.post('/AddI', async function(req, res) {
// //     await db(`INSERT INTO pets (
// //         pet_name,
// //         breed,
// //         dob,
// //         user_id
// //     ) VALUES (
// //         '${req.body.pet_name}',
// //         '${req.body.breed}',
// //         '${req.body.dob}',
// //         '${req.body.user_id}'
// //     )`)
// //     await db(`SELECT * FROM pets`)
// //         .then(results => res.send(results.data))
// //         .catch(err => res.status(500).send({ err: err.message }))
// // });

// /* PUT - edit something. for now,  */
// router.post('/vet/:img_id', async function(req, res) {
//     await db(`UPDATE images SET 
//     pet_id = '${req.body.pet_id}'
//     WHERE img_id = ${req.params.img_id}`
//     )
// });

// module.exports = router;
