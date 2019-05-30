class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storageSize = 0;
    this.currentQueue = 0;
  }
  
  enqueue(value) {
    this.storage[this.storageSize + this.currentQueue] = value;
    this.storageSize++;
  }

  dequeue() {
    let first = Object.values(this.storage)[0];
    if (this.storageSize > 0) {
      delete this.storage[Object.keys(this.storage)[0]];
      this.currentQueue++;
      this.storageSize--;
      return first;
    }
  
  }

  size() {
    return this.storageSize;
  }
}

var newQueue = new Queue();