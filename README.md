# Live Video Stream using NaC & 5G

## Overview
This project demonstrates a live video streaming application using Network as Code (NaC) and 5G technology. The project is divided into two main components: the frontend and the backend.

## Project Structure
- `./frontend/src/App.jsx`: The frontend component built with React.
- `./backend/cv2Server.py`: The backend component built with Flask and OpenCV.

## Frontend: ./frontend/app.jsx
The frontend is responsible for displaying the live video stream and providing user interaction options.

### Key Features
- Displays live video stream from the backend.
- Provides a "QoD Video Boost" button to enhance video quality.
- Toggles between "QoD Video Boost" and "Stop QoD Session" buttons based on user interaction.


## Backend: ./backend/cv2Server.py
The backend is responsible for capturing video from the camera, processing it using OpenCV, and serving it to the frontend via a Flask web server.

### Key Features
- Captures video frames from the camera using OpenCV.
- Streams the video frames to the frontend using Flask.
- Applies a Quality of Service (QoS) profile to optimize for low latency using NaC (Network as Code) by Nokia.

### Endpoints
- `/video_feed`: Streams the live video feed to the frontend.

### Dependencies
- Flask: A lightweight WSGI web application framework.
- OpenCV: A library for computer vision tasks.
- NaC: Network as Code for managing network resources.

### How to Run
1. Install the required dependencies:
   ```bash
   pip install flask opencv-python nac