var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET users listing. */
/**
 * req.params
 * way one
 Route path: /users/:userId/books/:bookId
 Request URL: http://localhost:3000/users/34/books/8989

 way two
 Route path: /passed/:name-:age-:address
 Request URL: http://localhost:3000/api/passed/xuechengdong-27-china
 */
router.get('/api/passed/:name-:age-:address',function(req, res, next) {
  console.log(decodeURIComponent(req.params.address));
  res.send(req.params);
},function (req, res) {
    res.send("http request is filed");
});

/**
 * req.query
 * Request URL http://localhost:3000/api/queryWay?name=tom&age=55&location=china
 * Route path name=tom&age=55&location=china
 */
router.get('/api/queryWay',function(req, res, next) {
    res.send(req.query);
},function (req, res) {
    res.send("http request is filed");
});

/**
 * req.body
 * Request URL http://localhost:3000/api/users
 * notes:  when you using the express.post way... you best use the postman tool go to test. please choose Body > x-www-form-urlencoded method
 */
// POST /api/users gets JSON bodies
router.post('/api/users',function (req, res) {
    if (!req.body.email || !req.body.password) {
        console.log(req.body);
        console.log(req.body.email);
        res.json({success: false, message: 'Please enter email and password.'});
    } else {
        /*var newUser = new User({
            email: req.body.email,
            password: req.body.password
        });

        newUser.save(function (err) {
            if (err) {
                return res.json({success: false, message: 'That email address already exists.'});
            }
            res.json({success: true, message: 'Successfully created new user.'});
        });*/
        console.log(req.body);
        res.json({success: true, message: 'Successfully created new user?'+req.body.email,'successData': req.body});
    }
})

module.exports = router;
