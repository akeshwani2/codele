import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Box, Button, Text } from '@chakra-ui/react';
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import{ FaGoogle } from "react-icons/fa"





const firebaseErrors = {
  'auth/email-already-in-use': 'This email is already in use. Please try logging in.',
  'auth/invalid-email': 'The email address is not valid.',
  'auth/weak-password': 'The password is too weak. Please choose a stronger password.',
  'auth/missing-password': 'Please enter a password.',
  'auth/wrong-password': 'Incorrect password. Please try again.',
};

const Login = ({ className }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // To track login errors
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before attempting login
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/content");
    } catch (err) {
      const errorMessage = firebaseErrors[err.code] || 'Invalid Credentials. Please try again!';
      setError(errorMessage); // Display custom error message
    }

};
  const handleForgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        console.error("Error sending password reset email: ", error);
        alert(error.message);
      });

      
      };
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives a Google Access Token. I can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
  
        // The signed-in user info.
        const user = result.user;
        console.log("User Info: ", user);
        navigate("/content")
        
        // Redirect or handle user info as needed
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        console.error("Error during Google sign-in:", errorCode, errorMessage);
        // Handle the error as needed
      });
};
//   const signInWithGithub = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//         const credential = GithubAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;

//         // The signed-in user info.
//         const user = result.user;
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GithubAuthProvider.credentialFromError(error);
//         // ...
//       });
// };
  return (
  <div className={`wrapper ${className}`}>
    <div className='box-t'>
    <header className="testtt">
      <img className="header-image-signup" src="codele.png" alt="Logo" />
    </header>
    <form onSubmit={handleSubmit}>
  <h2 className='login-t'>Login!</h2>
  
  <div className='login-email'>
    <label htmlFor="email">
      Email:
      <div className='log-email-field'>  
        <input 
          className='custom-input'
          type="text" 
          onChange={(e) => setEmail(e.target.value)} />
      </div>
    </label>
  </div>
  
  <div className='login-pass'>
    <label htmlFor="password">
      Password:
      <div className='log-pass'>
        <input 
          className='custom-input'
          type="password" 
          onChange={(e) => setPassword(e.target.value)} />
      </div>
    </label>
  </div>
  
  <div className="login-but">
    <Button colorScheme="purple" bg="#D100D1" fontSize="xl" type="submit" color="#0f0a19"> 
      <p className='test-log'>Login</p>
    </Button>
  </div>
  
  <div className="divider-container">
    <div className="divider-line"></div>
    <p className="divider">OR</p>
    <div className="divider-line"></div>
  </div>
  
  <div className='goog-logo'>
    <Button 
      style={{ 
        width: '60px',   
        height: '60px',  
        fontSize: '10px', 
        backgroundColor: '#191a1f', 
        border: '2px solid #8A2BE2',
        borderRadius: '50%', 
        color: '#7B68EE',
        boxShadow: '0px 0px 20px #7B68EE, 0px 0px 30px #8A2BE2', 
        transition: 'all 0.3s ease',
      }}
      size={1} 
      _hover={{ 
        bg: "linear-gradient(145deg, #8A2BE2, #7B68EE)", 
        transform: "scale(1.1)", 
        boxShadow: "0px 0px 50px #7B68EE, 0px 0px 70px #8A2BE2", 
        color: "#fffff", 
      }}
      onClick={signInWithGoogle}
    >
      <FaGoogle size={40} color="ffffff" />
    </Button>
  </div>
  
  {/* Rest of your form */}

        <br />
        {/* <div>
          <Button onClick={signInWithGithub}>Hi</Button>
        </div> */}
        {error && <p className='error-style' style={{ color: 'red' }}>{error}</p>}
        <p className='login-reg'>Don't have an account? 
          <div className='signup-link'>
            <Link to="/signup">Sign Up</Link>
          </div>
        </p>
        <div className='forgot-pass-container'>
        <p className='forgot-pass' onClick={() => handleForgotPassword(email)} style={{ cursor: "pointer", color: "blue" }}>
        Forgot Password?
      </p>
      </div>
      </form>
    </div>
  </div>
  );
};

export default Login;