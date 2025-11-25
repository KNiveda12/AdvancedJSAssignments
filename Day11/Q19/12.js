//12a
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user?.address?.city);
//12b
console.log(user.job?.title);
//12c
const data = {
  person: {
    name: "Sam"
  }
};
console.log(data?.person?.contact);
