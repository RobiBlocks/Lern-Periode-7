// Geht nur in cmd
const filesystem = require("fs");
let numbers;

filesystem.readFile("input.txt", (err, data) => {
  if (err) {
    console.error("Fehler beim Lesen der Datei:", err);
    return;
  }
  numbers = data.toString();

  // Split bei einem oder mehreren Leerzeichen oder einem Zeilenumbruch
  // Gerade Zahlen sind links
  // Ungerade Zahlen sind rechts
  let numbersArray = numbers.split(/[ \n]+/);
  console.log("Extrahierte Zahlen:", numbersArray);

  let evenIndexArray = [];
  let oddIndexArray = [];

  numbersArray.forEach((numbers, index) => {
    if (index % 2 == 0) {
      evenIndexArray.push(Number(numbers));
    } else {
      oddIndexArray.push(Number(numbers));
    }
  });
  console.log("Gerader Index Array:", evenIndexArray);
  console.log("Ungerader Index Array:", oddIndexArray);

  // Umwandlung der Strings in Zahlen und anschliessendes Sortieren
  let sortedEvenIndexArray = evenIndexArray.map(Number).sort((a, b) => a - b);
  console.log("Sortierter gerader Index Array:", sortedEvenIndexArray);

  let sortedOddIndexArray = oddIndexArray.map(Number).sort((a, b) => a - b);
  console.log("Sortierter ungerader Index Array:", sortedOddIndexArray);

  // Berechnung der Differenzen und anschliessende Addierung
  let similarity = 0;

  let times = 0;

  sortedEvenIndexArray.forEach((evenIndexNumber) => {
    sortedOddIndexArray.forEach((oddIndexNumber) => {
      if (evenIndexNumber == oddIndexNumber) {
        times++;
      }
    });
    similarity += evenIndexNumber * times;
    times = 0;
  });
  console.log(similarity);
});
