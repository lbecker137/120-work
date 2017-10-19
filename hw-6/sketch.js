// my object for this code. The tree art
var tree = {};

tree.x_pos= 0;
tree.y_pos= 0;
tree.color= 0;
tree.branch_Width = 0;

// initiallizing the variables for the circle trail
var circle_size=0;
var start= 0;

// variable for the falling circle
var fall;

// variable for the square
var side_length=0;

// for the color of the circles/square
var r;

function setup() {

    // create a canvas
  createCanvas( windowWidth, windowHeight );
  background('black');

  tree.x_pos= windowWidth/2;
  tree.y_pos= windowHeight/2;
  tree.branch_Width = 40;
  tree.color= 255;

  circle_size= 2;
  start= 10;
  fall=0;
  side_length=64;
  r=50;
}

function draw() {

// keeps the tree in bound
if(tree.x_pos>= windowWidth){
    new_x=-30;
}else if (tree.x_pos<= windowWidth/3+10) {
    new_x= 30;
}else if (tree.y_pos>= windowHeight) {
    new_y= -30;
}else if (tree.y_pos<= 0) {
    new_y= 30;
}else{
    new_x= random(-30,30);
    new_y= random(-30,30);
}

//the algorythtm for the tree art
tree.color=map(mouseX,windowWidth,0,255);
fill(tree.color);
stroke(tree.branch_Width);
line(tree.x_pos,tree.y_pos, tree.x_pos+ new_x, tree.y_pos+ new_y);

// maps the r variable to the y position of the cursor
r= map(mouseY, 0, windowHeight, 0,255);

// the trail of circles
fill(r,255,255,60);
ellipse(start, windowHeight/2, circle_size);

// the falling circle (barrier wall)
noFill();
ellipse(windowWidth/3, fall, 20);

//the trail of circles around the cursor
var wall= constrain(mouseX, 0,windowWidth/3);
ellipse(wall,mouseY,5);


// the squares
fill(r,255,255);
rect(windowWidth/3-100, windowHeight/2-32, side_length, side_length);
rect(windowWidth/3+40, (windowHeight/2)-4, sqrt(side_length), sqrt(side_length));

tree.x_pos+= new_x;
tree.y_pos+= new_y;
start= start*2;
circle_size+=9;
fall+=5;
fall = fall%windowHeight;

}
