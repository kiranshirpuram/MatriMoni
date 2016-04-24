angular.module('mmApp').controller('photoCtrl',['$scope','$rootScope','$state','$http','addUserData', function($scope,$rootScope,$state,$http,addUserData) {
  $scope.hideSearch = true;

  $scope.single = function(image) {
       var formData = new FormData();
       formData.append('image', image.file, image.file.name);
       formData.append('imageId', image.file, image.file.photoId);

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
    
}]);

  