const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var tower1;
var backgroundImg,platform;
var bird, slingshot;
var bg;

var gameState = "onSling";



function preload() {
    


}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    tower1 = new Tower(700,320,70,70);
    tower2 = new Tower(920,320,70,70);
    tower3 = new Tower(700,240,70,70);
    tower4 = new Tower(920,240,70,70);
    tower5 = new Tower(810,160,70,70);
    tower6 = new Tower(580,180,70,70)

    hexagon = new Hexagon(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hexagon.body,{x:200, y:50});
}

function draw(){
    background(0);
    textSize(35);
    Engine.update(engine);
    
    tower1.display();
    tower2.display();
    ground.display();
    tower3.display();
    tower4.display();
    tower5.display();
    tower6.display();

    hexagon.display();
    platform.display();
    slingshot.display();  
    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}
