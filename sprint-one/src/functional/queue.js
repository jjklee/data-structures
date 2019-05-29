var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var storageSize = Object.keys(storage).length;
  var currentQueue = 0;
  someInstance.enqueue = function(value) {
    storage[storageSize + currentQueue] = value;
    storageSize += 1;
    
    console.log(storage);
  };

  someInstance.dequeue = function() {
    if (storageSize > 0) {
      let first = Object.values(storage)[0]
      delete(storage[Object.keys(storage)[0]]);
      storageSize -= 1;
      currentQueue += 1;
      
      console.log(storage);
      return first;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};