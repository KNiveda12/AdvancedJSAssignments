if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);//20 var is function scoped not restricted to the block so can be accessed outside the block.
console.log(x);// reference error let is block scoped , block means between {} so cannot be accessed outside the block.