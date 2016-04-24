angular.module('mmApp')
.controller('bridesCtrl',['$scope','$rootScope','$state','$stateParams','addUserData',function($scope,$rootScope,$state,$stateParams,addUserData) {
	$scope.result = [],
	$scope.resultList = [],
	$scope.numPerPage = 6,	
	$scope.currentPage = 1

	addUserData.findUser({gender:"bride"}).then(function(data){
			$scope.result=data;
$scope.resultList = data;
			/*$scope.totalItems = $scope.result.length,
			$scope.numPages = function (){
				return Math.ceil($scope.result.length / $scope.numPerPage);
			};

			$scope.$watch("currentPage + numPerPage", function() {
				var begin = (($scope.currentPage - 1) * $scope.numPerPage),
				end = begin + $scope.numPerPage;
				$scope.resultList = $scope.result.slice(begin, end);
			});*/


		},
		function(errorMessage){
			$scope.dataError = errorMessage;		
	});

$scope.openProfile = function(userId) {		
		$state.go('profile',{ 'userId': userId});
	}
}])