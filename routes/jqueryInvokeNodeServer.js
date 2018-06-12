var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var entity = [{
   id:'001',
    name:'Joe.Snow',
    address:'King hill'
  },{
    id:'002',
    name:'Joe.Whiter',
    address:'King Whiter'
  }]
  res.send(entity);
});

module.exports = router;
