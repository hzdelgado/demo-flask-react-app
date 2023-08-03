import logo from "./logo.svg";
import "./App.css";
import React, {useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [getData, setGetData] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/flask/hello")
      .then((response) => {
        console.log("SUCCESS", response);
        setGetData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + Flask Tutorial</p>
        <div>
          {getData.status === 200 ? (
            <h3>{getData.data.message}</h3>
          ) : (
            <h3>LOADING</h3>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
