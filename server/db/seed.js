const Product = require('./database');
const Faker = require('faker');

const NUM_PRODUCTS = 100;

let generateOptions = () => {
  let results = [], usedOptions = [];
  const PossibleOptions = ['Color', 'Material', 'Size']
  let numOptions = Math.floor(Math.random() * PossibleOptions.length);

  for(var a = 0; a < numOptions; a++) {
    const Option = PossibleOptions[Math.floor(Math.random()*PossibleOptions.length)];
    if(usedOptions.includes(Option) === false) {
      let option = {};
      option.name = Option;
      let numSubOptions = Math.floor(Math.random() * 5);
      let options = [];
      for(var b = 0; b < numSubOptions; b++) {
        if(Option === "Color") {
          options.push({image: Faker.random.image(), name: Faker.commerce.color()});
        }
        if(Option === "Material") {
          options.push({image: Faker.random.image(), name: Faker.commerce.productMaterial()});
        }
        if(Option === "Size") {
          options.push({image: Faker.random.image(), name: Faker.commerce.productAdjective()});
        }
        option.options = options;
      }
      if(option.options && option.options.length > 0){
        results.push(option);
      }
    }
  }

  return results;
}

let seedDB = () => {
  for(var i = 1; i <= NUM_PRODUCTS; i++) {
    let fakeProduct = new Product({
      id: i,
      name: Faker.commerce.productName(),
      shortDesc: Faker.random.words(),
      price: Faker.random.number(),
      review: {stars: (Math.floor(Math.random() * 5)), reviews: Faker.random.number()},
      longDesc: Faker.lorem.paragraphs(),
      options: generateOptions(),
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