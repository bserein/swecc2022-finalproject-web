import { useState, useEffect} from 'react';
import './App.css';
import Login from './scenes/Login';
import Signup from './scenes/SignUp';
import Main from './scenes/Main';

function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState();

  useEffect(() => {
    const myToken = localStorage.getItem('token')
    setToken(myToken)
  }, [])

  return (
    <section>
    {!token
      ? isUser
        ? <Login setIsUser={setIsUser} setToken={setToken} />
        : <Signup setIsUser={setIsUser} setToken={setToken} />
      : <Main token={token} setToken={setToken}/>
    }
    </section>
  );
}

export default App;

