import { readFile } from 'fs/promises';

const [inputFile, log] = process.argv.slice(2, 4);

const input = (await readFile(inputFile, { encoding: 'utf8' }))
  .split('\n\n')
  .map((x) => x.split('\n'));

// const convertLineToArray = (line) => {
//   const arr = [];
//   line.split('').forEach((char) => {
//     let tempArr;
//     if (char === '[') {
//       tempArr = [];
//     } else if (char === ']') {
//       arr.push(tempArr);
//     }
//   });
// };

// const convertLineToArray = (line) => Array.from(line);

// input.forEach((pair) =>
//   pair.forEach((line) => console.log(convertLineToArray(line)))
// );

const temp = input[7][0];
console.log(temp);
const temp1 = Array.from(temp);
console.log(temp1);
console.log(Array.from([1, [2, [3, [4, [5, 6, 7]]]], 8, 9]));
// Sample results:
// Real results:
