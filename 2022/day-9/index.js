import { readFile } from 'fs/promises';

const [inputFile, log] = process.argv.slice(2, 4);

const input = (await readFile(inputFile, { encoding: 'utf8' }))
  .split('\n')
  .map((x) => x.split(' '));

const visitedPositions = new Set(['0,0']);
const visit = (position) => visitedPositions.add(position.toString());
const getTotalVisitedPositions = () => visitedPositions.size;
const touching = (x, y) => {
  return Math.abs(x) <= 1 && Math.abs(y) <= 1;
};
const moveTail = (direction) => {
  console.log(headPosition, tailPosition);
  const xDiff = headPosition[0] - tailPosition[0];
  const yDiff = headPosition[1] - tailPosition[1];
  if (!touching(xDiff, yDiff)) {
    console.log('would move');
    if (headPosition[0] === tailPosition[0]) {
      // same column
      tailPosition[1] += direction;
    } else if (headPosition[1] === tailPosition[1]) {
      // same row
      tailPosition[0] += direction;
    } else {
      // move diagonally
    }
  }
};
const headPosition = [0, 0];
const tailPosition = [0, 0];

input.forEach((move) => {
  // L subtract from x
  // R add to x
  // U add to y
  // D subtract from y
  const [direction, steps] = move;
  switch (direction) {
    case 'L':
      break;
    case 'R':
      for (let i = 0; i < steps; i++) {
        headPosition[0] += 1;
        moveTail(move);
      }
      break;
    case 'U':
      break;
    case 'D':
      break;
  }
});

console.log(getTotalVisitedPositions());

// Sample results: 13
// Real results:
