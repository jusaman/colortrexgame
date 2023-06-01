var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4;
var backgroundImg
var score=0;
var jumpSound, collidedSound;

var gameOver, restart;


function preload(){ 
   jumpSound = loadSound("jump.wav")
  collidedSound = loadSound("collided.wav")
    
    backgroundImg = loadImage("backgroundImg.png")
    sunAnimation = loadImage("sun.png");
    
    trex_running = loadAnimation("trex_2.png","trex_1.png","trex_3.png");
    trex_collided = loadAnimation("trex_collided.png");
    
    groundImage = loadImage("ground.png");
    
    cloudImage = loadImage("cloud.png");
    
    obstacle1 = loadImage("obstacle1.png");
    obstacle2 = loadImage("obstacle2.png");
    obstacle3 = loadImage("obstacle3.png");
    obstacle4 = loadImage("obstacle4.png");
    
    gameOverImg = loadImage("gameOver.png");
   restartImg = loadImage("restart.png");
} 

function setup() {
  createCanas(windowWidth,windowHeight);

  sun = createSprite (width-50,100,10,10);
  sun.addAnimation("sun", sunAnimation);
  sun.scale = 0.1 

  trex = createSprite(50,height-70,20,50);


  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  trex.setCollider('circle',trex_collided);
  trex.scale = 0.08;

  invisibleGround = createSprite(width/2, height-10, width,125);
  invisibleGround.shapeColor = "#f4cbaa"

  ground = createSprite(width/2,height,width,2);
  ground.addImage("ground",groundImage);
  ground.x = width/2
  ground.velocityX = -(6+3*score/100);

  gameOver = createSprite(width/2,height/2- 50);
  gameOver.addImage(gameOverImg);

  restart = createSprite(width/2,height/2);
  restart.addImage(restartImg);

  gameOver.scale = 0.5; 
  restart.scale = 0.1;

  gameOver.visible = false; 
  restart.visible = false;


  // invisibleGround.visible = false

  cloudsGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
}
  function draw() {
    //trex.debug = true; 
    backgroundImg(backgroundImg);
    textSize(20);
    fill("black")
    text("Score: "+ score, 30,50);

    if (gameState===Play){ 

      score = score + Math.round(getFrameRate()/60);
      ground.velocityX = -(6 + 3*score/100);
    }

  }