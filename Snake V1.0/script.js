var canvas = document.querySelector("Canvas");
let squareSize = 26;
let BoardSizeInSquares = 20;
canvas.width = BoardSizeInSquares * squareSize;
canvas.height = BoardSizeInSquares * squareSize;
let StartX = squareSize * 6;
let StartY = squareSize * 3;
let direction = "east";

var c = canvas.getContext("2d");

window.onload = function () {
  drawSnake();
  snakeGo();
  spawnFruit();
};

//Frucht
function spawnFruit() {
  let randomX = Math.floor(Math.random() * BoardSizeInSquares) * squareSize;
  let randomY = Math.floor(Math.random() * BoardSizeInSquares) * squareSize;
  add(randomX, randomY, "red");
}

//Snake
function snakeGo() {}
function snakeGoEast() {}

function snakeGoSouth() {
  add(180, y + squareSize, "rgb(0, 111, 55)");
}
function drawSnake() {
  add(StartX - 3 * squareSize, StartY, "rgb(0, 111, 55)");
  add(StartX - 2 * squareSize, StartY, "rgb(0, 111, 55)");
  add(StartX - squareSize, StartY, "rgb(0, 111, 55)");
  add(StartX, StartY, "rgb(0, 111, 55)");
}
function add(x, y, color) {
  c.fillStyle = color;
  c.fillRect(x, y, squareSize - 1, squareSize - 1);
}
