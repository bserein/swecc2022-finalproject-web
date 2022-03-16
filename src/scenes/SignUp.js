import { useState } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import './login-signin.css'

const salt = "$2b$10$WaC2/VZrG3qSl15nAfN0Pu"

export default function Signup({setToken, setIsUser }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const hashedPassword = bcrypt.hashSync(password, salt)
        fetch("https://final-project-bas.uk.r.appspot.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password: hashedPassword})
        })
        .then(response => response.json())
        .then(data => {
            setToken(data.token);
            localStorage.setItem('token', data.token);
            navigate('/cars')
        })
        .catch(err => alert(err))
    }

    return (
        <>
            <div className="wrapper">
        <div className="form-wrapper">
          <h2>Register</h2>
          <form onSubmit={handleSubmit} className="login-sign-in-form">
            <div className="email">
              <label className="label-signin-login">Email
              <input 
              className="input-signin-login"
              type="email" value={email} onChange={event => setEmail(event.target.value)}/>
              </label>
            </div>
            <div className="password">
              <label className="label-signin-login">Password
              <input
              className="input-signin-login"
                type="password" value={password} onChange={event => setPassword(event.target.value)}
              />
              </label>
            </div>
            <div className="info">
              <small>Password must be eight characters in length.</small>
            </div>
            <div className="submit">
              <button type="submit" value="Sign Up" className="button-signin-login">Create</button>
            </div>
            <span>Already a user? </span>
         <button onClick={() => setIsUser(true)}
          className="button-signin-login">
            Login 
            </button>
            
          </form>
        </div>
      </div>
        </>
        
    )
}