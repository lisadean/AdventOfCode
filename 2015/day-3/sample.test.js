const { part1, part2 } = require('./index.js');

describe('Test with sample data', () => {
  it('should return the correct result for part1', () => {
    expect(part1('>')).toEqual(2);
    expect(part1('^>v<')).toEqual(4);
    expect(part1('^v^v^v^v^v')).toEqual(2);
  });
  it('should return the correct result for part2', () => {
    expect(part2('^v')).toEqual(3);
    expect(part2('^>v<')).toEqual(3);
    expect(part2('^v^v^v^v^v')).toEqual(11);
  });
});
