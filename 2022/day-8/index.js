import { readFile } from 'fs/promises';

const [inputFile, log] = process.argv.slice(2, 4);
const input = (await readFile(inputFile, { encoding: 'utf8' }))
  .split('\n')
  .map((x) => x.split(''));

const middleTreeVisibility = (height, rowIdx, treeIdx, forest) => {
  const results = [true, true, true, true];
  // to the left
  for (let i = 0; i < treeIdx; i++) {
    if (forest[rowIdx][i] >= height) results[0] = false;
  }
  // to the right
  for (let i = treeIdx + 1; i < forest[rowIdx].length; i++) {
    if (forest[rowIdx][i] >= height) results[1] = false;
  }
  // above
  for (let i = 0; i < rowIdx; i++) {
    if (forest[i][treeIdx] >= height) results[2] = false;
  }
  // below
  for (let i = rowIdx + 1; i < forest.length; i++) {
    if (forest[i][treeIdx] >= height) results[3] = false;
  }
  return results.some((x) => x);
};

const findVisibleTrees = () => {
  let visibleTrees = 0;
  input.forEach((row, rowIdx) => {
    if (rowIdx === 0 || rowIdx === input.length - 1) {
      visibleTrees += row.length;
    } else {
      row.forEach((tree, treeIdx) => {
        if (treeIdx === 0 || treeIdx === row.length - 1) {
          visibleTrees++;
        } else {
          if (middleTreeVisibility(tree, rowIdx, treeIdx, input))
            visibleTrees++;
        }
      });
    }
  });
  console.log('visibleTrees', visibleTrees);
};

findVisibleTrees();

// Sample results: 21
// Real results: 1785
