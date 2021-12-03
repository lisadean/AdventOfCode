const fs = require('fs');

const inputFile = 'input-2.txt';

const debugLog = (idx, message, array) => {
  const linesToLog = 10;
  if (idx < linesToLog || idx > array.length - linesToLog) {
    console.log(message);
  }
  if (idx === linesToLog) console.log(`...`);
};

function part1() {
  console.log('===== PART ONE =====');

  let x = 0;
  let y = 0;

  const input = fs.readFileSync(inputFile, 'utf-8').split(/\r?\n/);

  input.forEach((line, idx) => {
    const direction = line.split(' ');
    if (direction[0] === 'forward') {
      x += Number(direction[1]);
    } else if (direction[0] === 'down') {
      y += Number(direction[1]);
    } else if (direction[0] === 'up') {
      y -= Number(direction[1]);
    }
    debugLog(idx, `direction: ${direction}, x: ${x}, y: ${y}`, input);
  });
  console.log(`Final position - x: ${x}, y: ${y}`);
  console.log(`Final result: ${x * y}`);
}

function part2() {
  console.log(`\n===== PART TWO =====`);

  let x = 0;
  let y = 0;
  let aim = 0;

  const input = fs.readFileSync(inputFile, 'utf-8').split(/\r?\n/);

  input.forEach((line, idx) => {
    const direction = line.split(' ');
    if (direction[0] === 'forward') {
      x += Number(direction[1]);
      y += aim * Number(direction[1]);
    } else if (direction[0] === 'down') {
      aim += Number(direction[1]);
    } else if (direction[0] === 'up') {
      aim -= Number(direction[1]);
    }
    debugLog(
      idx,
      `direction: ${direction}, x: ${x}, y: ${y}, aim: ${aim}`,
      input
    );
  });
  console.log(`Final position - x: ${x}, y: ${y}, aim: ${aim}`);
  console.log(`Final result: ${x * y}`);
}

// part1();
part2();
