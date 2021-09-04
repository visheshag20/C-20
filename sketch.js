var bg,tom1,tomImg1,tom2,tomImg2,tomFinal,tomFinalImg;
var jy1,jyImg1,jy2,jyImg2,jyFinal,jyFinalImg;


function preload() {
    //load the images here
  bg = loadImage("images/garden.png");
  tomImg1 = loadAnimation("images/cat1.png");
  tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
  tomFinalImg = loadAnimation("images/cat4.png")

  jyImg1 = loadAnimation("images/mouse1.png");
  jyImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
  jyFinalImg = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom1 = createSprite(870,600);
    tom1.addAnimation("tomSleeping",tomImg1); 
    tom1.scale=0.2;
    
    jy1 = createSprite(200,600);
    jy1.addAnimation("jerryStanding",jyImg1); 
    jy1.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if( tom1.x-jy1.x < (tom1.width-jy1.width)/2){
         tom1.velocityX=0;
         tom1.addAnimation("tomFinal",tomFinalImg);
         tom1.changeAnimation("tomFinal")
         tom1.x=300;
         tom1.scale=0.2;

         jy1.addAnimation("jerryFinal",jyFinalImg);
         jy1.changeAnimation("jerryFinal")
         jy1.scale=0.15;
    }
    drawSprites();
}


function keyPressed(){
  
  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom1.velocityX=-5;
      tom1.addAnimation("tomRunning",tomImg2);
      tom1.changeAnimation("tomRunning")
      jy1.addAnimation("jerryTeasing",jyImg2);
      jy1.changeAnimation("jerryTeasing");
      jy1.frameDelay=25;

  }

}
