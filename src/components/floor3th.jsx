import React, { useEffect, useRef } from "react";
import AccessPoint from "./accesspoint";
import "./style/canvas.css";
import accessPointImage from "./style/images/accessPoint.svg";
import TrackedUsers from "./users";

const FloorThree = (props) => {
  const canvas = useRef();
  let ctx = null;
  const offsetX = 0.025 * window.innerWidth;
  const offsetY = 0.01 * window.innerHeight;
  const colorBorder = { color: "black", width: 1 };
  const colorBorderThick = { color: "black", width: 1 };
  const textFont = 0.015 * window.innerWidth + "px Arial";
  const textColor = "#00000F";
  const textAlign = "right";
  const width = window.innerHeight * 0.8;
  const height = window.innerWidth;
  const fracH = height / 34;
  const fracW = width / 17;
  const xOffset = 0.025 * window.innerWidth;
  const henceColor = { color: "blue", width: 1 };
  const doorThickness = 1;
  const boardColor = { backgroundColor: "#C4CACD" };
  const tableColor = { backgroundColor: "#cd8500" };
  const chairColor = { backgroundColor: "#000000" };
  let editMode = props.editMode || false;

  const drawFillRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { backgroundColor = "black" } = style;
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

  const drawLinesInMeters = () => {
    if (editMode) {
      let width = window.innerHeight * 0.8;
      let height = window.innerWidth;
      let fracH = Math.trunc(height / 34);
      let fracW = Math.trunc(width / 17.2);
      ctx.font = "12px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right";
      ctx.fillText("מטר/מטר", 1 * fracH, 0.5 * fracW);
      // horizontal lines
      for (let i = 1; i < 34; ++i) {
        drawLineWithoutOffset({
          x: i * fracH,
          y: 0,
          x1: i * fracH,
          y1: height,
        });

        if (i < 5) {
          ctx.fillText(5 - i + "-", i * fracH - 2, Math.trunc(width * 0.05));
        } else if (i < 30) {
          ctx.fillText(i - 5, i * fracH - 2, Math.trunc(width * 0.05));
        } else {
          ctx.fillText(i - 29 + "+", i * fracH - 2, Math.trunc(width * 0.05));
        }
      }
      // end of horizontal lines

      // vertical lines
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
      // end of vertical lines
    }
  };

  useEffect(() => {
    let offsetX = 4.1 * fracH;
    let offsetY = 0.01 * window.innerHeight;
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
    ctx = canvasEle.getContext("2d");

    let image = new Image();
    image.addEventListener(
      "load",
      function () {
        ctx.drawImage(image, xOffset + 17.5 * fracH, offsetY + 5.5 * fracW);
        ctx.drawImage(image, xOffset + 17.5 * fracH, offsetY + 16 * fracW);
      },
      false
    );
    image.src = accessPointImage;
    ctx.font = textFont;
    ctx.fillStyle = textColor;
    ctx.textAlign = textAlign;
    drawLine(
      { x: 9.5 * fracH, y: 0, x1: 9.5 * fracH, y1: 7.1 * fracW },
      colorBorder
    );
    drawLine(
      { x: 0, y: 7.1 * fracW, x1: 2 * fracH, y1: 7.1 * fracW },
      colorBorder
    );
    drawLine(
      { x: 3.6 * fracH, y: 7.1 * fracW, x1: 9.5 * fracH, y1: 7.1 * fracW },
      colorBorder
    );

    ctx.fillText("כיתה 325", 5 * fracH + offsetX, 3.7 * fracW + offsetY);
    ctx.fillText("כיתה 315", 18 * fracH + offsetX, 3.7 * fracW + offsetY);

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
      { x: 15.5 * fracH, y: 0, x1: 15.5 * fracH, y1: 7.1 * fracW },
      colorBorder
    );
    drawLine(
      { x: 15.5 * fracH, y: 7.1 * fracW, x1: 20 * fracH, y1: 7.1 * fracW },
      colorBorder
    );
    drawLine(
      { x: 21.8 * fracH, y: 7.1 * fracW, x1: 24 * fracH, y1: 7.1 * fracW },
      colorBorder
    );

    drawLine(
      { x: 9.5 * fracH, y: 6 * fracW, x1: 11.5 * fracH, y1: 6 * fracW },
      colorBorder
    );
    drawLine(
      { x: 13.5 * fracH, y: 6 * fracW, x1: 15.5 * fracH, y1: 6 * fracW },
      colorBorder
    );

    // class 302 label label302
    ctx.fillText("כיתה", 12 * fracH + offsetX, 3 * fracW);
    ctx.fillText("302", 12 * fracH + offsetX, 3.7 * fracW);

    // left-down
    drawLine({ x: 0, y: 10.8 * fracW, x1: 0, y1: 17.5 * fracW }, colorBorder);
    drawLine(
      { x: 0, y: 17.4 * fracW, x1: 9.5 * fracH, y1: 17.4 * fracW },
      colorBorder
    );
    drawLine(
      { x: 9.5 * fracH, y: 10.8 * fracW, x1: 9.5 * fracH, y1: 17.5 * fracW },
      colorBorder
    );
    drawLine(
      { x: 1 * fracH, y: 10.8 * fracW, x1: 5 * fracH, y1: 10.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 6.6 * fracH, y: 10.8 * fracW, x1: 9.5 * fracH, y1: 10.8 * fracW },
      colorBorder
    );

    drawLine(
      { x: 9.5 * fracH, y: 16 * fracW, x1: 12 * fracH, y1: 16 * fracW },
      colorBorder
    );
    drawLine(
      { x: 14 * fracH, y: 16 * fracW, x1: 15.5 * fracH, y1: 16 * fracW },
      colorBorder
    );
    drawLine(
      { x: 15.5 * fracH, y: 10.8 * fracW, x1: 15.5 * fracH, y1: 17.5 * fracW },
      colorBorder
    );

    ctx.fillStyle = "#00000F";
    ctx.fillText("מדרגות", 4.3 * fracH, 11.5 * fracW);
    ctx.fillText("עולות", 4.3 * fracH, 12 * fracW);
    ctx.fillText("מדרגות", 2.3 * fracH, 11.5 * fracW);
    ctx.fillText("יורדות", 2.3 * fracH, 12 * fracW);

    ctx.fillText("מדרגות/יציאה", 31.7 * fracH, 10 * fracW);

    // wall class
    drawLine(
      { x: 17.5 * fracH, y: 10.8 * fracW, x1: 22.5 * fracH, y1: 10.8 * fracW },
      colorBorder
    );

    // toilets
    ctx.fillText("שירותי", 27 * fracH, 12 * fracW);
    ctx.fillText("נכים", 27 * fracH, 12.5 * fracW);
    drawLine(
      { x: 23.7 * fracH, y: 10.8 * fracW, x1: 24 * fracH, y1: 10.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 22.5 * fracH, y: 10.8 * fracW, x1: 22.5 * fracH, y1: 11.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 21.5 * fracH, y: 12.8 * fracW, x1: 22.5 * fracH, y1: 12.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 21.5 * fracH, y: 12.8 * fracW, x1: 21.5 * fracH, y1: 16 * fracW },
      colorBorder
    );
    drawLine(
      { x: 20 * fracH, y: 17.5 * fracW, x1: 20 * fracH, y1: 10.8 * fracW },
      colorBorder
    );
    drawLine(
      { x: 20 * fracH, y: 13 * fracW, x1: 21.5 * fracH, y1: 13 * fracW },
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
    drawLine(
      { x: -0.25 * fracH, y: 10.8 * fracW, x1: 0 * fracH, y1: 10.8 * fracW },
      colorBorder
    );

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
      colorBorder
    );

    // right-top side door
    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.arc(28.7 * fracH, 9 * fracW, 1 * fracW, 0, Math.PI / 2, false);
    ctx.stroke();
    drawLine(
      { x: 24 * fracH, y: 8.8 * fracW, x1: 24.4 * fracH, y1: 8.8 * fracW },
      colorBorder
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
      colorBorder
    );

    // right-top
    drawLine({ x: 16.5 * fracH, y: 0, x1: 24 * fracH, y1: 0 }, colorBorder);
    // right-top-down
    drawLine(
      { x: 24 * fracH, y: 0, x1: 24 * fracH, y1: 8.8 * fracW },
      colorBorder
    );

    // right-down
    drawLine(
      { x: 15.5 * fracH, y: 17.4 * fracW, x1: 24 * fracH, y1: 17.4 * fracW },
      colorBorder
    );
    // right-down- to top
    drawLine(
      { x: 24 * fracH, y: 17.4 * fracW, x1: 24 * fracH, y1: 10.8 * fracW },
      colorBorder
    );

    ctx.fillText("שירותי", 25.9 * fracH, 15 * fracW);
    ctx.fillText("גברים", 25.9 * fracH, 15.5 * fracW);

    /// class 315
    for (let j = 0; j < 6; ++j) {
      for (let i = 0; i < 8; ++i) {
        // chairs
        drawFillRect(
          {
            x: (18.2 + j) * fracH + offsetX,
            y: (0.2 + 0.7 * i) * fracW,
            w: 0.3 * fracH,
            h: 0.5 * fracW,
          },
          chairColor
        );
      }
    }

    //class 315 rectangles
    for (let j = 0; j < 6; j++) {
      // tables
      drawFillRect(
        {
          x: (23 - j) * fracH + offsetX,
          y: 0.1 * fracW,
          w: 0.3 * fracH,
          h: 6 * fracW,
        },
        tableColor
      );
    }

    drawFillRect(
      {
        x: 17.4 * fracH + offsetX,
        y: 0.1 * fracW,
        w: 0.3 * fracH,
        h: 4 * fracW,
      },
      tableColor
    );

    drawFillRect(
      { x: 17 * fracH + offsetX, y: 0.6 * fracW, w: 0.3 * fracH, h: 1 * fracW },
      tableColor
    );
    drawFillRect(
      { x: 17 * fracH + offsetX, y: 1.7 * fracW, w: 0.3 * fracH, h: 1 * fracW },
      tableColor
    );
    for (let i = 0; i < 5; ++i) {
      //drawFillRect({ x: (17.5) * fracH + offsetX, y: (0.2 + 0.7 * i) * fracW, w: 0.3 * fracH, h: 0.5 * fracW }, { backgroundColor: '#000000' });
    }
    // 315 board

    drawFillRect(
      {
        x: 15.7 * fracH + offsetX,
        y: 0.4 * fracW,
        w: 0.05 * fracH,
        h: 5 * fracW,
      },
      boardColor
    );

    // end of class 325

    /// class 325
    for (let j = 0; j < 6; ++j) {
      for (let i = 0; i < 8; ++i) {
        // chairs
        drawFillRect(
          {
            x: (0.9 + j) * fracH + offsetX,
            y: (0.2 + 0.7 * i) * fracW,
            w: 0.3 * fracH,
            h: 0.5 * fracW,
          },
          chairColor
        );
      }
    }

    //class 325 rectangles
    for (let j = 0; j < 6; j++) {
      // tables
      drawFillRect(
        {
          x: (1 + j) * fracH + offsetX,
          y: 0.1 * fracW,
          w: 0.3 * fracH,
          h: 6 * fracW,
        },
        tableColor
      );
    }

    drawFillRect(
      { x: 7 * fracH + offsetX, y: 0.1 * fracW, w: 0.3 * fracH, h: 4 * fracW },
      tableColor
    );

    drawFillRect(
      { x: 8 * fracH + offsetX, y: 0.6 * fracW, w: 0.3 * fracH, h: 1 * fracW },
      tableColor
    );
    drawFillRect(
      { x: 8 * fracH + offsetX, y: 1.7 * fracW, w: 0.3 * fracH, h: 1 * fracW },
      tableColor
    );
    for (let i = 0; i < 5; ++i) {
      //drawFillRect({ x: (17.5) * fracH + offsetX, y: (0.2 + 0.7 * i) * fracW, w: 0.3 * fracH, h: 0.5 * fracW }, { backgroundColor: '#000000' });
    }
    // 325 board

    drawFillRect(
      { x: 9 * fracH + offsetX, y: 0.4 * fracW, w: 0.05 * fracH, h: 5 * fracW },
      boardColor
    );

    // end of class 325

    // class 320

    // horizontal doorline doorlinehorizontal
    drawLine(
      { x: 5.7 * fracH, y: 10.8 * fracW, x1: 5.7 * fracH, y1: 11.7 * fracW },
      colorBorderThick
    );
    // vertical doorline doorlinevertical

    drawLine(
      { x: 5 * fracH, y: 10.8 * fracW, x1: 5.7 * fracH, y1: 10.8 * fracW },
      colorBorderThick
    );

    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.arc(10.7 * fracH, 11 * fracW, 1 * fracW, 0, Math.PI / 2, false);
    ctx.stroke();
    drawFillRect(
      {
        x: 9.3 * fracH + offsetX,
        y: 11.5 * fracW,
        w: 0.05 * fracH,
        h: 5 * fracW,
      },
      boardColor
    );

    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.fillText("חדר", 13 * fracH, 15 * fracW);
    ctx.fillText("מחשבים", 13 * fracH, 15.5 * fracW);
    for (let i = 0; i < 4; ++i) {
      drawFillRect(
        {
          x: (1 + i * 1.4) * fracH + offsetX,
          y: 12.2 * fracW,
          w: 0.7 * fracH,
          h: 5 * fracW,
        },
        tableColor
      );
    }
    // end of class 320

    // room 310 room310

    let align = 18 + 5;
    ctx.fillStyle = "#00000F";
    ctx.fillText("310", align * fracH, 14 * fracW);
    ctx.fillText("מעבדת", align * fracH, 14.5 * fracW);
    ctx.fillText("אלקטרו-אופטיקה", align * fracH, 15 * fracW);

    // end room310

    // entrance lobby
    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.arc(18 * fracH, 16.1 * fracW, 1 * fracW, 0, Math.PI / 2, false);
    ctx.stroke();

    // horizontal doorline doorlinehorizontal
    drawLine(
      { x: 13 * fracH, y: 15.8 * fracW, x1: 13 * fracH, y1: 16.8 * fracW },
      colorBorderThick
    );
    // vertical doorline doorlinevertical

    drawLine(
      { x: 12 * fracH, y: 16 * fracW, x1: 13 * fracH, y1: 16 * fracW },
      colorBorderThick
    );
    // end of entrance lobby

    // class 302

    // 302 class door door302
    ctx.beginPath();
    ctx.lineWidth = doorThickness;
    ctx.fillStyle = "#00000F";
    ctx.arc(26.2 * fracH, 6.3 * fracW, 1 * fracW, 0, Math.PI / 2, false);
    ctx.stroke();

    drawLine(
      { x: 22 * fracH, y: 6.2 * fracW, x1: 22 * fracH, y1: 7 * fracW },
      colorBorderThick
    );
    // vertical
    drawLine(
      { x: 20 * fracH, y: 7.1 * fracW, x1: 21.2 * fracH, y1: 7.1 * fracW },
      colorBorderThick
    );

    for (let j = 0; j < 3; ++j) {
      for (let i = 0; i < 3; ++i) {
        // gray
        drawFillRect(
          {
            x: (12.6 + j) * fracH + offsetX,
            y: (0.15 + 0.7 * i) * fracW,
            w: 0.3 * fracH,
            h: 0.5 * fracW,
          },
          { backgroundColor: "black" }
        );
        drawFillRect(
          {
            x: (12.6 + j) * fracH + offsetX,
            y: (3 + 0.7 * i) * fracW,
            w: 0.3 * fracH,
            h: 0.5 * fracW,
          },
          { backgroundColor: "black" }
        );
      }
    }

    // class 302
    for (let j = 0; j < 3; ++j) {
      // orange
      drawFillRect(
        {
          x: (12.2 + j) * fracH + offsetX,
          y: 0.1 * fracW,
          w: 0.6 * fracH,
          h: 2 * fracW,
        },
        tableColor
      );
      drawFillRect(
        {
          x: (12.2 + j) * fracH + offsetX,
          y: 3 * fracW,
          w: 0.6 * fracH,
          h: 2 * fracW,
        },
        tableColor
      );
    }

    // 302 board
    drawFillRect(
      {
        x: 9.65 * fracH + offsetX,
        y: 0.4 * fracW,
        w: 0.05 * fracH,
        h: 5 * fracW,
      },
      boardColor
    );
    // end 302 board

    // stairs - left
    drawLine(
      { x: 0 * fracH, y: 8.2 * fracW, x1: -4.6 * fracH, y1: 8.2 * fracW },
      henceColor
    );
    drawLine(
      { x: -4.6 * fracH, y: 8.2 * fracW, x1: -4.6 * fracH, y1: 10.2 * fracW },
      henceColor
    );

    drawLine(
      { x: 27 * fracH, y: 12.5 * fracW, x1: 27 * fracH, y1: 10.5 * fracW },
      colorBorder
    );
    drawLine(
      { x: 27 * fracH, y: 12.5 * fracW, x1: 25.5 * fracH, y1: 12.5 * fracW },
      colorBorder
    );
    drawLine(
      { x: 25.5 * fracH, y: 12.5 * fracW, x1: 25.5 * fracH, y1: 10.5 * fracW },
      colorBorder
    );
    drawLine(
      { x: 27 * fracH, y: 10.5 * fracW, x1: 26.4 * fracH, y1: 10.5 * fracW },
      colorBorder
    );
    drawLine(
      { x: 25.46 * fracH, y: 10.5 * fracW, x1: 25.8 * fracH, y1: 10.5 * fracW },
      colorBorder
    );

    ctx.fillStyle = "#00000F";
    ctx.fillText("מדרגות", 30.2 * fracH, 11.5 * fracW);
    ctx.fillText("עולות", 30.2 * fracH, 12 * fracW);
    ctx.fillText("מדרגות", 33.3 * fracH, 11.5 * fracW);
    ctx.fillText("יורדות", 33.3 * fracH, 12 * fracW);
    ctx.fillText("מעלית", 31.8 * fracH, 12 * fracW);

    drawLine(
      { x: 26 * fracH, y: 8.2 * fracW, x1: 28.6 * fracH, y1: 8.2 * fracW },
      henceColor
    );
    drawLine(
      { x: 28.6 * fracH, y: 8.2 * fracW, x1: 28.6 * fracH, y1: 10.2 * fracW },
      henceColor
    );
    drawLine(
      { x: 9.5 * fracH, y: 14 * fracW, x1: 12 * fracH, y1: 14 * fracW },
      colorBorder
    );
    drawLine(
      { x: 14 * fracH, y: 14 * fracW, x1: 15.5 * fracH, y1: 14 * fracW },
      colorBorder
    );
  }, []);

  useEffect(drawLinesInMeters);

  return (
    <div>
      <canvas ref={canvas}></canvas>
      {!editMode && <TrackedUsers floor="3" />}
      <AccessPoint />
    </div>
  );
};

export default FloorThree;
