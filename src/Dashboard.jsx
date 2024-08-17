import React from 'react'
import "./App.css"

const Dashboard = ({className}) => {
  return (
    <div className={className}>  
        <div>
            <form>
                <h2>dash</h2>
                <label htmlFor="email">
                    Email:
                    <input type='text' />
                </label>
                <label htmlFor='password'>
                    Password:
                    <input type='password' />
                </label>
                <button>Sign Up</button> <br />
                <p>Already Registered? <a>Login</a></p>
            </form>
        </div>
    </div>

  )
}

export default Dashboard