
var moving , fixed ;


function setup() {
  createCanvas(1200,800);
 fixed = createSprite(200, 200, 50, 80);
 fixed.shapeColor="green" ;
 moving =createSprite(400,200,80,30)
 moving.shapeColor="green" ;
 
}

function draw() {
  background("black");
  moving.x = World.mouseX ;
  moving.y = World.mouseY ; 
  //console.log (moving.x - fixed.x)
  if(fixed.x - moving.x < fixed.width/2 + moving.width/2 && 
   moving.x - fixed.x <fixed.width/2 + moving.width/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2 && 
   moving.y - fixed.y <fixed.height/2 + moving.height/2){
    fixed.shapeColor="red";
    moving.shapeColor = "red";
    
  }
  else {
    fixed.shapeColor="green" ;
    moving.shapeColor="green" ;
  }
  drawSprites();
}