class box {
    constructor (x, y, width,height){
    var options = {
        'isStatic': true,
         'friction':3,
         
         'restitution':0
         
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     
     World.add(world, this.body);
     this.image = loadImage ("dustbingreen.png")
   }
   display(){
     var pos =this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate (angle);
     imageMode(CENTER);
     fill("white");
     image(this.image,0, 0, this.width, this.height );
     pop();
   }
 }