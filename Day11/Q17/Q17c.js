const user = {
  personName: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const {personName,address:{city,pin}} = user;
console.log(personName);
console.log(city);
console.log(pin);