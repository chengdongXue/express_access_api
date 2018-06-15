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
    var whereStr = null;
    var typeVal = request.query['type'];
    if(typeVal == 'none'){
        whereStr = {};
    }else{
        whereStr = {"type":typeVal};
    }
    var responseObj = {
        "success":true,
        "msg":"get data on successful",
        "jsonData":null
    };

    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var database = db.db("runoob");
        //var whereStr = {$or: [{"name": "英语"},{"name": "美术"},{"type":"zz"}]};
        database.collection("lesson").find(whereStr).sort({"type":1}).toArray(function(err,result){
            if (err) throw err;
            responseObj.jsonData = result;
            response.json(responseObj);
            db.close();
        })
    });
});

router.get('/api/getTypeJsonData',function(request,response){
    var responseObj = {
        "success":true,
        "msg":"get data on successful",
        "jsonData":null
    };

    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var database = db.db("runoob");
        var whereStr = {};
        database.collection("lesson").find(whereStr,{'name':1,'type':1}).sort({"type":1}).toArray(function(err,result){
            if (err) throw err;
            responseObj.jsonData = result;
            response.json(responseObj);
            db.close();
        })
    });
});

router.post('/api/createLesson', function(request,response) {
    var responseObj = {
        "success":true,
        "msg":""
    };

    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var database = db.db("runoob");
        database.collection("lesson").insertOne(request.body,function(err,res){
            if (err) throw err;
            responseObj.msg = "插入的文档数量为: " + res.insertedCount;
            response.json(responseObj);
            db.close();
        });
    });
});

module.exports = router;
