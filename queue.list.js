export default class Queue {
  constructor() {
    this.list = {
      head: undefined,
      tail: undefined,
    };
    this.count = 0;
  }

  /**
   * Adds an item to the back of the queue.
   * @param {*} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item) {
    const node = {
      item,
      next: undefined,
      prev: undefined,
    };
    const current = this.list.tail;
    if (current) {
      current.next = node;
    }
    this.list.tail = node;
    this.list.tail.prev = current;
    if (this.list.head === undefined) {
      this.list.head = this.list.tail;
    }
    this.count += 1;
    return this.length();
  }

  /**
   * Removes an item from the front of the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const node = this.list.head;
    this.list.head = this.list.head.next;
    this.list.head.prev = undefined;
    this.count -= 1;
    return node.item;
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.list.head.item;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.list.tail.item;
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length() {
    return this.count;
  }
}
