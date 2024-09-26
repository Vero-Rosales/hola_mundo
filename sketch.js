/*function setup() {
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
}*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(50);
  ellipseMode(CENTER);
}

function draw() {
  background(random(50, 150), 100, random(50, 150), 20);

  stroke(random(100, 255), random(100, 255), 0);
  strokeWeight(random(1, 15));
  noFill();
  triangle(
    mouseX,
    mouseY - 50,
    mouseX - 50,
    mouseY + 50,
    mouseX + 50,
    mouseY + 50
  );

  // Style the star shape.
  noStroke();
  fill(random(100, 255), 0, random(100, 255));

  // Draw the star shape
  let points = 5;
  let outerRadius = 60;
  let innerRadius = 30;
  beginShape();
  for (let i = 0; i < points * 2; i++) {
    let angle = map(i, 0, points * 2, 0, TWO_PI);
    let radius = i % 2 === 0 ? outerRadius : innerRadius;
    let x = mouseX + cos(angle) * radius;
    let y = mouseY + sin(angle) * radius;
    vertex(x, y);
  }
  endShape(CLOSE);
}
