#!/bin/bash

# Create a Python virtual environment
python3 -m venv .venv

# Activate the virtual environment
source .venv/bin/activate

# Install the required Python packages
pip install flask
pip install flask-cors
pip install scikit-learn
pip install opencv-python
pip install mediapipe
pip install tensorflow

# Run the Flask application
flask --app gesturesWebservice run
