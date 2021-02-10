class Mango {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1,
             
      }
this.image=loadImage("mango.png")
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
    image(this.image, pos.x, pos.y, this.radius, this.radius);
    
    }
  };