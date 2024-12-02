import { part1, part2 } from './script.js';

describe('day 1', () => {
  const day = 1;
  describe('part 1', () => {
    it('should return the correct answer', async () => {
      expect(await part1()).toEqual(11);
    });
  });
  describe('part 2', () => {
    it('should return the correct answer', async () => {
      expect(await part2('test')).toEqual(31);
    });
  });
});
