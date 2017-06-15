var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./db.js');

/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
    var newstype = req.query.newstype;

    var connection = mysql.createConnection(db);

    connection.connect();

    connection.query('SELECT * FROM `NEWS` WHERE `newstype` = ?', [newstype], function(err, rows, fields) {
        // console.log(rows);
        res.json(rows);
    });
});

module.exports = router;
