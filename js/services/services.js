angular.module('mmApp').service('dataservice',function($firebaseArray){

	var firebaseObjGrooms = new Firebase("https://burning-fire-2363.firebaseio.com/member/grooms");
	var firebaseObjBrides = new Firebase("https://burning-fire-2363.firebaseio.com/member/brides");
	
	return {
	saveData:function(data){
		console.log(data.gender);
		if(data.gender === "groom"){
			var dataArray=$firebaseArray(firebaseObjGrooms);
		}
		else
		{
			var dataArray=$firebaseArray(firebaseObjBrides);
		}
	
		dataArray.$add(data).then	
		 (function(res){console.log(res);},
			function(err){console.log(err);}
		 );
		
		 
		}		
	}	
})
.service('dataread',function($firebaseObject, $q){
	return {
	callBrideData:function(){
				var ref = new Firebase("https://burning-fire-2363.firebaseio.com/member/brides");
				var deferred = $q.defer();
				var obj = $firebaseObject(ref);

				// to take an action after the data loads, use the $loaded() promise
				obj.$loaded().then(function() {
				console.log("loaded brides record:", obj.$id, obj.someOtherKeyInData);
				var dataArr=[];
				// To iterate the key/value pairs of the object, use angular.forEach()
				angular.forEach(obj, function(value, key) {
				  console.log(key, value);
				  value.age = calAge(value.yydob);
				  value.uqid=key;
				 dataArr.push(value)
				});
				
				function calAge(yydob){
					var d = new Date();
					var n = d.getFullYear();
					var age = parseInt(n - yydob);
					return age;
				}
				
				deferred.resolve(dataArr)
				});
				// For three-way data bindings, bind it to the scope instead
				return deferred.promise;
		 
		},
		
	callGroomData:function(){
				var ref = new Firebase("https://burning-fire-2363.firebaseio.com/member/grooms");

				var deferred = $q.defer();
				var obj = $firebaseObject(ref);

				// to take an action after the data loads, use the $loaded() promise
				obj.$loaded().then(function() {
				console.log("loaded grooms record:", obj.$id, obj.someOtherKeyInData);
				var dataArr=[];
				// To iterate the key/value pairs of the object, use angular.forEach()
				angular.forEach(obj, function(value, key) {
				  console.log(key, value);
				  value.age = calAge(value.yydob);
				  value.uqid=key;
				dataArr.push(value);
				
				});
				
				function calAge(yydob){
					var d = new Date();
					var n = d.getFullYear();
					var age = parseInt(n - yydob);
					return age;
				}
				
				deferred.resolve(dataArr)
				});
				// For three-way data bindings, bind it to the scope instead
				return deferred.promise;
		 
		},	
		callBridesProfile:function(id){

				var ref = new Firebase("https://burning-fire-2363.firebaseio.com/member/brides");
			
				var deferred = $q.defer();
				
				ref.child(id).once('value', function(snapshot) {
					var exists = (snapshot.val() !== null);
					snapshot.val.age = calAge(snapshot.val().yydob);
					deferred.resolve(snapshot.val())
				});
				
				function calAge(yydob){
					var d = new Date();
					var n = d.getFullYear();
					var age = parseInt(n - yydob);
					return age;
				}
				
		 
				  return deferred.promise;
		},
		callGroomsProfile:function(id){

				var ref = new Firebase("https://burning-fire-2363.firebaseio.com/member/grooms");
			
				var deferred = $q.defer();
				
				ref.child(id).once('value', function(snapshot) {
					var exists = (snapshot.val() !== null);
					snapshot.val().age = calAge(snapshot.val().yydob);
					console.log(snapshot.val().age);
					deferred.resolve(snapshot.val())
				});
				
				function calAge(yydob){
					var d = new Date();
					var n = d.getFullYear();
					var age = parseInt(n - yydob);
					return age;
				}
				  return deferred.promise;
		},
		allData:function(param){
			console.log(JSON.stringify(param));
			
			var deferred = $q.defer();var dataArr=[];
			var values,key;
			
			if(param.type == "groom")
			{
			var ref = new Firebase("https://burning-fire-2363.firebaseio.com/member/grooms");
			}
			else
			{
			var ref = new Firebase("https://burning-fire-2363.firebaseio.com/member/brides");
			}
			eachfunction(param);
			
			function eachfunction(param)
			{
			ref.orderByChild("edu").equalTo(param.edu).on("child_added", function(snapshot) {
				values = snapshot.val();
				key = snapshot.key();
				values.uqid=key;
				dataArr.push(values);
			});
			
			ref.orderByChild("native").equalTo(param.nativePlace).on("child_added", function(snapshot) {
				values = snapshot.val();
				key = snapshot.key();
				values.uqid=key;
				dataArr.push(values);
			});
			
			ref.orderByChild("occupationCity").equalTo(param.occupationPlace).on("child_added", function(snapshot) {
				values = snapshot.val();
				key = snapshot.key();
				values.uqid=key;
				dataArr.push(values);
			});
			
			ref.orderByChild("firstName").equalTo(param.name).on("child_added", function(snapshot) {
				values = snapshot.val();
				key = snapshot.key();
				values.uqid=key;
				dataArr.push(values);
			});
			
			/*ref.startAt(param.fh)
				.endAt(param.th)
				.on('value', function(snapshot) {
				   console.log('messages in range', snapshot.val());
				   values = snapshot.val();
				key = snapshot.key();
				values.uqid=key;
				dataArr.push(values);
		});*/
			
			
				deferred.resolve(dataArr);
			}
			 return deferred.promise;
		}
	
		
	}	
});