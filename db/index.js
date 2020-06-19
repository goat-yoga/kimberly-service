const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/servicesdb', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection open')
});

const productDisplay = new mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  department: String,
  colors: [{colorId: Number, colorName: String}],
  sizes: [{sizeId: Number, sizeName: String}],
  images: [{imageURL: String}]
})

