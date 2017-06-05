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

//admin to update categories
router.get('/update-category', function(req,res){
  Category.findAll({})
    .then(function(data){
      res.render('updateCategory', { category: data });
    });
});

//admin to update list
router.get('/update-list', function(req,res){
  List.findAll({})
    .then(function(data){
      res.render('updateList', { list: data });
    });
});

//adds a new category
router.post('/addCategory', function(req, res){
  var newTitle = req.body.title;
  var newIcon = (req.body.icon).toLowerCase();
  var newDesc = req.body.description;

  Category.create({
    title: newTitle,
    description: newDesc,
    icon: newIcon
  });

  res.redirect('/update-category');
});

//adds a new list item
router.post('/addList', function(req, res){
  var newTitle = req.body.title;
  var newIcon = (req.body.icon).toLowerCase();
  var newDesc = req.body.description;
  var newType = req.body.type;

  List.create({
    title: newTitle,
    description: newDesc,
    type: newType,
    icon: newIcon
  });

  res.redirect('/update-list');
});

//deletes a category
router.delete('/delete-category/:id', function(req, res){
  Category.destroy({
    where:{
      id: [req.params.id]
    }
  });

  res.redirect('/update-category');
});

//deletes a list item
router.delete('/delete-list/:id', function(req, res){
  List.destroy({
    where:{
      id: [req.params.id]
    }
  });

  res.redirect('/update-list');
});

module.exports = router;