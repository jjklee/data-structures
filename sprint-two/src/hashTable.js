var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var assigned = false;
  if (!bucket) {
    this._storage.set(index, [[k, v]]);
    this.size++;
    assigned = true;
  } else if (bucket.length) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        this._storage.get(index)[i][1] = v;
        assigned = true;
      }
    }
    if (!assigned) {
      bucket.push([k, v]);
      this.size++;
    }
  } 
  if (this.size / this._limit > 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (let i = 0; i < this._storage[index].length; i ++) {
    if (this._storage[index][i][0] === k) {
      this.size--;
      delete this._storage[index][i][1];
    }
  }

  if (this.size / this._limit < 0.25) {
    this.resize(this._limit / 2);
  }
};

HashTable.prototype.resize = function(limit) {
  var oldStorage = this._storage;
  this._limit = limit;
  this._storage = LimitedArray(limit);

  for (let i = 0; i < oldStorage.length; i++) {
    if (oldStorage[i]) {
      for (let j = 0; j < oldStorage[i].length; j++) {
        var bucket = oldStorage[i][j];
        var index = getIndexBelowMaxForKey(bucket, limit);
        if (this._storage[index]) {
          this._storage[index].push([bucket[0], bucket[1]]);
        } else {
          this._storage[index] = [[bucket[0], bucket[1]]];
        }
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 linear
 resize - quadratic
 */


