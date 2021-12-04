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

  const findRating = (array, bitCriteria, index = 0) => {
    let zeroArray = [],
      oneArray = [],
      result = [],
      least = bitCriteria === 'least';
    array.forEach((item) => {
      if (item[index] === '0') {
        zeroArray.push(item);
      } else {
        oneArray.push(item);
      }
    });
    if (zeroArray.length === oneArray.length) {
      result = least ? zeroArray : oneArray;
    } else if (zeroArray.length < oneArray.length) {
      result = least ? zeroArray : oneArray;
    } else {
      result = least ? oneArray : zeroArray;
    }
    if (result.length !== 1) {
      index++;
      return findRating(result, bitCriteria, index);
    }
    return result;
  };

  const oRatingArray = findRating(input, 'most');
  console.log(`oRatingArray: ${oRatingArray}`);
  const cO2ScrubberRatingArray = findRating(input, 'least');
  console.log(`cO2ScrubberRatingArray: ${cO2ScrubberRatingArray}`);

  const oxygenGeneratorRating = parseInt(oRatingArray[0], 2);
  console.log(`Oxygen generator rating: ${oxygenGeneratorRating}`);
  const cO2ScrubberRating = parseInt(cO2ScrubberRatingArray[0], 2);
  console.log(`cO2 scrubber rating: ${cO2ScrubberRating}`);
  const lifeSupportRating = oxygenGeneratorRating * cO2ScrubberRating;
  console.log(`Life support rating: ${lifeSupportRating}`);
}

part1();
part2();
