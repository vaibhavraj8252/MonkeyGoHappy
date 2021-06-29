var monkey,monkeyI,ob,obI,banana,bananaI,bg,bgI,iground,bG,oG;
var gs="play",score=0;

function preload(){
monkeyI=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
obI=loadImage("obstacle.png"); 
bananaI=loadImage("banana.png");
bgI=loadImage("jungle2.jpg");
}

function setup() {
bg=createSprite(200,200,600,500)
bg.addImage(bgI)
monkey=createSprite(100,360);
monkey.addAnimation("monkey",monkeyI);
monkey.scale=0.3;
iground=createSprite(350,430,700,10)
iground.visible=false;
bG=createGroup();
oG=createGroup();
monkey.setCollider("circle",0,0,175)
monkey.debug=false;
}

function draw(){
if(gs=="play"){
createCanvas(700,500);
bananaL(); obL();
background("blue");
drawSprites();
bg.velocityX=-4;


fill("yellow")
textFont("Algerian")
textSize(20);
text("Score:"+score,500,450);
 
  
if(bg.x<200){
  bg.x=510;
}  
  
if(keyDown("space")&& monkey.y>=50 ){
  monkey.y=monkey.y-30;
}

  monkey.velocityY=monkey.velocityY+1;

  monkey.collide(iground);
  
if(monkey.isTouching(oG)){
  gs="end";
}

if(monkey.isTouching(bG)){
  bG.destroyEach();
  score=score+2;
}
}
 

if(gs=="end"){
  textSize(40)
  text("Game Over",250,250)
  bg.velocityX=0;
  oG.velocityEach=0;
  bG.destroyEach();
}

}

function bananaL(){
if (frameCount%60==0) {
  banana=createSprite(700,random(80,250),20,20)
  banana.velocityX=-10;
  banana.addImage(bananaI)
  banana.scale=0.15;
  banana.lifetime=200;
  bG.add(banana)
}}

function obL(){
if (frameCount%200==0) {
  ob=createSprite(750,380,100,100)
  ob.velocityX=-15;
  ob.addImage(obI)
  ob.scale=random(0.2,0.25)
  ob.lifetime=200;
  oG.add(ob)
}
}


