var spacecraft1,imgspace1
var spacecraft2,imgspace2
var spacecraft3,imgspace3
var spacecraft4,imgspace4
var imgbackground
var issImg,iss
var hasDocked = false;
var iss
var spacecraft

function preload(){
imgspace1 = loadAnimation("spacecraft1.png")
imgspace2 = loadAnimation("spacecraft2.png")
imgspace3 = loadAnimation("spacecraft3.png")
imgspace4 = loadAnimation("spacecraft4.png")
issImg = loadImage("iss.png")
imgbackground = loadImage("spacebg.jpg")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.scale = 0.3;
  iss.addAnimation("iss",issImg);

  spacecraft = createSprite(200,50,50,50);
  spacecraft.scale = 0.2;
  spacecraft.addAnimation("still",imgspace1);
}

function draw() {
  background(imgbackground);  

  if(!hasDocked){
    if(keyDown(UP_ARROW)){
      spacecraft.addAnimation("ddd",imgspace2);
      spacecraft.velocityY = -2; 
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.velocityY = 2; 
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addAnimation("dd",imgspace3);
      spacecraft.velocityX = 2; 
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.addAnimation("d",imgspace4);
      spacecraft.velocityX = -2; 

    }
  }

  if(spacecraft.x = 400){
    hasDocked = true;
  }

  drawSprites();
}