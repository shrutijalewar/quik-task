(function(){
  'use strict';

  angular.module('quik-task')
  .controller('PrioritiesCtrl', ['$scope', 'Priority',function($scope, Priority){
    $scope.priority = {};
    $scope.priorities = [];
    $scope.sort = 'name';

    Priority.all().then(function(response){
      $scope.priorities = response.data.priorities;
    });
    $scope.add = function(){
      Priority.create($scope.priority).then(function(response){
        $scope.priorities.push(response.data.priority);
        //debugger;
        $scope.priority = {};
      });
    };
  }]);
})();
