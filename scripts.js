const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let pacman = { x: 50, y: 200, size: 30, direction: 1 };
let ghost = { x: 350, y: 200, size: 30 };
let dots = [{ x: 100, y: 200 }, { x: 150, y: 200 }, { x: 200, y: 200 }];

function drawPacman() {
    ctx.beginPath();
    ctx.arc(pacman.x, pacman.y, pacman.size, 0.2 * Math.PI, 1.8 * Math.PI, false);
    ctx.lineTo(pacman.x, pacman.y);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}

function drawGhost() {
    ctx.beginPath();
    ctx.arc(ghost.x, ghost.y, ghost.size, 0, 2 * Math.PI, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawDots() {
    ctx.fillStyle = "white";
    dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 5, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
    });
}

function updateGame() {
    pacman.x += pacman.direction;
    if (pacman.x > canvas.width) {
        pacman.x = 0;
    }
    if (pacman.x < 0) {
        pacman.x = canvas.width;
    }
    if (pacman.x === ghost.x && pacman.y === ghost.y) {
        alert("¡Pac-Man te comio asi bien loco!");
        pacman.x = 50;
    }
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPacman();
    drawGhost();
    drawDots();
}

function gameLoop() {
    updateGame();
    drawGame();
    requestAnimationFrame(gameLoop);
}

gameLoop();
