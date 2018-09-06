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
    if(data !== null){
      leaf = new Node(data);
    }
    if(!this.root){
      this.root = leaf;
      console.log(this.root);
      return this;
    }
    let leafData = this.root;
    while(leafData){
      if(data < leafData.data){
        if(leafData.left){
          leafData = leafData.left;
        } else {
          leafData.left = leaf;
          return;
        }
      }
      if(data > leafData.data){
        if(leafData.right){
          leafData = leafData.right;
        } else {
          leafData.right = leaf;
          return;
        }
      }

    }    return this; 
  }//close the insert function


  find(data) {
    //starting place.
    let leafData = this.root;
    while(leafData.data !== null){
      if(leafData < data){
        leafData = leafData.right;
      }
      if(leafData > data){
        leafData = leafData.left;
      }
      if(leafData.data === data){
        return leafData;
      }


    }

    



  }



  remove(node){




  }



   
  serialize() {




  }





  deserialize(){





  }


}//close tree search
module.exports = TreeSearch;