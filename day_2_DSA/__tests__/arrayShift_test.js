'use strict';
const arrayInsert = require('../array_shift');

describe('arrayShift', () => {
  it('inserts value into the middle of an array', () => {
        expect(arrayInsert([1,2,4,5], 3)).toEqual([1,2,3,4,5]);
        

  });
});