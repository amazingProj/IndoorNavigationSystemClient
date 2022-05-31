import React, { useState, useEffect, useRef } from "react";
import './style/canvas.css';
import socketIOClient from "socket.io-client";
import User from "./user";


const TrackedUsers = (props) => {
  const userRef = useRef();
  const ENDPOINT = "http://127.0.0.1:4001";
  const [response, setResponse] = useState("");
  const usersFloor = props.floor

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("users/devices/location", data => {
      let wifiInformation = JSON.parse(JSON.stringify(data));
      console.log(wifiInformation);
      
      //{"x":0,"y":10,"z":7,"FloorLevel":5,"ID":"94:B9:7E:FA:92:14","BATTERY":"50%","ISAlarmed":"Alarmed"}
      let x = wifiInformation["x"];
      let y = wifiInformation["y"];
      let z = wifiInformation["z"];
      let floorLevel = wifiInformation["FloorLevel"];
      let ID = wifiInformation["ID"];
      let battery = wifiInformation["BATTERY"];
      let isAlarmed = wifiInformation["ISAlarmed"];
      
      React.createElement (<User x={x} y={y} name={ID} battery={battery} SOS={isAlarmed} />)
      
    });
  }, []);
 
  return (
    <div>
      <div ref={userRef}>
      
      </div>
    </div>
    
    
  );
}

export default TrackedUsers;