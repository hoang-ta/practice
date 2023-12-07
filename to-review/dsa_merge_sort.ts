export default function recursiveMergeSort(
  arr: Array<number>
): Array<number> {
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middleIndex);
  const rightArray = arr.slice(middleIndex, arr.length);
  const sortedLeftArray = recursiveMergeSort(leftArray);
  const sortedRightArray = recursiveMergeSort(rightArray);
  console.log(sortedLeftArray, sortedRightArray);
  const newArr: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (
    leftIndex < sortedLeftArray.length &&
    rightIndex < sortedRightArray.length
  ) {
    if (
      sortedLeftArray[leftIndex] >
      sortedRightArray[rightIndex]
    ) {
      newArr.push(sortedRightArray[rightIndex]);
      rightIndex++;
    } else {
      newArr.push(sortedLeftArray[leftIndex]);
      leftIndex++;
    }
  }
  while (leftIndex < sortedLeftArray.length) {
    newArr.push(sortedLeftArray[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < sortedRightArray.length) {
    newArr.push(sortedRightArray[rightIndex]);
    rightIndex++;
  }

  return newArr;
}

// console.log(recursiveMergeSort([]));
// console.log(recursiveMergeSort([1]));
// console.log(recursiveMergeSort([1, 2]));
// console.log(recursiveMergeSort([2, 1]));
// console.log(recursiveMergeSort([3, 1, 2]));
console.log(recursiveMergeSort([3, 1, 2, 4, 6, 0]));
