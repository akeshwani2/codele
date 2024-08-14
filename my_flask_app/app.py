from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the AI model (e.g., GPT-2)
generator = pipeline('text-generation', model='gpt2')

@app.route('/')
def home():
    return "Welcome to the Coding Puzzle Website!"

generator = pipeline('text-generation', model='gpt2')

@app.route('/generate', methods=['POST'])
def generate_problem():
    prompt = request.json.get('prompt', 'Write a unique Python coding problem in the language python.')
    result = generator(prompt, max_length=40, num_return_sequences=1, temperature=0.7)
    problem = result[0]['generated_text']

   

    return jsonify(problem=problem)

if __name__ == '__main__':
    app.run(debug=True)
