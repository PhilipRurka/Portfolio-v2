'use strict';
//******************************
//********** ANGULAR **********
//******************************
var app = angular.module('website', ['ui.router', 'ngResource', 'angulartics', 'angulartics.google.analytics', 'ngAutocomplete'
]);


//******************************
//********** CONFIG **********
//******************************
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  '$compileProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider,
    $compileProvider) {
debugger;
    $compileProvider.debugInfoEnabled(false);

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('homePage', {
        url: '/',
        templateUrl: 'partials/homepage',
        controller: 'homepageController',
        resolve: function() {
          debugger;
        }
      })
  }
]);


//*************************
//********** RUN **********
//*************************




//*******************************
//********** FUNCTIONS **********
//*******************************
