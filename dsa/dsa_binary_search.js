function binarySearch(arr, target) {
  let lower = 0;
  let upper = arr.length - 1;
  console.log(arr, target);
  while (lower <= upper) {
    let middleIndex = Math.floor((upper + lower) / 2);
    let middleValue = arr[middleIndex];
    console.log(
      middleIndex,
      middleValue,
      target,
      upper,
      lower
    );
    if (middleValue === target) {
      return middleIndex;
    }
    if (middleValue > target) {
      upper = middleIndex - 1;
    }
    if (middleValue < target) {
      lower = middleIndex + 1;
    }
  }
  return -1;
}

binarySearch([1, 2, 3, 4, 5, 6], 2);
