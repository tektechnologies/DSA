'use strict';
const arrayInsert = require('../array_shift');

describe('arrayShift', () => {
  it('inserts value into the middle of an array', () => {
        expect(arrayInsert([1,2,4,5], 3)).toEqual([1,2,3,4,5]);
  });

  it('inserts value into the middle of an array with odd length', () => {
        expect(arrayInsert([4,8,15,23,42], 16	)).toEqual([4,8,15,16,23,42]);
  });

  it('inserts value into an empty array', () => {
        expect(arrayInsert([], 1)).toEqual([1]);
  });

  it('inserts value into an array with one element', () => {
        expect(arrayInsert([1], 2)).toEqual([1,2]);
  });

  it('inserts value into an array with two elements', () => {
        expect(arrayInsert([1,3], 2)).toEqual([1,2,3]);
  });

  it('returns null given non-Array', () => {
        expect(arrayInsert({}, 3)).toBe(null);
  });

  it('returns given array if value is missing', () => {
        var array = [1,2,3];
        expect(arrayInsert(array)).toBe(array);
  });
});