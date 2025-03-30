from flask import Flask, request, jsonify
from flask_cors import CORS
import hashlib

app = Flask(__name__)
CORS(app)

@app.route("/analyze", methods=["POST"])
def analyze_password():
    data = request.get_json()
    password = data.get("password")

    # Simple example: hashing password
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    
    # Sample AI response (Replace with ML model)
    if len(password) < 8:
        analysis = "Weak Password! Use at least 8 characters."
    else:
        analysis = f"Your hashed password is: {hashed_password[:10]}... (secure)"

    return jsonify({"analysis": analysis})

if __name__ == "__main__":
    app.run(debug=True)
