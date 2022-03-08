import { useState } from "react";
import bcrypt from "bcryptjs";

const salt = "$2b$10$WaC2/VZrG3qSl15nAfN0Pu"

export default function Signup({setToken, setIsUser}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        const hashedPassword = bcrypt.hashSync(password, salt)
        fetch("http://localhost:4325/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password: hashedPassword})
        })
        .then(response => response.json())
        .then(data => setToken(data.token))
        .catch(err => alert(err))
    }

    return (
        <>
         <h1>Sign Up</h1>
         <form onSubmit={handleSubmit}>
             <label> Email:
                <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
             </label> <br />
             <label> Password:
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
             </label> <br />
             <input type="submit" value="Sign Up" />
         </form> <br />
         <button onClick={() => setIsUser(true)}>
            Login 
            </button>   
        </>
    )
}