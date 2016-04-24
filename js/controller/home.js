angular.module('mmApp').controller('HomeCtrl',['$scope','$rootScope','$state', function($scope,$rootScope,$state) {
	$scope.navActive = true;
	$scope.isActive = function (viewLocation) {
	console.log(viewLocation);
     var active = (viewLocation === $location.path());
     return active;
	};
}])