function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(50);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(10, random(100, 150), 255, 10);

  strokeWeight(5);
  noFill();
  stroke(mouseY, 150, 0);
  circle(mouseX + 80, mouseY - 80, mouseX);

  strokeWeight(1);
  stroke(0, 80, 0);
  fill(200, 60, 100);
  rect(mouseX, mouseY, 100, 100);
}
