
// class for the brick objects
class Brick {
  constructor(x,y){
    this.color = 'red';
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 10;
  }
  display(){
    push();
    noStroke();
    fill( this.color);
    translate( this.x, this.y);
    rect(0,0,this.width,this.height);
    pop();
  }

  frame(){
    Brick.display();
  }
}

// class for the Ball object
class Ball {
  constructor(x_pos,y_pos){
    this.color = 'white';
    this.x = x_pos;
    this.y = y_pos;
    this.size = 20;
    this.rad= this.size/2;
    this.deltaX= random(-2,2);
    this.deltaY= random(-2,2);
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
    if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
    }
    if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
    }
  }
}


// class for the paddle object

class Paddle {
  constructor(){
    this.width=50;
    this.height=15;
    this.x= mouseX - this.width/2;
    this.y= windowHeight-100;
    this.color= 'green';
  }
  display(){
    push();
    noStroke();
    fill(this.color);
    translate(this.x,this.y);
    rect(0,0,this.width,this.height);
  }
}

let ball;
let brickWall=[];
let brick;
let paddle;
let x_pos = 20;
let y_pos = 20;
let counter = 1;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background('black');

  for(var i= 1; i<=10; i++){
    brickWall.push( new Brick(x_pos,y_pos) );
    x_pos+= 21;
    if(counter%5==0){
      y_pos+=11;
    }
    counter+=1
  }

  ball = new Ball();
  paddle = new Paddle();
}

function draw(){
  for(var i=0; i<brickWall.length; i++){
    brickWall[i].frame();
  }

}
