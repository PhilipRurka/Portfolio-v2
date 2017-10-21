'use strict';
app.controller('contributorController', ['$scope', '$timeout', '$rootScope',
  function($scope, $timeout, $rootScope) {
    /*************************************/
    /********** SCOPE VARIABLES **********/
    /*************************************/

    /*************************************/
    /********** SCOPE FUNCTIONS **********/
    /*************************************/
    var canvas;
    var height = $(window).height();
    var width = $(window).width();
    var ambientLight = 0.15;
    var intensity = 1;
    var radius = 30;
    var amb = 'rgba(0,0,0,' + (1-ambientLight) + ')';
  
    function spotlight(canvas, coord) {
      var context = canvas.getContext('2d');
      context.clearRect(0, 0, width, height);
      
      var g = context.createRadialGradient(coord.x, coord.y, (radius - 10), coord.x, coord.y, radius);
      g.addColorStop(1, 'rgba(0,0,0,' + (1-intensity) + ')');
      g.addColorStop(0, amb);
      context.fillStyle = g;
      context.beginPath();
      context.arc(coord.x, coord.y, radius, 0, Math.PI*2, true);
      context.closePath();
      context.fill();
      
      context.fillStyle = amb;
      context.globalCompositeOperation = 'xor';
      context.fillRect(0, 0, width, height);
      
    }
  
    function getMousePos(canvas, event) {
      return {
        x:  event.clientX,
        y:  event.clientY
      };
    }

    var boolean = false;
    var width = $(window).width();

    $('body').bind('keydown', function(event) {
      boolean = true;
      var $this = $(this);
      if(event.key === '`') {
        if(!$rootScope.showCanvas) {
          $timeout(function() {
            canvas = document.getElementById('myCanvas');
            canvas.height = height;
            canvas.width = width;

            $('body').mouseover(function() {
              if(!$rootScope.showCanvas && boolean) {
                $timeout(function() {
                  $rootScope.showCanvas = true;
                  $scope.$$postDigest(function() {
                    canvas.addEventListener('mousemove', function(event) {
                      spotlight(canvas, getMousePos(canvas, event));
                    }, false);
                  });
                })
              }
            })

            canvas.addEventListener('mousemove', function(event) {
              spotlight(canvas, getMousePos(canvas, event));
            }, false);

          },250)
        } else {
          $timeout(function() {
            $rootScope.showCanvas = false;
            boolean = false;
            $('body').mouseover(function(event){
              debugger;
              event.preventDefault();
            });
          })
        }
      }
    })

  }
]);
