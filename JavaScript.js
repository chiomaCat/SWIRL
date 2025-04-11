const canvas = document.getElemenntById("drawingCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;
let startX, startY;
canvas.addEventListener("mousedown",(e) =>{
    drawing=true;
    startX = e.offsetX;
    startY = e.offsetY;
});
canvas.addEventListener("mouseup",() =>{
    drawing= false;
});
canvas.addEventListener("mousemove",(e)=>{
    if(!drawing) return;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = "orange";
    ctx.linewidth=3;
    ctx.stroke();
    startX= e.offsetX;
    startY= e.offsetY;
});