import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import SignUpForm from './SignUpForm';
import Login from './Login';
import Dashboard from './Dashboard';
import CodeEditor from './components/CodeEditor';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update state when auth state changes
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard className="dash" />} />
        <Route path="/signup" element={<div className="sign"><SignUpForm /></div>} />
        <Route path="/login" element={<div className='log'><Login /></div>} />
        <Route
          path="/content"
          element={
            <ProtectedRoute>
              <div className="code-edi"><CodeEditor /></div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
