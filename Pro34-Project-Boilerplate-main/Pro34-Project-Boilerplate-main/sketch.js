const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;
var ball;
var ground;
var groundTop, groundRight, groundLeft;
class Ground {
  constructor(x, y, width, height, color) {
    this.body = Bodies.rectangle(x, y, width, height, { isStatic: true });
    this.color = color;
    World.add(world, this.body);
  }
  display() {
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.body.bounds.width, this.body.bounds.height);
  }
}
function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  ball = Bodies.circle(200, 50, 20, { restitution: 0.8 });
  World.add(world, ball);
  ground = new Ground(width / 2, height - 10, width, 20, 255);
  groundTop = new Ground(width / 2, 0, width, 20, 150); // Top
  groundRight = new Ground(width, height / 2, 20, height, 150); // Right
  groundLeft = new Ground(0, height / 2, 20, height, 150); // Left
}
function draw() {
  background(51);
  Engine.update(engine);
  ground.display();
  groundTop.display();
  groundRight.display();
  groundLeft.display();
  fill(255);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
  } else if (keyCode === DOWN_ARROW) {
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:0.05});
  } else if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:-0.01, y:0});
  } else if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.01, y:0});
  }
}
