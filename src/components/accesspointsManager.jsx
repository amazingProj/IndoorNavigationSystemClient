import Floor3 from "./floor3th";
import React, { useState, useEffect, useRef } from "react";
import Floor4 from "./floor4th";
import Floor5 from "./floor5th";
import Modal from "./addAccessPoint";

const APs = (props) => {
  const [counter, setCounter] = useState(0);
  const [newAccessPoint, setNewAccessPoint] = useState(0);
  const [vis, setVis] = useState(false);
  const [visC, setVisC] = useState(0);
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
    console.log("Clicked");
    setVisC(visC + 1);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <div>
        <ul className={" bg-indigo-500 w-3/5 px-8 inline-flex mr-40"}>
          <li className="text-center hover:bg-indigo-700 border-b-2 border-zinc-300 align-middle">
            -
          </li>
          <li
            onClick={addNewAccessPoint}
            className="text-center hover:bg-indigo-700 border-b-2 border-zinc-300 align-middle"
          >
            +
          </li>
          <li
            onClick={setCounterZero}
            className="text-center hover:bg-indigo-700 border-b-2 border-zinc-300 w-full align-middle"
          >
            קומה 3
          </li>
          <li
            onClick={setCounterOne}
            className="text-center hover:bg-indigo-700 border-b-2 border-zinc-300 w-full align-middle"
          >
            קומה 4
          </li>
          <li
            onClick={setCounterTwo}
            className="text-center hover:bg-indigo-700 border-b-2 border-zinc-300 w-full"
          >
            קומה 5
          </li>
        </ul>
      </div>

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
      <Modal visibility={visC} />
    </div>
  );
};

export default APs;
