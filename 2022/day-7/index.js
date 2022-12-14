import { readFile } from 'fs/promises';

const [inputFile, log] = process.argv.slice(2, 4);
const input = (await readFile(inputFile, { encoding: 'utf8' }))
  .split('\n')
  .map((x) => x.split(' '));

let cwd = '';

const convertToTree = () => {
  for(let i = 0; i < input.length; i++) {
    const line = input[i];
    if (line[0] === '$') {
      const command = line[1];
      if (command === 'cd') {
        const directory = line[2];
        switch (directory) {
          case '..':
            cwd = cwd.split('/').slice(0, -1).join('/') || '/';
            break;
          case '/':
            cwd = '/';
            break;
          default:
            cwd = cwd + (cwd === '/' ? '' : '/') + directory;
        }
        console.log(cwd);
      } else if (command === 'ls') {
      }
    }
  };
};

const node = ({ type, name, size }) => ({
  type,
  name,
  size,
  children: [],
});

convertToTree();

// Sample results: 95437
// Real results:
