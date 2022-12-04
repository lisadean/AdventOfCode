import { readFile } from 'fs/promises';
const inputFile = 'sample.txt'; // part 1 answer 27
// const inputFile = 'input.txt'; // part 1 answer: 8392

const input = (await readFile(inputFile, { encoding: 'utf8' }))
  .split('\n')
  .map((x) => x.split(' '));

// A = Rock = 1
// B = Paper = 2
// C = Scissors = 3
// X = Rock = 1
// Y = Paper = 2
// Z = Scissors = 3
// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper
// Lose = 0
// Draw = 3
// Win = 6
// const wins = [2, -1]; //[3 - 1 = 2, 1 - 2 = -1, 2 - 3 = -1]
// const loses = [-2, 1]; // [1 - 3 = -2, 2 - 1 = 1, 3 - 2 = 1]
// const draw = 0; // [1-1, 2-2, 3-3]
// X = lose
// Y = draw
// Z = win

const itemValue = {
  A: 1, // rock
  B: 2, // paper
  C: 3, // scissors
  X: 1, // rock
  Y: 2, // paper
  Z: 3, // scissors
};

const itemDescription = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'rock',
  Y: 'paper',
  Z: 'scissors',
};

const result = {
  2: ['win', 6],
  '-1': ['win', 6],
  '-2': ['lose', 0],
  1: ['lose', 0],
  0: ['draw', 3],
};

let totalScore = 0;

input.forEach((line) => {
  const [player1Play, player2Play] = line;
  const resultValue = itemValue[player1Play] - itemValue[player2Play];
  const roundValue = itemValue[player2Play] + result[resultValue][1];
  console.log(
    itemValue[player2Play],
    '+',
    result[resultValue][1],
    '=',
    roundValue,
    itemDescription[player1Play],
    itemDescription[player2Play],
    result[resultValue][1]
  );
  totalScore += roundValue;
});
console.log('part 1 totalScore', totalScore);

// const resultValue = {
//   X: 'need to lose', // -2, 1
//   Y: 'need to draw', // 0
//   Z: 'need to win', // 2, -1
// };

const rules = {
  rock: {
    beats: 'scissors',
    losesTo: 'paper',
  },
  paper: {
    beats: 'rock',
    losesTo: 'scissors',
  },
  scissors: {
    beats: 'paper',
    losesTo: 'rock',
  },
};

// input.forEach((line) => {
//   const [player1Play, neededResult] = line;
//   // a = 1, draw = 0
//   // b = 2, lose = -2 or 1
//   // c = 3, win = 2 or -1
//   const needToPlay = itemValue[player1Play] - resultValue[neededResult];
//   // -2 or 1 = 2 - x == x = 1 or 3
//   // X = 2 - 1 = 1 OR X = 2 - -2 = 4
//   // X = 3 - 2 = 1 OR X = 3 - -1 = 4
// });
