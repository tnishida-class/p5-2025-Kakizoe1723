let size = 50;
let count = 0;
const cycle = 100;
let increment = 1;
function setup(){
  createCanvas(200, 200);
}
function draw(){
  background(160, 192, 255);
  count = (count + increment) % cycle;
  if (keyIsPressed) {
    increment = 2;
  } else {
    increment = 0.5;
  }
  if (count < cycle/2) {
    size = count + 50;
  } else {
    size = (cycle - count) + 50;
  }
  ellipse(width/2, height/2, size);
}
