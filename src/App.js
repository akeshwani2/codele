import React, { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Feedback from './components/Feedback';
import Attempts from './components/Attempts';
import './App.css'; // For styling
import CodingProblemGenerator from './components/CodingProblemGenerator';

function App() {
  const [feedback, setFeedback] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(5); // Assume 6 attempts like Wordle
  const correctAnswer = 'console.log("Hello World");'; // Example correct code

  const handleSubmit = (guess) => {
    if (guess === correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Try Again!');
      setAttemptsLeft(attemptsLeft - 1);
    }
  };

  return (
    <div>
      <Header />
      <Attempts count={attemptsLeft} />
      <Input onSubmit={handleSubmit} />
      <Feedback message={feedback} />
      
      <CodingProblemGenerator />
    </div>
    
  );
}

export default App;
