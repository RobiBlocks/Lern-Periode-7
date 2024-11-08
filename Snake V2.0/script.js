//Variablen
let canvas = document.querySelector("Canvas");
let c = canvas.getContext("2d");

let squareSize = 26;
let BoardSizeInSquares = 20;
canvas.width = BoardSizeInSquares * squareSize;
canvas.height = BoardSizeInSquares * squareSize;

let X = squareSize * 6;
let Y = squareSize * 3;
let X2 = X - 4 * squareSize;
let Y2 = Y;

let wPressed;
let aPressed;
let sPressed;
let dPressed;
let lastKeyPressed = 68;

Keys = [];
Keys[0] = 68;
Keys[1] = 68;
Keys[2] = 68;
Keys[3] = 68;
Keys[4] = 68;

let snakeAlive = true;

//Home
window.onload = function () {
  drawSnake();
  spawnFruit();
  document.body.addEventListener("keydown", keyDown);
  gameLoop();
};

let lastExecutionTime = 0;
const interval = 300; // 0.3 Sekunden

function gameLoop(timestamp) {
  if (timestamp - lastExecutionTime >= interval) {
    console.log("Hello");

    if (lastKeyPressed == 87) {
      Y -= squareSize;
      console.log("X:" + X);
      console.log("Y:" + Y);
      add(X, Y, "rgb(0, 111, 55)");
      offsetSnake();
    } else if (lastKeyPressed == 65) {
      X -= squareSize;
      console.log("X:" + X);
      console.log("Y:" + Y);
      add(X, Y, "rgb(0, 111, 55)");
      offsetSnake();
    } else if (lastKeyPressed == 83) {
      Y += squareSize;
      console.log("X:" + X);
      console.log("Y:" + Y);
      add(X, Y, "rgb(0, 111, 55)");
      offsetSnake();
    } else if (lastKeyPressed == 68) {
      X += squareSize;
      console.log("X:" + X);
      console.log("Y:" + Y);
      add(X, Y, "rgb(0, 111, 55)");
      offsetSnake();
    }
    if (X == 0 || Y == 0) {
      snakeAlive = false;
      console.log("Snake died");
      document.body.removeEventListener("keydown", keyDown);
    } 
    lastExecutionTime = timestamp;
  }
  if (snakeAlive) {
    requestAnimationFrame(gameLoop);
}
}

//Frucht
function spawnFruit() {
  let randomX = Math.floor(Math.random() * BoardSizeInSquares) * squareSize;
  let randomY = Math.floor(Math.random() * BoardSizeInSquares) * squareSize;
  add(randomX, randomY, "red");
}

//Snake
function drawSnake() {
  add(X - 3 * squareSize, Y, "rgb(0, 111, 55)");
  add(X - 2 * squareSize, Y, "rgb(0, 111, 55)");
  add(X - squareSize, Y, "rgb(0, 111, 55)");
  add(X, Y, "rgb(0, 111, 55)");
}
function drawHead() {
  add(X, Y, "rgb(0, 111, 55)");
}
function add(x, y, color) {
  c.fillStyle = color;
  c.fillRect(x, y, squareSize - 1, squareSize - 1);
}

//Snake Bewegen
function keyDown(key) {
  console.log("Key Down");
  if (key.keyCode == 87) {
    wPressed = true;
    lastKeyPressed = 87;
    addKeyToList();
    Y -= squareSize;
    console.log("X:" + X);
    console.log("Y:" + Y);
    drawHead();
    offsetSnake();
    console.log("Key: w");
  } else if (key.keyCode == 65) {
    aPressed = true;
    lastKeyPressed = 65;
    addKeyToList();
    X -= squareSize;
    console.log("X:" + X);
    console.log("Y:" + Y);
    drawHead();
    offsetSnake();
    console.log("Key: a");
  } else if (key.keyCode == 83) {
    sPressed = true;
    lastKeyPressed = 83;
    addKeyToList();
    Y += squareSize;
    console.log("X:" + X);
    console.log("Y:" + Y);
    drawHead();
    offsetSnake();
    console.log("Key: s");
  } else if (key.keyCode == 68) {
    dPressed = true;
    lastKeyPressed = 68;
    addKeyToList();
    X += squareSize;
    console.log("X:" + X);
    console.log("Y:" + Y);
    drawHead();
    offsetSnake();
    console.log("Key: d");
  }
}

//OffsetSnake
function addKeyToList() {
  Keys[0] = Keys[1];
  Keys[1] = Keys[2];
  Keys[2] = Keys[3];
  Keys[3] = Keys[4];
  Keys[4] = lastKeyPressed;
}

function offsetSnake() {
  if (Keys[0] == 87) {
    Y2 -= squareSize;
    add(X2, Y2, "rgb(0, 0, 255)");
  } else if (Keys[0] == 65) {
    X2 -= squareSize;
    add(X2, Y2, "rgb(0, 0, 255)");
  } else if (Keys[0] == 83) {
    Y2 += squareSize;
    add(X2, Y2, "rgb(0, 0, 255)");
  } else if (Keys[0] == 68) {
    X2 += squareSize;
    add(X2, Y2, "rgb(0, 0, 255)");
  }
}
