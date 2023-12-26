const args = process.argv.slice(2, 5);
const scriptDay = args[0];
const scriptPart = args[1];
const test = args[2];

if (!scriptDay || !scriptPart) {
    console.log('Please provide a day and part seperated by a space.');
    process.exit(1);
}

const script = await import(`./day${scriptDay}/script.js`);
if (scriptPart === '1') {
    console.log(await script.part1(test))
} else if (scriptPart === '2') {
    console.log(await script.part2(test));
} else {
    console.log('Invalid part');
}
