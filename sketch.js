function setup() {
  createCanvas(1000, 1000);
    background(70,30,90);
}

function draw() {
  fill ('rgb(105,32,105)')
  stroke ('white')
  strokeWeight (1)
  if (mouseIsPressed)
  rect (mouseX, mouseY, 20, 30)
} 
