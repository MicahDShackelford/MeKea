const Product = require('./database');
const Faker = require('faker');

const NUM_PRODUCTS = 100;

let seedDB = () => {
  for(var i = 1; i <= NUM_PRODUCTS; i++) {
    let fakeProduct = new Product({
      id: i,
      name: Faker.commerce.productName(),
      shortDesc: Faker.random.words(),
      price: Faker.random.number(),
      review: {stars: (Math.floor(Math.random() * 5)), reviews: Faker.random.number()},
      longDesc: Faker.lorem.paragraphs(),
      options: [{option: Faker.commerce.productName, imgUrl: Faker.random.image()}],
      qtyAvailable: Faker.random.number(),
      deliverable: Faker.random.boolean()
    });
    fakeProduct.save();
    console.log(`[Seed] (${i}/${NUM_PRODUCTS})`);
  }
};

let checkDB = async () => {
  const empty = await Product.countDocuments() < 1;

  return empty;
}

checkDB()
  .then((empty) => {
    if (empty) {
      seedDB();
    } else {
      console.log(`[Alert] Your 'Product' database was not empty, it has been cleared`);
      Product.collection.drop()
        .then(() => {
          console.log(`[Alert] Seeding with new random values`);
          seedDB();
        });
    }
  });