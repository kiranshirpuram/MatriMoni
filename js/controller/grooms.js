angular.module('mmApp')
.controller('groomsCtrl',['$scope','$rootScope','$state','$stateParams','addUserData',function($scope,$rootScope,$state,$stateParams,addUserData) {
	$scope.result = [],
	$scope.resultList = [],
	$scope.numPerPage = 6,	
	$scope.currentPage = 1;

	addUserData.findUser({gender:"groom"}).then(function(data){
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
			
		 
	
}]).directive('master',function () { //declaration; identifier master
    function link(scope, element, attrs) { //scope we are in, element we are bound to, attrs of that element
      scope.$watch(function(){ //watch any changes to our element
        scope.style = { //scope variable style, shared with our controller
            height:element[0].offsetHeight+'px' //set the height in style to our elements height
          };
      });
    }
      return {
        restrict: 'AE', //describes how we can assign an element to our directive in this case like <div master></div
        link: link // the function to link to our element
      };
}); 
