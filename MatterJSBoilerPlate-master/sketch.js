
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var wall_1, wall_2, wall_3
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	wall1 = createSprite(690,580,20,100)
	wall2 = createSprite(510,580,20,100)
	wall3 = createSprite(600,620,200,20)
	
	wall1.shapeColor=(100)
	wall2.shapeColor=(100)
	wall3.shapeColor=(100)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,650,800,30)

	
	wall_1 = Bodies.rectangle(690,580,20,100, {isStatic:true})
	World.add(world, wall_1);
	
	wall_2 = Bodies.rectangle(510,580,20,100, {isStatic:true})
	World.add(world, wall_2);
	

	wall_3 = Bodies.rectangle(600,620,200,10, {isStatic:true})

	paper = new Paper(100,500,5)

	World.add(world, wall_3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);	
  ground.display();
  paper.display();

  drawSprites();
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{	x:3.1,y:-5})
	}
}