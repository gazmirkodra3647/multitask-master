// complex_app.js

/**
 * This is a complex JavaScript application that simulates a bank account management system.
 */

// Define a BankAccount class
class BankAccount {
  constructor(name, accountNumber, balance) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
      console.log(`Insufficient funds in account ${this.accountNumber}.`);
    }
  }

  getBalance() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}.`);
  }

  toString() {
    return `Account { name: ${this.name}, accountNumber: ${this.accountNumber}, balance: ${this.balance} }`;
  }
}

// Define a Bank class to manage multiple BankAccounts
class Bank {
  constructor() {
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
    console.log(`Added account ${account.accountNumber} (${account.name}) to the bank.`);
  }

  removeAccount(accountNumber) {
    this.accounts = this.accounts.filter(account => account.accountNumber !== accountNumber);
    console.log(`Removed account ${accountNumber} from the bank.`);
  }

  findAccount(accountNumber) {
    const account = this.accounts.find(account => account.accountNumber === accountNumber);
    if (account) {
      console.log(`Found account ${accountNumber}: ${account}`);
    } else {
      console.log(`Account ${accountNumber} not found.`);
    }
  }

  listAccounts() {
    this.accounts.forEach(account => console.log(account.toString()));
  }
}

// Create bank and initialize some accounts
const bank = new Bank();
const account1 = new BankAccount("John", "ACC001", 1000);
const account2 = new BankAccount("Jane", "ACC002", 2000);
const account3 = new BankAccount("Bob", "ACC003", 500);

// Perform various operations on the accounts
bank.addAccount(account1);
bank.addAccount(account2);
bank.addAccount(account3);
console.log();

account1.deposit(500);
account2.withdraw(100);
account3.withdraw(1000);
console.log();

bank.listAccounts();
console.log();

bank.findAccount("ACC002");
bank.findAccount("ACC004");
console.log();

account1.getBalance();
account2.getBalance();
account3.getBalance();
console.log();

bank.removeAccount("ACC003");
console.log();

bank.listAccounts();

// Output:
// Added account ACC001 (John) to the bank.
// Added account ACC002 (Jane) to the bank.
// Added account ACC003 (Bob) to the bank.

// Deposited 500 into account ACC001.
// Withdrawn 100 from account ACC002.
// Insufficient funds in account ACC003.

// Account { name: John, accountNumber: ACC001, balance: 1500 }
// Account { name: Jane, accountNumber: ACC002, balance: 1900 }
// Account { name: Bob, accountNumber: ACC003, balance: 500 }

// Found account ACC002: Account { name: Jane, accountNumber: ACC002, balance: 1900 }
// Account ACC004 not found.

// Account ACC001 balance: 1500.
// Account ACC002 balance: 1900.
// Account ACC003 balance: 500.

// Removed account ACC003 from the bank.

// Account { name: John, accountNumber: ACC001, balance: 1500 }
// Account { name: Jane, accountNumber: ACC002, balance: 1900 }