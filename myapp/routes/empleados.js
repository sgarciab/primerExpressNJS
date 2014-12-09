var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('empleados', { parametro: 'PARAMETRO 1' });
});

router.get('/hola', function(req, res) {
  res.send('HOLA');
});

module.exports = router;