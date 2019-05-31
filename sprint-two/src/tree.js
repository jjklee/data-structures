var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};


treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length !== 0) {
    let arr = this.children.map(child => {
      return child.contains(target);
    }); 
    if (arr.indexOf(true) > -1) {
      return true;
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild - constant
 contains - exponential
 */
