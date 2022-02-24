var ground
var trex ,trex_running;
var groundImage
var invisibleGround
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
 groundImage=loadImage("ground2.png") 

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 trex.x=50
 ground=createSprite(200,180,400,20)
 ground.addImage("ground",groundImage)
 invisibleGround=createSprite(200,190,400,10)
 invisibleGround.visible=false 
}

function draw(){
  background("white")
  console.log(trex.y)
  ground.velocityX=-2
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space") && trex.y>=150){
  trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(invisibleGround)
  drawSprites()
  

}
