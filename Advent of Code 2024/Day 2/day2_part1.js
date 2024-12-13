const filesystem = require("fs");
let reports;
let numbers;

filesystem.readFile("input.txt", (err, data) => {
  if (err) {
    console.error("Fehler beim Lesen der Datei:", err);
    return;
  }
  reports = data.toString();
  reportsArray = reports.split(/\r\n/);
  console.log("Extrahierte Zahlen:", reportsArray);

  reportsArray.forEach((report) => {
    numbers = report.split(/\s/);

    let steigend = true;
    let sinkend = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] >= array[i + 1]) {
        steigend = false;
      }
      if (array[i] <= array[i + 1]) {
        sinkend = false;
      }
    }
    
    if (steigend) {
    } else if (sinkend) {
    } else {
    }
    console.log(numbers);
  });
});
