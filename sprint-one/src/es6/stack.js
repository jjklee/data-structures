class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storageSize = 0;
  }
  
  push(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  }

  pop() {
    let last = this.storage[this.storageSize - 1];
    if (this.storageSize > 0) {
      delete this.storage[this.storageSize - 1];
      this.storageSize--;
    }
    return last;
  }

  size () {
    return this.storageSize;
  }
}

var stack = new Stack();
