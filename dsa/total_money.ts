// https://leetcode.com/problems/calculate-money-in-leetcode-bank
function totalMoney(n: number): number {
  let sum = 0;
  let increaseByMonday = 0;
  for (let i = 0; i < n; i++) {
    let extra = i % 7;
    if (extra === 0 && i >= 7) {
      increaseByMonday += 1;
    }
    let amount = 1 + extra + increaseByMonday;
    sum += amount;
  }
  return sum;
}

console.log(totalMoney(1));
console.log(totalMoney(4));
console.log(totalMoney(10));
console.log(totalMoney(20));
