//7a
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums); 
//7b
const a = ["x", "y"];
const b = ["z"];
const combined = [...a, ...b];
console.log(combined);
//7c
function printNames(...names) {
  return names;
}
console.log(printNames("A", "B", "C"));
