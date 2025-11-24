//11a
const original = [1, 2, 3];
const clone = [...original];
console.log(clone);
//11b
const arr = [1, 2, 3];
const newArr = [100, ...arr];
console.log(newArr);
//11c
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 99, c: 3 };
const merged = { ...obj1, ...obj2 }; 
console.log(merged);