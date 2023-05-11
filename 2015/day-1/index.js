const path = require('path');
const { readFile } = require('fs/promises');

const isTest = process.argv[1].split('/').slice(-1)[0] === 'jest';

const getInputFromFile = async () =>
  await readFile(path.join(__dirname, 'input.txt'), {
    encoding: 'utf8',
  });

const part1 = (input) => {
  const data = input.split('');
  return data.reduce((acc, cur, idx, arr) => {
    if (cur === '(') return acc + 1;
    if (cur === ')') return acc - 1;
    return acc;
  }, 0);
};

const part2 = (input) => {
  const data = input.split('');
  let floor = 0;
  for (let i = 0; i < data.length; i++) {
    const cur = data[i];
    if (cur === '(') floor++;
    if (cur === ')') floor--;
    if (floor === -1) return i + 1;
  }
};

(async () => {
  if (!isTest) {
    console.log('Running in CLI mode');
    const data = await getInputFromFile();
    console.log('Part One: ', part1(data));
    console.log('Part Two: ', part2(data));
  }
})();

module.exports = { part1, part2 };
