var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.param('id'));
  console.log(req.param('pw'));

if(true){
res.redirect('/list');
}else{
res.redirect('/test');
}

});

module.exports = router;
