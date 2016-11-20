'use strict';
//******************************
//********** ANGULAR **********
//******************************
var app = angular.module('website', ['ui.router', 'ngResource'
]);


//******************************
//********** CONFIG **********
//******************************
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  '$compileProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider,
    $compileProvider) {

    $compileProvider.debugInfoEnabled(false);

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('homePage', {
        url: '/',
        templateUrl: 'partials/homepage',
        controller: 'homepageController'
      })
  }
]);


//*************************
//********** RUN **********
//*************************

// TODO: Understand what this does.
// app.run(['$rootScope', function($rootScope) {

// }]);


//*******************************
//********** FUNCTIONS **********
//*******************************
