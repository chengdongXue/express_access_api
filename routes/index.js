var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'xuechengdong',
    authenticated:true,
    id:'001',
    cupWorldText:'At the year. The cup world have become for everybody'});
});

module.exports = router;
