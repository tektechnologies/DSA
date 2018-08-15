'use strict';

const binarySearch = require('../array_binary_search');

describe('binarySearch', () => {
  it('array_binary_search will search array to find index of value', () => {
    expect(binarySearch([1,2,3,4,5], 3)).toBe(2);
    expect(binarySearch([1,2,3,4,5], 2)).toBe(1);
    expect(binarySearch([1,2,3,4,5], 4)).toBe(3);
    expect(binarySearch([1,2,3,4,5], 1)).toBe(0);
    expect(binarySearch([1,2,3,4,5], 5)).toBe(4);
  });

  it('returns -1 if there is no match of value to index', () => {
    expect(binarySearch([1,2,3,4,5], 6)).toBe(-1);
  });

  it('checks to see if args are valid', () => {
    expect(binarySearch()).toBe(-1);
    expect(binarySearch([])).toBe(-1);
  });

  

  //   it('', () => {
  //         expect().toBe();
  //   });

  //   it('returns given array if value is missing', () => {
       
  //         expect().toBe();
  //   });

});