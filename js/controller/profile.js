angular.module('mmApp').controller('profileCtrl',['$scope','$rootScope','$state','$http','$stateParams','addUserData',function($scope,$rootScope,$state,$http,$stateParams,addUserData) {
	
		$scope.hideSearch = true;
		$scope.profileInfo  = {};
		var id = $stateParams.userId;

		addUserData.findUser({'userId':parseInt(id)}).then(function(data){
			$scope.profileInfo=data[0];
		},	
		function(errorMessage){
			$scope.dataError = errorMessage;		
		});
		
		/*if($stateParams.gender=='brides')
		{
			dataread.callBridesProfile(id).then(function(data){
				$scope.profileInfo = data;	
			});
		}
		else
		{		
			dataread.callGroomsProfile(id).then(function(data){
				$scope.profileInfo = data;	
			});
		}
*/

}])