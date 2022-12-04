import { readFile } from 'fs/promises';
// const inputFile = 'sample.txt'; // part 1 = 15, part 2 = 12
// const inputFile = 'input.txt'; // part 1 = 8392, part 2 = 10116

const getInput = async (sample) => {
  const inputFile = sample ? 'sample.txt' : 'input.txt';
  return (await readFile(inputFile, { encoding: 'utf8' }))
    .split('\n')
    .map((x) => x.split(' '));
};

const results = {
  lose: {
    code: ['X'],
    value: 0,
  },
  draw: {
    code: ['Y'],
    value: 3,
  },
  win: {
    code: ['Z'],
    value: 6,
  },
};

const items = {
  rock: {
    code: ['A', 'X'],
    value: 1,
    beats: 'scissors',
    losesTo: 'paper',
  },
  paper: {
    code: ['B', 'Y'],
    value: 2,
    beats: 'rock',
    losesTo: 'scissors',
  },
  scissors: {
    code: ['C', 'Z'],
    value: 3,
    beats: 'paper',
    losesTo: 'rock',
  },
};

const getKeynameFromCode = (code, object) =>
  Object.keys(object).find((key) => object[key].code.includes(code));

const part1 = async (log) => {
  console.log(
    input.reduce((totalScore, line) => {
      let roundResult,
        roundScore = 0;
      const [opponent, me] = line;
      const opponentPlay = getKeynameFromCode(opponent, items);
      const myPlay = getKeynameFromCode(me, items);
      if (opponentPlay === myPlay) {
        roundResult = 'draw';
      } else if (items[myPlay].beats === opponentPlay) {
        roundResult = 'win';
      } else {
        roundResult = 'lose';
      }
      roundScore += results[roundResult].value;
      roundScore += items[myPlay].value;
      totalScore += roundScore;
      if (log)
        console.log(
          line,
          roundResult,
          results[roundResult].value,
          '+',
          items[myPlay].value,
          roundScore,
          totalScore
        );
      return totalScore;
    }, 0)
  );
};
const part2 = async (log) => {
  console.log(
    input.reduce((totalScore, line) => {
      let myPlay,
        roundScore = 0;
      const [opponent, resultCode] = line;
      const opponentPlay = getKeynameFromCode(opponent, items);
      const result = getKeynameFromCode(resultCode, results);
      if (result === 'draw') {
        myPlay = opponentPlay;
      } else if (result === 'win') {
        myPlay = items[opponentPlay].losesTo;
      } else {
        myPlay = items[opponentPlay].beats;
      }
      roundScore += results[result].value;
      roundScore += items[myPlay].value;
      totalScore += roundScore;
      if (log)
        console.log(
          line,
          result,
          results[result].value,
          '+',
          items[myPlay].value,
          roundScore,
          totalScore
        );
      return totalScore;
    }, 0)
  );
};
const input = await getInput();
part1();
part2();
