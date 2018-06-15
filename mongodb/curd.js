var express = require('express');
var router = express.Router();
var MongoClient  = require('mongodb');

var url = "mongodb://localhost:27017/";

router.get('/api/createMongoDB', function(req, resRouter) {

    var responseObj = {
        "success":true,
        "msg":""
    };

    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var database = db.db("runoob");
        var resource =  [
            { name: '体育', url: 'https://c.runoob.com', type: 'sport'},
            { name: '美术', url: 'https://www.google.com', type: 'fine art'},
            { name: '游戏', url: 'https://www.google.com', type: 'game'}
        ];
        database.collection("lesson").insertMany(resource,function(err,res){
            if (err) throw err;
            responseObj.msg = "插入的文档数量为: " + res.insertedCount;
            resRouter.json(responseObj);
            db.close();
        });
    });
});

router.get('/api/getLessonAllData',function(request,response){

    var responseObj = {
        "success":true,
        "msg":"get data on successful",
        "jsonData":null
    };

    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var database = db.db("runoob");
        database.collection("lesson").find({}).toArray(function(err,result){
            if (err) throw err;
            responseObj.jsonData = result;
            response.json(responseObj);
            db.close();
        })
    });
});

module.exports = router;
