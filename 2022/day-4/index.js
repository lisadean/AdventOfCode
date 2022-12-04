import { readFile } from 'fs/promises';
// const inputFile = 'sample.txt'; // part 1 = 2, part 2 = 4
const inputFile = 'input.txt'; // part 1 = 524, part 2 = 798

const input = (await readFile(inputFile, { encoding: 'utf8' }))
  .split('\n')
  .map((x) => x.split(','));
const calculateElfRanges = (pair) => {
  const getRange = (idx) => pair[idx].split('-').map((x) => Number(x));
  return {
    first: getRange(0),
    second: getRange(1),
  };
};

const part1 = async () => {
  console.log(
    input.reduce((containingPairs, pair) => {
      const { first, second } = calculateElfRanges(pair);
      if (first[0] <= second[0] && first[1] >= second[1]) {
        // First contains second
        return containingPairs + 1;
      } else if (second[0] <= first[0] && second[1] >= first[1]) {
        // Second contains first
        return containingPairs + 1;
      }
      return containingPairs;
    }, 0)
  );
};

const part2 = async () => {
  console.log(
    input.reduce((containingPairs, pair) => {
      const { first, second } = calculateElfRanges(pair);
      if (first[0] <= second[0] && first[1] >= second[0]) {
        return containingPairs + 1;
      } else if (second[0] <= first[0] && second[1] >= first[0]) {
        return containingPairs + 1;
      }
      return containingPairs;
    }, 0)
  );
};
part1();
part2();
