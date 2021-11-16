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
//     await db(`DELETE FROM images WHERE img_id = ${req.params.img_id}`)
//     await db(`SELECT * FROM images`)
//         .then(results => res.send(results.data))
//         .catch(err => res.status(500).send({ err: err.message }))
// });

// router.post("/image/:img_id", async (req, res) => {
//     // files are available at req.files
//     const { imagefile } = req.files;
//     // check the extension of the file
//     const extension = mime.extension(imagefile.mimetype);
  
//     // create a new random name for the file
//     const filename = uuidv4() + "." + extension;
  
//     // grab the filepath for the temporary file
//     const tmp_path = imagefile.tempFilePath;
  
//     // construct the new path for the final file
//     const target_path = path.join(__dirname, "../public/img/") + filename;
//     try {
//         // move the file from tmp folder to the public folder
//         await fs.rename(tmp_path, target_path);
//         await db(`INSERT INTO images (image, pet_id) VALUES ("${filename}", "${req.params.id}");`)
//      } catch (err) {
//        res.status(400).send({ message: err });
//      }
//   }); 

// /* POST a new pet - not adding yet vet_id */ 
// router.post('/pets/:pet_id', async function(req, res) {
//     // files are available at req.files
//     const { imagefile } = req.files;
//     // check the extension of the file
//     const extension = mime.extension(imagefile.mimetype);


//     // create a new random name for the file
//     const filename = uuidv4() + "." + extension;
  
//     // grab the filepath for the temporary file
//     const tmp_path = imagefile.tempFilePath;
  
//     // construct the new path for the final file
//     const target_path = path.join(__dirname, "../public/petimg/") + filename;

//     try {
//         // move the file from tmp folder to the public folder
//         await fs.rename(tmp_path, target_path);
        
//         await db(`UPDATE pets SET pet_img = '${filename}' WHERE pet_id = ${req.params.pet_id} `)
        
//      } catch (err) {
//        res.status(400).send({ message: err });
//      }
//   }); 
  

// /* PUT - edit something. for now,  */
// router.post('/vet/:img_id', async function(req, res) {
//     await db(`UPDATE images SET 
//     pet_id = '${req.body.pet_id}'
//     WHERE img_id = ${req.params.img_id}`
//     )
// });

// module.exports = router;
