
var fixedrect , movingrect ;


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600,400,50,80);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "green";    
}

function draw() {
  background(0,0,0);  
  
  movingrect.x = World.mouseX ;
  movingrect.y = World.mouseY ; 
  
  
  if(IsTouching(movingrect,fixedrect)){
  movingrect.shapeColor = "yellow" ;
  fixedrect.shapeColor= "yellow";
  }
  else {
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }
  drawSprites();
}



