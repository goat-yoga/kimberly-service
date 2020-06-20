// const {db} = require('./index.js')
const Display = require('./seed.js')
module.exports = {
  getSpecific: (id, callback) => Display.findById(id, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

