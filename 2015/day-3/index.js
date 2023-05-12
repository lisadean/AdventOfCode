const path = require('path');
const { readFile } = require('fs/promises');

const isTest = process.argv[1].split('/').slice(-1)[0] === 'jest';

const getInputFromFile = async () =>
  await readFile(path.join(__dirname, 'input.txt'), {
    encoding: 'utf8',
  });

// Stolen without shame from the docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#examples
function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

const part1 = (input) => {
  const data = input.split('');
  const currentLocation = [0, 0];
  const houses = new Set();
  houses.add(currentLocation.toString());
  data.forEach((direction) => {
    switch (direction) {
      case '^':
        currentLocation[1]++;
        break;
      case 'v':
        currentLocation[1]--;
        break;
      case '>':
        currentLocation[0]++;
        break;
      case '<':
        currentLocation[0]--;
        break;
    }
    houses.add(currentLocation.toString());
  });
  return houses.size;
};

const part2 = (input) => {
  const data = input.split('');
  const santa = {
    houses: new Set(),
    location: [0, 0],
  };
  const robot = {
    houses: new Set(),
    location: [0, 0],
  };
  const visit = (direction, being) => {
    const { houses, location } = being;
    switch (direction) {
      case '^':
        location[1]++;
        break;
      case 'v':
        location[1]--;
        break;
      case '>':
        location[0]++;
        break;
      case '<':
        location[0]--;
        break;
    }
    houses.add(location.toString());
  };
  santa.houses.add([0, 0].toString());
  data.forEach((direction, idx) =>
    idx % 2 === 0 ? visit(direction, santa) : visit(direction, robot)
  );
  return union(santa.houses, robot.houses).size;
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
