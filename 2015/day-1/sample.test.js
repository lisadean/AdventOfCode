const { part1, part2 } = require('./index.js');

describe('Test with sample data', () => {
  it('should return the correct result for part1', () => {
    expect(part1('(())')).toEqual(0);
    expect(part1('()()')).toEqual(0);

    expect(part1('(((')).toEqual(3);
    expect(part1('(()(()(')).toEqual(3);

    expect(part1('))(((((')).toEqual(3);

    expect(part1('())')).toEqual(-1);
    expect(part1('))(')).toEqual(-1);

    expect(part1(')))')).toEqual(-3);
    expect(part1(')())())')).toEqual(-3);
  });
  it('should return the correct result for part2', () => {
    expect(part2(')')).toEqual(1);
    expect(part2('()())')).toEqual(5);
    expect(part2('()())))((')).toEqual(5);
  });
});
