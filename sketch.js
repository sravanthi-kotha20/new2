var fixedRect,movingRect;
 var r;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,30,50);
  

  movingRect = createSprite(300,200,50,20);



}

function draw() {
  background(255,255,255); 
  r=fixedRect.width/2+movingRect.width/2;
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

  console.log(movingRect.x-fixedRect.x+ "  "+ r);
  if(movingRect.x-fixedRect.x <= fixedRect.width/2+movingRect.width/2
     &&  fixedRect.x- movingRect.x <=fixedRect.width/2+movingRect.width/2 ){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";

  }else{

    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
 
  }



  drawSprites();
}