const config = require("../../config");
const SimplePy = require("../../controllers/runners/SimplePy")
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    SimplePy.runSimple(res);
    
});

router.get('/sleep', function(req, res) {
    res.send("Simple pies for simple rascals!")
  });
  

module.exports = router;
