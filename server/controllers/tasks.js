'use strict';
var Task = require('../models/task');

exports.create = function(req, res){
  console.log('controller>>>>>>',req.body);
  Task.create (req.body, function(err, task){
    console.log('DDDDDDDDDD',err,task);
    res.send({task:task});
  });
};
exports.index = function(req, res){
  Task.all (function(err, tasks){
    res.send({tasks:tasks});
  });
};

