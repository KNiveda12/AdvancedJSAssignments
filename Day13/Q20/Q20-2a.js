function createBankAccount() {
  let balance = 0;
  let transactionHistory = [];

  return {
    deposit(amount) {
      balance += amount;
      transactionHistory.push({ type: "deposit", amount });
      console.log(`Deposited: ${amount}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        transactionHistory.push({ type: "failed withdrawal", amount });
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        transactionHistory.push({ type: "withdraw", amount });
        console.log(`Withdrawn: ${amount}`);
      }
    },
    getBalance() {
      console.log(`Current balance: ${balance}`);
      return balance;
    },
    getHistory() {
      console.log("Transaction History:", transactionHistory);
      return transactionHistory;
    }
  };
}
const account = createBankAccount();
account.deposit(300);     
account.withdraw(100);    
account.withdraw(500);    
account.getHistory();

/*Closures keep both balance and transactionHistory alive, even after createBankAccount() has finished executing.
The returned object still has access to them through the inner functions.
No outside code can modify these variables directly.
They are stored in the function’s lexical environment, protected from external access.*/
