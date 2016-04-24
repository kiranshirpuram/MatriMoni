angular.module('mmApp')
.controller('resultCtrl',['$scope','$rootScope','$state','$http','$stateParams','dataread','addUserData',function($scope,$rootScope,$state,$http,$stateParams,dataread,addUserData) {
		$scope.hideSearch = true;		
		$scope.result = [],
		$scope.resultList = [],
		$scope.numPerPage = 6,	
		$scope.currentPage = 1,
		
		//console.log('result page'+ JSON.stringify($stateParams));
		

	/*	dataread.allData($stateParams).then(function(data){
				$scope.resultList = data;	
			});
		*/

		console.log($scope.search);
		addUserData.findUser($stateParams).then(function(data){
			      $scope.result=data;
		
				


			 for (var i in $scope.result) {
				  $scope.result.age = parseInt($scope.result.yydob) - (new Date().getFullYear());
				console.log($scope.result.age);

				}


				$scope.totalItems = $scope.result.length,
				$scope.numPages = function () {
					return Math.ceil($scope.result.length / $scope.numPerPage);
				};

				$scope.$watch("currentPage + numPerPage", function() {
					var begin = (($scope.currentPage - 1) * $scope.numPerPage),
					 end = begin + $scope.numPerPage;
					$scope.resultList = $scope.result.slice(begin, end);
				});


			    },
			    function(errorMessage){
			      $scope.dataError = errorMessage;		
			    });
		 
		
		$scope.openProfile = function(userId) {		
			$state.go('profile',{ 'userId': userId});
		}	
		
}])