const Product = require('./database');
const Faker = require('faker');

let seedDB = () => {
  for(var i = 1; i <= 100; i++) {
    let fakeProduct = new Product({
      id: i,
      name: Faker.commerce.productName,
      shortDesc: Faker.random.words,
      price: Faker.random.number,
      review: {stars: (Math.floor(Math.random() * 5)), reviews: Faker.random.number},
      options: [{option: Faker.commerce.productName, imgUrl: Faker.random.image}];
      qtyAvailable: Faker.random.number,
      deliverable: Faker.random.boolean
    });
  }
};