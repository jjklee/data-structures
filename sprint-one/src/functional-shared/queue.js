var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.storageSize = 0;
  newQueue.currentQueue = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.storageSize + this.currentQueue] = value;
  this.storageSize += 1;
};

queueMethods.dequeue = function() {
  if (this.storageSize > 0) {
    let first = Object.values(this.storage)[0];
    delete this.storage[Object.keys(this.storage)[0]];
    this.currentQueue += 1;
    this.storageSize -= 1;
    return first;
  }
};

queueMethods.size = function() {
  return this.storageSize;
};

var queue = Queue();
