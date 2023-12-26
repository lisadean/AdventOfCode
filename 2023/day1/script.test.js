import { part1, part2, findFirstDigit, findFirstDigitWithWords, findLastDigit, findLastDigitWithWords, findCalibrationValue, findCalibrationValueWithWords } from './script.js';

describe('day 1', () => {
    const day = 1;
    describe('part 1', () => {
        it('should return the correct answer', async () => {
            expect(await part1('test')).toEqual(142);
        });
        it('should find the first digit', () => {
            expect(findFirstDigit('abc123')).toEqual('1');
        });
        it('should find the last digit', () => {
            expect(findLastDigit('abc123')).toEqual('3');
        });
        it('should return the correct calibration value', () => {
            expect(findCalibrationValue('abc123')).toEqual('13');
        });
    });
    describe('part 2', () => {
        it('should return the correct answer', async () => {
            expect(await part2('test')).toEqual(281);
        });
        it('should find the first digit when it is a word', () => {
            expect(findFirstDigitWithWords('nineeightseven2')).toEqual('9');
        });
        it('should find the first digit when it is a numeral', () => {
            expect(findFirstDigitWithWords('4nineeightseven2')).toEqual('4');
        });
        it('should find the last digit when it is a word', () => {
            expect(findLastDigitWithWords('4nineeightseven')).toEqual('7');
        });
        it('should find the last digit when it is a numeral', () => {
            expect(findLastDigitWithWords('4nineeightseven8')).toEqual('8');
        });
        it('should return the correct calibration value', () => {
            expect(findCalibrationValueWithWords('fourfivenineeightseven9')).toEqual('49');
        });
        it('should return the correct calibration value when multiple number words are possible', () => {
            expect(findCalibrationValueWithWords('ninexzhtqsr6hnftrbbnsevensevenoneightq')).toEqual('98');
        });
    });
});