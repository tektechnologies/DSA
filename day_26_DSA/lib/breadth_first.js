'use strict';

class Graph {
  constructor(){
    this.nodes = new Array();
  }
  addNode(value){
    this.nodes.push(value, []);
  }
  addEdge(from, to, weight = null){
    let fromEdges = this.nodes.find(from);
    if(!fromEdges) throw new Error('from not found!');
    
    let toEdges = this.nodes.get(to);
    if(!toEdges) throw new Error('to not found');

    fromEdges.push({ node: to, weight });
    //toEdges.push({node: from, weight});
  }
  //   bft(beginValue){
  //     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
  //     let hasBegin = this.nodes.has(beginValue);
  //     if(!hasBegin) throw new Error('startValue not found');

  //     let result = [];
  //     let queue = [beginValue];

  //     while(queue.length){
  //       let currentValue = queue[0];


  //     }
  //   }
  




}
module.exports = Graph;