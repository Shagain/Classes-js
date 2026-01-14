// Write a JavaScript program that creates a class called BankAccount
//  with properties for account number, account holder name, and
//   balance. Include methods to deposit, withdraw, and transfer 
//   money between accounts. Create multiple instances of the 
//   BankAccount class and perform operations such as depositing,
//    withdrawing, and transferring money.

class BankAccount {
  constructor(AccountNumber, AccountHolderName, Balance) {
    this.AccountNumber = AccountNumber;
    this.AccountHolderName = AccountHolderName;
    this.Balance = Balance;
  }

  deposite(addAmount) {
    // if (AccountNumber === this.AccountNumber) {
    let newAmunt = this.Balance + addAmount;
    this.Balance = newAmunt;
    return this.Balance;
    // }
    // else {
    // console.log("Sorry Account detail Wrong")
  }

  Withdraw(subAmount) {
    if (subAmount <= this.Balance) {
      let AfterSubAmount = this.Balance - subAmount;
      this.Balance = AfterSubAmount;
      return this.Balance;
    }
    else {
      console.log("Not sufficeint fund !")
      return null;
    }
  }

  Trasaction(AccountNumber, subAmount) {
    if (subAmount <= this.Balance) {
      deposite(addAmount);
      Withdraw(subAmount);
    }
  }
}


