class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.headNode = null;
      this.tailNode = null;
      this.length = 0;
    }
  
    append(value) {
      const newNode = new Node(value);
  
      if (!this.headNode) {
        this.headNode = newNode;
        this.tailNode = newNode;
      } else {
        this.tailNode.nextNode = newNode;
        this.tailNode = newNode;
      }
  
      this.length++;
    }
  
    prepend(value) {
      const newNode = new Node(value);
  
      if (!this.headNode) {
        this.headNode = newNode;
        this.tailNode = newNode;
      } else {
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
      }
  
      this.length++;
    }
  
    size() {
      return this.length;
    }
  
    head() {
      return this.headNode;
    }
  
    tail() {
      return this.tailNode;
    }
  
    at(index) {
      if (index < 0 || index >= this.length) {
        return null;
      }
  
      let currentNode = this.headNode;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
  
      return currentNode;
    }
  
    pop() {
      if (!this.headNode) {
        return null;
      }
  
      let currentNode = this.headNode;
  
      if (!currentNode.nextNode) {
        this.headNode = null;
        this.tailNode = null;
        this.length--;
        return currentNode;
      }
  
      while (currentNode.nextNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
  
      const lastNode = currentNode.nextNode;
      currentNode.nextNode = null;
      this.tailNode = currentNode;
      this.length--;
  
      return lastNode;
    }
  
    contains(value) {
      let currentNode = this.headNode;
  
      while (currentNode) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }
  
      return false;
    }
  
    find(value) {
      let currentNode = this.headNode;
      let index = 0;
  
      while (currentNode) {
        if (currentNode.value === value) {
          return index;
        }
        currentNode = currentNode.nextNode;
        index++;
      }
  
      return null;
    }
  
    toString() {
      let currentNode = this.headNode;
      let string = "";
  
      while (currentNode) {
        string += `(${currentNode.value}) -> `;
        currentNode = currentNode.nextNode;
      }
  
      string += "null";
      return string;
    }
  }

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
console.log(list.toString());
list.prepend(0);
console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(2));
console.log(list.pop());
console.log(list.toString());
console.log(list.contains(1));
console.log(list.contains(3));
console.log(list.find(2));
console.log(list.find(4));