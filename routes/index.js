var express = require('express');
var router = express.Router();
var db = require("../model/helper");
var fs = require("fs/promises");
var path = require("path");

//to stop duplicate names
const { v4: uuidv4 } = require("uuid"); 
//to check file types
var mime = require("mime-types");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.get("/image", async (req, res) => {
  try {
     const media = await db("SELECT * FROM images;");
     res.send(media.data);
   } catch (err) {
     res.status(400).send({ message: err });
   }
});
router.post("/image/:id", async (req, res) => {
  // files are available at req.files
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
      await db(`INSERT INTO images (image, pet_id) VALUES ("${filename}", "${req.params.id}");`)
   } catch (err) {
     res.status(400).send({ message: err });
   }
});





module.exports = router;
