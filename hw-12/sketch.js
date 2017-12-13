
// variables
let brick_x;
let brick_y;

// brick array
let many_bricks= [];

//objects
let ball;
let paddle;

//keeps track of the balls coordinates
let ball_x;
let ball_y;


let bool;



function setup(){
  createCanvas(windowWidth,windowHeight);

  //initailizes the bricks' coordinates
  brick_y=30;
  brick_x=60;
  // creates the ball and paddle objects
  ball= new Ball(windowWidth/2,windowHeight/2);
  paddle = new Paddle();
  // starts keeping track of the ball's coordinates
  ball_x=windowWidth/2;
  ball_y=windowHeight/2;
  //value that will be either 1 or 0 depending on whether or not the ball has hit
  // a brick
  bool=0;
  //creates an array of bricks
  for(let i =1; i<=40; i++){
    many_bricks.push(new Brick(brick_x,brick_y));
    brick_x+=30;
  }
  frameRate(120);
  noCursor();
}

// draw function

function draw(){
  background('black');
  for(var i=0; i<many_bricks.length; i++){
    many_bricks[i].frame();
  }
  ball.frame();
  paddle.frame();
  check();
}


// brick class

class Brick {
  constructor(x_pos,y_pos){
    this.red = random(255);
    this.green =random(255);
    this.blue =random(255);
    this.x = x_pos;
    this.y = y_pos;
    this.width = 25;
    this.height= 14;
    this.half=this.width/2;
  }
  display(){
    push();
    noStroke();
    fill(this.red,this.green,this.blue);
    translate( this.x,this.y);
    rect(0,0,this.width,this.height);
    pop();
  }
// checks to see if the ball has hit a brick
  check_ball(){
    if(ball_x>=this.x && ball_x<=this.x+this.width && ball_y-10<=this.y+7 && ball_y+10>=this.y){
      bool=1;
    }else{
      bool=0;
    }
  }


  frame(){
    this.display();
  }
}

// Ball class

class Ball {
  constructor(x_pos,y_pos){
    this.color = 'white';
    this.x = x_pos;
    this.y = y_pos;
    this.size = 20;
    this.rad= this.size/2;
    this.deltaX= random(1);
    this.deltaY= random(3);
  }
  display(){
    push();
    noStroke();
    fill(this.color);
    translate( this.x,this.y);
    ellipse(0,0,this.size);
    pop();
  }
  move(){
    this.x+=this.deltaX;
    this.y+=this.deltaY;
  }
  check(){
    if (this.x+ this.rad >= windowWidth || this.x - this.rad <= 0) {
            this.deltaX *= -1;
    }
    if (this.y - this.rad <= 0) {
            this.deltaY *= -1;
    }
    if (this.y- this.rad >= windowHeight-100-this.rad && this.x+this.rad >= mouseX-40 && this.x-this.rad <= mouseX+40){
      this.deltaY *=-1;
    }
    if( this.y+this.rad>= windowHeight){
      this.x= windowWidth/2;
      this.y = windowHeight/3;
    }
  }
  change_direction(){
    this.deltaY*=-1;
  }
  frame(){
    this.display();
    this.move();
    this.check();
    ball_x=this.x;
    ball_y=this.y;

  }
}

// paddle class

class Paddle {
  constructor(){
    this.width=80;
    this.height=15;
    this.y= windowHeight-100;
    this.color= 'white';
  }
  display(){
    push();
    noStroke();
    fill(this.color);
    translate(mouseX-40,this.y);
    rect(0,0,this.width,this.height);
  }

  frame(){
    this.display();
  }
}

// this function checks whether the ball has hit the bricks or not.
function check(){
  for(var i = many_bricks.length-1; i>=0; i--){
    many_bricks[i].check_ball();
    if( bool == 1){
      many_bricks.splice(i,1);
      ball.change_direction();
    }
  }
}
