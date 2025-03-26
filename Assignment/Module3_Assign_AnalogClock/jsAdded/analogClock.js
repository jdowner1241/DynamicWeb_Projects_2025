const apiKey = '';

// Select the canvas element and get the 2D rendering context
const canvas = document.getElementById("clockCanvas");
const ctx = canvas.getContext("2d");
const radius = canvas.width / 2; // Half of canvas width
ctx.translate(radius, radius); // Move origin to center

// Function to draw the clock face
function drawClockFace() {
    ctx.beginPath();
    ctx.arc(0, 0, radius - 5, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.stroke();
    
    // Draw center point
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
}

// Function to draw clock numbers
function drawNumbers() {
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let num = 1; num <= 12; num++) {
        let angle = ((num - 3) * Math.PI) / 6; // Adjust angle to align numbers correctly
        let x = (radius - 30) * Math.cos(angle);
        let y = (radius - 30) * Math.sin(angle);
        ctx.fillText(num, x, y);
    }
}

// Function to draw clock hands
function drawHand(length, width, angle, color) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(angle);
    ctx.lineTo(0, -length);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.rotate(-angle);
}

// Function to draw the hands based on current time
function drawClockHands() {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let hourAngle = (Math.PI / 6) * hours + (Math.PI / 360) * minutes;
    let minuteAngle = (Math.PI / 30) * minutes + (Math.PI / 1800) * seconds;
    let secondAngle = (Math.PI / 30) * seconds;

    drawHand(radius * 0.5, 6, hourAngle, "black"); // Hour hand
    drawHand(radius * 0.7, 4, minuteAngle, "black"); // Minute hand
    drawHand(radius * 0.9, 2, secondAngle, "red"); // Second hand
}

// Function to update and redraw the clock
function updateClock() {
    ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
    drawClockFace();
    drawNumbers();
    drawClockHands();
}

// Update the clock every second
setInterval(updateClock, 1000);
setInterval(updateDateTime, 1000);

// Initial draw
updateClock();

// get and update the Date and time
function updateDateTime() {
    let now = new Date();
    let date = now.toDateString();
    let time = now.toLocaleTimeString();
    document.getElementById("date").innerText = date;
    document.getElementById("time").innerText = time;
}