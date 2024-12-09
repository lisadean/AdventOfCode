import { readFile } from "fs/promises";
import { dirname } from "path";

const args = process.argv;
const dir = dirname(args[1]);
const part = Number(args[2]);
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
  // console.log(inc, dec);
  return inc || dec;
};

const parts = async (part, file) => {
  const reports = (await readFile(file, { encoding: "utf8" })).split("\n").map((line) => line.split(/ +/).map(Number));
  const result = part === 1 ? part1(reports) : part2(reports);
  console.log("result:", result);
  return result;
};

const part1 = (reports) => {
  const safeLines = reports.filter(isSafe);
  // safeLines.forEach((report) => console.log(report));
  return safeLines.length; // 321
};

parts(part, inputFilename);

const isTolerable = (report) => {
  for (let i = 0; i < report.length; i++) {
    const adjustedReport = [...report.slice(0, i), ...report.slice(i + 1)];
    if (isSafe(adjustedReport)) {
      return true;
    }
  }
  return false;
};

const part2 = (reports) => {
  const safeLines = reports.filter(isTolerable);
  // safeLines.forEach((report) => console.log(report));
  return safeLines.length;
};

// run:
// node script <part #> <input file name without .txt>
