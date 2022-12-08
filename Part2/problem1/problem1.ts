function fiboTopDown(n: number) {
  // Your code here
  let count: number = 0;
  let mem: number[] = [];
  for (let i = 0; i <= n; i++) {
    count++;
    if (i <= 1) {
      mem[i] = i;
    } else {
      mem[i] = mem[i - 1] + mem[i - 2];
    }
  }
  return mem[n];
}

export default fiboTopDown;

