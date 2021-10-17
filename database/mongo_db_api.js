const mongoose = require('mongoose');

//saveUser("dfg", "sdfs").catch(err => console.log(err));

function saveUser(User_name, User_email) {
  mongoose.connect('mongodb://testUser:testPass@172.18.0.2:27017/TeamApp?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', () => {
    const userModel = mongoose.model('TeamApp', user_Schema, 'Users');
    const User = new userModel({
      name: User_name,
      user_email: User_email
    });
    User.save();
    console.log("User Saved");
  }); 
}

module.exports = {
  saveUser
};