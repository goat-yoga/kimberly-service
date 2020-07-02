const {Display} = require('./index.js')

module.exports = {
  getOneProduct: (item) => Display.find({ itemId: item})
}

