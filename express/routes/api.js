let express = require('express');
let router = express.Router();
let fs = require("fs")
/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Default page for /api")
});

/* require all files in api/ dir */
fs.readdirSync(__dirname + "/api").forEach(function(file) {
    if (file === "index.js" || file.substr(file.lastIndexOf('.') + 1) !== 'js')
        return;
    var name = file.substr(0, file.indexOf('.'));

    let route = require('./api/' + name);
    router.use(`/${name}`,route)
});
 
module.exports = router;
