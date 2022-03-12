import { useState} from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";


const salt = "$2b$10$WaC2/VZrG3qSl15nAfN0Pu"

export default function Login({setToken, setIsUser}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

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
        localStorage.setItem('email', email)
        .then(response => response.json())
        .then(data => {
            setToken(data.token);
            navigate('/cars')
        })
        .catch(err => alert(err))
    }

    return (
        <>
        <h1> Login </h1>
        <form onSubmit={handleSubmit} >
            <label> Email:
                <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
            </label> <br />
            <label> Password: 
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </label> <br />
                <input type="submit" value="Login"/>
        </form> <br />
        <button onClick={() => setIsUser(false)}>
            Sign Up
        </button>
        </>
    )
}