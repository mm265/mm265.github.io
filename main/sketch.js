let capture;

function setup() {
  createCanvas(640, 480);

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  //capture.hide();
}

function draw() {
background(50);
// image(capture, 0, 0, 640, 480);
}