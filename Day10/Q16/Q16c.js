const greet = (name) => {
  return (name)?`Hello, ${name}`: `Hello, Guest`;
}
console.log(greet("Niveda"));
console.log(greet());