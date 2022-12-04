import { readFile } from 'fs/promises';
// const inputFile = 'sample.txt'; // part 1 = 15, part 2 = 12
const inputFile = 'input.txt'; // part 1 = 8392, part 2 = 10116

const input = (await readFile(inputFile, { encoding: 'utf8' }))
  .split('\n')
  .map((x) => x.split(' '));

const itemValue = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

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

const resultValue = {
  lose: 0,
  draw: 3,
  win: 6,
};

const itemDescription = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'rock',
  Y: 'paper',
  Z: 'scissors',
};

const part1 = async () => {
  let totalScore = 0;

  input.forEach((line) => {
    let roundResult,
      roundScore = 0;
    const [opponent, me] = line;
    if (itemDescription[opponent] === itemDescription[me]) {
      roundResult = 'draw';
    } else if (rules[itemDescription[me]].beats === itemDescription[opponent]) {
      roundResult = 'win';
    } else {
      roundResult = 'lose';
    }
    roundScore += resultValue[roundResult];
    roundScore += itemValue[itemDescription[me]];
    totalScore += roundScore;
    // console.log(
    //   line,
    //   roundResult,
    //   resultValue[roundResult],
    //   '+',
    //   itemValue[itemDescription[me]],
    //   roundScore,
    //   totalScore
    // );
  });
  console.log(totalScore);
};
const part2 = async () => {
  const resultMap = {
    X: 'lose',
    Y: 'draw',
    Z: 'win',
  };

  let totalScore = 0;

  input.forEach((line) => {
    let myPlay,
      roundScore = 0;
    const [opponentPlay, result] = line;
    if (resultMap[result] === 'draw') {
      myPlay = itemDescription[opponentPlay];
    } else if (resultMap[result] === 'win') {
      myPlay = rules[itemDescription[opponentPlay]].losesTo;
    } else {
      myPlay = rules[itemDescription[opponentPlay]].beats;
    }
    roundScore += resultValue[resultMap[result]];
    roundScore += itemValue[myPlay];
    totalScore += roundScore;
    // console.log(
    //   line,
    //   resultMap[result],
    //   resultValue[resultMap[result]],
    //   '+',
    //   itemValue[myPlay],
    //   roundScore,
    //   totalScore
    // );
  });
  console.log(totalScore);
};
part1();
part2();
