'use strict';
var Priority = require('../models/priority');

exports.create = function(req, res){
  console.log('controller>>>>>>',req.body);
  Priority.create (req.body, function(err, priority){
    console.log('DDDDDDDDDD',err,priority);
    res.send({priority:priority});
  });
};
exports.index = function(req, res){
  Priority.all (function(err, priorities){
    res.send({priorities:priorities});
  });
};

