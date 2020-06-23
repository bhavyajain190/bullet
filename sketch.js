var  bullet;
var object2,object1;
var bullet2;
var wall;
function setup() {
  createCanvas(1200,800);
  
  bullet = createSprite(100, 400,80,30);
  bullet.shapeColor = "brown";
 
object1=createSprite(100,100,80,30);
object1.shapeColor="white";
object2=createSprite(100,200,80,30);
object2.shapeColor="blue";
bullet2=createSprite(100,300,80,30);
bullet2.shapeColor="lime";

wall=createSprite(1000,300,50,500);
wall.shapeColor="yellow";
 
}

function draw() {
  background(0,0,0); 

 bullet.velocityX=7;
  bullet2.velocityX=5;
  
  
if( isTouching(bullet,wall)){
bullet.shapeColor="red";

wall.shapeColor="yellow";
}
else{
  bullet.shapeColor="brown";
wall.shapeColor="yellow";
}
if( isTouching(bullet2,wall)){
  bullet2.shapeColor="green";
  wall.shapeColor="yellow";
  }
  else{
    bullet2.shapeColor="lime";
  wall.shapeColor="yellow";
  }
  if( isTouching(object1,wall)){
    object1.shapeColor="green";
    wall.shapeColor="yellow";
    }
    else{
      object1.shapeColor="white";
    wall.shapeColor="yellow";
    }
    if( isTouching(object2,wall)){
      object2.shapeColor="red";
      wall.shapeColor="yellow";
      }
      else{
        object2.shapeColor="blue";
      wall.shapeColor="yellow";
      }
drawSprites();
    }
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object2.width/2+object1.width/2&&object1.y-object2.y<object2.height/2+object1.height/2&&object2.y-object1.y<object2.height/2+object1.height/2)

  { 
  return true;
}
 else {
   return false;
 }
}


