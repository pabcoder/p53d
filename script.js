let angle = 0;
let sideSize = 300;
let img;

function preload() {
  img = loadImage('img/logo.jpg')
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(155);
  ambientLight(255);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);

  texture(img);

  box(sideSize);

  angle += 0.01;
}