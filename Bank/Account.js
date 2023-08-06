const UnauthorizedError = require("./Error/UnAuthorizedError");
const NotFound = require("./Error/NotFound");
const InvalidType = require("./Error/InvalidType");
const Transaction = require("./Transaction");

class Account {
  static Id = 1;
  constructor(bankId, bankName, name, balance) {
    this.id = Account.Id;
    this.bankId = bankId;
    this.bankName = bankName;
    this.name = name;
    this.balance = balance;
    this.passBook = [];
  }
    getBalance(){
      return this.balance
    }
    updateAccountInfo(parameter, newValue) {
    try {
      if (typeof parameter != "string") {
        throw InvalidType(" Invalid parameter ");
      }
      switch (parameter) {
        case " name ":
          if (typeof newValue != "string") {
            throw new InvalidType("Invalid full name Format");
          }
          this.name = newValue;
          break;
        case " bankId ":
          if (typeof newValue != "number") {
            throw new InvalidType("Invalid full name Format");
          }
          this.bankId = newValue;
          break;
        case " bankName ":
          if (typeof newValue != "string") {
            throw new InvalidType("Invalid full name Format");
          }
          this.bankName = newValue;
          break;
        case " balance ":
          if (typeof newValue != "number") {
            throw new InvalidType("Invalid full name Format");
          }
          this.balance = newValue;
          break;

        default:
          throw new NotFound("Parameter not found");
      }
    } catch (error) {
      throw error;
    }
  }

 static  newTransaction(date, transactionType, amount) {
    try {
      if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error("Invalid date format");
      }
      if (
        (typeof transactionType != "string" && transactionType !== "credit") ||
        transactionType !== "debit"
      ) {
        throw new Error("Invalid transaction type");
      }
      if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid amount");
      }
      if (typeof balance !== "number" || balance < 0) {
        throw new Error("Invalid balance");
      }
      let transaction = new Transaction(date, transactionType, amount, this.balance);
      this.passBook.push(transaction);
      return transaction
    } catch (error) {
      throw error;
    }
  }
  getAllTransactionDetails() {
    try {
      return this.passbook;
    } catch (error) {
      throw error;
    }
  }

  findTransactionId(transactionId) {
    try {
      if (typeof transactionId != "number") {
        throw new InvalidType("  invalid transactionId");
      }

      for (let index = 0; index < this.passBook.length; index++) {
        if (transactionId == this.passBook[index].id) {
          return index;
        }
      }
      throw new NotFound("bank id Not found ");
    } catch (error) {
      throw error;
    }
  }
  getTransactionDetailById(transactionId) {
    try {
      let indexOfTransaction = this.findTransactionId(transactionId);

      return this.passBook[indexOfTransaction];
    } catch (error) {
      throw error;
    }
  }

  
  deposit(amount){
    try {
        if(typeof amount != "number" || amount<0){
            throw new InvalidType("amount not valid")
        }
        this.balance = this.balance+amount
        let passBookObj = Account.newTransaction(new Date(), "credited", amount, this.balance)
        this.passBook.push(passBookObj)
        return this.balance
    } catch (error) {
        throw error
    }
}

withdraw(amount){
    try {
        if(typeof amount != "number" || (amount<0 || amount > this.balance)){
            throw new InvalidType("amount not valid")
        }
        this.balance = this.balance-amount
        let passBookObj = Account.newTransaction(new Date(), "debited", amount, this.balance)
        this.passBook.push(passBookObj)
        return this.balance
    } catch (error) {
        throw error
    }
}

getPassBook(){
    return this.passBook
}
}

module.exports = Account;
