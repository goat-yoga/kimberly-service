const Display = require('./seed.js')
module.exports = {
  getOneProduct: (id, callback) => Display.findById(id, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

