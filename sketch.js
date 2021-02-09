var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200,200,50,80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400, 200, 80, 30);
  movingrect.shapeColor="green";
  fixedrect.velocityX=5
  movingrect.velocityX=-5
  Object1=createSprite(100,100,50,50)
  Object1.shapeColor="yellow"
  Object1.velocityY=3
  Object2=createSprite(100,300,50,50)
  Object2.velocityY=-3
  Object2.shapeColor="red"
}

function draw() {
  background("black");  
console.log(fixedrect.y-movingrect.y)
bounceoff(Object1,Object2)
bounceoff(movingrect,fixedrect)
 drawSprites();
}
function bounceoff(OB1,OB2) {
  if(OB1.x-OB2.x<=OB1.width/2+OB2.width/2 &&
    OB2.x-OB1.x<=OB1.width/2+OB2.width/2
    ){
   OB1.velocityX=OB1.velocityX*(-1);
   OB2.velocityX=OB2.velocityX*(-1);
 }
 if(OB2.y-OB1.y<=OB1.height/+OB2.height/2 && 
  OB1.y-OB2.y<=OB1.height/2+OB2.height/2){
    OB1.velocityY=OB1.velocityY*(-1);
    OB2.velocityY=OB2.velocityY*(-1);
  }

}