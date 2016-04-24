angular.module('mmApp')
.controller('indexCtrl',['$scope','$rootScope','$state','$location','dataread','addUserData', function($scope,$rootScope,$state,$location,dataread,addUserData) {
	$scope.hideSearch = true;
	$scope.search={};
	$scope.require=false;
	$scope.isRequired = false;
	//$scope.search.nativePlace = undefined;
	
    $scope.states = ['Aurangabad', 'Bandra(Mumbai Suburban district)', 'Nagpur', 'Pune', 'Akola', 'Chandrapur', 'Jalgaon', 'Parbhani', 'Sholapur', 'Thane','Latur', 'Mumbai-City', 'Buldhana', 'Dhule', 'Kolhpur', 'Nanded', 'Raigad', 'Amravati', 'Nashik', 'Wardha', 'Ahmednagar', 'Beed', 'Bhandara', 'Gadchiroli','Jalna', 'Osmanabad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindudurg', 'Yavatmal', 'Nandurbar', 'Washim', 'Gondia', 'Hingoli'];

	
	
	$scope.closeSearchBox = function() {
	
		$scope.hideSearch = true;
	
	}
	$scope.openSearchBox = function() {
	
		$scope.hideSearch = false;
	
	}	

	$scope.openProfile = function(userId) {		
		$state.go('profile',{ 'userId': userId});
		$scope.hideSearch = true;
	}
	$scope.searchBtn = function() {
		$scope.require=true;
		$scope.isRequired = true;
		
		/*if($scope.search.form.$invalid){
			return;
		}*/
		

		$state.go('result',$scope.search);
		
		/*if($scope.search.type==="groom")
		{
			dataread.callGroomData().then(function(data){
				$scope.result=data;
			});
		}
		else
		{
			dataread.callBrideData().then(function(data){
				$scope.result=data;
			});
		
		}*/
	}
	
	
}])





