const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var kills = 0


var replay;
var songnum = 1;
// var back;

var paperBall, floor, bin, bin2, bin3, slingshot, ball, enemy1, mouse;

var num = 0

var state = "play"

var gamestate =  "launched";
function preload(){
    back = loadImage("sprites/2Untitled.png");
    song = loadSound("sprites/preview.mp3")
}

function setup() {
    createCanvas(1400, 700);

    engine = Engine.create();
    world = engine.world;
    // bin = new Boxs(1000, 590, 150, 150);

    // paperBall = new Ball(100, 100);

    // bin2 = new Box(905, 585, 10, 150);

    // bin3 = new Box(1095, 585, 10, 150);

    // floor = new Ground(700, 690, 14000, 50);

    mouse = new Mouse(50, 650, 50 , 50);
    lava = new Lava(700, 850, 1400000, 400);
    floor = new Ground(700, 610, 1400, 35);
    invi = new invis(700, 618, floor.width, 5);    
    // floor2 = new Ground(850, 610, 240, 35);
    // invi2 = new invis(700, 618, floor2.width, 5);    
    // floor3 = new Ground(-600, 610, 40, 35);
    // invi3 = new invis(-700, 618, floor3.width, 5);    
    // floor4 = new Ground(700, 610, 100, 35);
    // invi4 = new invis(700, 618, floor4.width, 5);
    // floor5 = new Ground(700, 610, 240, 35);
    // invi5 = new invis(700, 618, floor5.width, 5);    
    // floor6 = new Ground(700, 610, 340, 35);
    // invi6 = new invis(700, 618, floor6.width, 5);    
    // floor7 = new Ground(700, 610, 140, 35);
    // invi7 = new invis(700, 618, floor7.width, 5);
    ball = new Ball(50, 600, 55);
    enemy1 = new enemy();
    enemy2 = new enemy();
    enemy3 = new enemy();
    enemy4 = new enemy();
    enemy5 = new enemy();
    enemy6 = new enemy();
    enemy7 = new enemy();
    enemy8 = new enemy();
    enemy9 = new enemy();
    enemy10 = new enemy();
    enemy11 = new enemy();
    enemy12 = new enemy();
    enemy13 = new enemy();
    enemy14 = new enemy();
    enemy15 = new enemy();
    enemy16 = new enemy();
    enemy17 = new enemy();
    enemy18 = new enemy();
    enemy19 = new enemy();
    enemy20 = new enemy();
    enemy21 = new enemy();
    enemy22 = new enemy();
    enemy23 = new enemy();
    enemy24 = new enemy();
    enemy25 = new enemy();
    enemy26 = new enemy();
    enemy27 = new enemy();
    enemy28 = new enemy();
    enemy29 = new enemy();
    enemy30 = new enemy();
    enemy31 = new enemy();
    enemy32 = new enemy();
    enemy33 = new enemy();
    enemy34 = new enemy();
    enemy35 = new enemy();
    enemy36 = new enemy();
    enemy37 = new enemy();
    enemy38 = new enemy();
    enemy39 = new enemy();
    enemy40 = new enemy();
    killer1 = new killers();
    killer2 = new killers();
    killer3 = new killers();
    killer4 = new killers();
    killer5 = new killers();
    // killer6 = new killers();
    // killer7 = new killers();


    slingshot = new SlingShot(mouse.body, ball.body);


} 

function draw() {
    background("black");
    drawSprites();
    if (songnum == 1){
    song.play();
    songnum +=1
    }
    Engine.update(engine);
    lava.display();
    floor.display();
    // floor2.display();
    // floor3.display();
    // floor4.display();
    // floor5.display();
    // floor6.display();
    // floor7.display();

    killer1.display();
    killer2.display();
    killer3.display();
    killer4.display();
    killer5.display();
    // killer6.display();
    // killer7.display();

    if (state == "play"){
    ball.display();
    }
    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();
    enemy5.display();
    enemy6.display();
    enemy7.display();
    enemy8.display();
    enemy9.display();
    enemy10.display();
    enemy11.display();
    enemy12.display();
    enemy13.display();
    enemy14.display();
    enemy15.display();
    enemy16.display();
    enemy17.display();
    enemy18.display();
    enemy19.display();
    enemy20.display();
    enemy21.display();
    enemy22.display();
    enemy23.display();
    enemy24.display();
    enemy25.display();
    enemy26.display();
    enemy27.display();
    enemy28.display();
    enemy29.display();
    enemy30.display();
    enemy31.display();
    enemy32.display();
    enemy33.display();
    enemy34.display();
    enemy35.display();
    enemy36.display();
    enemy37.display();
    enemy38.display();
    enemy39.display();
    enemy40.display();


    fill("pink")
    textSize(55);
    text("Score: "+num, camera.position.x - 120, camera.position.y - 270);
    textSize(30);
    text("Kills: "+kills, camera.position.x - 50, camera.position.y - 230);



    // slingshot.show();
    mouse.display();

    // backs.display();
    detectollision(ball, enemy1)
    detectollision(ball, enemy2)
    detectollision(ball, enemy3)
    detectollision(ball, enemy4)
    detectollision(ball, enemy5)
    detectollision(ball, enemy6)
    detectollision(ball, enemy7)
    detectollision(ball, enemy8)
    detectollision(ball, enemy9)
    detectollision(ball, enemy10)
    detectollision(ball, enemy11)
    detectollision(ball, enemy12)
    detectollision(ball, enemy13)
    detectollision(ball, enemy14)
    detectollision(ball, enemy15)
    detectollision(ball, enemy16)
    detectollision(ball, enemy17)
    detectollision(ball, enemy18)
    detectollision(ball, enemy19)
    detectollision(ball, enemy20)
    detectollision(ball, enemy21)
    detectollision(ball, enemy22)
    detectollision(ball, enemy23)
    detectollision(ball, enemy24)
    detectollision(ball, enemy25)
    detectollision(ball, enemy26)
    detectollision(ball, enemy27)
    detectollision(ball, enemy28)
    detectollision(ball, enemy29)
    detectollision(ball, enemy30)
    detectollision(ball, enemy31)
    detectollision(ball, enemy32)
    detectollision(ball, enemy33)
    detectollision(ball, enemy34)
    detectollision(ball, enemy35)
    detectollision(ball, enemy36)
    detectollision(ball, enemy37)
    detectollision(ball, enemy38)
    detectollision(ball, enemy39)
    detectollision(ball, enemy40)
    // 
    detectollision2(killer1, ball)
    detectollision2(killer2, ball)
    detectollision2(killer3, ball)
    detectollision2(killer4, ball)
    detectollision2(killer5, ball)
    // detectollision(killer6, ball)



    // if (collided(ball, lava)){
        // console.log("hi")
    // }

    camera.position.x = ball.body.position.x;
    camera.position.y = ball.body.position.y;

    // console.log(ball.body.position)
    // console.log(mouseX,mouseY);
}

