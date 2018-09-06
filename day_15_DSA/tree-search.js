'use strict';


//create and initialize the node for the root and 
//leafs that has a L and R.
class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
//create and initialize the tree root to
//then check that root for data on the left and right.
class TreeSearch{
  constructor(){
    this.root = null;
  }

  //insert function to insert data into our tree nodes into leafs.
  insert(data) {
    let leaf;
    if(data === null){
      leaf = new Node(data);
    } else {
      leaf = data;
      console.log(leaf);
    }
    if(!this.root){
      this.root = leaf;
      console.log(this.root);
      return this;
      
    }
    
  }//close the insert function





}//close tree search
module.exports = TreeSearch;