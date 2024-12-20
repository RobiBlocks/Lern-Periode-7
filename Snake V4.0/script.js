//Variablen
let section = document.getElementById("section");

let highscoreLabel = document.createElement("p");
section.appendChild(highscoreLabel);

let highscore = 0;

let highscoreLabelBold = document.createElement("strong");
highscoreLabel.appendChild(highscoreLabelBold);
highscoreLabelBold.textContent = "Highscore: ";

let highscoreValueText = document.createTextNode(highscore);
highscoreLabel.appendChild(highscoreValueText);

let canvas = document.createElement("Canvas");
section.appendChild(canvas);
let c = canvas.getContext("2d");

let squareSize = 30;
let BoardSizeInSquares = 17;
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
const interval = 400;

function gameLoop(timestamp) {
  if (timestamp - lastExecutionTime >= interval) {
    console.log("Gameloop gestartet");

    if (lastKeyPressed == 87) {
      Y -= squareSize;
    } else if (lastKeyPressed == 65) {
      X -= squareSize;
    } else if (lastKeyPressed == 83) {
      Y += squareSize;
    } else if (lastKeyPressed == 68) {
      X += squareSize;
    }
    add(X, Y, "rgb(255, 255, 255)");

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
    add(X2, Y2, "rgb(0, 0, 0)");

    if (X == randomX && Y == randomY) {
      spawnFruit();
      increaseHigscore();
      console.log("Fruit Collected");
    }

    if (
      X < -1 ||
      Y < -1 ||
      X > canvas.width - squareSize ||
      Y > canvas.height - squareSize
    ) {
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
let randomX = 0;
let randomY = 0;
let snakeLenght = 5;

function spawnFruit() {
  randomX = Math.floor(Math.random() * BoardSizeInSquares) * squareSize;
  randomY = Math.floor(Math.random() * BoardSizeInSquares) * squareSize;
  add(randomX, randomY, "red");
}
function increaseHigscore() {
  highscore++;
  highscoreValueText.nodeValue = highscore;
  Keys[0] = 0;
  snakeLenght++;
}

//Snake
function drawSnake() {
  add(X - 3 * squareSize, Y, "rgb(255, 255, 255)");
  add(X - 2 * squareSize, Y, "rgb(255, 255, 255)");
  add(X - squareSize, Y, "rgb(255, 255, 255)");
  add(X, Y, "rgb(255, 255, 255)");
}
function drawHead() {
  add(X, Y, "rgb(0, 111, 55)");
}
function add(x, y, color) {
  c.fillStyle = color;
  c.fillRect(x, y, squareSize - 4, squareSize - 4);
}
function keyDown(key) {
  console.log("Key Down");
  if (
    (key.keyCode == 87 && lastKeyPressed !== 83) ||
    (key.keyCode == 65 && lastKeyPressed !== 68) ||
    (key.keyCode == 83 && lastKeyPressed !== 87) ||
    (key.keyCode == 68 && lastKeyPressed !== 65)
  ) {
    lastKeyPressed = key.keyCode;
  }
}

//OffsetSnake
Keys[0] = 68;
Keys[1] = 68;
Keys[2] = 68;
Keys[3] = 68;

function addKeyToList() {
  if (Keys.length >= snakeLenght) {
    Keys.shift();
  }
  Keys.push(lastKeyPressed);
}
