var img;
function preload() {
img = loadImage("Images/jungleHome1.jpg");
}

function setup() {
createCanvas(480,480);
}

function draw() {
  image(img,0,0);
}
