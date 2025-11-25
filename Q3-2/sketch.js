// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height * 0.8;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160,192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
  let speed=5
  if(keyIsDown("A".charCodeAt(0))){speed *= 2}
  if(keyIsDown(LEFT_ARROW)){x-=speed}
  if(keyIsDown(RIGHT_ARROW)){x+=speed}
  

  // BLANK[2] 重力とジャンプ
  if(keyIsDown(32)&& y >=groundY - size / 2){vy = -20
  }
  
  vy += g;
  y += vy

  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);
  x = constrain(x, 0, windowWidth)
  y = constrain(y, 0, groundY)

  // 位置を更新
  x += vx;
  y += vy;

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}