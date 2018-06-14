var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
//// create application/json parser
var jsonParser = bodyParser.json;

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// GET users listing.
router.get('/', function(req, res, next) {
  //res.send(req.params);
 // console.log("bookId is set to " + req.params.bookId);
  res.render('users',{title:'yes. she comes in my room'});
});

module.exports = router;
