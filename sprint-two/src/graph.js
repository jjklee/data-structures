// Instantiate a new graph
var Graph = function() {
  this.node = [];
  this.edges = [];
  this.numOfNodes = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.node.push(node);
  this.edges[node] = [];
  this.numOfNodes++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.numOfNodes; i++) {
    return this.node.includes(node);
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.numOfNodes; i++) {
    if (this.edges[i] !== undefined) {
      for (let j = 0; j < this.edges[i].length; j++) {
        if (this.edges[i][j] === node) {
          this.edges[i].splice(j, 1);
        }
      }
    }
    if (this.node[i] === node) {
      this.node.splice(i, 1);
      this.edges.splice(i, 1);
      this.numOfNodes--;
    }
  }
  return node;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.numOfNodes; i++) {
    if (this.edges[fromNode].includes(toNode) && this.edges[toNode].includes(fromNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let fromIndex = this.edges.indexOf(fromNode);
  let toIndex = this.edges.indexOf(toNode);
  this.edges[fromNode].splice(toIndex, 1);
  this.edges[toNode].splice(fromIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.node.map(value => cb(value));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

