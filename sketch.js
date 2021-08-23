
var trex ,trex_running;

function preload(){
  
  trex_running= loadAnimation("trex1.png", "trex3.png","trex4.png")
  ground_image = loadImage("ground2.png")
  cloud_img = loadImage("cloud.png")

}

function setup(){
  createCanvas(600,200)
  
  
  edges=createEdgeSprites()
 
  ground= createSprite(300,180,600,20)
  ground.addImage(ground_image)
  //ground.debug=true;

  //create a trex sprite
  trex= createSprite(50,170,20,20)
  trex.addAnimation("running", trex_running)
  trex.scale =0.5
  



  invisibleGround= createSprite(50,195,50,20)
  invisibleGround.visible=false;
}

function spawnClouds(){
  if(frameCount%60==0){
  cloud = createSprite(600,Math.round(random(20,80)));
  cloud.addImage(cloud_img);
  cloud.velocityX = -4;
  cloud.scale = 0.5;
  console.log(frameCount);

  }
}

function draw(){
  background("white")

  if(keyDown("space")){ 
    trex.velocityY = -10
  }


  //false gravity
  trex.velocityY +=0.5
  
  trex.collide(invisibleGround) 

  ground.velocityX = -6

  if(ground.x<0){
    ground.x = ground.width/2
  }
  //console.log(trex.y)
  if(trex.y>160 && keyDown("space")){
    trex.velocityY = -10
  }
  spawnClouds()
  drawSprites()
}
