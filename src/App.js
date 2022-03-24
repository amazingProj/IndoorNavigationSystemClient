import React, { useState, useEffect } from "react";
import FourthFloor from './fourthFloor';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("94:B9:7E:FA:92:14", data => {
      setResponse(data);
      console.log(data)
    });
  }, []);

  return (
    <div/>
     
  );
}

export default App;