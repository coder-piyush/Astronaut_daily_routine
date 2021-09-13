var bg, sleep, brush, gym, eat, drink, moving;
var backgroundimg, astronaut, brushing, drinking, gymming, eating, Moving;

function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  moving = loadAnimation("images/move1.png", "images/move2.png");
}

function setup() {
  createCanvas(980, 600);

  backgroundimg = createSprite(490, 300);
  backgroundimg.addImage("background", bg);
  backgroundimg.scale = 0.2;

  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}


function draw() {
  //set background color 
  background(220);

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if (keyDown("UP_ARROW")) {
    // console.log("Working");
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  else if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  else if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  else if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  else if (keyDown("M")) {
    astronaut.addAnimation("Moving", moving);
    astronaut.changeAnimation("Moving");
    astronaut.y = 350;
    astronaut.velocityX = -3;
    rotate(PI / 7.0);
    astronaut.velocityY = 0;
  }

  drawSprites();
}