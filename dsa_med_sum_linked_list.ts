// https://leetcode.com/problems/add-two-numbers/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const sumList = new ListNode();
  let carry = 0;
  let curList1 = l1;
  let curList2 = l2;
  let curSum = sumList;
  while (curList1 !== null && curList2 !== null) {
    curSum.val = curList1!.val + curList2!.val + carry;
    if (curSum.val >= 10) {
      curSum.val -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    curList1 = curList1!.next;
    curList2 = curList2!.next;
    if (curList1 !== null && curList2 !== null) {
      curSum.next = new ListNode();
      curSum = curSum.next;
    }
  }
  if (curList1 !== null) {
    curSum.next = new ListNode();
    curSum = curSum.next;
    calculateRemaining(curList1, curSum, carry);
  }
  if (curList2 !== null) {
    curSum.next = new ListNode();
    curSum = curSum.next;
    calculateRemaining(curList2, curSum, carry);
  }
  if (
    curList1 === null &&
    curList2 === null &&
    carry === 1
  ) {
    curSum.next = new ListNode(carry);
    curSum = curSum.next;
  }
  return sumList;
}

function calculateRemaining(
  currentL: ListNode | null,
  currentSum: ListNode,
  carry: number
) {
  while (currentL !== null) {
    currentSum.val = currentL!.val + carry;
    if (currentSum.val >= 10) {
      currentSum.val -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    currentL = currentL!.next;
    if (currentL !== null) {
      currentSum.next = new ListNode();
      currentSum = currentSum.next;
    }
  }
  if (carry === 1) {
    currentSum.next = new ListNode(carry);
    currentSum = currentSum.next;
  }
}

// const l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);
// const l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

// const l1 = new ListNode(0);
// const l2 = new ListNode(0);

// const l1 = new ListNode(5);
// const l2 = new ListNode(5);

const l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(9);
l1.next.next.next = new ListNode(9);
l1.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next.next = new ListNode(9);
const l2 = new ListNode(9);
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);
l2.next.next.next = new ListNode(9);

const sum = addTwoNumbers(l1, l2);
let currentSum = sum;
while (currentSum !== null) {
  console.log(currentSum?.val);
  currentSum = currentSum!.next;
}
