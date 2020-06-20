const helpers = require('../db/model.js');

const controller = {
  getSpecific: (req, res) => {
    helpers.getSpecific(req.params.id, (err, results) => {
      if (err){
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },
  get: (req, res) => {

  }
}

module.exports = controller;