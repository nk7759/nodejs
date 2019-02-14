var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.param('_id'));
  console.log(req.param('id'));
  console.log(req.param('pw'));

  res.render('update', { title: 'update',vo:'{"_id":"1","id":"admin","pw":"1234"}' });
});

module.exports = router;
