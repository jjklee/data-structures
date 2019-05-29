var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  var storageSize = Object.keys(storage).length;
  
  // Implement the methods below
  someInstance.push = function(value) {
      // console.log(i, storageSize, storage[i]);
        storage[storageSize] = value;
        console.log(storageSize, storage);
        storageSize += 1;
  };

  someInstance.pop = function() {
    if (storageSize > 0) {
      let last = storage[storageSize-1];
      delete(storage[storageSize - 1]);
      storageSize -= 1;
      return last;
    }
  };

  someInstance.size = function() {
    return storageSize
  };

  return someInstance;
};

var stack = Stack();