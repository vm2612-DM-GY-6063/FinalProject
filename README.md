


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
