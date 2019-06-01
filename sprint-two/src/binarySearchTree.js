var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function (value) {
  var newTree = new BinarySearchTree(value);
  if (value > this.value) {
    if (this.right !== null) {
      this.right.insert(value);
    } else {
      this.right = newTree;
    }
  } else {
    if (this.left !== null) {
      this.left.insert(value);
    } else {
      this.left = newTree;
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  var condition = false;
  
  var helper = function(obj) {
    if (obj === null) {
      return;
    }
    if (obj.value === value) {
      condition = true;
    }
    helper(obj.right);
    helper(obj.left);
    
  };
  
  helper(this);
  return condition;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  var helper = function(obj) {
    cb(obj.value);
    if (obj.left !== null) {
      helper(obj.left);
    }
    if (obj.right !== null) {
      helper(obj.right);
    } 
  };
  helper(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert - log
 contains - log
 depthFirstLog - linear
 */
