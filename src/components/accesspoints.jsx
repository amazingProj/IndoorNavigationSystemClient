import React, { useState, useEffect, useRef } from "react";
import AccessPoint from "./accesspoint";

const AccessPoints = (props) => {
  useEffect(() => {
    console.log(props.accessPoints);
    console.log(props.floor);
  });
  return (
    <div>
      {props.accessPoints
        .filter((accessPoint) => accessPoint.floorLevel == props.floor)
        .map((accessPoint) => (
          <AccessPoint x={accessPoint.x} y={accessPoint.y} />
        ))}
    </div>
  );
};

export default AccessPoints;
