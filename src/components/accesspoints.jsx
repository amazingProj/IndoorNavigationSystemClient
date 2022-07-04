import React, { useState, useEffect, useRef } from "react";
import AccessPoint from "./accesspoint";

const AccessPoints = (props) => {
  let floor = props.floor;

  let newCounter = props.new;
  let firstTime = true;
  const MINUTE_MS = 60000;

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
      {props.new > 0 && <AccessPoint x="10" y="10" />}
    </div>
  );
};

export default AccessPoints;
