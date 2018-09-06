'use strict';



const TreeSearch = require('../tree-search');

describe('sort search tree', () => {

  it('has null data for root', () => {
    let sTree = new TreeSearch();
    expect(sTree.root).toBe(null);
  });

  it('can insert data for root and leafs', () => {
    let sTree = new TreeSearch();
    sTree.insert(5);
    expect(sTree.root).not.toBe(null);
    expect(sTree.root.data).toBe(5);
    sTree.insert(4);
    expect(sTree.root.left.data).toBe(4);
    sTree.insert(6);
    expect(sTree.root.right.data).toBe(6);
  });

  it('can find data for root and leafs', () => {
    let sTree = new TreeSearch();
    sTree.insert(5);
    sTree.insert(4);
    sTree.insert(6);
    expect().toBe();
  });

});