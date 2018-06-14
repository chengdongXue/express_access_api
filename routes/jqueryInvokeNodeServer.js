var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

/* GET users listing. */
/**
 * way one
 Route path: /users/:userId/books/:bookId
 Request URL: http://localhost:3000/users/34/books/8989

 way two
 Route path: /passed/:name-:age-:address
 Request URL: http://localhost:3000/passed/xuechengdong-27-china
 */
router.get('/passed/:name-:age-:address',function(req, res, next) {
  console.log(decodeURIComponent(req.params.address));
  res.send(req.params);
},function (req, res) {
    res.send("http request is filed");
});

// POST /api/users gets JSON bodies
router.post('/api/users', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.setHeader("content-type", "application/json");
    // create user in req.body
    res.send(req.body);
})

module.exports = router;
