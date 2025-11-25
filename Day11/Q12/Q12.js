const calculate = (num = 0) => ({
  square: num * num,
  cube: num * num * num
});
console.log(calculate(5));