let mSerial;
let connectButton;
let readyToReceive = false;
let isGameStarted = false;

let dinosaur; // Dinosaur object
let cactus; // Cactus object
let groundY; // Ground level
let distance = 0; // Ultrasonic distance
let score = 0; // Game score
let isGameOver = false;
let restartButton; // Restart button

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Ground level
  groundY = height - 50;

  // Dinosaur properties
  dinosaur = {
    x: 50,
    y: groundY,
    size: 50,
    vy: 0, // Vertical velocity
    gravity: 1.5,
    jumpStrength: -25, // Further increased jump strength
    isJumping: false,
  };

  // Cactus properties
  cactus = {
    x: width,
    y: groundY - 25,
    size: 50,
    speed: 6,
  };

  // Setup serial communication
  mSerial = createSerial();
  connectButton = createButton("Connect to Serial");
  connectButton.position(width / 2 - 50, height / 2);
  connectButton.mousePressed(connectToSerial);

  // Create restart button but hide it initially
  restartButton = createButton("Restart");
  restartButton.position(width / 2 - 50, height / 2 + 100);
  restartButton.mousePressed(restartGame);
  restartButton.hide();
}

function draw() {
  background(200);

  if (!isGameStarted) {
    displayStartScreen();
    return;
  }

  if (isGameOver) {
    displayGameOver();
    return;
  }

  // Draw ground
  fill(100);
  rect(0, groundY, width, 50);

  // Handle dinosaur jumping
  handleDinosaur();

  // Move and draw cactus
  handleCactus();

  // Display score
  displayScore();

  // Handle serial communication
  if (mSerial.opened() && readyToReceive) {
    mSerial.write(0xAB); // Request data
    readyToReceive = false;
  }
  if (mSerial.availableBytes() > 0) {
    receiveSerial();
  }

  // Check for collision
  checkCollision();
}

function handleDinosaur() {
  // Apply gravity
  dinosaur.vy += dinosaur.gravity;
  dinosaur.y += dinosaur.vy;

  // Prevent falling below ground
  if (dinosaur.y > groundY) {
    dinosaur.y = groundY;
    dinosaur.isJumping = false;
  }

  // Draw dinosaur
  fill(0, 255, 0);
  rect(dinosaur.x, dinosaur.y - dinosaur.size, dinosaur.size, dinosaur.size);

  // Trigger jump if distance is within a certain range
  if (distance < 20 && !dinosaur.isJumping) {
    dinosaur.vy = dinosaur.jumpStrength;
    dinosaur.isJumping = true;
  }
}

function handleCactus() {
  cactus.x -= cactus.speed;

  // Reset cactus position when it goes off screen
  if (cactus.x < -cactus.size) {
    cactus.x = width;
    score++;
  }

  // Draw cactus
  fill(255, 0, 0);
  rect(cactus.x, cactus.y - cactus.size, cactus.size, cactus.size);
}

function displayScore() {
  textSize(32);
  fill(0);
  textAlign(LEFT, TOP);
  text(`Score: ${score}`, 10, 10);
}

function checkCollision() {
  if (
    dinosaur.x + dinosaur.size > cactus.x &&
    dinosaur.x < cactus.x + cactus.size &&
    dinosaur.y > cactus.y - cactus.size
  ) {
    isGameOver = true;
    restartButton.show(); // Show restart button on game over
  }
}

function displayGameOver() {
  textSize(64);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
  textSize(32);
  text(`Score: ${score}`, width / 2, height / 2 + 50);
}

function displayStartScreen() {
  textSize(64);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Connect to Start Game", width / 2, height / 2);
}

function connectToSerial() {
  if (!mSerial.opened()) {
    mSerial.open(9600);
    connectButton.hide();
    readyToReceive = true;
    isGameStarted = true; // Start the game after connection
  }
}

function receiveSerial() {
  let line = mSerial.readUntil("\n").trim();
  if (!line) return;

  try {
    if (!line.startsWith("{")) {
      console.error("Invalid JSON format:", line);
      readyToReceive = true;
      return;
    }

    let data = JSON.parse(line).data;

    // Read ultrasonic distance
    distance = data?.Ultrasonic?.distance_cm ?? 0;

    // Log the distance value for debugging
    console.log(`Distance: ${distance} cm`);
  } catch (error) {
    console.error("JSON Parsing Error:", error);
    console.error("Raw Data:", line);
  }

  readyToReceive = true;
}

function restartGame() {
  score = 0;
  isGameOver = false;
  cactus.x = width;
  dinosaur.y = groundY;
  dinosaur.vy = 0;
  restartButton.hide(); // Hide the restart button
  loop();
}
