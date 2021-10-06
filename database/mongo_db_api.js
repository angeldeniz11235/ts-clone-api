const mongoose = require('mongoose');

//saveUser("dfg", "sdfs").catch(err => console.log(err));

async function saveUser(User_name, User_email) {
  mongoose.connect('mongodb://testUser:testPass@172.22.0.3:27017/TeamApp?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', async () => {
    const user_Schema = new mongoose.Schema({
      user_name: String,
      user_email: String
    });
    const userModel = mongoose.model('TeamApp', user_Schema, 'Users');
    const User = new userModel({
      name: User_name,
      user_email: User_email
    });
    await User.save();
    console.log("User Saved");
    return new Promise(resolve => {resolve('resolved')});
  }); 
}

module.exports = {
  saveUser
};