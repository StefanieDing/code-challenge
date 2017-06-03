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


module.exports = router;