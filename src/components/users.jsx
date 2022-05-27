import React, { useState, useEffect, useRef } from "react";
import './style/canvas.css';
import socketIOClient from "socket.io-client";
import User from "./user";


const TrackedUsers = (props) => {
  const userRef = useRef();
  const ENDPOINT = "http://127.0.0.1:4001";
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("users/devices/location", data => {
      let wifiInformation = JSON.parse(JSON.stringify(data));
      console.log(wifiInformation);
      
      
    });
  }, []);
 
  return (
    <div>
      <div ref={userRef}>
        <User x="8" y="9" name="Assaf Hillel" battery="70"/>
      </div>
    </div>
    
    
  );
}

export default TrackedUsers;