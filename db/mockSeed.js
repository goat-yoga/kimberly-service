const mongoose = require('mongoose');
const {displaySchema, Display} = require('./index.js')


var makeProduct = function(itemNum) {

  let sizes = ['XXS (00-0)', 'XS (2-4)', 'S (4-6)', 'M (8-10)', 'L (12-14)'];
  let randomPrice = 114;
  let randomName = `7/8 HIGH-WAIST AIRLIFT LEGGING`;

  let randomDesc = `Prepare to breeze through hot yoga in the 7/8 High-Waist Airlift Legging, an update to the popular full-length version. Made from our micro-performance double-knit Airlift fabric, it has a second-skin fit and feel that sculpts and smooths like no other. Hits at the ankle on petites and pairs perfectly with your fave pair of sneakers or slides.`
  let randomFit = ['High rise & hits just above ankle', 'Model is 5’10”, with a 24” waist & 34.5” hips – she wears size XS.'];
  let randomMaterial = ['Signature, micro-performance, double-knit Airlift fabric', '4-Way stretch for a move-with-you feel', 'Moisture-wicking & antimicrobial', 'Front-smoothing panel for commando comfort'];
  let randomDesciptionObj = {
    paragraph: randomDesc,
    bullets: ['Lifts & sculpts!', 'Smoothing, second-skin feel for on & off the mat', 'Designed & uniquely fit to flatter every size', 'Wear-tested by our in-house team for the perfect fit']
  }


 let marina = {
   colorName: 'marina',
   swatch: '#b7c7ea',
   images: [
    `http://d1nv9rmhof7157.cloudfront.net/047.jpg`,
    `http://d1nv9rmhof7157.cloudfront.net/048.jpg`,
    `http://d1nv9rmhof7157.cloudfront.net/049.jpg`,
    `http://d1nv9rmhof7157.cloudfront.net/050.jpg`
   ],
   sizes: sizes
 }

 let bronze = {
  colorName: 'bronze',
  swatch: '#dc8c2c',
  images: [
   `http://d1nv9rmhof7157.cloudfront.net/007.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/008.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/009.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/010.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/010.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/011.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/012.jpg`
  ],
  sizes: sizes
}

let black = {
  colorName: 'black',
  swatch: '#040404',
  images: [
   `http://d1nv9rmhof7157.cloudfront.net/040.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/041.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/042.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/043.jpg`
  ],
  sizes: sizes
}

let strawberry = {
  colorName: 'strawberry',
  swatch: '#ec6c5c',
  images: [
   `http://d1nv9rmhof7157.cloudfront.net/016.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/017.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/018.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/019.jpg`
  ],
  sizes: sizes
}

let bluemoon = {
  colorName: 'bluemoon',
  swatch: '#9c94a4',
  images: [
   `http://d1nv9rmhof7157.cloudfront.net/036.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/037.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/038.jpg`,
   `http://d1nv9rmhof7157.cloudfront.net/039.jpg`
  ],
  sizes: sizes
}

let colorSwatches = [marina, bronze, black, strawberry, bluemoon];


  var newObj = {
    itemId: 100,
    name: randomName,
    department: 'women',
    description: randomDesciptionObj,
    fit: randomFit,
    fabrication: randomMaterial,
    colors: colorSwatches,
    price: randomPrice
  }
  return newObj;
}



const seed = function(){
  let newData = [makeProduct()]
  Display.collection.insert(newData, (err, docs)=> {
    if (err) {
      console.error(err);
    } else {
      console.log('multiple docs inserted')
    }
  })
}

seed();