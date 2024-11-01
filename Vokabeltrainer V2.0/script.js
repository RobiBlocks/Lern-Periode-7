let wordsGerman = ["Hund", "Katze", "Löwe", "Vogel", "Tisch"];
let wordsEnglish = ["dog", "cat", "lion", "bird", "table"];
let random;
let h2 = document.getElementById("wordToTranslate");
let input_field = document.getElementById("answer");

window.onload = randomWordGerman();

function checkAnswer() {
  let UserAnswer = input_field.value;
  let RightAnswer = wordsEnglish[random];
  if (UserAnswer == RightAnswer) {
    input_field.style.backgroundColor = "rgb(0, 255, 0)";
  } else if (UserAnswer == "") {
    input_field.style.backgroundColor = "white";
  } else {
    input_field.style.backgroundColor = "red";
  }
}
function randomWordEnglish() {
  random = Math.floor(Math.random() * wordsEnglish.length);
  let randomWordEnglish = wordsEnglish[random];
  h2.innerText = randomWordEnglish;
}
function randomWordGerman() {
  random = Math.floor(Math.random() * wordsGerman.length);
  let randomWordGerman = wordsGerman[random];
  h2.innerText = randomWordGerman;
  input_field.style.backgroundColor = "white";
  input_field.value = null;
}
