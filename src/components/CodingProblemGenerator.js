import React, { useState } from 'react';

function CodingProblemGenerator() {
  const [problem, setProblem] = useState('');  // State to hold the generated problem
  const [loading, setLoading] = useState(false);  // State to handle loading status

  // Function to fetch the generated problem
  const fetchProblem = async () => {
    setLoading(true);  // Set loading state to true
    try {
      const response = await fetch('http://127.0.0.1:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           "prompt": "Write a unique Python coding problem in the language python.",
        }),
      });

      const data = await response.json();
      setProblem(data.problem);  // Update the problem state with the fetched problem
    } catch (error) {
      console.error('Error fetching the problem:', error);
    }
    setLoading(false);  // Set loading state to false
  };

  return (
    <div>
      <h1>Coding Problem Generator</h1>
      <button onClick={fetchProblem}>Generate Problem</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{problem}</p>
      )}
    </div>
  );
}

export default CodingProblemGenerator;
