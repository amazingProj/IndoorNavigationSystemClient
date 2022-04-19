import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import Canvas from './components/canvas';
import { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const userRef = useRef();
  const [response, setResponse] = useState("");
  let basePercentLeft = 5;
  let basePercentTop = 15;

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("94:B9:7E:FA:92:14", data => {
      let wifiInformation = JSON.parse(JSON.stringify(data));
      //setResponse(data);
      console.log(wifiInformation)
      userRef.current.style.left = basePercentLeft + wifiInformation["x"] * 4 + "%";
      userRef.current.style.top = basePercentTop + wifiInformation["y"] * 4 + "%";
    });
  }, []);
 
  return (
    <div>
      <Navbar />
    <div ref={userRef} className="user"></div>
    <Canvas />
    </div>
  );
}

export default App;