const profile = {
  name: "Niveda",
  age: 23,
  address: {
    city: "Hyderabad",
    zipcode: "500087"
  }
};
const updates = {
  age: 25,
  address: {
    zipcode: "500092",
    country: "India"
  }
};
const mergeObj = {...profile,...updates, address: {...profile.address,...updates.address}};
console.log(mergeObj);