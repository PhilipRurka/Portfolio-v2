'use strict';

app.controller('websiteController', ['$scope', '$timeout',
  function($scope, $timeout) {
    /*************************************/
    /********** SCOPE VARIABLES **********/
    /*************************************/
    $('body').bind('keydown', function(event) {
      /** @param {string}  ??? - Single key that triggers the spotlight */
      spotLight.spotLightInit('`');
    });

    /*************************************/
    /********** SCOPE FUNCTIONS **********/
    /*************************************/


  }
]);
