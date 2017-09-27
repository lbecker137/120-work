var CIRCLES_PER_SPLATTER = 20;
var MIN_RADIUS = 5;
var MAX_RADIUS = 25;
var DELAY = 500;


/* This program creates a paint splatter.
 * It's art. */
function start(){
    setTimer(splat,DELAY);

}

function splat(){
    var newColor= Randomizer.nextColor();
    for(var i=0;i<CIRCLES_PER_SPLATTER; i++){
        drawCircle(newColor,Randomizer.nextInt(MIN_RADIUS,MAX_RADIUS));
    }
}


function drawCircle(color,radius){
    var circle= new Circle(radius);
    circle.setPosition(Randomizer.nextInt(0,getWidth()),Randomizer.nextInt(0,getHeight()));
    circle.setColor(color);
    add(circle);
}

start();
