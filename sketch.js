var box

function setup() {
  createCanvas(400, 400);

  box = createSprite(200, 200, 30, 30)
  box.shapeColor = "purple"
}

function draw() {
  background("pink");

  if (keyDown("right")) {
    box.x = box.x + 2
  }

  if (keyDown("left")) {
    box.x = box.x - 2
  }
  
  if (keyDown("up")) {
    box.y = box.y - 2
  }
  
  if (keyDown("down")) {
    box.y = box.y +2
  }



  drawSprites()
}