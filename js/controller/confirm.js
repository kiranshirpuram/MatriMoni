angular.module('mmApp').controller('confirmCtrl',['$scope','$http','$rootScope','$state','$stateParams','addUserData', function($scope,$http,$rootScope,$state,$stateParams,addUserData) {
		$scope.hideSearch = true;
		$scope.profileInfo  = {};
		var id = $stateParams.userId;

		addUserData.findUser({'userId':parseInt(id)}).then(function(data){
			$scope.profileInfo=data[0];
		},	
		function(errorMessage){
			$scope.dataError = errorMessage;		
		});


		 $scope.single = function(image) {
               var formData = new FormData();
               formData.append('image', image.file, image.file.name);
               formData.append('imageId', image.file, id);

               $http.post('upload', formData, {
                headers: { 'Content-Type': undefined },
                transformRequest: angular.identity
            }).success(function(result) {
                $scope.msg = "Uploaded successfully."
                $scope.image.uploadedImgSrc = result.src;
            }).error(function(){
                $scope.errorMsg = "Upload Fail."

            });
            };

}])