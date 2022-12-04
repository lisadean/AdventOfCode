import { readFile } from 'fs/promises';
// const inputFile = 'sample.txt'; // part 1 = 157, part 2 = 70
const inputFile = 'input.txt'; // part 1 = 8053, part 2 = 2425

const calculatePriority = (item) => {
  const charCode = item.charCodeAt(0);
  return charCode - (charCode > 96 ? 97 - 1 : 65 - 27);
};

const part1 = async () => {
  const input = (await readFile(inputFile, { encoding: 'utf8' })).split('\n');
  const sharedItem = (items) => {
    const firstCompartment = items.substring(0, items.length / 2).split('');
    const secondCompartment = items.substring(items.length / 2).split('');
    return firstCompartment.filter((item) =>
      secondCompartment.includes(item)
    )[0];
  };
  let prioritySum = 0;
  input.forEach((x) => {
    const item = sharedItem(x);
    const priority = calculatePriority(item);
    prioritySum += priority;
    console.log(
      x.substring(0, x.length / 2),
      x.substring(x.length / 2),
      item,
      priority
    );
  });
  console.log(prioritySum);
};

const part2 = async () => {
  const input = (await readFile(inputFile, { encoding: 'utf8' })).split('\n');
  const elfGroup = [];
  let prioritySum = 0;
  const sharedItem = (group) =>
    group[0]
      .split('')
      .filter((item) => group[1].split('').includes(item))
      .filter((item) => group[2].split('').includes(item));
  input.forEach((line, idx) => {
    const subIndex = idx % 3;
    switch (subIndex) {
      case 0:
        elfGroup.length = 0;
        elfGroup.push(line);
        break;
      case 1:
        elfGroup.push(line);
        break;
      case 2:
        elfGroup.push(line);
        console.log(idx + 1, line, elfGroup);
        if (idx === 200) {
          console.log(200);
        }
        const item = sharedItem(elfGroup)[0];
        console.log(item);
        prioritySum += calculatePriority(item);
    }
  });
  console.log(prioritySum);
};
part1();
