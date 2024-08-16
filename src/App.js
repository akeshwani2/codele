import React, { useState } from 'react';
import Header from './components/Header';
import { Box, Text } from "@chakra-ui/react";
import './App.css'; // For styling
import CodeEditor from './components/CodeEditor';


function App() {
  return (
    <div>
      <Header />
      <Box
      minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <CodeEditor />
      <div>
      <Text className="end-cred">Made by Arhaan Keshwani, Andi</Text>
      <Text className="copy">© 2024 Codele. All rights reserved.</Text>
      </div>  
      </Box>
    </div>
  );
}

export default App;
