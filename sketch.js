const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let myEngine;
let myWorld;

var ground, leftWall, rightWall, topWall;
var ball;

var pushBtn;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  
  myWorld = myEngine.world;

  pushBtn = createImg("push.png");
  pushBtn.position(50, 40);
  pushBtn.size(50, 50);
  pushBtn.mouseClicked(applyBallForce)

  ground = new Ground(200, 390, 400, 10);
  leftWall = new Ground(5, 195, 10, 380);
  rightWall = new Ground(395, 195, 10, 380);
  topWall = new Ground(200, 5, 400, 10);


  var ball_options = {

    restitution: 0.9
  }
  ball = Bodies.circle(200, 10, 20, ball_options);
  World.add(myWorld, ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(myEngine);

  ground.display();
  leftWall.display();
  rightWall.display();
  topWall.display();

  ellipse(ball.position.x, ball.position.y, 20);
}


function applyBallForce()
{
  Body.applyForce(ball, {x: 0, y:0}, {x: 0.05, y:0})
}
