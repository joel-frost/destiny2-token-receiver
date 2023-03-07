import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [token, setToken] = useState("Not received");
    const [redirect, setRedirect] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let currentToken = urlParams.get('code');
        if (currentToken !== null) {
            setToken(currentToken);
            setRedirect("http://localhost:3000/login/?code="+currentToken);
        }

    }, []);

    return (
    <div className="App">
      <h3>Token Receiver</h3>
      <br />
      <p>Received code {token}</p>
        <a href={redirect}>Continue to local</a>
    </div>
  );
}

export default App;
