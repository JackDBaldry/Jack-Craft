// Create your variables here

fill("green");
rect(200,130,30,30);

var tree1 = createSprite(40,170); //Background Trees/plants
tree1.setAnimation("tree1");
tree1.scale = 0.7;

var tree2 = createSprite(175,165);
tree2.setAnimation("tree2");
tree2.scale = 0.7;

var tree3 = createSprite(300,170);
tree3.setAnimation("tree3");
tree3.scale = 0.7;

var plant1 = createSprite(95,250);
plant1.setAnimation("plant1");
plant1.scale = 0.3;

var plant2 = createSprite(260,260);
plant2.setAnimation("plant2");
plant2.scale = 0.3;

var grass1 = createSprite(365,240);
grass1.setAnimation("grass1");
grass1.scale = 0.35;

var shrub2copy = createSprite(90,240);
shrub2copy.setAnimation("shrub2copy");
shrub2copy.scale = 0.25;

var shrub1 = createSprite(110,260);
shrub1.setAnimation("shrub1");
shrub1.scale = 0.25;

var shrub1copy = createSprite(115,245);
shrub1copy.setAnimation("shrub1copy");
shrub1copy.scale = 0.25;


var shrub2 = createSprite(210,260);
shrub2.setAnimation("shrub2");
shrub2.scale = 0.25;

var Fox = createSprite(50,330);
Fox.setAnimation("fox");
Fox.scale = 0.2;

var Rock = createSprite(200,-100);
Rock.setAnimation("rock");
Rock.scale = 0.15;

var Bear = createSprite(500,330);
Bear.setAnimation("bear");
Bear.scale = 0.2;

var Carrot = createSprite(200,200);
Carrot.setAnimation("carrot");
Carrot.scale = 0.5;

var Arrow = createSprite(300,300);
Arrow.setAnimation("arrow");
Arrow.scale = 0.5;

var health = 100;
var score = 0;

// Create your sprites here

function draw() {
  
  // draw background
  if (health <= 0){
    endBackground();
  }else {
    mainBackground();
  }
  
  // update sprites
  scoreBoard();
  
  foxMovement();
  rockMovement();
  bearMovement();
  arrowMovement();
  carrotMovement();
  
  drawSprites();
}

// Create your functions here

function mainBackground() {
  //bg.setAnimation("background1");
  background(rgb(154,204,255));
  fill("green");
  rect(-5,130,410,300);
}

function endBackground() {
  background(rgb(0,0,0));
  textFont("Calibri");
  textSize(30);
  fill(rgb(0,0,204));
  strokeWeight(5);
  stroke("red");
  text("You Died", 150,390);
}

function scoreBoard(){
  textFont("Calibri");
  textSize(30);
  fill(rgb(0,0,204));
  strokeWeight(5);
  stroke(rgb(255,255,255));
  text("Score: " + score,10,25);
  text("Health: " + health, 200,25);
}
function foxMovement(){
  if (keyDown("left")){
    Fox.velocityX = -12;}
  else {
    Fox.velocityX = 0;
  }
  
  if (keyDown("right")){
    Fox.velocityX = +12;}
  else {
    Fox.velcoityX = 0;
  }
  
  Fox.velocityY += 1;
  
  if (keyDown("up") && Fox.y >= 330){
    Fox.velocityY = -15;
  }
  if (Fox.y > 330){
    Fox.y = 330;
    Fox.velocityY = 0;
  }
  
  if (Fox.x <= 0) {
    Fox.x = 50;
  }
  
  if (Fox.x >= 400) {
    Fox.x = 350;
  }
  
}

  

function rockMovement() {
  
  Rock.velocityY = +15;
  
  if (Rock.y >= 500){
    Rock.x = randomNumber(0,400);
    Rock.y = randomNumber(-300,-50);
  }
  
  if (Fox.isTouching(Rock)){
    Rock.x = randomNumber(30,370);
    Rock.y = randomNumber(-100,-50);
    health = health - 10;
  }
}

function bearMovement() {
  
  Bear.velocityX = -15;
  
  if (Bear.x <= -100) {
    Bear.x = randomNumber(550,650);
  }
  
  if (Fox.isTouching(Bear)) {
    Bear.x = randomNumber(550,650);
    health = health - 10;
  }
}

function arrowMovement() {
  
  Arrow.velocityY = +10;
  
  if (Arrow.y >= 500) {
    Arrow.x = randomNumber(0,400);
    Arrow.y = randomNumber(-100,-200);
  }
  
  if (Fox.isTouching(Arrow)) {
    Arrow.x = randomNumber(30,370);
    Arrow.y = randomNumber(-100,-200);
    health = health - 10;
  }
}

function carrotMovement() {
 
  Carrot.velocityX = -10;
   
  if (Carrot.x <= -100) {
    Carrot.x = randomNumber(450,650);
    Carrot.y = randomNumber(210,370);
  }
  
  if (Fox.isTouching(Carrot)) {
    Carrot.x = randomNumber(450,650);
    Carrot.y = randomNumber(210,370);
    health = health + 10;
    score = score + 1;
  }
  
  if (health >= 100) {
    health = 100;
  }
}









