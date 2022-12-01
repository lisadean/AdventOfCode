const fs = require('fs');

function part1() {
  console.log('===== PART ONE =====');
  let increased = 0;
  let previous;
  const allFileContents = fs.readFileSync('input-1-1.txt', 'utf-8');
  allFileContents.split(/\r?\n/).forEach((line, idx) => {
    const newDepth = Number(line);
    if (idx < 4) console.log(`Previous: ${previous}, newDepth: ${newDepth}`);
    if (previous && newDepth > previous) {
      increased++;
    }
    previous = newDepth;
  });
  console.log(`Total increased: ${increased}`);
}

function part2() {
  console.log(`\n===== PART TWO =====`);
  let increased = 0;
  let previous;
  let window = [];
  const allFileContents = fs
    .readFileSync('input-1-1.txt', 'utf-8')
    .split(/\r?\n/);
  allFileContents.forEach((line, idx) => {
    const newDepth = Number(line);
    if (newDepth > 0) {
      if (window.length === 3) {
        window.shift();
      }
      window.push(newDepth);
      if (idx > allFileContents.length - 4) console.log(window);
      if (window.length === 3) {
        const newWindowValue = window.reduce((a, b) => a + b);
        const logLine = `previous: ${previous}, newWindowValue: ${newWindowValue}`;
        if (idx < 6 || idx > allFileContents.length - 4) console.log(logLine);
        if (idx === 6) console.log(`...`);
        if (previous && newWindowValue > previous) increased++;
        previous = newWindowValue;
      }
    }
  });
  console.log(`Total increased: ${increased}`);
}

part1();
part2();
