# Dinosaur Jump Game Using Ultrasonic Sensor and Serial Communication

This project is an interactive Dinosaur Jump Game built using **p5.js** and **Arduino**. The dinosaur's jump is controlled using an ultrasonic sensor, and obstacles (cacti) move across the screen, making the game dynamic and fun to play.

---

## Features

### Dinosaur Jump Control
- The dinosaur jumps when the ultrasonic sensor detects a distance less than **10 cm**.

### Dynamic Obstacles
- Obstacles (cacti) move left across the screen and reset to randomized positions spaced apart after going off-screen.

### Score Tracking
- The score increases each time an obstacle resets its position.

### Game Over and Restart
- If the dinosaur collides with an obstacle, the game ends. A restart button is shown to replay the game.

### Start Game on Connection
- The game starts only after connecting to the Arduino via serial communication.

---

## Requirements

### Hardware
- **Arduino Board**
- **Ultrasonic Sensor** (e.g., HC-SR04)
- **Connecting Wires**
- **USB Cable** for serial communication

### Software
- **Arduino IDE**
- **p5.js Library**
- A **Web Browser** to run the game

---

## How It Works

### Arduino Code
The ultrasonic sensor sends distance readings to the p5.js sketch over serial communication in **JSON** format:

```json
{
  "data": {
    "Ultrasonic": {
      "distance_cm": 8
    }
  }
}
```

- The ultrasonic sensor measures the distance to an object.
- If the distance is less than **10 cm**, the dinosaur jumps.

### p5.js Game Logic
- The dinosaur moves vertically based on the sensor input.
- Obstacles (cacti) move from right to left and reset at random positions spaced between **300px to 500px** apart.
- **Collision detection** ends the game and displays a Restart button.

---

## Instructions to Run the Game

### 1. Upload the Arduino Code
- Use the **Arduino IDE** to upload the code that sends ultrasonic sensor data as JSON.

### 2. Connect the Arduino
- Start the game by connecting to the Arduino via serial communication.

### 3. Run the p5.js Sketch
- Use the **p5.js editor** or a **local server** to run the game.

### 4. Play the Game
- Move your hand near the ultrasonic sensor to make the dinosaur jump.
- Avoid colliding with the moving obstacles.

---

## Game Controls
- **Jump**: Move your hand closer to the ultrasonic sensor.
- **Restart**: Click the **Restart** button when the game is over.

# Proximity-Based LED Visualizer

## High-Level System Diagram

The project integrates hardware and software components to create an interactive proximity-based LED visualizer.

1. **Arduino**:
   - **Input**: Ultrasonic sensor (HC-SR04) measures the distance of an object.
   - **Processing**: Maps the distance data to appropriate LED patterns or brightness levels.
   - **Output**: Controls LEDs to provide real-time physical feedback on proximity and sends distance data to p5.js via serial communication.

2. **p5.js**:
   - **Input**: Receives distance data from the Arduino through the serial port.
   - **Processing**: Maps the data to visual elements like expanding circles, shrinking bars, or dynamic animations.
   - **Output**: Displays interactive visuals in real-time based on the object’s proximity.

---

## Circuit Diagram

**Connections**:
- **Ultrasonic Sensor (HC-SR04)**:
  - VCC → 5V pin on Arduino.
  - GND → GND pin on Arduino.
  - TRIG → Digital pin 9.
  - ECHO → Digital pin 10.
- **LEDs**:
  - Positive terminal → PWM pin (e.g., pin 6) on Arduino.
  - Negative terminal → Resistor → GND.
- USB cable connects Arduino to the computer for power and data transmission.

---

## External Data and Libraries

1. **Arduino Libraries**:
   - No additional libraries are required for basic sensor and LED control.
   - The default `Servo` or `LiquidCrystal` libraries can be considered for advanced extensions.

2. **p5.js Libraries**:
   - **p5.serialport**: For serial communication between Arduino and p5.js.
   - **p5.sound**: To add sound effects if desired.

---

## Sensors, Output Components, and Mechanisms

1. **Ultrasonic Sensor (HC-SR04)**:
   - Measures object proximity using ultrasonic waves.
   - Range: 2 cm to 400 cm, with an accuracy of ±3 mm.

2. **LEDs**:
   - LEDs or an addressable LED strip (e.g., WS2812) will provide visual feedback.
   - Patterns or brightness levels adjust dynamically based on the distance data.

3. **Arduino Uno**:
   - Serves as the controller for the ultrasonic sensor and LEDs.
   - Sends distance data to p5.js via a USB connection.

---

## Reference Images, Texts, and Projects

1. **Inspirational Texts**:
   - **"Grapefruit" by Yoko Ono**: Encourages the exploration of participatory and experiential art.
   - Fluxus artist instructions: Highlight blending art with technology and audience interaction.

2. **Related Projects**:
   - LED-based music visualizers.
   - Sensor-based interactive installations like proximity-responsive sculptures.

