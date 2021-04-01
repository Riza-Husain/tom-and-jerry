var cat;
var mouse;
var back,backk;

function preload()
{
  back=loadImage("images/garden.png");
  tom1=loadImage("images/mouse1.png");
  tom2=loadAnimtion("images/mouse2.png","images/mouse3.png");
  tom3=loadImage("images/mouse4.png");
  cat1=loadImage("images/cat1.png");
  cat2=loadAnimtion("images/cat2.png","images/cat3.png");
  cat3=loadImage("images/cat4.png");
}

function setup()
{
   createCanvas(1000,800);
    
   backk = createSprite(500,400);
   backk.addImage("bg",back);

   mouse = createSprite(870,600);
   mouse.addAnimation("sleep",tom1);
   mouse.scale=0.2;

   cat = createSprite(870,600);
   cat.addAnimation("lay",cat1);
   cat.scale=0.15;
}

function draw() 
{
  background(backk);
    
    if(mouse.x - cat.x < (mouse.width - cat.width)/2 )
    {
      mouse.velocityX=0;
      mouse.addAnimation("finding",tom3);
      mouse.x=300;
      mouse.changeAnimation("finding");
      cat.addAnimation("sit",cat3);
      cat.changeAnimation("sit");
    }

    drawSprites();
}


function keyPressed()
{
   if(keyDown === LEFT_ARROW)
   {
     mouse.velocityX = -3;
     mouse.addAnimation("tease",tom2);
     mouse.changeAnimation("tease");

     cat.addAnimation("teasing",cat2);
     cat.changeAnimation("teasing");
   }
}