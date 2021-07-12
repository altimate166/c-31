var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
 

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 35; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 20; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  ball1 = new Particle(440,5,10)
  ball2 = new Particle(440,5,10)  
  ball3 = new Particle(440,8,10)
  ball4 = new Particle(440,9,10)
  ball5 = new Particle(440,9,10)
  ball6 = new Particle(440,9,10)
  ball7 = new Particle(440,9,10)
  ball8 = new Particle(440,8,10)
  ball9 = new Particle(440,7,10)
  ball10 = new Particle(440,6,10)
  ball11 = new Particle(440,5,10)
  ball12= new Particle(440,4,10)
  ball13= new Particle(440,3,10)
  ball14= new Particle(440,2,10)
  ball15 = new Particle(440,1,10)
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
    
  }
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10))
  }
  //display the paricles 
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ball12.display();
  ball13.display();
  ball14.display();
  ball15.display();
}