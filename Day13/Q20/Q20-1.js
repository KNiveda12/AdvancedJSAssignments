function createCounter() {
  let count = 0;  
  return {
    increment() {
      count++;
      console.log("Current count:", count);
    },
    decrement() {
      count--;
      console.log("Current count:", count);
    },
    display() {
      console.log("Current count:", count);
    }
  };
}
const counter = createCounter();
counter.increment();  
counter.increment();  
counter.decrement();  
counter.display();    
/*count is defined inside createCounter.
increment, decrement, and display are inner functions.
These inner functions “remember” the environment in which they were created — including the value of count.
Even after createCounter finishes running, count stays alive because the returned object still references it.
This is how closure works*/

console.log("----------");
const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();  
counter1.increment();  

counter2.increment();  
counter2.decrement();  

counter1.display();    
counter2.display();  
/*When multiple counters are created then - Each call to createCounter() creates a new independent closure, with its own count variable.
Therefore, their states are independent.*/