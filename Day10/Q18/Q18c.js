const library = {
  book1: {
    title: "Rich Dad Poor Dad",
    pages: 256
  }
};
console.log(library?.book1?.availability);
console.log(library?.book1?.author??"N/A");