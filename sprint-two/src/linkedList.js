// Code goes here

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;
  
  list.addToTail = function(value) {
    let newNode = new Node(value);
    list.size++;
    let current;
    if (list.head === null) {
      list.head = newNode;
    } else if (list.head !== null) {
      current = list.head;
      current.next = newNode;
    }
    list.tail = newNode;
  };
  
  list.removeHead = function() {
    if (list.head !== null) {
      let currentHead = list.head.value;
      let newHead = list.head.next;
      delete list.head;
      list.head = newHead;
      list.size--;
      return currentHead;
    }
  };

  list.contains = function(target) {
    var holder = list.head;
    for (let i = 0; i < list.size; i++) {
      if (holder.value === target) {
        return true;
      }
      holder = holder.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   linear
 */