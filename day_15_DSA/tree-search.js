'use strict';


//create and initialize the node for the root and 
//leafs that has a L and R.
//define outside the tree then have a constructor.
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


  //method that calls removeData for removing node/leaf.
  remove(data){
    this.root = this.removeData(this.root, data);
  }
  removeData(leafData, delNode){
    if(leafData === null){
      return null;
    }
    if(delNode < leafData.data){
      leafData.left = this.removeData(leafData.left, delNode);
      return leafData;
    }
    if(delNode > leafData.data){
      leafData.right = this.removeData(leafData.right, delNode);
      return leafData;
    } else if(leafData.right === null){
      leafData = leafData.left;
      return leafData;
    }
  }

  


  //tried this didnt work?
  //  let serialize = function(data) {
  //     let result = [];
  //     runSerialize(data, result);
  //     return result.join(',');
  //   }

  //   let runSerialize = function(leafData, nodeOut){
  //     if(!leafData){
  //       nodeOut.push('#');
  //       return;
  //     }
  //     nodeOut.push(leafData.data);
  //     runSerialize(leafData.left, nodeOut);
  //     runSerialize(leafData.right, nodeOut);
  //   // }

  serialize(){
    let arrSerial = [];
    const serializeIt = function(data){
      if(!data){
        return;
      }
      arrSerial.push(data.data);
      serializeIt(data.left);
      serializeIt(data.right);
    };
    serializeIt(this.root);
    return arrSerial;
  }



  deserialize(data){
    for(let x = 0; x < data.length; x++){
      this.insert(data[x]);
    }
  }


}//close tree search
module.exports = TreeSearch;