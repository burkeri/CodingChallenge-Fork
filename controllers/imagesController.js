// import files
const Image = require("../models/Image");

module.exports = {
  // query db for all images
  getImages: (req, res) => {
    Image.find()
      .then(img => {
        res.json(img);
      })
      .catch(err => res.status(422).json(err));
  }
};