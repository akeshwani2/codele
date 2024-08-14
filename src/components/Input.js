import React, { useState } from 'react';

function Input({ onSubmit }) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(guess);
    setGuess(''); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your code snippet"
      />
      <button type="submit">Submit</button>
    </form>
  );
}


export default Input;
