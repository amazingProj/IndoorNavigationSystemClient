import React, { useState, useEffect, useRef } from "react";
import AccessPoint from "./accesspoint";

const AccessPoints = (props) => {
  let floor = props.floor;
  let newAccessPoints = {
    bssid: "empty",
    x: "10.5",
    y: "10.5",
    floorLevel: { floor },
  };

  useEffect(() => {
    console.log(props.accessPoints);
    console.log(props.floor);
  });
  return (
    <div>
      {props.accessPoints
        .filter(
          (accessPoint) =>
            accessPoint.floorLevel == props.floor || props.floor == 0
        )
        .map((accessPoint) => (
          <AccessPoint x={accessPoint.x} y={accessPoint.y} />
        ))}
      {props.new > 0 && (
        <AccessPoint x={newAccessPoints.x} y={newAccessPoints.y} />
      )}
    </div>
  );
};

export default AccessPoints;
