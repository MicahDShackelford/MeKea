const mongoose = require('mongoose');
mongoose.Promise = Promise; // Set the default promises

mongoose.connect('mongodb://127.0.0.1/options', {useNewUrlParser: true, useUnifiedTopology: true}); //Connect to the options database

const db = mongoose.connection;

// Error & Success Handling
db.on('error', () => {
  console.log("[Database] : Connection Error");
});
db.once('open', () => {
  console.log("[Database] : Connection Success");
});

const productSchema = new mongoose.Schema({ // Create a schema that each product will follow
  name: String,
  shortDesc: String,
  price: Number,
  review: Object,
  options: Array,
  qtyAvailable: Number,
  deliverable: Boolean
});

const Product = mongoose.model('Product', productSchema); // Create model based on the Product Schema

module.exports = Product;