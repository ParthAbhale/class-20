var moving_rect,fixed_rect;

function setup() {
  createCanvas(800,400);
  moving_rect = createSprite(400, 200, 50, 100);
  fixed_rect = createSprite(200, 200, 100, 50);

  moving_rect.shapeColor="red"
  fixed_rect.shapeColor="red"

}

function draw() {
  background(255,255,255);  

  moving_rect.y=World.mouseY;
  moving_rect.x=World.mouseX;
  
  if (fixed_rect.width/2+moving_rect.width/2>moving_rect.x-fixed_rect.x 
     && fixed_rect.width/2+moving_rect.width/2>fixed_rect.x-moving_rect.x){
    moving_rect.shapeColor="green"
  fixed_rect.shapeColor="green"
  }else{
    moving_rect.shapeColor="red"
  fixed_rect.shapeColor="red"
  }

  if (fixed_rect.height/2+moving_rect.height/2>moving_rect.y-fixed_rect.y 
    && fixed_rect.height/2+moving_rect.height/2>fixed_rect.y-moving_rect.y){
   moving_rect.shapeColor="green"
 fixed_rect.shapeColor="green"
 }else{
   moving_rect.shapeColor="red"
 fixed_rect.shapeColor="red"
 }
  

  drawSprites();
  
}