var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.param('_id'));

if(true){
res.redirect('/list');
}else{
res.redirect('/update?_id='+req.param('_id'));
}

});

module.exports = router;
