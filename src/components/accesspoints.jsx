import React, { useState, useEffect, useRef } from "react";
import AccessPoint from "./accesspoint";

const AccessPoints = (props) => {
  return (
    <div>
      {props.accessPoints
        .filter(
          (accessPoint) =>
            accessPoint.floorLevel == props.floor || props.floor == 0
        )
        .map((accessPoint) => (
          <AccessPoint
            x={accessPoint.x}
            y={accessPoint.y}
            bssid={accessPoint.bssid}
            key={accessPoint._id}
            id={accessPoint._id}
            floor={accessPoint.floorLevel}
          />
        ))}
    </div>
  );
};

export default AccessPoints;
