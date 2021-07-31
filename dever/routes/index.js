var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/quatos', function(req, res, next) {
  res.render('quatos');
})

router.get('/reservas', function(req, res, next) {
  res.render('reserva'});
})

module.exports = router;
