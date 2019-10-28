var img;
function preload() {
img = loadImage("Images/jungleHome1.jpg");
}

function setup() {
createCanvas(1366,768);
image(img,0,0);
}

function draw() {
  image(img,0,0);
}
