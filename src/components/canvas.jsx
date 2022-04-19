import React, { useState, useEffect, useRef } from "react";
import './style/canvas.css';

const Canvas = () => {
    const canvas = useRef();
    let ctx = null;

    const drawFillRect = (info, style = {}) => {
      const { x, y, w, h } = info;
      const { backgroundColor = 'black' } = style;
      let offsetX = 0.025 * window.innerWidth;
      let offsetY = 0.01 * window.innerHeight;
      ctx.beginPath();
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(x + offsetX, y + offsetY, w, h);
    }



    const drawLine = (info, style = {}) => {
        const { x, y, x1, y1 } = info;
        const { color = 'black', width = 1 } = style;
        let offsetX = 0.025 * window.innerWidth;
        let offsetY = 0.01 * window.innerHeight;
        ctx.beginPath();
        ctx.moveTo(x + offsetX, y + offsetY);
        ctx.lineTo(x1 + offsetX, y1 + offsetY);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
      }
    

    useEffect(() => {
        // dynamically assign the width and height to canvas
        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
     
        // get context of the canvas
        ctx = canvasEle.getContext("2d");

        
        let width = window.innerHeight * 0.8;
      let height = window.innerWidth * 0.9;
      let fracH = Math.trunc(height / 24);
      let fracW = Math.trunc(width / 17);
      const r1Info = { x: 5 * fracH, y: 1 * fracW, w: 0.5 * fracH, h: 6 * fracW };
      drawFillRect(r1Info, { backgroundColor: '#cd8500' });
      const r2Info = { x: 6 * fracH, y: 1 * fracW, w: 0.5 * fracH, h: 6 * fracW };
      drawFillRect(r2Info, { backgroundColor: '#cd8500' });
      const r3Info = { x: 7 * fracH, y: 1 * fracW, w: 0.5 * fracH, h: 6 * fracW };
      drawFillRect(r3Info, { backgroundColor: '#cd8500' });
      const r4Info = { x: 4 * fracH, y: 1 * fracW, w: 0.5 * fracH, h: 6 * fracW };
      drawFillRect(r4Info, { backgroundColor: '#cd8500' });
      const rr1Info = { x: 3 * fracH, y: 1 * fracW, w: 0.5 * fracH, h: 6 * fracW };
      drawFillRect(rr1Info, { backgroundColor: '#cd8500' });
      const rr2Info = { x: 2 * fracH, y: 1 * fracW, w: 0.5 * fracH, h: 6 * fracW };
      drawFillRect(rr2Info, { backgroundColor: '#cd8500' });

      const r5Info = { x: 10 * fracH, y: 1 * fracW, w: 0.5 * fracH, h: 6 * fracW };
      drawFillRect(r5Info, { backgroundColor: '#cd8500' });
      const r6Info = { x: 11 * fracH, y: 1 * fracW, w: 0.5 * fracH, h: 6 * fracW };
      drawFillRect(r6Info, { backgroundColor: '#cd8500' });
      const r7Info = { x: 12 * fracH, y: 1 * fracW, w: 0.5 * fracH, h: 6 * fracW };
      drawFillRect(r7Info, { backgroundColor: '#cd8500' });
      const r8Info = { x: 13 * fracH, y: 1 * fracW, w: 0.5 * fracH, h: 6 * fracW };
      drawFillRect(r8Info, { backgroundColor: '#cd8500' });
      const r9Info = { x: 14 * fracH, y: 1 * fracW, w: 0.5 * fracH, h: 6 * fracW };
      drawFillRect(r9Info, { backgroundColor: '#cd8500' });
      const r10Info = { x: 15 * fracH, y: 1 * fracW, w: 0.5 * fracH, h: 6 * fracW };
      drawFillRect(r10Info, { backgroundColor: '#cd8500' });

      const r11Info = { x: 2 * fracH, y: 11.5 * fracW, w: 0.5 * fracH, h: 5 * fracW };
      drawFillRect(r11Info, { backgroundColor: '#cd8500' });
      const r12Info = { x: 3 * fracH, y: 11.5 * fracW, w: 0.5 * fracH, h: 5 * fracW };
      drawFillRect(r12Info, { backgroundColor: '#cd8500' });
      const r13Info = { x: 4 * fracH, y: 11.5 * fracW, w: 0.5 * fracH, h: 5 * fracW };
      drawFillRect(r13Info, { backgroundColor: '#cd8500' });
      const r14Info = { x: 5 * fracH, y: 11.5 * fracW, w: 0.5 * fracH, h: 5 * fracW };
      drawFillRect(r14Info, { backgroundColor: '#cd8500' });
      const r15Info = { x: 6 * fracH, y: 11.5 * fracW, w: 0.5 * fracH, h: 5 * fracW };
      drawFillRect(r15Info, { backgroundColor: '#cd8500' });
      const rr3Info = { x: 7 * fracH, y: 11.5 * fracW, w: 0.5 * fracH, h: 5 * fracW };
      drawFillRect(rr3Info, { backgroundColor: '#cd8500' });

      const r16Info = { x: 10 * fracH, y: 11.5 * fracW, w: 0.5 * fracH, h: 5 * fracW };
      drawFillRect(r16Info, { backgroundColor: '#cd8500' });
      const r17Info = { x: 11 * fracH, y: 11.5 * fracW, w: 0.5 * fracH, h: 5 * fracW };
      drawFillRect(r17Info, { backgroundColor: '#cd8500' });
      const r18Info = { x: 12 * fracH, y: 11.5 * fracW, w: 0.5 * fracH, h: 5 * fracW };
      drawFillRect(r18Info, { backgroundColor: '#cd8500' });
      const r19Info = { x: 13 * fracH, y: 11.5 * fracW, w: 0.5 * fracH, h: 5 * fracW };
      drawFillRect(r19Info, { backgroundColor: '#cd8500' });
      const r20Info = { x: 14 * fracH, y: 11.5 * fracW, w: 0.5 * fracH, h: 5 * fracW };
      drawFillRect(r20Info, { backgroundColor: '#cd8500' });
      let colorBorder = {color: 'black', width: 5};
      drawLine({x: 8.8 * fracH, y: 0, x1: 8.8 * fracH, y1: 8.8 * fracW }, colorBorder)
      drawLine({x: 0, y: 8.8 * fracW, x1: 8.8 * fracH, y1: 8.8 * fracW }, colorBorder)
      ctx.font = "22px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right";      
      ctx.fillText("כיתה 460", 5 * fracH - 2, 5 * fracW);

      drawLine({x: 0 * fracH, y: 1 * fracW, x1: 0, y1: 8.8 * fracW }, colorBorder)
      drawLine({x: 0.5 * fracH, y: 0, x1: 16.5 * fracH, y1: 0 }, colorBorder)
      drawLine({x: 0 * fracH, y: 1 * fracW, x1: 0, y1: 8.8 * fracW }, colorBorder)
      drawLine({x: 0.5 * fracH, y: 0, x1: 0.5 * fracH, y1: 1 * fracW }, colorBorder)
      drawLine({x: 0.5 * fracH, y: 1 * fracW, x1: 0, y1: 1 * fracW }, colorBorder)
      drawLine({x: 16.5 * fracH, y: 0, x1: 16.5 * fracH, y1: 8.8 * fracW }, colorBorder)
      drawLine({x: 8.8 * fracH, y: 8.8 * fracW, x1: 16.5 * fracH, y1: 8.8 * fracW }, colorBorder)
      ctx.font = "22px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right";      
      ctx.fillText("כיתה 440", 14 * fracH - 2, 5 * fracW);

      drawLine({x: 0, y: 10.8 * fracW, x1: 0, y1: 17.5 * fracW }, colorBorder)
      drawLine({x: 0, y: 17.4 * fracW, x1: 8.7 * fracH, y1: 17.4 * fracW }, colorBorder)
      drawLine({x: 8.7 * fracH, y: 10.8 * fracW, x1: 8.7 * fracH, y1: 17.5 * fracW }, colorBorder)
      drawLine({x: 0, y: 10.8 * fracW, x1: 8.7 * fracH, y1: 10.8 * fracW }, colorBorder)
      ctx.font = "22px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right"; 
      ctx.fillText("כיתה 470", 5 * fracH - 2, 15 * fracW);

      
      drawLine({x: 0, y: 17.4 * fracW, x1: 15.2 * fracH, y1: 17.4 * fracW }, colorBorder)
      
      drawLine({x: 15.2 * fracH, y: 10.8 * fracW, x1: 15.2 * fracH, y1: 17.5 * fracW }, colorBorder)
      drawLine({x: 0, y: 10.8 * fracW, x1: 15.2 * fracH, y1: 10.8 * fracW }, colorBorder)
      ctx.font = "22px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right"; 
      ctx.fillText("כיתה 450", 13 * fracH - 2, 15 * fracW);

      ctx.font = "22px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right"; 
      ctx.fillText("מדרגות", 1.3 * fracH, 10.8 * fracW);

      ctx.font = "22px Arial";
      ctx.fillStyle = "#00000F";
      ctx.textAlign = "right"; 
      ctx.fillText("מדרגות", 25.3 * fracH, 10.8 * fracW);

      drawLine({x: 16.5 * fracH, y: 8.8 * fracW, x1: 21.5 * fracH, y1: 8.8 * fracW }, colorBorder)
      drawLine({x: 21.5 * fracH, y: 8.8 * fracW, x1: 21.5 * fracH, y1: 5 * fracW }, colorBorder)
      drawLine({x: 21.5 * fracH, y: 4 * fracW, x1: 21.5 * fracH, y1: 2.5 * fracW }, colorBorder)
      drawLine({x: 21.5 * fracH, y: 2.5 * fracW, x1: 22.5 * fracH, y1: 2.5 * fracW }, colorBorder)
      drawLine({x: 22.5 * fracH, y: 2.5 * fracW, x1: 22.5 * fracH, y1: 8.8 * fracW }, colorBorder) 
      drawLine({x: 22.5 * fracH, y: 8.8 * fracW, x1: 24 * fracH, y1: 8.8 * fracW }, colorBorder)   
      drawLine({x: 15.2 * fracH, y: 10.8 * fracW, x1: 16.5 * fracH, y1: 10.8 * fracW }, colorBorder)
      drawLine({x: 16.5 * fracH, y: 10.8 * fracW, x1: 16.5 * fracH, y1: 16.5 * fracW }, colorBorder)
      drawLine({x: 18 * fracH, y: 16.5 * fracW, x1: 16.5 * fracH, y1: 16.5 * fracW }, colorBorder)
      drawLine({x: 18 * fracH, y: 10.8 * fracW, x1: 18 * fracH, y1: 16.5 * fracW }, colorBorder)
      drawLine({x: 17.5 * fracH, y: 10.8 * fracW, x1: 24 * fracH, y1: 10.8 * fracW }, colorBorder)
      
      
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.fillStyle = "#00000F";
      ctx.arc(1 * fracH, 9 * fracW, 1 * fracW, 3 * Math.PI/4, Math.PI, false);
      ctx.stroke();
      drawLine({x: -0.25 * fracH, y: 8.8 * fracW, x1: 0 * fracH, y1: 8.8 * fracW }, {color: 'black', width: 2})
      
      
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.fillStyle = "#00000F";
      ctx.arc((24 + 0.5) * fracH, 9 * fracW, 1 * fracW, 0, Math.PI / 2, false);
      ctx.stroke();
      drawLine({x: 24 * fracH, y: 8.8 * fracW, x1: 24.4 * fracH, y1: 8.8 * fracW }, {color: 'black', width: 2})
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.fillStyle = "#00000F";
      ctx.arc((24 + 0.5) * fracH, 11 * fracW, 1 * fracW,  6 * Math.PI / 4,  2 * Math.PI, false);
      ctx.stroke();
      drawLine({x: 24 * fracH, y: 10.8 * fracW, x1: 24.4 * fracH, y1: 10.8 * fracW }, {color: 'black', width: 2})
    }, []);

      useEffect(() => {
        let width = window.innerHeight * 0.8;
        let height = window.innerWidth * 0.9;
        let fracH = Math.trunc(height / 21);
        let fracW = Math.trunc(width / 17);
        
      })
  
     
      useEffect(() => {
        let width = window.innerHeight * 0.8;
        let height = window.innerWidth * 0.9;
        let fracH = Math.trunc(height / 24);

          for (let i = 1; i < 24; ++i){
            drawLine({ x: i * fracH, y: 0, x1: i * fracH, y1: height });
            ctx.font = "12px Arial";
             
            ctx.textAlign = "right";      
            ctx.fillText(i, i * fracH - 2,Math.trunc(width * 0.05));
          }
        let fracW = Math.trunc(width / 17);
        
        for (let i = 1; i < 18; ++i){
            drawLine({ x: 0, y: i * fracW, x1: height, y1: i * fracW });
            ctx.textAlign = "left";
ctx.fillText(i, 0, i * fracW - 2);
          }
      }, []);

    return (
        <div>
            <canvas ref={canvas}></canvas>
        </div>
    );
}

export default Canvas;