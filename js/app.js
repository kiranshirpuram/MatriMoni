
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('mmApp', ['ngAnimate', 'ui.router','angular-loading-bar','ui.gravatar','firebase','ui.bootstrap','imageupload','angular.vertilize'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

  $stateProvider
  .state('home', {
    url:'/home',
    templateUrl:'templates/_home.html',
    controller:'HomeCtrl'
  })

  .state('rules', {
    url:'/rules',
    templateUrl:'templates/_rules.html',
    controller:'rulesCtrl',
  })

  .state('search', {
    url:'/search',
    templateUrl:'templates/_search.html',
    controller:'searchCtrl'
  })
  
  .state('registration', {
    url:'/registration',
    templateUrl:'templates/_registration.html',
    controller:'registrationCtrl'
  })

  .state('grooms', {
    url:'/grooms',
    templateUrl:'templates/_grooms.html',
    controller:'groomsCtrl'
  })
  
  .state('brides', {
    url:'/brides',
    templateUrl:'templates/_brides.html',
    controller:'bridesCtrl'
  })

  .state('divorcee', {
    url:'/divorcee',
    templateUrl:'templates/_divorcee.html',
    controller:'divorceeCtrl'
  })

  .state('stories', {
    url:'/stories',
    templateUrl:'templates/_stories.html',
    controller:'storiesCtrl'
  })

  .state('confirmation', {
    url:'/confirmation/:userId',
    templateUrl:'templates/_confirm.html',
	controller:'confirmCtrl'
  })
  
   .state('profile', {
    url:'/profile/:userId',
    templateUrl:'templates/_profile.html',
	controller:'profileCtrl'
  })
   .state('upload', {
    url:'/upload',
    templateUrl:'templates/_photo.html',
	controller:'photoCtrl'
  })
   .state('result', {
    url:'/result/:gender/:religion/:cast/:occupationCity/:edu/:firstName/:aget/:agef/:native',
  	templateUrl:'templates/_result.html',
  	controller:'resultCtrl'
  });
  
  $urlRouterProvider.otherwise('/home');
  
});




