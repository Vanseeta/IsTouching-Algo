function setup() {
  createCanvas(800,400);
  M_body=createSprite(400, 200, 80, 30);
  F_body=createSprite(400, 200, 50, 80);
  M_body.shapeColor="green";
  F_body.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  M_body.x=World.mouseX
  M_body.y=World.mouseY
  if ((M_body.x - F_body.x) < (M_body.width/2 + F_body.width/2) 
  && (F_body.x - M_body.x) < (M_body.width/2 + F_body.width/2)
  && (M_body.y - F_body.y) < (M_body.height/2 + F_body.height/2)
  && (F_body.y - M_body.y) < (M_body.height/2 + F_body.height/2)) {
    M_body.shapeColor="red";
    F_body.shapeColor="red";
  }
  else {
    M_body.shapeColor="green";
    F_body.shapeColor="green";
  }
  drawSprites();
}