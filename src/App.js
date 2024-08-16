import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Box, Text } from "@chakra-ui/react";
import Header from './components/Header';
import CodeEditor from './components/CodeEditor';
import Login from "./components/login";
import Signup from "./components/signup";
import LandingPage from "./components/landingPage";
import { auth } from './firebase'; 
import './App.css'; // For styling

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Landing page for users who aren't logged in */}
        <Route path="/" element={isAuthenticated ? <MainContent /> : <LandingPage />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />
      </Routes>
    </Router>
  );
}

function MainContent() {
  return (
    <div>
      <Header />
      <Box
        minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}
      >
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
