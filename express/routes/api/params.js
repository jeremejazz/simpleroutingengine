 
const config = require("../../config");
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send("Simple pies for simple rascals!")
});

module.exports = router;
