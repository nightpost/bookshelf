var express = require('express');
var fs = require('fs');
var datafile = 'server/data/books.json';
var router = express.Router();

/* GET all books and POST new books */
router.route('/')
    .get(function(req, res) {
        var data = getBookData();
        res.send(data);
    });

function getBookData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

module.exports = router;
