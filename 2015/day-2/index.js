const path = require('path');
const { readFile } = require('fs/promises');

const isTest = process.argv[1].split('/').slice(-1)[0] === 'jest';

const getInputFromFile = async () =>
  (
    await readFile(path.join(__dirname, 'input.txt'), {
      encoding: 'utf8',
    })
  ).split('\n');

const part1 = (input) =>
  input.reduce((acc, cur) => {
    const [l, w, h] = cur.split('x');
    const sides = [l * w, w * h, h * l];
    const smallest = Math.min(...sides);
    return acc + sides.reduce((a, b) => a + b) * 2 + smallest;
  }, 0);

const part2 = (input) =>
  input.reduce((acc, cur) => {
    const [l, w, h] = cur
      .split('x')
      .sort((a, b) => a - b)
      .map((a) => Number(a));
    return acc + 2 * (l + w) + l * w * h;
  }, 0);

(async () => {
  if (!isTest) {
    console.log('Running in CLI mode');
    const data = await getInputFromFile();
    console.log('Part One: ', part1(data));
    console.log('Part Two: ', part2(data));
  }
})();

module.exports = { part1, part2 };
