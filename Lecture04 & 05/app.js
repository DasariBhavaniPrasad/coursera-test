(function () {
'use strict';

angular.module('myFirstApp',[])

.controller('myFirstController', function ($scope){
 $scope.name = "Bhavani";
 $scope.sayHello = function () {
   return "Hello Coursera!";
 }
});

})();
