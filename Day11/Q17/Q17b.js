function add(...nums)
{
  let sum = 0;
  for(let n of nums){
    sum = sum + n;
  }
    console.log(sum);
}
add(1,2,3,4,5);
add(33,55);