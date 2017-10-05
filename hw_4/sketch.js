function setup() {
    // create a canvas to draw on
    createCanvas( 800, 600 );
}

function draw() {
    background('lightgrey')

    push();
    translate(400,300);

    // head

    fill('green')
    strokeWeight(0);
    rect(20,-150,200,150,0,90,90,0);
    ellipse(-120,-80,350,270);
    triangle(-70,-200, 30, -100, 70,-150);
    ellipse(-190,0,200,200);
    triangle(-180,100,29,-50,140,0);

    // nose
    fill('black');
    ellipse(150,-110,30,30);

    //eye
    ellipse(-80,-130,60,50);
    fill('white');
    ellipse(-70,-135,10,10);

    //teeth.
    fill('white');
    for (var i=1; i<=140; i+=20){
      triangle(i,0,i+10,0,i+5,20);
    }

    //spines
    fill('green');
    triangle(140,-140,180,-140,130,-170);
    triangle(-280,-130,-320,-150,-250,-170);
    triangle(-290,-100,-340,-120,-230,-140);
    triangle(-270,-80,-320,-90,-210,-120);

    //neck
    rect(-280,40,250,500,0,90,0,0);
    triangle(-280,150,-280,300,-400,300);

    //scales. Here I use the alpha color to give it a layered appearance
    fill('rgba(40,249,37,0.6)');
    ellipse(-230,40,70,60);
    ellipse(-240,0,70,60);
    ellipse(-200,50,70,60);
    ellipse(-50,-170,60,35);

    pop();

}
