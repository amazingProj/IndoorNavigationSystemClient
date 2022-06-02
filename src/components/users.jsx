import React, { useState, useEffect, useRef } from "react";
import './style/canvas.css';
import socketIOClient from "socket.io-client";
import User from "./user";
import './style/user.css'


const TrackedUsers = (props) => {
  const userRef = useRef();
  const count = useRef(0);
  const ENDPOINT = "http://127.0.0.1:4001";
  const [response, setResponse] = useState("");
  const usersFloor = props.floor
  const [users, updateUsers] = useState([]);
  
  const addUpdateUser = () =>
  {

  }

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("users/devices/location", data => {
      let unmounted = false;
      let wifiInformation = JSON.parse(JSON.stringify(data));
      console.log(wifiInformation);
      
      let xCor = wifiInformation["x"];
      let yCor = wifiInformation["y"];
      let zCor = wifiInformation["z"];
      let floorLevel = wifiInformation["FloorLevel"];
      let ID = wifiInformation["ID"];
      let batteryInfo = wifiInformation["BATTERY"];
      let isAlarmed = wifiInformation["ISAlarmed"];
      let dict = { index: count.current, x: xCor, y: yCor, name: "אסף הלל", battery: batteryInfo, SOS: isAlarmed };
      count.current += 1;
      if (!unmounted)
      {
        updateUsers(users.concat(dict));
      }
     
      //return () =>
      //{
      //  unmounted = true;
      //}
      
    });
  }, []);
 
  return (
    <div>
      <div ref={userRef}>
        <div>
          {
            users.map(user => <User key={user.index} x={user.x} y={user.y} name={user.ID} battery={user.battery} SOS={user.isAlarmed}></User>)
          }
        </div>
      </div>
    </div>
    
    
  );
}

export default TrackedUsers;