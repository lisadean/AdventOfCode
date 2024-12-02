import { readFile } from 'fs/promises';

const directory = 'day1';

const isJestRunning = typeof jest !== 'undefined';

export const part1 = async () => {
  const fileName = isJestRunning
    ? `${directory}/mock.txt`
    : `${directory}/input.txt`;
  const input = (await readFile(fileName, { encoding: 'utf8' })).split('\n');
  const list1 = [];
  const list2 = [];
  input.forEach((line) => {
    const lineArray = line.split(/ +/);
    list1.push(lineArray[0]);
    list2.push(lineArray[1]);
  });
  list1.sort();
  list2.sort();
  const result = list1.reduce((accumulator, _, currentIndex) => {
    return accumulator + Math.abs(list1[currentIndex] - list2[currentIndex]);
  }, 0);

  return result;
};

export const part2 = async (type) => {
  const fileName = isJestRunning
    ? `${directory}/mock.txt`
    : `${directory}/input.txt`;
  const input = (await readFile(fileName, { encoding: 'utf8' })).split('\n');
  const list1 = [];
  const list2 = [];
  input.forEach((line) => {
    const lineArray = line.split(/ +/);
    list1.push(lineArray[0]);
    list2.push(lineArray[1]);
  });
  const result = list1.reduce((accumulator, _, currentIndex) => {
    const duplicated = list2.filter(
      (item) => item === list1[currentIndex]
    ).length;
    return accumulator + list1[currentIndex] * duplicated;
  }, 0);

  console.log(result);
  return result;
};
