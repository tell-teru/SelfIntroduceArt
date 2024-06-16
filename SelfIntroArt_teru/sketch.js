var bubblePositionX = [];
var bubblePositionY = [];
var bubbleVelocityY = [];
var bubbleCount = 10;

function preload() {
  inkImage = loadImage('purple_ink.png');
  eneinkImage = loadImage('yellowink.png');
  gameImage = loadImage('SW.png');
}

function setup() {
  // キャンバスを画面いっぱいにする
  createCanvas(960, 410);
  
  // 背景
  background(255, 255, 255);
  // background(0, 0, 0);
  // background(gameImage);
  
  
  for(var i = 0; i < bubbleCount; i++) {
    bubblePositionX[i] = random(width);
    bubblePositionY[i] = random(height);
    bubbleVelocityY[i] = random(1,10);
  }
  
}

function draw(){
  
  // 背景
  background(gameImage);
  
  // 紫文字
  fill(148, 0, 211);
  textFont('geo');
  textSize(80);
  text('TERU', 300, 410/2);
  textSize(40);
  text('Unity', 550, 300);
  
  // 白文字
  fill(255, 255, 255);
  textFont('chewy');
  textSize(80);
  text('Splatoon', 500, 150);
  textSize(60);
  text('Game', 300, 300);
  
//   fill(255, 215, 0);
  textSize(20);
  text('Press Space button!', 200,400);
  text('or', 430, 400);
  text('Click　anywhere on the screen!', 500,400);

  // マウスを押した時の動作
  if (mouseIsPressed) {
    splash(mouseX - 30, mouseY - 50);
  }
  
  if(keyIsDown(" ".charCodeAt(0))){
    eneSplash();
  }
 }

function splash(x,y){
  if(160 <= mouseX || mouseX <= width-160){
      if(40 <= mouseY || mouseY <= height-40){
        image(inkImage, x, y, 200, 200)
      }
  }
}

function eneSplash(){
  image(eneinkImage, random(80,700), random(-30,300), 200, 200)
}

