import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const SignUpForm = ({ className }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null); // Track signup errors
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Account created");
            navigate("/login")
        } catch (err) {
            setError(err.message); // Display error message
            console.error("Error during signup:", err);
        }
    };

    return (
        <div className={className}>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <label htmlFor="email">
                        Email:
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="password">
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <a href="/login">
                      <button type="submit">Sign Up</button>
                    </a>
                    <br />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <p>Already Registered? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