// mouseX = 1400 + mouseX;
// mouseY = 700 + mouseY;
function mouseDragged(){
    camera.position.x = ball.body.position.x;
    camera.position.y = ball.body.position.y;
    if (gamestate== "on sling" && state == "play"){
    // mouseX = (mouseX + ball.body.position.x)/2;
    // mouseY = (mouseY + ball.body.position.y)/2;
    // camera.position.x = mouse.body.position.x;
    // camera.position.y = mouse.body.position.y;
    // var k, b;
    // k = 700 - mouseX;
    // b = 350 - mouseY
    // mouseX = ball.body.position.x + k;
    // mouseY = ball.body.position.y + b;

    camera.position.x = ball.body.position.x;
    camera.position.y = ball.body.position.y;
    // mouseX = ball.body.position.x;
    // mouseY = ball.body.position.y;
    Body.setPosition(ball.body, {x:mouseX, y:mouseY});
    // console.log(ball.body.position)
    // console.log(mouseX);
    // console.log(mouseY);

    }
    if (gamestate == "launched" && state == "play"){
        slingshot.attach(ball.body)
        var k, b;
        // k = 700 - mouseX;
        // b = 350 - mouseY
        // mouseX = ball.body.position.x + k;
        // mouseY = ball.body.position.y + b;
        // console.log(mouseX);
        // console.log(mouseY);

        // mouseX = ball.body.position.x;
        // mouseY = ball.body.position.y;

        // mouseX = (mouseX + ball.body.position.x)/2;
        // mouseY = (mouseY + ball.body.position.y)/2;
        Body.setPosition(mouse.body, {x:mouseX, y:mouseY});
        // camera.position.x = ball.body.position.x;
        // camera.position.y = ball.body.position.y;
        gamestate = "on sling";
    }
}

function mouseReleased(){
    camera.position.x = ball.body.position.x;
    camera.position.y = ball.body.position.y;
    if (gamestate == "on sling" && state == "play"){
    slingshot.fly();
    // var k, b;
    // k = 700 - mouseX;
    // b = 350 - mouseY
    // mouseX = ball.body.position.x + k;
    // mouseY = ball.body.position.y + b;
    // mouseX = ball.body.position.x;
    // mouseY = ball.body.position.y;

    // console.log(mouse.body.position)
    camera.position.x = ball.body.position.x;
    camera.position.y = ball.body.position.y;
    gamestate = "launched";
    }
}



function detectollision(lstone,lmango){
  lmango.body.position
  lstone.body.position
  
  var distance=dist( lmango.body.position.x, lmango.body.position.y, lstone.body.position.x, lstone.body.position.y)

  	if(distance<=lmango.radius+lstone.radius)
    {
    // Body.setPosition(lmango.body, {x:0, y:0})
    Body.setStatic(lmango.body, false);
    Body.applyForce(lmango.body, lmango.body.position, {x:25, y:25});
    num += 50;
    kills +=1; 

    // push();
    // lmango.Visiblity -=10;
    // tint(255, lmango.Visiblity);
    // pop();
    // World.remove(world, lmango.body);

    }

  }
function collided(bullets, walls){
    if (walls.y - bullets.y <= bullets.r + walls.height/2){
        return true;
    }
    return false;
  }

  function detectollision2(lstone,lmango){
    lmango.body.position
    lstone.body.position
    
    var distance=dist( lmango.body.position.x, lmango.body.position.y, lstone.body.position.x, lstone.body.position.y)
  
        if(distance<=lmango.radius+lstone.radius)
      {
      // Body.setPosition(lmango.body, {x:0, y:0})
      Body.setStatic(lmango.body, true);
    //   Body.applyForce(lmango.body, lmango.body.position, {x:25, y:25});

    //   Body.setPosition(lmango.body, lmango.body.position, {x:60, y:500});
      state = "over"
      // replay.visible =true
      replay = createSprite(ball.body.position.x, ball.body.position.y);
      replay.addImage("Image", back);
      replay.visible = true;
      replay.scale = 0.3;
      replay.depth += 50;
      song.stop();
      }
  
    }
