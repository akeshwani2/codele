import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import '../App.css'; // For styling


function LandingPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <Box textAlign="center" minH="100vh" bg="#0f0a19" color="white" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <img src="codele.png" ></img>

    <div className='welcome'>
      <h1>Welcome to Codele!</h1>
    </div>
      <Text className="welc" fontSize="lg" mb={8}>Start your journey by logging in or signing up</Text>
      <Box>
        <Button colorScheme="teal" size="lg" mr={4} onClick={handleLoginClick}>Login</Button>
        <Button colorScheme="blue" size="lg" onClick={handleSignupClick}>Sign Up</Button>
      </Box>
    </Box>
  );
}

export default LandingPage;
