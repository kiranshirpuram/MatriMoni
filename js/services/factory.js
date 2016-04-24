angular.module('mmApp').factory('addUserData',function($http, $q){
    return{
      addUser: function(datas){
        //Creating a deferred object
        var deferred = $q.defer();
 
        //Calling Web API to fetch shopping cart items
        $http.post('/add',datas).success(function(data){
          //Passing data to deferred's resolve function on successful completion
          deferred.resolve(data);
      }).error(function(){
 
        //Sending a friendly error message in case of failure
        deferred.reject("An error occured while fetching items");
      });
 
      //Returning the promise object
      return deferred.promise;
    },
    findUser: function(dataf){
        //Creating a deferred object
        console.log(dataf);
        var deferred = $q.defer();
 
        //Calling Web API to fetch shopping cart items
        $http.post('/find',dataf).success(function(data){
          //Passing data to deferred's resolve function on successful completion
          console.log('re'+ JSON.stringify(data));
          deferred.resolve(data);
      }).error(function(){
 
        //Sending a friendly error message in case of failure
        deferred.reject("An error occured while fetching items");
      });
 
      //Returning the promise object
      return deferred.promise;
    },
    uploadFileToUrl: function(file, uploadUrl){
      var deferred = $q.defer();
        var fd = new FormData();
        fd.append('file', file);
        console.log("FD"+ fd);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(data){
           deferred.resolve(data);
        })
        .error(function(data){
           deferred.reject("An error occured while fetching items"+ data);
        });

        return deferred.promise;
    }
  }
})