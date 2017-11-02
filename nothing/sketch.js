

var ball = {};
ball.width = 40;
ball.x = 21;
ball.y = 21;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

var brick = {};
brick.length= 20;
brick.height = 5;

var brick_wall =[];

var lossCounter;

function setup() {
    createCanvas(windowWidth,windowHeight);
    lossCounter = 0;
    for(var i=1; i<=10; i++){
      brick_wall.push(rect(i+25, 30, brick.length, brick.height));
    }
}



function draw() {
    background('black');

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    for(var i=0; i<= brick_wall.length; i++){
      brick_wall[i].display();
    }


    if (ball.x >= width-20 || ball.x <= 20) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if ( ball.y <= 20) {
        ball.delta_y = -1 * ball.delta_y;
    }
    if (ball.y >= windowHeight+20){
        ball.x= windowWidth/2;
        ball.y= 21;
        lossCounter+=1;
    }
    if (ball.y >= windowHeight-80 && ball.x >= mouseX-30 && ball.x <= mouseX +30  ){
       ball.delta_y = -1 * ball.delta_y;
    }
    if (mouseIsPressed){
      fill(random(255),random(20),0);
    }else{
      fill(0,random(20),random(255));
    }

    //fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);

    fill('white');
    rect(mouseX-30,windowHeight-60,60,10);

    var str = "Losses: " + lossCounter;
    text(str, 30, 40);

}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
