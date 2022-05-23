import React, { useState, useEffect, useRef } from "react";
import './style/canvas.css';
import socketIOClient from "socket.io-client";
const TrackedUsers = () => {
  const userRef = useRef();
  const ENDPOINT = "http://127.0.0.1:4001";
  const [response, setResponse] = useState("");
  let basePercentLeft = 14;
  let basePercentTop = 13;

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("users/devices/location", data => {
      let wifiInformation = JSON.parse(JSON.stringify(data));
      //setResponse(data);
      console.log(wifiInformation)
      userRef.current.style.left = basePercentLeft + wifiInformation["x"] * 2.94 + "%";
      userRef.current.style.top = basePercentTop + wifiInformation["y"] * 4.76 + "%";
     });
  }, []);
 
  return (
    <div>
      <div ref={userRef} className="user">
        <div>
          <p><br /><br /><br />אסף הלל</p> 
        </div>
      </div>
      
    
    </div>
    
    
  );
}

export default TrackedUsers;