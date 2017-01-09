var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../tool/dbConfig');
var dbsql = require('../tool/dbSql');
var pool = mysql.createPool(dbconfig.mysql);

router.get('/index', function (req, res, next) {
  pool.getConnection(function (err, connection) {
    var
      query = req.query || req.params;
    var
      name = query.name;
      pass = query.pass;
      connection.query(dbsql.insert, [name, pass], function (err, result) {
      if (result) {
       // res.render('index', { title: res.json(result) });
       result={
         code:200,
         msg:'ok'
       };
      res.json(result);
      }
      connection.release();
    });

  });


});

module.exports = router;
