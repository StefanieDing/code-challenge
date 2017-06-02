var express = require('express');
var router = express.Router();

var Category = require('../models')['Category'];
Category.sync();

var List = require('../models')['List'];
List.sync();

router.get('/', function(req, res){
  res.render('index');
});

module.exports = router;