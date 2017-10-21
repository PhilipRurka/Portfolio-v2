'use strict';

app.controller('websiteController', ['$scope', '$timeout', 'spotLightService',
  function($scope, $timeout, spotLightService) {
    /*************************************/
    /********** SCOPE VARIABLES **********/
    /*************************************/
    $('body').bind('keydown', function(event) {
      /** @param {string}  ??? - Single key that triggers the spotlight */
      spotLightService.spotLightInit('`');
    });

    /*************************************/
    /********** SCOPE FUNCTIONS **********/
    /*************************************/


  }
]);
