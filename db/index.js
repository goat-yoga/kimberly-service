const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/servicesdb', {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection open')
});


var displaySchema =  new mongoose.Schema({
  id: {type: Number, unique: true},
  productNumber: Number,
  name: String,
  department: String,
  description: [{ paragraph: Array, bullets: Array}],
  fit: Array,
  fabrication: Array,
  colors: [{colorName: String, swatch: String, images: Array, sizes: Array}],
  price: String
})

module.exports = {
  db: db,
  displaySchema: displaySchema
}