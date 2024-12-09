import { readFile } from "fs/promises";
import { dirname } from "path";

const args = process.argv;
const dir = dirname(args[1]);
const part = Number(args[2]);
const dataFilename = args[3];
const inputFilename = `${dir}/${dataFilename}.txt`;

const part1 = (memory) => {
  const regex = /mul\(\d{1,3},\d{1,3}\)/g;
  const instructions = [...memory.matchAll(regex)].map((match) =>
    match[0]
      .slice(4, match[0].length - 1)
      .split(",")
      .map(Number)
  );
  return instructions.reduce((acc, curr) => acc + curr[0] * curr[1], 0); // 161 & 182780583
};

const part2 = (memory) => {
  const regex = /(mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\))/g;
  let enabled = true;
  // const instructions = [...memory.matchAll(regex)].map((match) => match[0]);
  const instructions = [...memory.matchAll(regex)]
    .map((match) => match[0])
    .map((match) => {
      if (/^m/.test(match) && enabled) {
        return match
          .slice(4, match.length - 1)
          .split(",")
          .map(Number);
      } else if (/^don/.test(match)) {
        enabled = false;
      } else if (/^do\(/.test(match)) {
        enabled = true;
      }
    })
    .filter((match) => match);
  return instructions.reduce((acc, curr) => acc + curr[0] * curr[1], 0); // 48
};

const parts = async (part, file) => {
  const memory = await readFile(file, { encoding: "utf8" });
  const result = part === 1 ? part1(memory) : part2(memory);
  console.log("result:", result);
  return result;
};

parts(part, inputFilename);

// run:
// node script <part #> <input file name without .txt>
