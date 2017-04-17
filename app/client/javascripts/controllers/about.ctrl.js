'use strict';
app.controller('aboutController', ['$scope', '$timeout',
  function($scope, $timeout) {
    /*******************************/
    /********** VARIABLES **********/
    /*******************************/
    var height;
    /************************************/
    /********** INIT FUNCTIONS **********/
    /************************************/
    $timeout(function () {
      height = $('.dynamic-wrapper').innerHeight();
      calcArrowSize(height);
    });


    /*************************************/
    /********** SCOPE FUNCTIONS **********/
    /*************************************/
    $scope.checkHeight = function() {
      var currentHeight = $('.dynamic-wrapper').innerHeight();
      if(height !== currentHeight) {
        calcArrowSize(currentHeight);
      }
    };


    /*******************************/
    /********** FUNCTIONS **********/
    /*******************************/
    function calcArrowSize(newHeight) {
      var halfHeight = newHeight / 2;
      $('.arrow-right').css({'border-top-width' : halfHeight, 'border-left-width' : halfHeight, 'border-bottom-width' : halfHeight});
    };
  }
]);