3. **Reference Images**:
   - Circuit diagrams for ultrasonic sensors and LEDs.
   - Screenshots of p5.js visuals (e.g., expanding/shrinking shapes, bar graphs).

---

## Plan for User Testing

1. **Setup**:
   - Install the system in a controlled environment with adjustable lighting and space.

2. **Engagement**:
   - Encourage users to move objects at varying distances to interact with the system.

3. **Feedback Collection**:
   - Ask users to describe their experience: Was the feedback (LEDs and visuals) intuitive?
   - Observe responses to different patterns and intensities.
   - Gather suggestions for improving responsiveness or visual appeal.

---

## Relevance of the Project

### **Relation to Readings**
- The project embodies Yoko Ono’s concept of art as a participatory experience, encouraging users to influence the system’s output.
- It connects to Fluxus principles by creating an interactive installation that merges art and technology.

### **Connection to Society**
- Highlights the potential of technology to create engaging sensory experiences.
- Demonstrates how interactive systems can educate or entertain in museums, classrooms, or public spaces.

### **Personal Importance**
- Combines my interests in robotics, visual art, and interaction design.
- Offers a platform to experiment with hardware-software integration and user-centered design, strengthening skills for future projects and professional goals.

---

This project is a creative exploration of how physical and digital interactions can be harmonized to produce meaningful and engaging experiences.


# Idea 1

## Project Idea: RGB LED Color Controller

**Description**: This project involves controlling an RGB LED's color using the mouse position on a canvas displayed by p5.js. The mouse's X and Y positions are mapped to RGB values, which are then sent to the Arduino via serial communication. The Arduino receives these values and adjusts the brightness of the LED's red, green, and blue components using PWM. The LED replicates the color displayed on the screen in real-time.

### p5.js:
- **Input**: Mouse position (X, Y) on the canvas.
- **Output**: Sends RGB values to Arduino.

### Arduino:
- **Input**: RGB values from p5.js via serial communication.
- **Output**: Controls the RGB LED with PWM to reflect the color.

---

# Idea 2

## Project Idea: Proximity-Based LED Visualizer

**Description**: This project uses an ultrasonic sensor to measure the distance of an object, and based on the proximity, LEDs light up in different patterns and intensities. The distance data is sent to p5.js, which visualizes the proximity in real-time with animations like expanding circles or bars. The closer the object, the brighter the LEDs and the more dynamic the visualizations, creating a rich interactive system.

### Arduino:
- **Input**: Ultrasonic sensor measures the distance of an object.
- **Output**: Lights up LEDs in patterns or adjusts brightness based on proximity.
- **Communication**: Sends distance data to p5.js.

### p5.js:
- **Input**: Receives distance data from Arduino.
- **Output**: Displays visual effects such as growing/shrinking shapes or dynamic bars that represent proximity.

---

# Idea 3

## Project Idea: Touchless Light Controller

**Description**: This project uses an ultrasonic sensor to create a touchless light controller. The distance of a user's hand from the sensor determines the brightness and color of an LED. The proximity data is sent to p5.js, where a visual bar or gradient dynamically represents the LED's brightness and color. As the user moves their hand closer or farther, the LED changes in intensity and hue, with the screen showing a synchronized visualization.

### Arduino:
- **Input**: Ultrasonic sensor reads the distance of the user's hand.
- **Output**: Adjusts LED brightness and color based on proximity.
- **Communication**: Sends proximity data to p5.js.

### p5.js:
- **Input**: Receives proximity data from Arduino.
- **Output**: Displays a visual bar or gradient to reflect LED brightness and color.


```latex

Diagram 1


 +---------------------+       Serial Communication       +--------------------+
 |     Laptop (p5.js)  | -------------------------------->|      Arduino       |
 |   - Mouse input     |                                  |   - RGB LED control|
 |   - Display canvas  |                                  |   - PWM for LEDs   |
 |   - Map RGB values  |                                  |                    |
 +---------------------+                                  +--------------------+
            ^                                                         |
            |                                                         v
     Mouse Position                                             RGB LED Output


Diagram 2

 +--------------------+       Serial Communication       +----------------------+
 |      Arduino       | -------------------------------->|     Laptop (p5.js)   |
 |  - Ultrasonic input|                                  | - Visualizes distance|
 |  - LED control     |                                  | - Animations based   |
 |                    |                                  |   on proximity       |
 +--------------------+                                  +----------------------+
            ^                                                         |
            |                                                         v
  Distance from object                                       Proximity Animation
            |
            v
     LEDs Light Up


Diagram 3

 +--------------------+       Serial Communication       +---------------------+
 |      Arduino       | -------------------------------->|     Laptop (p5.js)  |
 |  - Ultrasonic input|                                  | - Displays visual   |
 |  - LED brightness  |                                  |   gradient or bar   |
 |  - LED color       |                                  | - Synced with LED   |
 +--------------------+                                  +---------------------+
            ^                                                         |
            |                                                         v
     Distance of Hand                                       Dynamic Visualization
            |
            v
     Adjust LED Output



Utilised chatgpt to gather ideas
