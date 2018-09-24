'use strict';

const Graph = require('../lib/breadth_first');

describe('Graph', () => {
  it('can construct graph', () => {
    let graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E'); 
    //add edge.
    graph.addEdge('A','B');
    graph.addEdge('B','C');
    graph.addEdge('B','D');
    graph.addEdge('C','A');
    graph.addEdge('C','E');  
    let result = graph.bft('A');
    expect(result).toEqual(['A', 'B', 'C', 'D', 'E']);

  });
});


