import { readFile } from 'fs/promises';

export const getInput = async (type) => {
  const inputFile = type === 0 ? 'sample.txt' : 'input.txt';
  const arr = (await readFile(inputFile, { encoding: 'utf8' }))
    .split('\n')
    .map((x) => x.split(''));
  return arr.length > 1
    ? arr
    : (await readFile(inputFile, { encoding: 'utf8' })).split('');
};

const findMarker = (input, markerLength) => {
  const findMarkerIndex = (datastream) => {
    for (let i = 0; i < datastream.length; i++) {
      const possibleMarker = datastream.slice(i, i + markerLength);
      if (new Set(possibleMarker).size === possibleMarker.length)
        return console.log(i + markerLength);
    }
  };
  if (input[0].length > 1) {
    input.forEach((line) => findMarkerIndex(line));
  } else {
    findMarkerIndex(input);
  }
};

const type = 0; // 0 = sample, 1 = real, anything else = real with logging
const input = await getInput(type);
findMarker(input, 4); // part 1
findMarker(input, 14); // part 2

// Sample results: [7, 5, 6, 10, 11], [19, 23, 23, 29, 26]
// Real results: 1655, 2665
