var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.storageSize = 0;
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize += 1;
};

stackMethods.pop = function() {
  if (this.size()) {
    let last = this.storage[this.storageSize - 1];
    delete this.storage[this.storageSize - 1];
    this.storageSize -= 1;
    return last;
  }
};

stackMethods.size = function() {
  return this.storageSize;
};