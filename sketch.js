
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Ground(400, 200, 350, 20);
    bob = new Paper(400, 400); 
    bob1 = new Paper(350, 400);
    bob2 = new Paper(300, 400);
    bob3 = new Paper(450, 400);
    bob4 = new Paper(500, 400);

   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.dispplay();
  
  drawSprites();
 
}



