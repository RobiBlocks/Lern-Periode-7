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
    console.log("Game Loop");

    if (lastKeyPressed == 87) {
      Y -= squareSize;
    } else if (lastKeyPressed == 65) {
      X -= squareSize;
    } else if (lastKeyPressed == 83) {
      Y += squareSize;
    } else if (lastKeyPressed == 68) {
      X += squareSize;
    }
    add(X, Y, "rgb(0, 111, 55)");

    addKeyToList();

    if (Keys[0] == 87) {
      Y2 -= squareSize;
    } else if (Keys[0] == 65) {
      X2 -= squareSize;
    } else if (Keys[0] == 83) {
      Y2 += squareSize;
    } else if (Keys[0] == 68) {
      X2 += squareSize;
    }
    add(X2, Y2, "rgb(255, 255, 255)");

    if (X < -1 || Y < -1 || X > canvas.width - squareSize || Y > canvas.height - squareSize) {
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
  if ((key.keyCode == 87 && lastKeyPressed !== 83) ||
      (key.keyCode == 65 && lastKeyPressed !== 68) ||
      (key.keyCode == 83 && lastKeyPressed !== 87) ||
      (key.keyCode == 68 && lastKeyPressed !== 65)) {
    lastKeyPressed = key.keyCode;
  }
}

//OffsetSnake
Keys[0] = 68;
Keys[1] = 68;
Keys[2] = 68;
Keys[3] = 68;

function addKeyToList() {
  if (Keys.length >= 5) {
    Keys.shift(); // Entferne das älteste Element
  }
  Keys.push(lastKeyPressed); // Füge die aktuelle Taste hinzu
}