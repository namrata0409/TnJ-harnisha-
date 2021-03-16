var tom , tomImg;
var jerry , jerryImg, jerryImg2 ,jerryImg3;
var garden , gardenImg , gardenImg2 , gardenImg3;

function preload() {
  
gardenImg = loadImage("images/garden.png");

tomImg = loadAnimation("images/tomOne.png");
tomImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
tomImg3 = loadAnimation("images/tomFour.png");

jerryImg = loadAnimation("images/jerryOne.png");
jerryImg2 =loadAnimation("images/jerryTwo.png","images/jerryThree.png");
jerryImg3 =loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


tom = createSprite(870,600,700,10);
tom.addAnimation( "cat",tomImg);
tom.addAnimation( "cat2",tomImg2);
tom.addAnimation( "cat3",tomImg3);
tom.scale = 0.13;
tom.debug = true;
tom.setCollider("rectangle",0,0,tom.width,tom.height);


jerry = createSprite(200,600,100,10);
jerry.addAnimation("mouse",jerryImg);
jerry.addAnimation("mouse2",jerryImg2);
jerry.addAnimation("mouse3",jerryImg3);

jerry.scale = 0.12;
jerry.debug = true;
jerry.setCollider("rectangle",0,0,1300,600);


}

function draw() {

    background(gardenImg);
    console.log(tom.x - jerry.x, (tom.width - jerry.width)/2);
 //Write condition here to evalute if tom and jerry collide
if(tom.x - jerry.x < (tom.width - jerry.width)/2){
  
  
  tom.velocityX = 0;
  tom.x = 300;
  tom.changeAnimation( "cat3");

  jerry.velocityX =0;
  jerry.changeAnimation("mouse3");

 
}

   
  //  happy();

    drawSprites();
}


function keyPressed(){
 if(keyCode === LEFT_ARROW) { 
  tom.velocityX = -5;

  tom.changeAnimation( "cat2");
  jerry.frameDelay = 25;
  jerry.changeAnimation("mouse2");


 }
}

/*function happy(){
  if(tom.y > 640){
    tom.x = 300; 
    tom.y = 645;

    tom.changeAnimation("cat3");

    jerry.change("mouse3");
    }
}*/
