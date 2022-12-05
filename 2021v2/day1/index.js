import { readFile } from 'fs/promises';

const getInput = async (real) => {
  const inputFile = real ? 'input.txt' : 'sample.txt';
  return (await readFile(inputFile, { encoding: 'utf8' }))
    .split('\n')
    .map((x) => Number(x));
};
const part1 = async (log) => {
  console.log(
    input.reduce((depthIncreases, reading, idx, input) => {
      if (inputType === 0 || log) console.log(reading, idx, depthIncreases);
      return idx !== 0 && reading > input[idx - 1]
        ? depthIncreases + 1
        : depthIncreases;
    }, 0)
  );
};
const part2 = async (log) => {
  console.log(
    input.reduce((depthIncreases, reading, idx, input) => {
      if (idx <= 2) return depthIncreases;
      const total = (window) => (idx >= 2 ? window.reduce((a, b) => a + b) : 0);
      const currentWindow = input.slice(idx - 2, idx + 1);
      const lastWindow = input.slice(idx - 3, idx);
      if (inputType === 0 || log)
        console.log(
          reading,
          idx,
          currentWindow,
          total(currentWindow),
          lastWindow,
          total(lastWindow),
          depthIncreases
        );
      return total(currentWindow) > total(lastWindow)
        ? depthIncreases + 1
        : depthIncreases;
    }, 0)
  );
};

const inputType = 1;
const input = await getInput(inputType);
part1(); // sample = 7, real = 1462
part2(); // sample = 5, real = 1497
