import React, { useState, useEffect, useRef } from "react";
import "./style/canvas.css";
import accessPointImage from "./style/images/accessPoint.svg";
import TrackedUsers from "./users";
import User from "./user";
import AccessPoints from "./accesspoints";

const FloorFive = (props) => {
  const canvas = useRef();
  let ctx = null;
  const chairColor = { backgroundColor: "black" };
  const table = { backgroundColor: "#cd8500" };
  const colorBorder = { color: "black", width: 1 };
  const fence = { color: "blue", width: 1 };
  const elavator = { color: "black", width: 1 };
  const dooradditional = { color: "black", width: 1 };
  const font = 0.01 * window.innerWidth + "px Arial";
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
            if (accessPoint.floorLevel == "5") {
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

    for (let i = 0; i < 6; ++i) {
      for (let j = 0; j < 7; j++) {
        drawFillRect(
          {
            x: (0.2 + j * 0.6) * fracH + offsetX,
            y: (i + 1.1) * fracW,
            w: 0.4 * fracH,
            h: 0.5 * fracW,
          },
          chairColor
        );
      }
      for (let j = 0; j < 5; ++j) {
        drawFillRect(
          {
            x: (6 + j * 0.6) * fracH + offsetX,
            y: (i + 0.8) * fracW,
            w: 0.4 * fracH,
            h: 0.5 * fracW,
          },
          chairColor
        );
      }
      drawFillRect(
        {
          x: 0.2 * fracH + offsetX,
          y: (i + 1.3) * fracW,
          w: 4 * fracH,
          h: 0.5 * fracW,
        },
        table
      );
      drawFillRect(
        {
          x: 5.9 * fracH + offsetX,
          y: (i + 1) * fracW,
          w: 3 * fracH,
          h: 0.5 * fracW,
        },
        table
      );
    }

    for (let i = 0; i < 7; ++i) {
      for (let j = 0; j < 6; ++j) {
        drawFillRect(
          {
            x: (9.1 + j * 0.6) * fracH + offsetX,
            y: (i + 0.8) * fracW,
            w: 0.4 * fracH,
            h: 0.5 * fracW,
          },
          chairColor
        );
      }
      for (let j = 0; j < 4; ++j) {
        drawFillRect(
          {
            x: (14.2 + j * 0.6) * fracH + offsetX,
            y: (i + 0.8) * fracW,
            w: 0.4 * fracH,
            h: 0.5 * fracW,
          },
          chairColor
        );
      }
      drawFillRect(
        {
          x: 14 * fracH + offsetX,
          y: (1 + i) * fracW,
          w: 2.5 * fracH,
          h: 0.5 * fracW,
        },
        table
      );
      drawFillRect(
        {
          x: 9.1 * fracH + offsetX,
          y: (1 + i) * fracW,
          w: 3.5 * fracH,
          h: 0.5 * fracW,
        },
        table
      );
    }

    // class 460

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
    ctx.font = font;
    ctx.fillStyle = "#00000F";
    ctx.textAlign = "right";
    ctx.fillText("כיתה 560", 5 * fracH + offsetX, 8 * fracW);

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
    // class 540 near door
    drawLine(
      { x: 8.8 * fracH, y: 8.8 * fracW, x1: 10 * fracH, y1: 8.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 11.6 * fracH, y: 8.8 * fracW, x1: 16.6 * fracH, y1: 8.8 * fracW },
      colorBorder
    );
    ctx.font = font;
    ctx.fillStyle = "#00000F";
    ctx.textAlign = "right";
    ctx.fillText("כיתה 540", 14 * fracH + offsetX, 8 * fracW);

    // down line
    drawLine(
      { x: 0, y: 17.4 * fracW, x1: 15.2 * fracH, y1: 17.4 * fracW },
      colorBorder
    );

    ctx.font = font;
    ctx.fillStyle = "#00000F";
    ctx.textAlign = "right";
    ctx.fillText("מדרגות", 4.3 * fracH, 10.5 * fracW);

    ctx.font = font;
    ctx.fillStyle = "#00000F";
    ctx.textAlign = "right";
    ctx.fillText("מדרגות", 31.3 * fracH, 10.5 * fracW);

    drawLine(
      { x: 16.5 * fracH, y: 8.8 * fracW, x1: 21.5 * fracH, y1: 8.8 * fracW },
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

    // dow line straight
    drawLine(
      { x: 0 * fracH, y: 11 * fracW, x1: 24 * fracH, y1: 11 * fracW },
      colorBorder
    );

    drawLine(
      { x: 0 * fracH, y: 11 * fracW, x1: 0 * fracH, y1: 17.3 * fracW },
      colorBorder
    );
    // left-top side door
    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.arc(
      5.4 * fracH,
      9 * fracW,
      1 * fracW,
      (3 * Math.PI) / 4,
      Math.PI,
      false
    );
    ctx.stroke();
    drawLine({
      x: -0.25 * fracH,
      y: 10.8 * fracW,
      x1: 0 * fracH,
      y1: 10.8 * fracW,
    });

    // left-down side door
    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.arc(
      5.4 * fracH,
      10.5 * fracW,
      1 * fracW,
      (3.5 * Math.PI) / 4,
      (5 * Math.PI) / 4,
      false
    );
    ctx.stroke();
    drawLine(
      { x: -0.25 * fracH, y: 8.8 * fracW, x1: 0 * fracH, y1: 8.8 * fracW },
      dooradditional
    );

    // right-top side door
    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.arc(28.7 * fracH, 9 * fracW, 1 * fracW, 0, Math.PI / 2, false);
    ctx.stroke();
    drawLine(
      { x: 24 * fracH, y: 8.8 * fracW, x1: 24.4 * fracH, y1: 8.8 * fracW },
      dooradditional
    );

    // right-down side door
    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.arc(
      28.7 * fracH,
      11 * fracW,
      1 * fracW,
      (6 * Math.PI) / 4,
      2 * Math.PI,
      false
    );
    ctx.stroke();
    drawLine(
      { x: 24 * fracH, y: 10.8 * fracW, x1: 24.4 * fracH, y1: 10.8 * fracW },
      dooradditional
    );

    ctx.fillText("שמעון מזרחי", 20 * fracH, 14 * fracW);
    ctx.fillText("מעבדות", 10 * fracH, 14 * fracW);
    ctx.fillText("מעבדות", 26 * fracH, 14 * fracW);

    // right-top
    drawLine({ x: 16.5 * fracH, y: 0, x1: 24 * fracH, y1: 0 }, colorBorder);
    // right-top-down
    drawLine(
      { x: 24 * fracH, y: 0, x1: 24 * fracH, y1: 8.8 * fracW },
      colorBorder
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

    // stairs - left
    drawLine(
      { x: 0 * fracH, y: 8.2 * fracW, x1: -4.6 * fracH, y1: 8.2 * fracW },
      fence
    );
    drawLine(
      { x: -4.6 * fracH, y: 8.2 * fracW, x1: -4.6 * fracH, y1: 10.2 * fracW },
      fence
    );

    // elavator
    drawLine(
      { x: 27 * fracH, y: 12.5 * fracW, x1: 27 * fracH, y1: 10.5 * fracW },
      elavator
    );
    drawLine(
      { x: 27 * fracH, y: 12.5 * fracW, x1: 25.5 * fracH, y1: 12.5 * fracW },
      elavator
    );
    drawLine(
      { x: 25.5 * fracH, y: 12.5 * fracW, x1: 25.5 * fracH, y1: 10.5 * fracW },
      elavator
    );
    drawLine(
      { x: 27 * fracH, y: 10.5 * fracW, x1: 26.4 * fracH, y1: 10.5 * fracW },
      elavator
    );
    drawLine(
      { x: 25.46 * fracH, y: 10.5 * fracW, x1: 25.8 * fracH, y1: 10.5 * fracW },
      elavator
    );

    ctx.fillText("מעלית", 31.8 * fracH, 12 * fracW);

    drawLine(
      { x: 24 * fracH, y: 8.2 * fracW, x1: 28.6 * fracH, y1: 8.2 * fracW },
      fence
    );
    drawLine(
      { x: 28.6 * fracH, y: 8.2 * fracW, x1: 28.6 * fracH, y1: 10.2 * fracW },
      fence
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
      {!editMode && <TrackedUsers floor="5" users={props.users} />}
      {editMode && (
        <AccessPoints
          accessPoints={props.accessPoints}
          floor="5"
          new={props.new}
        />
      )}
    </div>
  );
};

export default FloorFive;
