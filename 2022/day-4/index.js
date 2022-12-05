import { go } from '../utils.js';

const calculateElfRanges = (pair) => {
  const getRange = (idx) => pair[idx].split('-').map((x) => Number(x));
  return {
    first: getRange(0),
    second: getRange(1),
  };
};

const part1Reducer = (containingPairs, pair) => {
  const { first, second } = calculateElfRanges(pair);
  if (first[0] <= second[0] && first[1] >= second[1]) {
    // First contains second
    return containingPairs + 1;
  } else if (second[0] <= first[0] && second[1] >= first[1]) {
    // Second contains first
    return containingPairs + 1;
  }
  return containingPairs;
};

const part2Reducer = (containingPairs, pair) => {
  const { first, second } = calculateElfRanges(pair);
  if (first[0] <= second[0] && first[1] >= second[0]) {
    return containingPairs + 1;
  } else if (second[0] <= first[0] && second[1] >= first[0]) {
    return containingPairs + 1;
  }
  if (inputType !== 1) console.log();
  return containingPairs;
};

const inputType = 11;
go({
  inputType, // 0 = sample, 1 = real, anything else = real with logging
  inputMap: (x) => x.split(','), // extra map after splitting input into array
  part1Reducer,
  part1InitialValue: 0,
  part2Reducer,
  part2InitialValue: 0,
});
// Sample results: 2, 4
// Real results: 524, 798
