const Display = require('./seed.js')

module.exports = {
  getOneProduct: (id) => Display.findById({ _id: id})
}

