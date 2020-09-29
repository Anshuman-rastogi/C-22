const {Engine, World, Bodies} = Matter;


var engine, world;

var ground, ball;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic:true
  }

  ground = Bodies.rectangle(400, 380, 800, 20, option);

  World.add(world, ground);

  var option1 = {
    restitution:2.0
  }

  ball = Bodies.circle(400, 200, 20, option1);

  World.add(world, ball);

}

function draw() {
  background(0);  
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}