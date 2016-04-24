angular.module('mmApp').controller('registrationCtrl',['$scope','$rootScope','$state','dataservice', 'addUserData',function($scope,$rootScope,$state,dataservice,addUserData) {
	
	$scope.step={};
	$scope.register={};
	$scope.step.switched="step1";
	$scope.navActive = true;
	$scope.hideSearch = true;
	
	$scope.require=false;
	$scope.isRequired = false;
	$scope.formStep1={"form":{}};
	$scope.formStep2={"form":{}};
	$scope.formStep3={"form":{}};
	$scope.formStep4={"form":{}};
	$scope.formStep5={"form":{}};
	$scope.formStep6={"form":{}};
	$scope.register.occupationCity = undefined;
    $scope.states = ['Aurangabad', 'Bandra(Mumbai Suburban district)', 'Nagpur', 'Pune', 'Akola', 'Chandrapur', 'Jalgaon', 'Parbhani', 'Sholapur', 'Thane','Latur', 'Mumbai-City', 'Buldhana', 'Dhule', 'Kolhpur', 'Nanded', 'Raigad', 'Amravati', 'Nashik', 'Wardha', 'Ahmednagar', 'Beed', 'Bhandara', 'Gadchiroli','Jalna', 'Osmanabad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindudurg', 'Yavatmal', 'Nandurbar', 'Washim', 'Gondia', 'Hingoli'];


	$scope.isActive = function (viewLocation) {
		 var active = (viewLocation === $location.path());
		 return active;
	};

	$scope.stepOne = function() {
		$scope.require=true;
		$scope.isRequired = true;
		if($scope.formStep1.form.$invalid){
			//return;
		}
		$scope.step.switched="step2";
		$scope.require=false;
		$scope.isRequired = false;
	}
	
	$scope.stepTwo = function() {
	
		if($scope.formStep2.form.$invalid){
		//	return;
		}
		$scope.step.switched="step3";
		$scope.require=false;
		$scope.isRequired = false;
	}	
	
	$scope.stepThree = function() {
		if($scope.formStep3.form.$invalid){
			//return;
		}
		$scope.step.switched="step4";
		$scope.require=false;
		$scope.isRequired = false;
	}
	$scope.stepFour = function() {
		if($scope.formStep4.form.$invalid){
			//return;
		}
		$scope.step.switched="step5";
		$scope.require=false;
		$scope.isRequired = false;
	}
	$scope.stepFive = function() {	
		if($scope.formStep5.form.$invalid){
			//return;
		}
		$scope.step.switched="step6";
		$scope.require=false;
		$scope.isRequired = false;
	}
	$scope.stepSix = function() {	
		if($scope.formStep6.form.$invalid){
			return;
		}
		console.log($scope.register);
	///	dataservice.saveData($scope.register);
		
 			addUserData.addUser($scope.register).then(function(data){
			      console.log("Added User"+ JSON.stringify(data));	
			      $state.go('confirmation',{ 'userId': data[0].userId});
			      //$state.go('confirmation');      
			    },
			    function(errorMessage){
			      console.log("Error: "+errorMessage);
			    });

		//$state.go('confirmation');
		$scope.require=false;
		$scope.isRequired = false;
	}
		
	//back button functionality
	$scope.backToStepOne = function() {
		$scope.step.switched="step1";
	}

	$scope.backToStepTwo = function() {
		$scope.step.switched="step2";
	}	
	
	$scope.backToStepThree = function() {
		$scope.step.switched="step3";
	}	
	
	$scope.backToStepFour = function() {
		$scope.step.switched="step4";
	}	
	
	$scope.backToStepFive = function() {
		$scope.step.switched="step5";
	}
	
		
}])