
// sets viariables
var x_point;
let y_points= [10,40,60,400,600];
let r = 0;
let g = 0;
let b =0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  x_point=10;
  frameRate(20);
  noCursor();

}

function draw(){
  background(r,g,b);

  // here I iterate through the array to give a new y point to each caterpillar
  for(let idx = 0; idx< y_points.length; idx++){
    caterpillar(y_points[idx]);
  }

  check();
  snow(mouseX, mouseY);
}

// function creates a caterpillar of 7 circles
function caterpillar(y_point){
  for( var i=1; i<=7; i++){
    fill('white');
    ellipse(x_point,y_point,20);
    x_point+=10;
  }
  x_point-=65;
}

// thus function makes the cursor into moving dots
function snow(x,y){
  for(var i=1; i<= 5; i++){
    ellipse(mouseX+random(-5,5), mouseY+random(1,20),random(1,6));
  }
}

//this funtion checks the caterpillars. If there are too many, a few are taken
// from the array. If the caterpillar has reached the end of the screen, it is
// moved back to the beginning and the background color is changed. 
function check(){
  if (x_point>=windowWidth){
    x_point=0;
    y_points.push(random(0, windowWidth));
    r= random(255);
    g= random(255);
    b= random(255);
  }

  if (y_points.length>10){
    var num_one= random(0, y_points.length-1);
    var num_two= random(0, 3);
    y_points.splice(num_one,num_two);
  }
}
