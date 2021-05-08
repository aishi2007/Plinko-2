var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var particle;
var count=0;
var gameState="START"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2 , 10, divisionHeight));

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
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  
  // if(frameCount%60===0){
  //   for (var l = 50; l <=width-10; l=l+50) 
  //   {
  //   particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  //   particles.velocityY = 6;
  // }
  // }
    
}
 


function draw() {
  background("black");
  
 
  Engine.update(engine);
  ground.display();
  
  textSize(20)
  fill("white")
  text("Score: "+score,50,50)
 
  text("500",30,500)
  text("500",100,500)
  text("500",180,500)
  text("500",260,500)
  text("100",340,500)
  text("100",430,500)
  text("100",500,500)
  text("200",580,500)
  text("200",660,500)
  text("200",740,500)

  if(gameState==="END"){
    textSize(30)
    text("Game Over",200,200)
  }
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  

  //display the paricles 
  // for (var m = 0; m< particles.length; m++) {
  //   particles[m].display();

  // }

  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score=score+500
        particle=null
        if(count>=5){
          gameState="END"
        }
      }
      else if(particle.body.position.x<600 && particle.body.position.x>301){
        score=score+100
        particle=null
        if(count>=5){
          gameState="END"
        }
      }
      else if(particle.body.position.x<900 && particle.body.position.x>601){
        score=score+200
        particle=null
        if(count>=5){
          gameState="END"
        }
      }
    }
  }
console.log(score)

}

function mousePressed(){
  if(gameState!=="END"){
    count++
  particle=new Ball(mouseX,10,10)

  }
}