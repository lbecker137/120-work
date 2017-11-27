

let brick_y;
let many_bricks= [];
var count;


function setup(){
  createCanvas(windowWidth,windowHeight);
  brick_y=0;
  for(let i =1; i<=40; i++){
    many_bricks.push(new Brick(0,brick_y));
    brick_y+=20;
  }
}

function draw(){
  background('black');
  for(var i=0; i<many_bricks.length; i++){
    many_bricks[i].frame();
  }
}

class Brick {
  constructor(x_pos,y_pos){
    this.red = random(255);
    this.green =random(255);
    this.blue =random(255);
    this.x = x_pos;
    this.y = y_pos;
    this.width = 10;
    this.height= 5;
  }
  display(){
    push();
    noStroke();
    fill(this.red,this.green,this.blue);
    translate( this.x,this.y);
    rect(0,0,this.width,this.height);
    pop();
  }
  move(){
    this.x+=random(4,10);
  }

  check(){
    if(this.x>=windowWidth){
      this.x=0;
    }
  }
  frame(){
    this.display();
    this.move();
    this.check();
  }
}
