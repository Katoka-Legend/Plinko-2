const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rods = []
var balls = []
var divisions = []
var exist = false;
var score = 0
var gameState = 'start'
var chance = 0

function setup() {
  engine = Engine.create();
  createCanvas(800, 800);
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  //  for (var k = 0; k <=width; k = k + 80) {
  //    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  //  }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       rods.push(new Rod(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       rods.push(new Rod(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       rods.push(new Rod(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       rods.push(new Rod(j,375));
      }
   
      for(var i = 0;i < 810;i=i+80 ){
      divisions.push(new Division(i,700,10,300))      
   }
   scoreCount()     
    

    
}

function draw() {
  background(0)
  Engine.update(engine);

  for(var k = 0; k < rods.length; k++) {
       rods[k].display();
    }    
  for(i = 0;i<balls.length;i++){
    balls[i].display()
    scoreCount()
  }
  for(i = 0;i<divisions.length;i++){
    divisions[i].display()
  }
  a = 50
  for(j=40;j<800;j=j+80){
     fill('white')
     textSize(30)
     text(0+a,j-20,600)
     a = a + 50
  }
  if(chance == 3){
     gameState = 'end'
  }

  if(gameState == 'end'){
      balls = []
      
      fill('white')
      textSize(20)
      text("Score : "+score,10,50)

      fill('white')
      textSize(20)
      text("Chances : "+chance,650,50)
  }
  


}


function scoreCount(){
   try {
      x = balls[i].body.position.x
      y = balls[i].body.position.y
      if( x > 0 && x < 80 && y > 700 && y< 710){
         score = score + 50
         chance++
      }
      else if( x > 80&& x < 160 && y > 700 && y< 710){
         score = score + 100
         chance++
      }
      else if( x > 160&& x < 240 && y > 700 && y< 710){
         score = score + 150
         chance++
      }
      else if( x > 240 && x < 320 && y > 700 && y< 710){
         score = score + 200
         chance++
      }
      else if( x > 320 && x < 400 && y > 700 && y< 710){
         score = score + 250
         chance++
      }
      else if( x > 400 && x < 480 && y > 700 && y< 710){
         score = score + 300
         chance++
      }
      else if( x > 480 && x < 560 && y > 700 && y< 710){
         score = score + 350
         chance++
      }
      else if( x > 560 && x < 640 && y > 700 && y< 710){
         score = score + 400
         chance++
      }
      else if( x > 640 && x < 720 && y > 700 && y< 710){
         score = score + 450
         chance++
      }
      else if( x > 720 && x < 800 && y > 700 && y< 710){
         score = score + 500
         chance++
      }
      else if( x > 800 && x < 0 && y > 700 && y< 710){
         chance++
      }
     

      
     
      
   }
   catch(error){}
   
   fill('white')
   textSize(20)
   text("Score : "+score,10,50)

   fill('white')
   textSize(20)
   text("Chances : "+chance,650,50)

   
}

function mousePressed(){
   ball = new Ball(mouseX,10,10)
   balls.push(ball)
}
