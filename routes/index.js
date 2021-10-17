var express = require('express');
var router = express.Router();
const z= require('zebras');
/* GET home page. */
router.get('/', function(req, res, next) {


  const  btc = z.readCSV('./BTCUSDT_1d.csv')
  console.log(z.printHead(5,btc))

  res.render('index', { title: 'Express' });

});

module.exports = router;
