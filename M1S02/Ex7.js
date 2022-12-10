const findPrimes = (n) => {
  const arr = Array(n + 1).fill(true);
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (arr[i] === true) {
      let j = i * i;
      while (j <= n) {
        arr[j] = false;
        j += i;
      }
    }
  }
  return arr;
};

const countPrimes = (arr) => {
  let numberOfPrimes = 0;
  for (let i = 2; i < arr.length; i += 1) {
    if (arr[i]) numberOfPrimes += 1;
  }
  return numberOfPrimes;
};

const printArr = (arr) => {
  arr.forEach((j, i) => {
    if (j) console.log(i);
  });
};

const numberPrimes = countPrimes(findPrimes(1000));
printArr(findPrimes(1000));
console.log(`total = ${numberPrimes}`);
