angular.module('mmApp').controller('storiesCtrl',['$scope','$rootScope','$state','$http','$stateParams','dataread',function($scope,$rootScope,$state,$http,$stateParams,dataread) {
	$scope.hideSearch = true;
	$scope.result = [],
	$scope.resultList = [],
	$scope.numPerPage = 6,	
	$scope.currentPage = 1
	
	dataread.allData().then(function(data){
		$scope.result=data;
		console.log(data);
		$scope.totalItems = $scope.result.length,
		$scope.numPages = function () {
			return Math.ceil($scope.result.length / $scope.numPerPage);
		};

		$scope.$watch("currentPage + numPerPage", function() {
			var begin = (($scope.currentPage - 1) * $scope.numPerPage),
			 end = begin + $scope.numPerPage;
			$scope.resultList = $scope.result.slice(begin, end);
		});
	});
	
	$scope.openProfile = function(id,gender) {		
			$state.go('profile',{ 'id': id,'gender':gender});
		}
}])