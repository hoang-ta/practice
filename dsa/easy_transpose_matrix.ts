// https://leetcode.com/problems/transpose-matrix/
function transpose(matrix: number[][]): number[][] {
  const transpose: number[][] = [];
  for (
    let rowIndex = 0;
    rowIndex < matrix.length;
    rowIndex++
  ) {
    const row = matrix[rowIndex];
    for (
      let columnIndex = 0;
      columnIndex < row.length;
      columnIndex++
    ) {
      if (!transpose[columnIndex]) {
        transpose[columnIndex] = [];
      }
      transpose[columnIndex][rowIndex] = row[columnIndex];
    }
  }
  return transpose;
}
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
