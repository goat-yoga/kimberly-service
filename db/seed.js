const mongoose = require('mongoose');
const faker = require('faker');
const {displaySchema} = require('./index.js')


var makeProduct = function() {

  var randomFakeArray = function(number, func){
    var counter = number;
    var newArr = [];
    while (counter > 0){
      let fakeItem = func()
      newArr.push(fakeItem);
      counter--;
    }
    return newArr;
  }

  var makeRandomDept = function(){
    var dept = Math.ceil(Math.random() * Math.ceil(2)) === 2 ? "Men" : "Women"
    return dept;
  }

   let dept = makeRandomDept();
   let sizes = dept === 'Women' ? ['XS', 'S', 'M', 'L', 'XL'] : ['S', 'M', 'L', 'XL', '2XL'];
   let randomColors = randomFakeArray(Math.ceil(Math.random() * Math.ceil(6)), faker.commerce.color);
   let randomImages = randomFakeArray(Math.ceil(Math.random() * Math.ceil(6)), faker.image.fashion);
   let randomPrice = Math.ceil(Math.random() * Math.ceil(60 - 20) + 20);
   let randomName = faker.commerce.productName();
   let randomListWords = randomFakeArray(Math.ceil(Math.random() * Math.ceil(4)), faker.lorem.words);
   let randomDesc = [faker.lorem.paragraph(), randomListWords]
  let randomFit = randomListWords;
  let randomMaterial = faker.commerce.productMaterial();
   let randomDesciptionArr = [randomDesc, randomFit, randomMaterial]

   let allColors = randomColors.map((color) => {
      return {
         colorName: color,
         images: randomImages,
         sizes: sizes
      };
   })

   var newObj = {
     name: randomName,
     department: dept,
     description: randomDesciptionArr,
     colors: allColors,
     price: `$${randomPrice}.99`
   }
   return newObj;
}

var makeOneHundred = function(){
  var newArr = [];
  counter = 100;
  while (counter > 0){
    newArr.push(makeProduct())
    counter--;
  }
  return newArr
}

let Display = mongoose.model('Display', displaySchema);

const seed = function(){
  let newData = makeOneHundred();

  Display.collection.insert(newData, (err, docs)=> {
    if (err) {
      console.error(err);
    } else {
      console.log('multiple docs inserted')
    }
  })
}

seed();

module.exports = Display;