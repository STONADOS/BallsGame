const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var back;

var paperBall, floor, bin, bin2, bin3;

var num = 0

function preload(){
    back = loadImage("sprites/school.png");
}

function setup() {
    createCanvas(1400, 700);

    engine = Engine.create();
    world = engine.world;

    bin = new Boxs(1000, 590, 150, 150);

    paperBall = new Ball(100, 100);

    bin2 = new Box(905, 585, 10, 150);

    bin3 = new Box(1095, 585, 10, 150);

    floor = new Ground(700, 690, 14000, 50);

}

function draw() {
    background(back);
    // drawSprites();
    Engine.update(engine);

    fill("black");
    stroke("blue");
    strokeWeight(4);
    textSize(30);
    text("Use A, D, W and S or UP, DOWN, RIGHT and LEFT keys to throw the freaking waste in the bin !!", 30, 60);
    text("Press S to start the game", 100, 100)

if (keyCode == 83 || num > 1){


    paperBall.display();

    floor.display();

    bin.display();

    // bin2.display();
    // bin3.display();
    
    num += 1
}

}


function keyPressed(){
    if (keyCode == 68 || keyCode == 39) {
        Body.applyForce(paperBall.body, paperBall.body.position, {x:300, y:0});
    }
    if (keyCode == 65 || keyCode == 37) {
        Body.applyForce(paperBall.body, paperBall.body.position, {x:-300, y:0});
    }
    if (keyCode == 87 || keyCode == 38) {
        Body.applyForce(paperBall.body, paperBall.body.position, {x:0, y:-300});
    }
    if (keyCode == 83 || keyCode == 40) {
        Body.applyForce(paperBall.body, paperBall.body.position, {x:0, y:300});
    }
}

