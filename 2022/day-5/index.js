import { readFile } from 'fs/promises';

const realArray = [
  ['H', 'B', 'V', 'W', 'N', 'M', 'L', 'P'],
  ['M', 'Q', 'H'],
  ['N', 'D', 'B', 'G', 'F', 'Q', 'M', 'L'],
  ['Z', 'T', 'F', 'Q', 'M', 'W', 'G'],
  ['M', 'T', 'H', 'P'],
  ['C', 'B', 'M', 'J', 'D', 'H', 'G', 'T'],
  ['M', 'N', 'B', 'F', 'V', 'R'],
  ['P', 'L', 'H', 'M', 'R', 'G', 'S'],
  ['P', 'D', 'B', 'C', 'N'],
];
const sampleArray = [['Z', 'N'], ['M', 'C', 'D'], ['P']];

export const getInput = async (type) => {
  const inputFile = type === 0 ? 'sample.txt' : 'input.txt';
  return (await readFile(inputFile, { encoding: 'utf8' }))
    .split('\n')
    .filter((x) => x.split('')[0] === 'm')
    .map((x) => x.split(' ').filter((x) => /^[0-98]+$/.test(x)));
};

const printArray = (arr) => arr.forEach((x) => console.log(x));

const doTheThing1 = (input, arr) => {
  const log = type !== 1;
  input.forEach((instruction) => {
    const [qty, from, to] = instruction;
    for (let i = 0; i < qty; i++) {
      const crate = arr[from - 1].pop();
      arr[to - 1].push(crate);
    }
    if (log) {
      console.log('moved', qty, 'from', from, 'to', to);
      printArray(arr);
    }
  });
};

const doTheThing2 = (input, arr) => {
  const log = type !== 1;
  input.forEach((instruction) => {
    const [qty, from, to] = instruction;
    if (log) {
      console.log('start');
      printArray(arr);
    }
    const crates = arr[from - 1].splice(arr[from - 1].length - qty);
    arr[to - 1].push(...crates);
    if (log) {
      console.log('moved', qty, 'from', from, 'to', to);
      console.log('end');
      printArray(arr);
    }
  });
};
const type = 1;
const input = await getInput(type); // 0 = sample, 1 = real, anything else = real with logging
const inputArray = type === 0 ? sampleArray : realArray;
// doTheThing1(input, inputArray);
doTheThing2(input, inputArray);
console.log(inputArray.map((x) => x[x.length - 1]).reduce((x, y) => x + y));

// Sample results: CMZ, MCD
// Real results: WHTLRMZRC, GMPMLWNMG
