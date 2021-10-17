if(process.env.NODE_ENV=='production'){
module.exports = {
    url: "mongodb://testUser:testPass@mongo:27017/TeamApp?authSource=admin"
  };
}else{
  module.exports = {
    url: "mongodb://testUser:testPass@172.21.0.2:27017/TeamApp?authSource=admin"
  };
}