var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('list', { title: 'list',datas:'[{"_id":"1","id":"admin","pw":"1234"},{"_id":"2","id":"admin2","pw":"5678"}]' });
});

module.exports = router;
