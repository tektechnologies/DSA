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
    sTree.insert(10);
    expect(sTree.root.data).not.toBe(null);
    expect(sTree.root.right.data).toBe(6);
    expect(sTree.root.left.data).toBe(4);
    expect(sTree.root.right.right.data).toBe(10);

  });
  it('can remove data for root and leafs', () => {
    let sTree = new TreeSearch();
    expect(sTree.root).toBe(null);
    sTree.insert(5);
    sTree.insert(4);
    sTree.insert(6);
    expect(sTree.root.left.data).toBe(4);
    expect(sTree.root.right.data).toBe(6);
    // sTree.insert(10);
    sTree.remove(4);
    expect(sTree.root.left).toBe(null);
    sTree.remove(6);
    expect(sTree.root.right).toBe(null);
  });

  it('can serialize data for root and leafs', () => {
    let sTree = new TreeSearch();
    expect(sTree.root).toBe(null);
   
    sTree.insert(5);
    sTree.insert(4);
    sTree.insert(6);
    sTree = sTree.serialize();
    expect(sTree[0]).toBe(5);
    expect(sTree[2,1,0]).toBe(5,4,6);
    expect(sTree[0,1,2]).toBe(6,4,5);
  });

  it('can deserialize data for root and leafs', () => {
    let sTree = new TreeSearch();
    sTree.insert(5);
    expect(sTree.root).not.toBe(null);
   
    // sTree.insert(5);
    // sTree.insert(4);
    // sTree.insert(6);
    // sTree = sTree.serialize();
    // expect(sTree[0]).toBe(5);
    // expect(sTree[2,1,0]).toBe(5,4,6);
    // expect(sTree[0,1,2]).toBe(6,4,5);
  });






});