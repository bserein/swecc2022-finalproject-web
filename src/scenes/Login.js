import { useState} from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../ConnectAuth'


const salt = "$2b$10$WaC2/VZrG3qSl15nAfN0Pu"

export default function Login({setToken, setIsUser}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const handleSubmit = (event) => {
        event.preventDefault()
        const hashedPassword = bcrypt.hashSync(password, salt)
        fetch("https://final-project-bas.uk.r.appspot.com/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password: hashedPassword})
        })
        // localStorage.setItem('email', email)
        .then(response => response.json())
        .then(data => {
            setToken(data.token);
            localStorage.setItem('token', data.token);
            navigate('/cars')
        })
        .catch(err => alert(err))
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            setIsUser(result.user)
            navigate('/cars')
        })
        .then(data => setToken(data.token))
        .catch(alert)
    }

    return (
        <>
        <div className="signin-login">
        <h1 className="signin-login-text"> Login </h1>
        <form onSubmit={handleSubmit} >
            <label> Email:
                <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
            </label> <br />
            <label> Password: 
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </label> <br />
                <input type="submit" value="Login"/>
        </form> <br />
        <span>Not a user? </span>
        <button onClick={() => setIsUser(false)}>
            Sign Up
        </button>
        <p>-------------or------------</p>
        <button 
        // onClick={handleGoogleLogin}
        style={{
            backgroundColor: 'black', 
            color: 'white', 
            border: 'none'}}>
                Sign in with Google</button>
                </div>
        </>
    )
}