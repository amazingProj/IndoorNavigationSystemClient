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
  
  const userNames = {'94:B9:7E:FA:92:14': "אסף הלל", "2023": "אליה קופלר"}


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
      console.log(floorLevel)
      let ID = wifiInformation["ID"];
      let userName = userNames[ID]
      console.log(userName)
      let batteryInfo = wifiInformation["BATTERY"];
      let isAlarmed = wifiInformation["ISAlarmed"];
      let dict = { index: count.current, id: ID, x: xCor, y: yCor, name: userName, battery: batteryInfo, SOS: isAlarmed };
      count.current += 1;
      
      //if (floorLevel == props.floor)
      //{
        if (!unmounted)
        {
          updateUsers(oldArray => [...oldArray.slice(1), dict]);
        }
      //}
    }
  );
  }, []);
 
  return (
    <div>
      <div ref={userRef}>
        <div>
          {
            users.map(user => <User key={user.index} x={user.x} y={user.y} name={user.name} battery={user.battery} SOS={user.SOS}></User>)
          }
        </div>
      </div>
    </div>
    
    
  );
}

export default TrackedUsers;