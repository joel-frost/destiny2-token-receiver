import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [token, setToken] = useState("Not received");
    const [redirect, setRedirect] = useState("");
    const [authToken, setAuthToken] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let currentToken = urlParams.get('code');
        if (currentToken !== null) {
            setToken(currentToken);
            let authRes = getAuthData();
            setRedirect("http://localhost:3000/login/?code="+authRes);
        }

    }, []);

    const getAuthData = async () => {
        let clientId = "43194";
        const response = await axios.post(
            "https://www.bungie.net/platform/app/oauth/token/",
            `grant_type=authorization_code&code=${token}&client_id=${clientId}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return response.data.access_token;
    }

    return (
    <div className="App">
      <h3>Token Receiver</h3>
      <br />
      <p>Received code {token}</p>
        <p>Received auth {authToken}</p>
        <a href={redirect}>Continue to local</a>
    </div>
  );
}

export default App;
