class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // This way both head and tail are cnonnected
    } else {
      this.tail.next = newNode; // This way ne3xt is updated in both head and tail but
      //  value in head reamains the same
      this.tail = newNode;
      // this way the tail is upadated
    }
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
list.push('GOODBYE2');
console.log(list.pop());
console.log(list.pop());
console.log(list);
