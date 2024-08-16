// src/components/Login.js
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import App from "../App";
import "/Users/arhaankeshwani/Downloads/codele/src/components/login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="login">
      <h1 className="field">Login</h1>
      {error && <p>{error}</p>}
      
    <div className="logfield">  
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        
      />
    </div>

    <div className="passfield">  
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
    </div>
      <div className="butt-container">
      <button type="submit">Login</button>
      </div>
      
    </form>
  );
};

export default Login;
