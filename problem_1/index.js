// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// const below = 1000;
// const multipleOf = [3, 5];
// let sumOf3 = 0;
// let sumOf5 = 0;
// let sumOf15 = 0;
// let sumOfAll = 0;

// for (let i = 0; i < 1000; i++) {
//   if (i % 3 === 0) {
//     sumOf3 += i;
//   }
//   if (i % 5 === 0) {
//     sumOf5 += i;
//   }
//   if (i % 15 === 0) {
//     sumOf15 += i;
//   }
// }

// sumOfAll = sumOf3 + sumOf5 - sumOf15;

// console.log(sumOfAll);

const target = 999;

const sumDivisibleBy = (n) => {
  const p = Math.floor(target / n);
  return (n * (p * (p + 1))) / 2;
};

console.log(sumDivisibleBy(3), sumDivisibleBy(5), sumDivisibleBy(15));
