const mongoose = require('mongoose');

//saveUser().catch(err => console.log(err)).then(console.log("Success!")).then(process.exit());

async function saveUser() {
  await mongoose.connect('mongodb://testUser:testPass@172.20.0.2:27017/food?authSource=admin');
}

module.exports = {saveUser};

