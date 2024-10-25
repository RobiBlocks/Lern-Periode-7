let wordsGerman = ["Hund", "Katze", "Löwe"];
let wordsEnglish = ["dog", "cat", "lion"];

function testAnswer() {
    let answer = document.getElementById("answer").value;
    document.write(answer);
}
function randomWordEnglish() {
    let random = Math.floor(Math.random() * wordsEnglish.length - 1);
    let randomWordEnglish = wordsEnglish[random];
    document.write(randomWordEnglish);
}