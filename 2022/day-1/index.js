import { readFile } from 'fs/promises';
// const inputFile = 'sasmple.txt';
const inputFile = 'input.txt';

const input = (await readFile(inputFile, { encoding: 'utf8' }))
  .split('\n\n')
  .map((x) => x.split('\n'));

const elves = input
  .flatMap((x) => x.reduce((a, b) => Number(a) + Number(b)))
  .sort((a, b) => b - a);

console.log('Most calories per elf: ', elves[0]);
console.log(
  'Calories carried by top 3 elves: ',
  elves.slice(0, 3).reduce((a, b) => Number(a) + Number(b))
);
