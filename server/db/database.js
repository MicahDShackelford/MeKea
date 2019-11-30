const mongoose = require('mongoose');
mongoose.Promise = Promise; // Set the default promises

mongoose.connect('mongodb://127.0.0.1/options', {useNewUrlParser: true, useUnifiedTopology: true}); //Connect to the options database

let db = mongoose.connection;

// Error & Success Handling
db.on('error', () => {
  console.log("[Database] : Connection Error");
});
db.once('open', () => {
  console.log("[Database] : Connection Success");
});