//8a
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);
//8b
const id1 = 101;
const role = "admin";
const user1 = {id1,role};
//8c
const name = "Rich Dad Poor Dad";
const price = 499;
const books = {
  name,
  price,
  showInfo() {
    console.log(`${name} costs ${price}`);
  }
};
books.showInfo();