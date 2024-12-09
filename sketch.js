let serial; // Serial object
let distance = 0; // Distance data from Arduino

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Setup serial communication
  serial = new p5.SerialPort();
  serial.open("COM3"); // Replace with your port
  serial.on("data", serialEvent);
}

function draw() {
  background(0);

  // Map distance to visual parameters
  let size = map(distance, 5, 100, 10, width);
  let brightness = map(distance, 5, 100, 255, 50);
  let colorValue = map(distance, 5, 100, 0, 255);

  // Draw expanding/shrinking circle
  noStroke();
  fill(colorValue, 100, 255 - colorValue, brightness);
  ellipse(width / 2, height / 2, size, size);

  // Draw dynamic bar graph
  drawBars(distance);

  // Draw wave pattern
  drawWaves(distance);
}

function drawBars(distance) {
  let barHeight = map(distance, 5, 100, height / 2, 10);
  let numBars = 10;
  let barWidth = width / numBars;

  for (let i = 0; i < numBars; i++) {
    let barColor = map(i, 0, numBars, 50, 255);
    fill(barColor, 150, 255 - barColor);
    rect(i * barWidth, height - barHeight, barWidth - 5, barHeight);
  }
}

function drawWaves(distance) {
  stroke(255, 200, 100);
  strokeWeight(2);
  noFill();

  let waveHeight = map(distance, 5, 100, 50, 10);
  let waveFrequency = map(distance, 5, 100, 0.1, 1);

  beginShape();
  for (let x = 0; x < width; x += 10) {
    let y = height / 2 + sin(x * waveFrequency + frameCount * 0.1) * waveHeight;
    vertex(x, y);
  }
  endShape();
}

function serialEvent() {
  let data = serial.readLine(); // Read incoming serial data
  if (data.length > 0) {
    distance = int(data); // Parse distance data
  }
}