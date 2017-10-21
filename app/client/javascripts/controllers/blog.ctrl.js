'use strict';
app.controller('blogController', ['$scope', '$timeout',
  function($scope, $timeout) {
    /*************************************/
    /********** SCOPE VARIABLES **********/
    /*************************************/

    $scope.items= [
      {
        title: 'Home Coming',
        background_image: 'url(images/Sunset.jpg)'
      },
      {
        title: 'All Four Tires',
        background_image: 'url(images/Car.jpg)'
      },
      {
        title: 'Ping-Pong',
        background_image: 'url(images/Ice.jpg)'
      },
      {
        title: 'Hello World',
        background_image: 'url(images/Flowers.jpg)'
      }
    ]





    /*************************************/
    /********** SCOPE FUNCTIONS **********/
    /*************************************/

    $scope.selectingFunc = function(item) {
      $timeout(function() {
        $scope.selected = item;
      })
    }

  }
]);
