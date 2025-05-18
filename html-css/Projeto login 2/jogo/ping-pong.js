const canvas = document.getElementById("pong-canvas");
const context = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const paddleWidth = 75;
const paddleHeight = 15;
const paddleSpeed = 7;

const ballSize = 10;
const ballSpeed = 4;

let paddleX = (canvasWidth - paddleWidth) / 2;
let ballX = canvasWidth / 2;
let ballY = canvasHeight / 2;
let ballDx = ballSpeed;
let ballDy = ballSpeed;

let rightPressed = false;
let leftPressed = false;

function drawPaddle(x, y) {
  context.fillStyle = "white";
  context.fillRect(x, y, paddleWidth, paddleHeight);
}

function drawBall(x, y) {
  context.beginPath();
  context.arc(x, y, ballSize, 0, Math.PI * 2, false);
  context.fillStyle = "white";
  context.fill();
}

function update() {
  if (rightPressed && paddleX < canvasWidth - paddleWidth) {
    paddleX += paddleSpeed;
  }

  if (leftPressed && paddleX > 0) {
    paddleX -= paddleSpeed;
  }

  ballX += ballDx;
  ballY += ballDy;

  if (ballX + ballSize > canvasWidth) {
    ballDx = -ballSpeed;
  }

  if (ballX - ballSize < 0) {
    ballDx = ballSpeed;
  }

  if (ballY + ballSize > canvasHeight) {
    ballDy = -ballSpeed;
  }

  if (ballY - ballSize < 0) {
    ballDy = ballSpeed;
  }

  if (
    ballX > paddleX &&
    ballX < paddleX + paddleWidth &&
    ballY + ballSize > canvasHeight - paddleHeight &&
    ballY - ballSize < canvasHeight
  ) {
    ballDy = -ballSpeed;
  }
}

function draw() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  drawPaddle(paddleX, canvasHeight - paddleHeight);
  drawBall(ballX, ballY);
}

function updateAndDraw() {
  update();
  draw();
  requestAnimationFrame(updateAndDraw);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = true;
  } else if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = false;
  } else if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = false;
  }
});

updateAndDraw();