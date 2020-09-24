
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var leftline, mainline, rightline, ball ,ground
 

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,675,1200,20);
   
	leftline= new box(900,615, 20, 100);
	mainline = new box(1000,655, 200, 20 );
	rightline = new box(1100, 615, 20, 100);

	paper = new paper (50,655,40,40);
  

	Engine.run(engine);
  
}


function draw() {
 createCanvas (1200,700);
  rectMode(CENTER);
  background(255);

  ground.display();
  mainline.display();
  leftline.display();
  rightline.display();
  paper.display ();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}

}
