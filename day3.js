const fs = require('fs');

const inputFile = 'input-3.txt';
const input = fs.readFileSync(inputFile, 'utf-8').split(/\r?\n/);

const debugLog = (idx, message, array) => {
  const linesToLog = 10;
  if (idx < linesToLog || idx > array.length - linesToLog) {
    console.log(message);
  }
  if (idx === linesToLog) console.log(`...`);
};

function part1() {
  console.log('===== PART ONE =====');

  let resultArray = [];
  let gammaRateArray = []; // most common bit in each position
  let epsilonRateArray = []; // least common bit in each position

  input.forEach((line, lineIdx) => {
    line.split('').forEach((bit, idx) => {
      if (!resultArray[idx]) {
        resultArray[idx] = 0;
      }
      if (Number(bit) === 1) {
        resultArray[idx]++;
      } else {
        resultArray[idx]--;
      }
    });
    debugLog(lineIdx, `${lineIdx}: ${resultArray}`, input);
  });
  resultArray.forEach((item, idx) => {
    if (item > 0) {
      gammaRateArray[idx] = 1;
      epsilonRateArray[idx] = 0;
    } else {
      gammaRateArray[idx] = 0;
      epsilonRateArray[idx] = 1;
    }
  });
  console.log(`gammaRateArray: ${gammaRateArray.join('')}`);
  const gammaRate = parseInt(gammaRateArray.join(''), 2);
  console.log(`gammaRate: ${gammaRate}`);
  console.log(`epsilonRateArray: ${epsilonRateArray.join('')}`);
  const epsilonRate = parseInt(epsilonRateArray.join(''), 2);
  console.log(`epsilonRate: ${epsilonRate}`);

  const powerConsumption = gammaRate * epsilonRate;
  console.log(`Power consumption: ${powerConsumption}`);
}

function part2() {
  console.log(`\n===== PART TWO =====`);
}

part1();
// part2();
