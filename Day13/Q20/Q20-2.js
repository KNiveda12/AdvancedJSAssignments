function createBankAccount() {
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        console.log(`Withdrawn: ${amount}`);
      }
    },
    getBalance() {
      console.log(`Current balance: ${balance}`);
      return balance;
    }
  };
}
const account = createBankAccount();
account.deposit(500);     
account.withdraw(200);    
account.withdraw(400);    
console.log(account.balance); 
account.getBalance();

/*balance is defined inside createBankAccount().
It is not returned and not accessible outside the function.
The returned object contains functions (deposit, withdraw, getBalance) that still remember the lexical scope containing balance.
This means: Outside code cannot modify or read balance directly.
Only the inner functions have access to it → encapsulation via closure.*/