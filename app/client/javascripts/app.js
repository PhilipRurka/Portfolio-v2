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
      .state('landing', {
        url: '/',
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'partials/blog',
        controller: 'blogController'
      })
      .state('project', {
        url: '/project',
        templateUrl: 'partials/project',
        controller: 'projectController'
      })
      .state('contributor', {
        url: '/contributor',
        templateUrl: 'partials/contributor',
        controller: 'contributorController'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'partials/about',
        controller: 'aboutController'
      })
  }
]);


//*************************
//********** RUN **********
//*************************

// TODO: Understand what this does.
// app.run(['$rootScope', function($rootScope) {

// }]);

app.run(
['$rootScope', '$timeout', '$state',
function($rootScope, $timeout, $state) {
  'use strict';

//******************************
//********** WATCHERS **********
//******************************

  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    if(toState.name === 'landing') {
      $rootScope.showUiView = false;
    } else {
      $rootScope.showUiView = true;
    }
  });
}]);


//*******************************
//********** FUNCTIONS **********
//*******************************
