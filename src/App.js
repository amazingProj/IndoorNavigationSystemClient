import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const userRef = useRef();
  const [response, setResponse] = useState("");
 
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("94:B9:7E:FA:92:14", data => {
      let wifiInformation = JSON.parse(JSON.stringify(data));
      setResponse(data);
      console.log(data)
      userRef.current.style.left = wifiInformation["x"] + "px";
      userRef.current.style.top = wifiInformation["y"] + "px";
      
    });
  }, []);
 
  return (
    <div>
    <div ref={userRef} className="user"></div>
    </div>
  );
}

export default App;