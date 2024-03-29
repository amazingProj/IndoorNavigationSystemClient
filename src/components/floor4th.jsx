import React, { useEffect, useRef } from "react";
import "./style/canvas.css";
import accessPointImage from "./style/images/accessPoint.svg";
import TrackedUsers from "./users";
import AccessPoints from "./accesspoints";

const FloorFour = (props) => {
  const canvas = useRef();
  let ctx = null;
  const TableBackground = { backgroundColor: "#cd8500" };
  const boardBackground = { backgroundColor: "#C4CACD" };
  const font = 0.01 * window.innerWidth + "px Arial";
  const door = { color: "black", width: 1 };
  const chairColor = { backgroundColor: "black" };
  const colorBorder = { color: "black", width: 1 };
  const insideWallsTheme = { color: "black", width: 1 };
  const fenceColor = { color: "blue", width: 1 };
  const doorThickness = 1;
  let editMode = props.editMode || false;

  const drawFillRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { backgroundColor = "black" } = style;
    let offsetX = 0.025 * window.innerWidth;
    let offsetY = 0.01 * window.innerHeight;
    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(x + offsetX, y + offsetY, w, h);
  };

  const drawLine = (info, style = {}) => {
    const { x, y, x1, y1 } = info;
    const { color = "black", width = 1 } = style;
    let height = window.innerWidth;
    let fracH = Math.trunc(height / 34);
    let offsetX = 5 * fracH;
    let offsetY = 0.01 * window.innerHeight;
    ctx.beginPath();
    ctx.moveTo(x + offsetX, y + offsetY);
    ctx.lineTo(x1 + offsetX, y1 + offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  };

  const drawLineWithoutOffset = (info, style = {}) => {
    const { x, y, x1, y1 } = info;
    const { color = "black", width = 1 } = style;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  };

  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    // get context of the canvas
    ctx = canvasEle.getContext("2d");

    let width = window.innerHeight * 0.8;
    let height = window.innerWidth;
    let fracH = Math.trunc(height / 34);
    let fracW = Math.trunc(width / 17);
    let offsetX = 4 * fracH;
    let offsetY = 0.01 * window.innerHeight;
    let xOffset = 0.025 * window.innerWidth;

    if (!editMode) {
      let image = new Image();
      image.src = accessPointImage;
      image.addEventListener(
        "load",
        function () {
          props.accessPoints.forEach((accessPoint) => {
            if (accessPoint.floorLevel == "4") {
              let x = accessPoint.x;
              let y = accessPoint.y;
              let posX = offsetX + x * fracH + 2 * fracH;
              let posY = offsetY + y * fracW;
              console.log(accessPoint);
              ctx.drawImage(image, posX, posY);
            }
          });
        },
        true
      );
    }

    drawLine(
      { x: 8.8 * fracH, y: 0, x1: 8.8 * fracH, y1: 8.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 0, y: 8.8 * fracW, x1: 2 * fracH, y1: 8.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 3.6 * fracH, y: 8.8 * fracW, x1: 8.8 * fracH, y1: 8.8 * fracW },
      colorBorder
    );

    /// class 460

    ctx.font = font;
    ctx.fillStyle = "#00000F";
    ctx.textAlign = "right";
    ctx.fillText("כיתה 460", 5 * fracH + offsetX, 8 * fracW);

    for (let j = 0; j < 7; ++j) {
      for (let i = 0; i < 10; ++i) {
        drawFillRect(
          {
            x: (1.2 + j) * fracH + offsetX,
            y: (1.1 + 0.6 * i) * fracW,
            w: 0.3 * fracH,
            h: 0.5 * fracW,
          },
          chairColor
        );
      }
    }

    for (let i = 0; i < 7; ++i) {
      drawFillRect(
        {
          x: (1.3 + i) * fracH + offsetX,
          y: 1 * fracW,
          w: 0.5 * fracH,
          h: 6.5 * fracW,
        },
        TableBackground
      );
    }

    // end  of class 460

    drawLine(
      { x: 0 * fracH, y: 1 * fracW, x1: 0, y1: 8.8 * fracW },
      colorBorder
    );
    drawLine({ x: 0.5 * fracH, y: 0, x1: 16.5 * fracH, y1: 0 }, colorBorder);
    drawLine(
      { x: 0 * fracH, y: 1 * fracW, x1: 0, y1: 8.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 0.5 * fracH, y: 0, x1: 0.5 * fracH, y1: 1 * fracW },
      colorBorder
    );
    drawLine(
      { x: 0.5 * fracH, y: 1 * fracW, x1: 0, y1: 1 * fracW },
      colorBorder
    );
    drawLine(
      { x: 16.5 * fracH, y: 0, x1: 16.5 * fracH, y1: 8.8 * fracW },
      colorBorder
    );
    // class 440 near door
    drawLine(
      { x: 8.8 * fracH, y: 8.8 * fracW, x1: 10 * fracH, y1: 8.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 11.6 * fracH, y: 8.8 * fracW, x1: 16.5 * fracH, y1: 8.8 * fracW },
      colorBorder
    );

    for (let j = 0; j < 8; ++j) {
      for (let i = 0; i < 8; ++i) {
        drawFillRect(
          {
            x: (10.3 + 0.8 * j) * fracH + offsetX,
            y: (1.1 + 0.7 * i) * fracW,
            w: 0.3 * fracH,
            h: 0.5 * fracW,
          },
          chairColor
        );
      }
    }
    for (let i = 0; i < 8; ++i) {
      drawFillRect(
        {
          x: (10 + 0.8 * i) * fracH + offsetX,
          y: 1 * fracW,
          w: 0.5 * fracH,
          h: 6 * fracW,
        },
        TableBackground
      );
    }
    // class 440
    ctx.font = font;
    ctx.fillStyle = "#00000F";
    ctx.textAlign = "right";
    ctx.fillText("כיתה 440", 14 * fracH + offsetX, 8 * fracW);

    // end of class 440
    // left-down
    drawLine({ x: 0, y: 10.8 * fracW, x1: 0, y1: 17.5 * fracW }, colorBorder);
    drawLine(
      { x: 0, y: 17.4 * fracW, x1: 8.7 * fracH, y1: 17.4 * fracW },
      colorBorder
    );
    drawLine(
      { x: 8.7 * fracH, y: 10.8 * fracW, x1: 8.7 * fracH, y1: 17.5 * fracW },
      colorBorder
    );
    drawLine(
      { x: 0, y: 10.8 * fracW, x1: 4.2 * fracH, y1: 10.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 5.5 * fracH, y: 10.8 * fracW, x1: 8.7 * fracH, y1: 10.8 * fracW },
      colorBorder
    );
    ctx.font = font;
    ctx.fillStyle = "#00000F";
    ctx.textAlign = "right";
    ctx.fillText("כיתה 470", 7.5 * fracH + offsetX, 11.7 * fracW);

    drawLine(
      { x: 0, y: 17.4 * fracW, x1: 15.2 * fracH, y1: 17.4 * fracW },
      colorBorder
    );

    drawLine(
      { x: 15.2 * fracH, y: 10.8 * fracW, x1: 15.2 * fracH, y1: 17.5 * fracW },
      colorBorder
    );
    drawLine(
      { x: 8.7 * fracH, y: 10.8 * fracW, x1: 9.7 * fracH, y1: 10.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 11.3 * fracH, y: 10.8 * fracW, x1: 15.2 * fracH, y1: 10.8 * fracW },
      colorBorder
    );
    ctx.font = font;
    ctx.fillStyle = "#00000F";
    ctx.textAlign = "right";
    ctx.fillText("כיתה 450", 13 * fracH + offsetX, 11.5 * fracW);

    ctx.font = font;
    ctx.fillStyle = "#00000F";
    ctx.textAlign = "right";
    ctx.fillText("מדרגות", 4.3 * fracH, 10.5 * fracW);

    ctx.font = font;
    ctx.fillStyle = "#00000F";
    ctx.textAlign = "right";
    ctx.fillText("מדרגות", 31.3 * fracH, 10.5 * fracW);

    // where is written birzia3
    drawLine(
      { x: 16.5 * fracH, y: 8.3 * fracW, x1: 17.3 * fracH, y1: 8.3 * fracW },
      colorBorder
    );
    drawLine(
      { x: 17.3 * fracH, y: 8.8 * fracW, x1: 17.3 * fracH, y1: 8.3 * fracW },
      colorBorder
    );
    drawLine(
      { x: 17.3 * fracH, y: 8.8 * fracW, x1: 21.5 * fracH, y1: 8.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 21.5 * fracH, y: 8.8 * fracW, x1: 21.5 * fracH, y1: 5 * fracW },
      colorBorder
    );
    drawLine(
      { x: 21.5 * fracH, y: 4 * fracW, x1: 21.5 * fracH, y1: 2.5 * fracW },
      colorBorder
    );
    drawLine(
      { x: 21.5 * fracH, y: 2.5 * fracW, x1: 22.5 * fracH, y1: 2.5 * fracW },
      colorBorder
    );
    drawLine(
      { x: 22.5 * fracH, y: 2.5 * fracW, x1: 22.5 * fracH, y1: 8.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 22.5 * fracH, y: 8.8 * fracW, x1: 24 * fracH, y1: 8.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 15.2 * fracH, y: 10.8 * fracW, x1: 16.5 * fracH, y1: 10.8 * fracW },
      colorBorder
    );

    drawLine(
      { x: 16 * fracH, y: 10.8 * fracW, x1: 16 * fracH, y1: 16.5 * fracW },
      insideWallsTheme
    );
    drawLine(
      { x: 18 * fracH, y: 16.5 * fracW, x1: 16 * fracH, y1: 16.5 * fracW },
      colorBorder
    );
    drawLine(
      { x: 18 * fracH, y: 10.8 * fracW, x1: 18 * fracH, y1: 16.5 * fracW },
      insideWallsTheme
    );
    drawLine(
      { x: 17.5 * fracH, y: 10.8 * fracW, x1: 24 * fracH, y1: 10.8 * fracW },
      colorBorder
    );

    // left-top side door
    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.arc(
      5.4 * fracH,
      8.8 * fracW + offsetY,
      1 * fracW,
      (3 * Math.PI) / 4,
      Math.PI,
      false
    );
    ctx.stroke();
    drawLine(
      { x: -0.45 * fracH, y: 10.8 * fracW, x1: 0 * fracH, y1: 10.8 * fracW },
      door
    );

    // left-down side door
    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.arc(
      5.4 * fracH,
      10.3 * fracW + offsetY,
      1 * fracW,
      (3.5 * Math.PI) / 4,
      (5 * Math.PI) / 4,
      false
    );
    ctx.stroke();
    drawLine(
      { x: -0.45 * fracH, y: 8.8 * fracW, x1: 0 * fracH, y1: 8.8 * fracW },
      colorBorder
    );

    // right-top side door
    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.arc(
      28.7 * fracH,
      8.8 * fracW + offsetY,
      1 * fracW,
      0,
      Math.PI / 2,
      false
    );
    ctx.stroke();
    drawLine(
      { x: 24 * fracH, y: 8.8 * fracW, x1: 24.6 * fracH, y1: 8.8 * fracW },
      colorBorder
    );

    // right-down side door
    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.arc(
      28.7 * fracH,
      10.8 * fracW + offsetY,
      1 * fracW,
      (6 * Math.PI) / 4,
      2 * Math.PI,
      false
    );
    ctx.stroke();
    drawLine(
      { x: 24 * fracH, y: 10.8 * fracW, x1: 24.6 * fracH, y1: 10.8 * fracW },
      door
    );

    // right - top
    drawLine(
      { x: 16.5 * fracH, y: 3.5 * fracW, x1: 21.5 * fracH, y1: 3.5 * fracW },
      door
    );
    drawLine(
      { x: 16.5 * fracH, y: 5.5 * fracW, x1: 21.5 * fracH, y1: 5.5 * fracW },
      door
    );

    ctx.fillText("חדרי מרצים", 25 * fracH, 7 * fracW);
    ctx.fillText("מעבדה", 29 * fracH, 7 * fracW);
    ctx.fillText("חדרי מרצים", 26 * fracH, 2 * fracW);

    // right-top
    drawLine({ x: 16.5 * fracH, y: 0, x1: 24 * fracH, y1: 0 }, colorBorder);
    // right-top-down
    drawLine(
      { x: 24 * fracH, y: 0, x1: 24 * fracH, y1: 8.8 * fracW },
      colorBorder
    );

    // inner line right - top
    drawLine(
      { x: 22.5 * fracH, y: 3 * fracW, x1: 24 * fracH, y1: 3 * fracW },
      door
    );

    // right-down
    drawLine(
      { x: 15.2 * fracH, y: 17.4 * fracW, x1: 24 * fracH, y1: 17.4 * fracW },
      colorBorder
    );
    // right-down- to top
    drawLine(
      { x: 24 * fracH, y: 17.4 * fracW, x1: 24 * fracH, y1: 10.8 * fracW },
      colorBorder
    );

    // class 450
    for (let j = 0; j < 5; ++j) {
      for (let i = 0; i < 7; ++i) {
        drawFillRect(
          {
            x: (11.3 + 0.8 * j) * fracH + offsetX,
            y: (11.7 + 0.7 * i) * fracW,
            w: 0.3 * fracH,
            h: 0.5 * fracW,
          },
          chairColor
        );
      }
    }

    for (let i = 0; i < 5; ++i) {
      drawFillRect(
        {
          x: (11 + 0.8 * i) * fracH + offsetX,
          y: 11.5 * fracW,
          w: 0.5 * fracH,
          h: 5 * fracW,
        },
        TableBackground
      );
    }

    // end of class 450

    for (let j = 0; j < 5; ++j) {
      for (let i = 0; i < 9; ++i) {
        if (j === 4) {
          drawFillRect(
            {
              x: (1.4 + 1.2 * j) * fracH + offsetX,
              y: (12 + 0.5 * i) * fracW,
              w: 0.2 * fracH,
              h: 0.3 * fracW,
            },
            chairColor
          );
        } else {
          drawFillRect(
            {
              x: (1.4 + 1.2 * j) * fracH + offsetX,
              y: (11.8 + 0.5 * i) * fracW,
              w: 0.2 * fracH,
              h: 0.3 * fracW,
            },
            chairColor
          );
        }
      }
    }

    for (let p = 0; p < 6; p += 1.2) {
      // the first one
      if (p === 0) {
        drawFillRect(
          {
            x: (1.5 + p) * fracH + offsetX,
            y: 11.7 * fracW,
            w: 0.5 * fracH,
            h: 4.8 * fracW,
          },
          TableBackground
        );
      } else {
        drawFillRect(
          {
            x: (1.5 + p) * fracH + offsetX,
            y: 11.5 * fracW,
            w: 0.5 * fracH,
            h: 5 * fracW,
          },
          TableBackground
        );
      }
    }

    // board 470
    const re2Info = {
      x: 8.6 * fracH + offsetX,
      y: 11 * fracW,
      w: 0.05 * fracH,
      h: 6 * fracW,
    };
    drawFillRect(re2Info, boardBackground);

    drawFillRect(
      { x: 9 * fracH + offsetX, y: 11 * fracW, w: 0.05 * fracH, h: 6 * fracW },
      boardBackground
    );
    drawFillRect(
      {
        x: 8.8 * fracH + offsetX,
        y: 0.2 * fracW,
        w: 0.05 * fracH,
        h: 6 * fracW,
      },
      boardBackground
    );
    drawFillRect(
      { x: 9 * fracH + offsetX, y: 0.2 * fracW, w: 0.05 * fracH, h: 6 * fracW },
      boardBackground
    );

    // stairs - left
    drawLine(
      { x: 0 * fracH, y: 8.2 * fracW, x1: -4.6 * fracH, y1: 8.2 * fracW },
      fenceColor
    );
    drawLine(
      { x: -4.6 * fracH, y: 8.2 * fracW, x1: -4.6 * fracH, y1: 10.2 * fracW },
      fenceColor
    );

    drawLine(
      { x: 27 * fracH, y: 12.5 * fracW, x1: 27 * fracH, y1: 10.5 * fracW },
      insideWallsTheme
    );
    drawLine(
      { x: 27 * fracH, y: 12.5 * fracW, x1: 25.5 * fracH, y1: 12.5 * fracW },
      insideWallsTheme
    );
    drawLine(
      { x: 25.5 * fracH, y: 12.5 * fracW, x1: 25.5 * fracH, y1: 10.5 * fracW },
      insideWallsTheme
    );
    drawLine(
      { x: 27 * fracH, y: 10.5 * fracW, x1: 26.4 * fracH, y1: 10.5 * fracW },
      insideWallsTheme
    );
    drawLine(
      { x: 25.46 * fracH, y: 10.5 * fracW, x1: 25.8 * fracH, y1: 10.5 * fracW },
      insideWallsTheme
    );

    ctx.fillStyle = "#00000F";

    ctx.fillText("מעלית", 31.8 * fracH, 12 * fracW);

    drawLine(
      { x: 24 * fracH, y: 8.2 * fracW, x1: 28.6 * fracH, y1: 8.2 * fracW },
      fenceColor
    );
    drawLine(
      { x: 28.6 * fracH, y: 8.2 * fracW, x1: 28.6 * fracH, y1: 10.2 * fracW },
      fenceColor
    );
  }, [props.accessPoints]);

  useEffect(() => {
    if (editMode) {
      let width = window.innerHeight * 0.8;
      let height = window.innerWidth;
      let fracH = Math.trunc(height / 34);

      ctx.font = "12px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right";

      for (let i = 1; i < 34; ++i) {
        drawLineWithoutOffset({
          x: i * fracH,
          y: 0,
          x1: i * fracH,
          y1: height,
        });

        if (i < 6) {
          ctx.fillText(6 - i + "-", i * fracH - 2, Math.trunc(width * 0.05));
        } else if (i < 30) {
          ctx.fillText(i - 5, i * fracH - 2, Math.trunc(width * 0.05));
        } else {
          ctx.fillText(i - 29 + "+", i * fracH - 2, Math.trunc(width * 0.05));
        }
      }
      let fracW = Math.trunc(width / 17.2);

      for (let i = 1; i < 18; ++i) {
        drawLineWithoutOffset({
          x: 0,
          y: i * fracW,
          x1: height,
          y1: i * fracW,
        });
        ctx.textAlign = "left";
        ctx.fillText(i, 0, i * fracW - 2);
      }
    }
  }, []);

  return (
    <div>
      <canvas ref={canvas}></canvas>
      {!editMode && <TrackedUsers floor="4" users={props.users} />}
      {editMode && (
        <AccessPoints
          accessPoints={props.accessPoints}
          floor="4"
          new={props.new}
        />
      )}
    </div>
  );
};

export default FloorFour;
