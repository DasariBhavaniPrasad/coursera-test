(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Bhavani";

  $scope.sayMessage = function (){
    return "Bhavani likes to eat Biryani!";
  };

}

})();
