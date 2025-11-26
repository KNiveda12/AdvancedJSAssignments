console.log("Begin"); 
setTimeout(() => { console.log("Timeout Task"); }, 0); 
Promise.resolve().then(() => { console.log("Promise Task"); }); 
console.log("End");

/* 1.console.log("Begin"); - This is synchronous, so it runs immediately.
2.setTimeout(..., 0) - schedules a macrotask to run after the current call stack is empty.It does not run immediately.
3.Promise.resolve().then(...) - schedules a microtask to run after the current synchronous code finishes, but before macrotasks.
4.console.log("End"); - This is synchronous, so it runs immediately.

so the order of execution is as follows ---
synchronous code first i.e Begin & End
Next Micro task i.e Promise Task
Next Macro task i.e Timeout Task*/