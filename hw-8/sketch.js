
// midpoint of the light circles
var xPoint;
var yPoint;
// keeps track of the number of light circles drawn
var counter;
// midpoint of the moving circle
var movingX;
var movingY;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background('black');
  xPoint= 20;
  yPoint= 20;
  counter= 0;
  movingX = 20;
  movingY = 20;
  frameRate(15);
}

function draw(){

// sets the block of blue and white circles on the background)
  while(yPoint<=windowHeight){
    while(xPoint<=windowWidth){
      if (counter%2 == 0){
        fill(240);
      }else{
        fill(180);
      }
      ellipse(xPoint,yPoint,40);
      xPoint+=40;
      counter+=1;
    }
    xPoint=20;
    yPoint+=40;
  }

// the moving circle's fill color and position
  fill(random(255),random(255),random(255),90);
  ellipse(movingX,movingY,40);

// This constrains the circle to the screen while randomizing it movement
  var randNum = random(0,4);

  if (randNum <= 4 && randNum > 3 && movingX <= windowWidth-21){
    movingX+=40;
  } else if (randNum <= 3 && randNum > 2 && movingX >= 21){
    movingX-=40;
  } else if (randNum <= 2 && randNum >1 && movingY <= windowHeight){
    movingY+=40;
  } else if (randNum <=1 && movingY >= 21){
    movingY -=40;
  }
  //fill('black');
  //ellipse(movingX,movingY,40);
}
