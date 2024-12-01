// let canvas = document.getElementById("canvas");
//         let ctx = canvas.getContext("2d");
//         let centerX = canvas.width / 2;
//         let centerY = canvas.height / 2;


//         // Draw a spiral
//         function drawSpiral(cx, cy, turns, maxRadius, color) {
//             ctx.beginPath();
//             ctx.strokeStyle = color;
//             ctx.lineWidth = 2;
//             let angle = 0;
//             for (let r = 0; r <= maxRadius; r += 0.5) {
//                 let x = cx + r * Math.cos(angle);
//                 let y = cy + r * Math.sin(angle);
//                 ctx.lineTo(x, y);
//                 angle += (Math.PI * 2 * turns) / maxRadius;
//             }
//             ctx.stroke();
//             ctx.closePath();
//         }
//         drawSpiral(centerX, centerY, 10, 300, "blue");