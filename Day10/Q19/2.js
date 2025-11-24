const square = (n) => n*n;
console.log(square(5));

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); // Here test is an arrow function.

//Arrow functions do not bind this to obj.

//Instead, this comes from the outer scope (likely the global scope or module scope).

//In the global scope, this.value is usually undefined.

const object1 = {
  value1: 50,
  test1() {
    console.log(this.value1);
  }
};
object1.test1();