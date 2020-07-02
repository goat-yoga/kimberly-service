const mongoose = require('mongoose');
const faker = require('faker');
const {displaySchema, Display} = require('./index.js')
const aws = require('aws-sdk');
const config = require('../config/config.json');


var makeProduct = function(itemNum) {

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
  let randomPrice = Math.ceil(Math.random() * Math.ceil(60 - 20) + 20);
  let randomName = faker.lorem.words();

  let randomListWords = randomFakeArray(Math.ceil(Math.random() * Math.ceil(4)), faker.lorem.words);
  let randomDesc = faker.lorem.paragraph()
  let randomFit = randomFakeArray(Math.ceil(Math.random() * Math.ceil(3)), faker.lorem.sentence);
  let randomMaterial = randomFakeArray(Math.ceil(Math.random() * Math.ceil(4)), faker.lorem.sentence);
  let randomDesciptionObj = {
    paragraph: randomDesc,
    bullets: [faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence()]
  }


  function getRandomColorSwatch() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let colorSwatches = randomFakeArray(Math.ceil(Math.random() * Math.ceil(6)), getRandomColorSwatch);

  var grabRandomImgUrl = function() {
    let imgNumber = Math.ceil(Math.random() * Math.ceil(100));
    if (imgNumber < 10) {
      imgNumber = '00' + imgNumber;
    } else if (imgNumber < 100) {
      imgNumber = '0' + imgNumber;
    }
    return `http://d1nv9rmhof7157.cloudfront.net/${imgNumber}.jpg`
  }


  let colorsAndPhotos = colorSwatches.map((color) => {
    return {
      colorName: faker.commerce.color(),
      swatch: color,
      images: randomFakeArray(Math.ceil(Math.random() * Math.ceil(6)), grabRandomImgUrl),
      sizes: sizes
    }
  })


  var newObj = {
    itemId: itemNum,
    name: randomName,
    department: dept,
    description: randomDesciptionObj,
    fit: randomFit,
    fabrication: randomMaterial,
    colors: colorsAndPhotos,
    price: randomPrice
  }
  return newObj;
}

var makeOneHundred = function(){
  var newArr = [];
  counter = 100;
  var currItemNum = 6000
  while (counter > 0){
    newArr.push(makeProduct(currItemNum))
    currItemNum++;
    counter--;
  }
  return newArr
}


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

// module.exports = Display;

// unit test ideas for seed
// expect there to be 100 test results
// expect all properties to exist
