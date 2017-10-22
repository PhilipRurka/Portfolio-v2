var spotLight = {
  canvas: document.getElementById('myCanvas'),
  /** Height of the window */
  height: null,
  /** Width of the window */
  width: null,
  /** How thick is the overlay in the clear circle */
  intensity: 0,
  /** Radius of the spot light */
  radius: 30,
  /** Background color fo the canvas in spot light mode */
  amb: 'rgba(0, 0, 0, 0.9)',
  /** The state of the canvas */
  stateCheck: false,

  /** Show and hide the canvas */
  showCanvas: function(boolean) {
    if(boolean === true) {
      this.canvas.classList.add('show-canvas');
    } else {
      this.canvas.classList.remove('show-canvas');
    }
  },

  spotLightInit: function(key) {
    this.stateCheck = true;
    if(event.key === key) {
      if(!this.canvas.classList.contains('show-canvas')) {
        // Set height and width of the canvas
        this.height = $(window).height();
        this.width = $(window).width();
        this.canvas.height = this.height;
        this.canvas.width = this.width;

        $('body').mouseover(function() {
          $this = spotLight;
          if(!$this.canvas.classList.contains('show-canvas') && $this.stateCheck) {
            $this.showCanvas(true);
            $this.canvas.addEventListener('mousemove', function(event) {
              $this.drawFunc($this.canvas, $this.getMousePosition(event));
            })
          }
        })
      } else {
        this.showCanvas(false);
        this.stateCheck = false;
        $('body').mouseover(function(event){
          event.preventDefault();
        });
      }
    }
  },

  /** Outputs the coordinates of the mouse cursor on move */
  getMousePosition: function(event) {
    return {
      x:  event.clientX,
      y:  event.clientY
    };
  },

  /**
   * Function that draws the spot light on the canvas 
   * @param {{}}  canvas - Canvas Element
   * @param {number}  coord - Mouse coordinates
   * */
  drawFunc: function(canvas, coord) {
    /** getContext() method returns an object that provides methods and properties for drawing on the canvas */
    var context = this.canvas.getContext('2d');

    /** 
     * Clears the specified pixels within a given rectangle
     * @param {number}  a - The x-coordinate of the upper-left corner of the rectangle to clear
     * @param {number}  b - The y-coordinate of the upper-left corner of the rectangle to clear
     * @param {number}  c - The width of the rectangle to clear, in pixels
     * @param {number}  d - The height of the rectangle to clear, in pixels
     */
    context.clearRect(0, 0, this.width, this.height);
    
    /**
     * @param {number}  a1 - X axis off set for the first circle
     * @param {number}  b1 - Y axis off set for the first circle
     * @param {number}  c1 - Radius of the first circle
     * @param {number}  a2 - X axis off set for the second circle
     * @param {number}  b2 - Y axis off set for the second circle
     * @param {number}  c2 - Radius of the second circle
     * Note: The space from the first to the second circle will have a slight faded overlay
     */
    var radialGradient = context.createRadialGradient(coord.x, coord.y, this.radius, coord.x, coord.y, (this.radius - 1));

    // TO DO Figure the rest out
    radialGradient.addColorStop(1, 'rgba(255, 255, 255,' + (1 - this.intensity) + ')');
    radialGradient.addColorStop(0, this.amb);

    context.fillStyle = radialGradient;
    context.beginPath();
    context.arc(coord.x, coord.y, this.radius, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
    
    context.fillStyle = this.amb;
    context.globalCompositeOperation = 'xor';
    context.fillRect(0, 0, this.width, this.height);
  }
};