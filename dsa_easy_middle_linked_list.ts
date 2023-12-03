class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// O(N)
function middleNodeV1(
  head: ListNode | null
): ListNode | null {
  if (head === null) {
    return null;
  }
  let count = 1;
  let currentNode = head;
  while (currentNode.next !== null) {
    count += 1;
    currentNode = currentNode.next;
  }
  let middleIndex = count / 2;
  if (middleIndex % 2 === 0) {
    middleIndex = Math.ceil(middleIndex);
  } else {
    middleIndex = Math.floor(middleIndex);
  }
  let middleNode = head;
  while (middleIndex > 0) {
    middleNode = middleNode.next!;
    middleIndex--;
  }
  return middleNode;
}

// O(N / 2)
function middleNodeV2(
  head: ListNode | null
): ListNode | null {
  let node_2x_speed = head;
  let node_x_speed = head;
  while (
    node_2x_speed !== null &&
    node_2x_speed.next !== null
  ) {
    node_x_speed = node_x_speed!.next;
    node_2x_speed = node_2x_speed.next.next;
  }
  return node_x_speed;
}
