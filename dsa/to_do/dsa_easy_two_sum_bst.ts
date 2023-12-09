// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function findTarget(
  root: TreeNode | null,
  k: number
): boolean {
  if (root === null) {
    return false;
  }
  let currentRoot = root.val;
  let sum = root.val;
  while (currentLeft !== null || currentRight !== null) {
    let currentLeft = root.left;
    let currentRight = root.right;
    if (sum === k) return true;
    if (sum < k) {
      sum += currentRight?.val || 0;
      sum = currentRight!;
    }
    let sumLeft = currentRoot.val + (currentLeft?.val || 0);
    let sumRight =
      currentRoot.val + (currentRight?.val || 0);
    if (sumLeft === k || sumRight === k) {
      return true;
    }
    if (sumLeft > k) {
      currentRoot = currentLeft!;
    } else {
      currentRoot = currentRight!;
    }
  }
  return false;
}
