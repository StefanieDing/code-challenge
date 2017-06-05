var express = require('express');
var router = express.Router();

var Category = require('../models')['Category'];
Category.sync();

var List = require('../models')['List'];
List.sync();

router.get('/', function(req, res){
  //grab categories and list from db
  var info={
    category: [],
    list: []
  };

  Category.findAll({
    attributes: ['id', 'title', 'description', 'icon']
  }).then(function(data){
      info.category = data;

      List.findAll({
        attributes: ['id', 'title', 'description', 'type', 'icon']
      }).then(function(result){
        info.list = result;
          res.render('index', info);
      });
  });
});

router.get('/add-category', function(req,res){
  Category.findAll({})
    .then(function(data){
      res.render('addCategory', { category: data });
    });
});

router.get('/add-list', function(req,res){
  List.findAll({})
    .then(function(data){
      res.render('addList', { list: data });
    });
});

module.exports = router;