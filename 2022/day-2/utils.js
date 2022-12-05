import { readFile } from 'fs/promises';

export const getInput = async (type, mapFunction = (x) => x) => {
  const inputFile = type === 0 ? 'sample.txt' : 'input.txt';
  return (await readFile(inputFile, { encoding: 'utf8' }))
    .split('\n')
    .map((x) => x.split(','));
};

export const getResult = (arr, callback, initialValue) =>
  callback ? console.log(arr.reduce(callback, initialValue)) : null;

export const go = async ({
  inputType, // 0 = sample, 1 = real, anything else = real with logging
  inputMap = null,
  part1Reducer = null,
  part1InitialValue = null, // optional initial value for reducer function
  part2Reducer = null,
  part2InitialValue = null, // optional initial value for reducer function
}) => {
  const input = await getInput(inputType, inputMap);
  getResult(input, part1Reducer, part1InitialValue);
  getResult(input, part2Reducer, part2InitialValue);
};
