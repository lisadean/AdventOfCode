import { readFile } from 'fs/promises';

const directory = 'day1';

export const findFirstDigit = (str) => str.match(/\d/)[0];
export const findLastDigit = (str) => {
    const matches = str.match(/\d/g);
    return matches[matches.length - 1];
};
const digitsAndWordsPattern = `one|two|three|four|five|six|seven|eight|nine|zero|\\d`;
const digitsAndWordsPatternRegEx = `(?=(${digitsAndWordsPattern})).*(${digitsAndWordsPattern})`;
const mapResultToDigit = (result) => {
    const wordMap = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0,
    }
    return (result.match(/\d/) ? result : wordMap[result]).toString();
};
export const findFirstDigitWithWords = (str) => mapResultToDigit(str.match(new RegExp(digitsAndWordsPatternRegEx))[1]);
export const findLastDigitWithWords = (str) => mapResultToDigit(str.match(new RegExp(digitsAndWordsPatternRegEx)).slice(-1).toString());
export const findCalibrationValue = (str) => {
    const firstDigit = findFirstDigit(str);
    const lastDigit = findLastDigit(str);
    return `${firstDigit}${lastDigit}`;
};
export const findCalibrationValueWithWords = (str) => {
    const firstDigit = findFirstDigitWithWords(str);
    const lastDigit = findLastDigitWithWords(str);
    return `${firstDigit}${lastDigit}`;
};


export const part1 = async (type) => {
    const fileName = type === 'test' ? `${directory}/mock.txt` : `${directory}/input.txt`;
    const input = (await readFile(fileName, { encoding: 'utf8' }))
        .split('\n')

    const result = input
        .map((line) => Number(findCalibrationValue(line)))
        .reduce((a, b) => a + b, 0);

    return result;
};

export const part2 = async (type) => {
    const fileName = type === 'test' ? `${directory}/mock2.txt` : `${directory}/input.txt`;
    const input = (await readFile(fileName, { encoding: 'utf8' }))
        .split('\n')

    const result = input
        .map((line) => Number(findCalibrationValueWithWords(line)))
        .map((line) => { console.log(line); return line })
        .reduce((a, b) => a + b, 0);

    return result;
};

// used this person's solution to figure out where it was finding the wrong calibration value and how to fix the regex
// https://www.reddit.com/r/adventofcode/comments/1883ibu/2023_day_1_solutions/ke3djoz/
// export const part2 = async (type) => {
//     const fileName = type === 'test' ? `${directory}/mock2.txt` : `${directory}/input.txt`;
//     const input = (await readFile(fileName, { encoding: 'utf8' }))
//         .split('\n')
//     const dictionary = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };

//     const regex = `\\d|` + Object.keys(dictionary).join("|");

//     const outputPart2 = input.reduce((accumulator, line) => {
//         const a = Number(line
//             .match(`(?=(${regex})).*(${regex})`)
//             .map(value => Number(value) || dictionary[value])
//             .splice(1, 2)
//             .join(''));
//         console.log(a);
//         accumulator + a
//     }
//         , 0);

//     return outputPart2;
