class Ball {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
  
  
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("purple");
      strokeWeight(3)
      stroke("black")
      ellipse(pos.x, pos.y, this.width, this.height);
    
    }
  }
  