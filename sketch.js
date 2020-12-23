const Engine = Matter.Engine 
const Bodies = Matter.Bodies
const World = Matter.World
var engine, world; 
var ground; 
var ball;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 
  var options = {
   isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20, options);
  World.add(world, ground)
  var options_ball = {
    restitution: 1
  }
  ball = Bodies.circle(200, 200, 40, options_ball);
World.add(world, ball);
}

function draw() {
  background("BLACK");  
  Engine.update(engine);
  rectMode(CENTER) 
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40, 40);
}