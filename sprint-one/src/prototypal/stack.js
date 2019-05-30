var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.storageSize = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize += 1;
};

stackMethods.pop = function() {
  if (this.storageSize > 0) {
    let last = this.storage[this.storageSize - 1];
    delete this.storage[this.storageSize - 1];
    this.storageSize -= 1;
    return last;
  }
};

stackMethods.size = function() {
  return this.storageSize;
};
