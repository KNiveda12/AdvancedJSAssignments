const name = "Sam";
const age = 21;
const student = {name,age,
  greet() {
    console.log("Hello");
  }
};
student.greet();
console.log(student.name,student.age);