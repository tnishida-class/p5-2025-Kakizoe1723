// 最終課題を制作しよう
let x, y; 
let vx = 0, vy = 0;
let size = 40;
let g =1;
let groundY;

let balls = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  groundY = height* 0.8
  x = width / 2
  y = groundY - size / 2;
}

function draw(){
  background(0,191,230);

  stroke(0);
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  let speed = 5;
  if(keyIsDown("A".charCodeAt(0))){speed *= 2}
  if(keyIsDown(LEFT_ARROW)){x-=speed}
  if(keyIsDown(RIGHT_ARROW)){x+=speed}

//じゃんぷ
if (keyIsDown(32)&& y >= groundY - size/2){
  vy = -20;
}
vy += g;
y += vy;
//画面内制限
 x = constrain(x, 0, width);
 y = constrain(y, 0, groundY - size / 2);
//速さ制限
 vx = constrain(vx, -20, 20);
 vy = constrain(vy, -20, 20);

if (y >= groundY - size / 2) {
    y = groundY - size / 2;
    vy = 0;
}

//球が発射される
//球の追加
if (frameCount % 30 === 0) {
    spawnBall();   
}

//　球の更新
 for (let i = balls.length - 1; i >= 0; i--) {
    let b = balls[i];

    b.x += b.vx;
    b.y += b.vy;

    //球　キャラクター
    fill(255, 0, 0);
    noStroke();
    ellipse(b.x, b.y, b.size, b.size);

    //画面外に出たら削除
    if (b.x < -50 || b.x > width + 50 ||
      b.y > height + 50
    ) {
      balls.splice(i, 1);
      continue;
    }

    //キャラクターと敵が接触したかどうか
     let d = dist(x, y, b.x, b.y);
    if (d < (size / 2 + b.size / 2)) {
      // 当たったときの処理リセット
      resetPlayer();
    }
  }

//playerを書く
fill(0);
  ellipse(x, y, size, size);
}

// 球を1つ生成する関数
function spawnBall() {
  let side = floor(random(3)); // 0:左, 1:右, 2:上
  let b = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    size: random(20, 50)
  };
  //左から
   if (side === 0) {
    b.x = -20;
    b.y = random(50, groundY - 50);
    b.vx = random(5, 10);
    b.vy = random(-1, 1);
  }
  //右から左
  else if (side === 1) {
    b.x = width + 20;
    b.y = random(50, groundY - 50);
    b.vx = random(-10, -5);
    b.vy = random(-1, 1);
  }
  //上から
  else {
    b.x = random(0, width);
    b.y = -20;
    b.vx = random(-2, 2);
    b.vy = random(5, 10);
  }

  balls.push(b);
}
  
// プレイヤーが当たったときのリセット処理
function resetPlayer() {
  x = width / 2;
  y = groundY - size / 2;
  vx = 0;
  vy = 0;
}
