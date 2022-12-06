import { readFile } from 'fs/promises';

export const getInput = async (type) => {
  const inputFile = type === 0 ? 'sample.txt' : 'input.txt';
  return (await readFile(inputFile, { encoding: 'utf8' })).split('\n\n');
};

const printArray = (arr) => arr.forEach((x) => console.log(x));

// Why reinvent the wheel? found this elegant https://stackoverflow.com/questions/15170942/how-to-rotate-a-matrix-in-an-array-in-javascript
const rotateMatrix = (matrix) =>
  matrix[0].map((val, index) => matrix.map((row) => row[index]).reverse());

const doTheThing1 = (instructions, stacks) => {
  const log = type !== 1;
  instructions.forEach((instruction) => {
    const [qty, from, to] = instruction;
    for (let i = 0; i < qty; i++) {
      const crate = stacks[from - 1].pop();
      stacks[to - 1].push(crate);
    }
    if (log) {
      console.log('moved', qty, 'from', from, 'to', to);
      printArray(stacks);
    }
  });
};

const doTheThing2 = (instructions, stacks) => {
  const log = type !== 1;
  instructions.forEach((instruction) => {
    const [qty, from, to] = instruction;
    if (log) {
      console.log('start');
      printArray(stacks);
    }
    const crates = stacks[from - 1].splice(stacks[from - 1].length - qty);
    stacks[to - 1].push(...crates);
    if (log) {
      console.log('moved', qty, 'from', from, 'to', to);
      console.log('end');
      printArray(stacks);
    }
  });
};

const type = 1; // 0 = sample, 1 = real, anything else = real with logging
const [rawStackData, rawInstructionData] = await getInput(type);

const instructions = rawInstructionData
  .split('\n')
  .map((x) => x.split(' ').filter((x) => /^[0-98]+$/.test(x)));

const parsedStackData = rawStackData
  .split('\n')
  .map((x) => x.split('').filter((x, idx) => idx === 1 || idx % 4 === 1))
  .slice(0, -1);
const stacks = rotateMatrix(parsedStackData).map((x) =>
  x.filter((x) => x !== ' ')
);

doTheThing1(instructions, stacks);
// doTheThing2(instructions, stacks);
console.log(stacks.map((x) => x[x.length - 1]).reduce((x, y) => x + y));

// Sample results: CMZ, MCD
// Real results: WHTLRMZRC, GMPMLWNMG
