class Node<T> {
  item: T | undefined;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(item?: T | undefined) {
    this.item = item;
    this.next = null;
    this.prev = null;
  }
}

export default class Queue<T> {
  tail: Node<T>;
  head: Node<T>;
  _length: number;

  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this._length = 0;
  }

  /**
   * Adds an item to the back of the queue.
   * @param {T} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item: T): number {
    const newLastNode = new Node(item);
    const oldLastNode = this.tail.next;
    // this.head.prev = newLastNode;
    oldLastNode!.prev = newLastNode;
    newLastNode.next = oldLastNode;
    newLastNode.prev = this.tail;
    this.tail.next = newLastNode;
    this._length++;
    return this.length();
  }

  /**
   * Removes an item from the front of the queue.
   * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const removedNode = this.head.prev;
    const newFirstNode = removedNode!.prev;
    removedNode!.prev = null;
    removedNode!.next = null;
    this.head.prev = newFirstNode;
    this._length--;
    return removedNode?.item;
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty(): boolean {
    return this.length() === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.head.prev?.item;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {T | undefined} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.tail.next?.item;
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length(): number {
    return this._length;
  }
}
