(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Bhavani";
$scope.stateOfBeing = "hungry";
  $scope.sayMessage = function (){
    return "Bhavani likes to eat Biryani!";
  };
$scope.feedBhavani = function () {
  $scope.stateOfBeing = "feed"
};
}

})();
