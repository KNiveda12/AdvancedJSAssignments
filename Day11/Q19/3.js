//3a
const product = { name: "Pen", price: 10 };
const copy = { ...product };
console.log(copy);
//3b
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged); 
//3c
function maxValue(...nums) {
  return Math.max(...nums);
}
console.log(maxValue(4, 10, 2, 99));
