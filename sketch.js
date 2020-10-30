var rect1,rect2,rect3;
var circle1,circle2,circle3;

function preload(){
  f1 = loadImage("1.png");
  f2 = loadImage("2.png");
  f3 = loadImage("3.png");
  f4 = loadImage("4.png");

  song = loadSound("s.mp3");
}
function setup() {
  createCanvas(400, 400);
  rect1=new Rectangle();
  rect2= new Rectangle();
  rect3= new Rectangle();
  rect4= new Rectangle();
  
  circle1= new Circle();
  circle2= new Circle();
  circle3= new Circle();

  song.play();

}

function draw() {
  background(220);
  textSize(25);
  fill("black");
  text("Happy Birthday Sranavi Mam!😍",20,100);
  
  rectMode(CENTER);
  fill("red");
  rect1.x=200;
  rect1.y=350;
  rect1.width= 260;
  rect1.height=60;
  rect1.display();
    
  fill("orange");
  rect2.x=200;
  rect2.y=290;
  rect2.width= 200;
  rect2.height=60;
  rect2.display();
  
  fill("magenta");
  rect3.x=200;
  rect3.y=235;
  rect3.width= 140;
  rect3.height=50;
  rect3.display();
  
  fill("yellow");
  rect3.x=195;
  rect3.y=200;
  rect3.width= 10;
  rect3.height=30;
  rect3.display();
  
  fill("yellow");
  rect3.x=150;
  rect3.y=200;
  rect3.width= 10;
  rect3.height=30;
  rect3.display();
  
  fill("yellow");
  rect3.x=245;
  rect3.y=200;
  rect3.width= 10;
  rect3.height=30;
  rect3.display();
  
  fill("pink");
  circle1.x=120;
  circle1.y=290;
  circle1.r=20;
  circle1.display();
  
  fill("pink");
  circle1.x=160;
  circle1.y=290;
  circle1.r=20;
  circle1.display();
  
  fill("pink");
  circle1.x=200;
  circle1.y=290;
  circle1.r=20;
  circle1.display();
  
  fill("pink");
  circle1.x=240;
  circle1.y=290;
  circle1.r=20;
  circle1.display();
  
  fill("pink");
  circle1.x=280;
  circle1.y=290;
  circle1.r=20;
  circle1.display();

  ribbon();  
  drawSprites();
}


function ribbon(){
if (frameCount % 20 === 0) {
  fruits = createSprite(random(100, 1000), 0, 100, 100);
  fruits.velocityY = 6;
  fruits.scale = 0.1;
  var rand = Math.round(random(1,4));
  switch(rand){
      case 1: fruits.addImage(f1);
      break;
      case 2: fruits.addImage(f2);
      break;
      case 3: fruits.addImage(f3);
      break;
      case 4: fruits.addImage(f4);
      break;

  }
  
}
}