import React, { useState } from 'react';
import Header from './components/Header';
import './App.css'; // For styling
import { Box } from '@chakra-ui/react';
import CodeEditor from './components/CodeEditor';


function App() {
  return (
    <div>
      <Header />
      <Box
      minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <CodeEditor />
      </Box>
    </div>
  );
}

export default App;
