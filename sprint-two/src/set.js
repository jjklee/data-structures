var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.includes(item)) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  let index = this._storage.indexOf(item);
  if (index > -1) {
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
