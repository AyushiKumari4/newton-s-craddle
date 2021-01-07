
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball1
var rope1
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

    ball1=new ball(400,350)
 ground= new Ground(400,200,400,80)
 rope1= new Chain(ball1.body,ground.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  ball1.display();
  ground.display();
  rope1.display();

  drawSprites();
 
}



