//these allow me to randomize the color of the ghost
var color_r;
var color_g;
var color_b;


function setup() {

    // create a canvas to draw on
  createCanvas( windowWidth, windowHeight );

  color_r = random(255);
  color_g = random(255);
  color_b = random(255);

}

function draw() {
  background('Black');
  noCursor();

// this creates the snowy background animation
  push();
    fill('white');
    noStroke()
    ellipse(random(windowWidth),random(windowHeight),random(40),random(40));
  pop();

// this creates the ghost
  push();
    noStroke();
    fill(color_r,color_g,color_b);
    translate(mouseX,mouseY);
    ellipse(0,0,60,60);
    rect(-30,0,60,70);
    ellipse(0,70,20,20);
    ellipse(-20,70,20,20);
    ellipse(20,70,20,20);
    fill('black');
    ellipse(-10,0,10,20);
    ellipse(10,0,10,20);
  pop();

//this creates the castle
  push();
    noStroke();
    fill('lightgrey');
    rect(0,windowHeight-140,200,140);
    rect(0,windowHeight-300,70,160);
    triangle(0,windowHeight-300,70,windowHeight-300,35,windowHeight-390);
    fill('black');
    rect(120,windowHeight-70,60,70);
    ellipse(150,windowHeight-70,60);
  pop();

// If your mouse is at the base of the castle, the words 'happy halloween' appear
  if(mouseX<=200 && mouseY >= windowHeight-140){
    fill('orange');
    text("Happy Halloween!",210, windowHeight-50);
  }




}
