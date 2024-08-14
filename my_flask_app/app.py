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

@app.route('/generate', methods=['POST'])
def generate_problem():
    prompt = request.json.get('prompt', 'Generate a coding problem.')
    result = generator(prompt, max_length=100, num_return_sequences=1)
    problem = result[0]['generated_text']
    print("Generated problem:", problem)  # This line prints the generated problem to your terminal
    return jsonify(problem=problem)

if __name__ == '__main__':
    app.run(debug=True)
