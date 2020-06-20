const {displaySchema} = require('./index.js')

module.exports = {
  getSpecific: (id) => displaySchema.find({ _id: id})
}

