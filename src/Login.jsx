import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = ({className}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          await signInWithEmailAndPassword(auth, email, password)
          console.log("Logged In")
          navigate("/content")
      } catch (err) {
          console.log(err)
      }
    }
  return (
    <div className={className}>
      <div>
          <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <label htmlFor="email">
                  Email:
                  <input type='text' onChange={(e) => setEmail(e.target.value)}/>
              </label>
              <label htmlFor='password'>
                  Password:
                  <input type='password' onChange={(e) => setPassword(e.target.value)}/>
              </label>
              <button type='submit'>Login</button> <br />
              <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </form>
      </div>
    </div>
  )
}

export default Login