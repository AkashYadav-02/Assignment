const UnauthorizedError = require("./Error/UnAuthorizedError");
const NotFound = require("./Error/NotFound");
const InvalidType = require("./Error/InvalidType");

class Transaction {
  static id = 1;
  constructor(date, transactionType, amount, balance) {
    this.id = Transaction.id++;
    this.date = date;
    this.transactionType = transactionType;
    this.amount = amount;
    this.balance = balance;
  }

  getValue(parameter) {
    try {
      if (typeof parameter != "string") {
        throw new InvalidType("invalid parameter format");
      }
      switch (parameter) {
        case " id":
          return this.id;
        case " date":
          return this.date;
        case " transactionType":
          return this.transactionType;
        case " amount":
          return this.amount;
        case "balance":
          return this.balance;

        default:
          throw new InvalidType("invalid parameter");
      }
    } catch (error) {}
  }
}

module.exports = Transaction;
