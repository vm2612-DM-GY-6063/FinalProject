#include <ArduinoJson.h>

const int trigPin = 9; // Ultrasonic sensor trigger pin
const int echoPin = 10; // Ultrasonic sensor echo pin
const int buttonPin = 2; // Button pin

int buttonCount = 0;
bool buttonState = false;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buttonPin, INPUT_PULLUP); // Button with internal pull-up
  Serial.begin(9600);
}

void loop() {
  // Measure distance using the ultrasonic sensor
  long duration;
  float distance;

  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2; // Convert to centimeters

  // Read button state and count presses
  bool currentButtonState = digitalRead(buttonPin) == LOW;
  if (currentButtonState && !buttonState) {
    buttonCount++;
  }
  buttonState = currentButtonState;

  // Send JSON data over serial
  StaticJsonDocument<128> json;
  JsonObject data = json.createNestedObject("data");
  data["Ultrasonic"]["distance_cm"] = distance;
  data["D2"]["count"] = buttonCount;

  serializeJson(json, Serial);
  Serial.println(); // Add a newline after each JSON object
  delay(100); // Adjust delay as needed
}
