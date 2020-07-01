const helpers = require('../db/model.js');

const controller = {
  getOneProduct: (req, res) => {
    helpers.getOneProduct(req.params.id)
    .then((results)=> {
      res.status(200).json(results);
    })
    .catch((err)=> {
      res.status(400).send(err);
    })
  }
}

module.exports = controller;