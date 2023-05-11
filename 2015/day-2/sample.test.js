const { part1, part2 } = require('./index.js');

describe('Test with sample data', () => {
  it('should return the correct result for part1', () => {
    expect(part1(['2x3x4'])).toEqual(58);
    expect(part1(['1x1x10'])).toEqual(43);
    expect(part1(['2x3x4', '1x1x10'])).toEqual(58 + 43);
  });
  it('should return the correct result for part2', () => {
    expect(part2(['2x3x4'])).toEqual(34);
    expect(part2(['4x2x3'])).toEqual(34);
    expect(part2(['1x1x10'])).toEqual(14);
    expect(part2(['2x3x4', '1x1x10'])).toEqual(34 + 14);
  });
});
