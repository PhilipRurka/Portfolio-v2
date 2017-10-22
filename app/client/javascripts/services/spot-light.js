'use strict';
app.service('spotLightService',
['$rootScope', '$timeout',
function($rootScope, $timeout) {

  /*******************************/
  /********** VARIABLES **********/
  /*******************************/
  var canvas = document.getElementById('myCanvas');
  /** Height of the window */
  var height;
  /** Width of the window */
  var width;
  // To Do
  var ambientLight = 0.1;
  /** How thick is the overlay in the clear circle */
  var intensity = 0;
  /** Radius of the spot light */
  var radius = 30;
  /** Background color fo the canvas in spot light mode */
  var amb = 'rgba(0,0,0,' + (1-ambientLight) + ')';
  /** The state of the canvas */
  var stateCheck;
  
  /*************************************/
  /********** SCOPE FUNCTIONS **********/
  /*************************************/
  this.spotLightInit = function(key) {
    stateCheck = true;
    var $this = $(this);
    if(event.key === key) {
      if(!$rootScope.showCanvas) {
        $timeout(function() {
          // Set height and width of the canvas
          height = $(window).height();
          width = $(window).width();
          canvas.height = height;
          canvas.width = width;

          $('body').mouseover(function() {
            if(!$rootScope.showCanvas && stateCheck) {
              $timeout(function() {
                $rootScope.showCanvas = true;
                $rootScope.$$postDigest(function() {
                  canvas.addEventListener('mousemove', function(event) {
                    spotlight(canvas, getMousePosition(canvas, event));
                  }, false);
                });
              })
            }
          })
        })
      } else {
        $timeout(function() {
          $rootScope.showCanvas = false;
          stateCheck = false;
          $('body').mouseover(function(event){
            event.preventDefault();
          });
        })
      }
    }
  }

  /*******************************/
  /********** FUNCTIONS **********/
  /*******************************/
  /** Outputs the coordinates of the mouse cursor on move */
  function getMousePosition(canvas, event) {
    return {
      x:  event.clientX,
      y:  event.clientY
    };
  }

  /**
   * Function that draws the spot light on the canvas 
   * @param {{}}  canvas - Canvas Element
   * @param {number}  coord - Mouse coordinates
   * */
  function spotlight(canvas, coord) {
    /** getContext() method returns an object that provides methods and properties for drawing on the canvas */
    var context = canvas.getContext('2d');

    /** 
     * Clears the specified pixels within a given rectangle
     * @param {number}  a - The x-coordinate of the upper-left corner of the rectangle to clear
     * @param {number}  b - The y-coordinate of the upper-left corner of the rectangle to clear
     * @param {number}  c - The width of the rectangle to clear, in pixels
     * @param {number}  d - The height of the rectangle to clear, in pixels
     */
    context.clearRect(0, 0, width, height);
    
    /**
     * @param {number}  a1 - X axis off set for the first circle
     * @param {number}  b1 - Y axis off set for the first circle
     * @param {number}  c1 - Radius of the first circle
     * @param {number}  a2 - X axis off set for the second circle
     * @param {number}  b2 - Y axis off set for the second circle
     * @param {number}  c2 - Radius of the second circle
     * Note: The space from the first to the second circle will have a slight faded overlay
     */
    var radialGradient = context.createRadialGradient(coord.x, coord.y, radius, coord.x, coord.y, (radius - 1));

    // TO DO Figure the rest out
    radialGradient.addColorStop(1, 'rgba(255, 255, 255,' + (1-intensity) + ')');
    radialGradient.addColorStop(0, amb);

    context.fillStyle = radialGradient;
    context.beginPath();
    context.arc(coord.x, coord.y, radius, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
    
    context.fillStyle = amb;
    context.globalCompositeOperation = 'xor';
    context.fillRect(0, 0, width, height);
    
  }
}]);