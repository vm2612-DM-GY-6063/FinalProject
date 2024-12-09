
// Define sensor and LED pins
#define TRIG_PIN 9
#define ECHO_PIN 10
#define LED_PIN 6

void setup() {
  // Initialize pins
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
  
  // Start serial communication with p5.js
  Serial.begin(9600);
}

void loop() {
  // Trigger ultrasonic sensor
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  // Calculate distance
  long duration = pulseIn(ECHO_PIN, HIGH);
  int distance = duration * 0.034 / 2;

  // Map distance to LED brightness
  int brightness = map(distance, 5, 100, 255, 0);
  brightness = constrain(brightness, 0, 255);
  analogWrite(LED_PIN, brightness);

  // Send distance to p5.js
  Serial.println(distance);

  delay(100); 
}
