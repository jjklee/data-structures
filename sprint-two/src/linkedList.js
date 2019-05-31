// Code goes here

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = new Node(value);
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
      list.head = list.head.next;
      let currentHead = list.head;
      delete list.head;
      return currentHead;
    }
  };

  list.contains = function(target) {
    // for (let key in target) {
    //   if (Object.values(target).includes(target)) {
    //     return true;
    //   }
    //   return false;
    // }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

linkedList = LinkedList();
/*
 * Complexity: What is the time complexity of the above functions?
 */
