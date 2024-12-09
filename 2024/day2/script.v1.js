import { readFile } from "fs/promises";
import { dirname } from "path";

const args = process.argv;
const dir = dirname(args[1]);
const part = args[2];
const dataFilename = args[3];
const inputFilename = `${dir}/${dataFilename}.txt`;

const isSafe = (report) => {
  const differences = [];
  for (let i = 1; i < report.length; i++) {
    const diff = report[i] - report[i - 1];
    if (Math.abs(diff) >= 1 && Math.abs(diff) <= 3) {
      differences.push(Math.sign(diff));
    } else {
      return false;
    }
  }
  const inc = differences.every((d) => d > 0);
  const dec = differences.every((d) => d < 0);
  console.log(inc, dec);
  return inc || dec;
};

const part1 = async (file) => {
  const reports = (await readFile(file, { encoding: "utf8" })).split("\n").map((line) => line.split(/ +/).map(Number));
  const safeLines = reports.filter(isSafe);
  safeLines.forEach((report) => console.log(report));
  console.log("safeLines.length: ", safeLines.length);
  return safeLines.length;
};

const part2 = async (file) => {
  return 0;
};

[part1, part2].forEach((part) => {
  globalThis[part.name] = part;
});
globalThis[`part${part}`](inputFilename);
