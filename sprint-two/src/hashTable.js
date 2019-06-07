var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this.size++;
    this._storage[index] = [[k, v]];
  } else {
    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
      } 
    }
    this.size++;
    this._storage[index].push([k, v]);
  }

  if (this.size / this._limit > 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    return;
  }
  for (let i = 0; i < this._storage[index].length; i ++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
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
        var index = getIndexBelowMaxForKey(oldStorage[i][j], limit);
        if (this._storage[index]) {
          this._storage[index].push([oldStorage[i][j][0], oldStorage[i][j][1]]);
        } else {
          this._storage[index] = [[oldStorage[i][j][0], oldStorage[i][j][1]]];
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


