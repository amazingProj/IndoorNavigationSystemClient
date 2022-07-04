import Floor3 from "./floor3th";
import React, { useState, useEffect, useRef } from "react";
import Floor4 from "./floor4th";
import Floor5 from "./floor5th";

const APs = (props) => {
  const [counter, setCounter] = useState(0);
  const [newAccessPoint, setNewAccessPoint] = useState(0);
  var [users, setUsers] = useState([]);

  const setCounterZero = () => {
    setCounter(0);
  };
  const setCounterOne = () => {
    setCounter(1);
  };
  const setCounterTwo = () => {
    setCounter(2);
  };

  const addNewAccessPoint = () => {
    setNewAccessPoint(newAccessPoint + 1);
    let newAccessPointInstance = {
      key: { newAccessPoint },
      bssid: "empty",
      x: "10.5",
      y: "10.5",
      floorLevel: "0",
    };

    setUsers([...users, newAccessPointInstance]);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <ul className={"absolute bg-zinc-200 w-full px-8 inline-flex"}>
        <li
          onClick={addNewAccessPoint}
          className="hover:bg-zinc-300 border-b-2 border-zinc-300 align-middle"
        >
          +
        </li>
        <li
          onClick={setCounterZero}
          className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full align-middle"
        >
          קומה 3
        </li>
        <li
          onClick={setCounterOne}
          className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full align-middle"
        >
          קומה 4
        </li>
        <li
          onClick={setCounterTwo}
          className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full"
        >
          קומה 5
        </li>
      </ul>
      {(counter === 0 && (
        <Floor3
          editMode="true"
          accessPoints={props.accessPoints}
          new={newAccessPoint}
          users={users}
        />
      )) ||
        (counter === 1 && (
          <Floor4
            editMode="true"
            accessPoints={props.accessPoints}
            new={newAccessPoint}
            users={users}
          />
        )) ||
        (counter === 2 && (
          <Floor5
            editMode="true"
            accessPoints={props.accessPoints}
            new={newAccessPoint}
            users={users}
          />
        ))}
    </div>
  );
};

export default APs;
