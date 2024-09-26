function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(random(100, 150), random(0, 100), 100);
  fill(mouseY, 50, 100);
  circle(mouseX + 80, mouseY - 80, mouseX);
  fill(200, 60, 100);
  rect(mouseX, mouseY, 100, 100);
}
