import { readFile } from 'fs/promises';
const inputFile = 'sample.txt'; // part 1 = 15
// const inputFile = 'input.txt'; // part 1 = 8392

const input = (await readFile(inputFile, { encoding: 'utf8' }))
  .split('\n')
  .map((x) => x.split(' '));

const itemValue = {
  X: 1, // rock
  Y: 2, // paper
  Z: 3, // scissors
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
    roundScore += itemValue[me];
    totalScore += roundScore;
    console.log(
      line,
      roundResult,
      resultValue[roundResult],
      '+',
      itemValue[me],
      roundScore,
      totalScore
    );
  });
  console.log(totalScore);
};
part1();
