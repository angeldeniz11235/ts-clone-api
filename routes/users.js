var express = require('express');
var router = express.Router();
var createUser = require('./../database/mongo_db_api');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add_user',function (req,res,next) {
  console.log(req.body);
  createUser.saveUser(req.body.username,req.body.useremail);
  res.json('{success:yes}');
});
module.exports = router;
