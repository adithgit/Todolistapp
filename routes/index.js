var express = require('express');
var router = express.Router();
var userHelper = require('../helpers/user-helper')

/* GET home page. */
router.get('/', function(req, res, next) {
  userHelper.getItems().then((items)=>{
    res.render('index',{items});
  })
});
router.get('/addItem', function(req, res, next) {
  userHelper.addItem(req.query.listData).then(()=>{
  res.redirect('/')
  })
});
router.get('/editItem', function(req, res, next) {
  userHelper.editItem(req.query.listData,req.query.itemId).then(()=>{
  res.redirect('/')
  })
});
router.get('/remove/:id?', function(req, res, next) {
  userHelper.removeItem(req.params.id).then((response)=>{
    console.log(response);
  })
  res.redirect('/')
});
module.exports = router;
