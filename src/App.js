import { useState } from 'react';
import './App.css';
import Login from './scenes/Login';
import Signup from './scenes/SignUp';
import Main from './scenes/Main';

function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState();

  return (
    <section>
    {!token
      ? isUser
        ? <Login setIsUser={setIsUser} setToken={setToken} />
        : <Signup setIsUser={setIsUser} setToken={setToken} />
      : <Main token={token}/>
    }
    </section>
  );
}

export default App;
