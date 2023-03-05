import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {



    const [token, setToken] = useState("Not received");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let currentToken = urlParams.get('code');
        if (currentToken !== null) setToken(currentToken);
    }, []);
    return (
    <div className="App">
      <h3>Token Receiver</h3>
      <br />
      <p>Received code {token}</p>
    </div>
  );
}

export default App;
