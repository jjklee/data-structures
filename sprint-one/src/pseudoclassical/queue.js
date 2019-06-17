var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storageSize = 0;
  this.currentQueue = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.storageSize + this.currentQueue] = value;
  this.storageSize++;
};

Queue.prototype.dequeue = function () {
  let first = Object.values(this.storage)[0];
  if (this.storageSize > 0) {
    delete this.storage[Object.keys(this.storage)[0]];
    this.storageSize--;
    this.currentQueue++;
    return first;
  }
};

Queue.prototype.size = function () {
  return this.storageSize;
};