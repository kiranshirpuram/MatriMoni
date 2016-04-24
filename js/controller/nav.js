angular.module('mmApp').controller('navCtrl',['$scope','$rootScope','$state','$location', function($scope,$rootScope,$state,$location) {
	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}])





