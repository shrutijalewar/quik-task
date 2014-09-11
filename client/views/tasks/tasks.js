(function(){
  'use strict';

  angular.module('quik-task')
  .controller('TasksCtrl', ['$scope','Priority', 'Task',function($scope, Priority, Task){
    $scope.task = {};
    $scope.tasks = [];
    $scope.priorities = [];
    $scope.sort = 'name';

    Priority.all().then(function(response){
      $scope.priorities = response.data.priorities;
    });

    Task.all().then(function(response){
      $scope.tasks = response.data.tasks;
    });
    $scope.addT = function(){
      Task.create($scope.task).then(function(response){
        $scope.tasks.push(response.data.task);
        //debugger;
        $scope.task = {};
      });
    };
  }]);
})();
