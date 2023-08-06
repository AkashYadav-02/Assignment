const UnauthorizedError = require("./Error/UnAuthorizedError");
const NotFound = require("./Error/NotFound");
const InvalidType = require("./Error/InvalidType");
class Bank {
  static allBank = [];
  static ID = 1;
  constructor(name) {
    this.id = Bank.ID++;
    this.name = name;
    this.accounts = [];
  }

  static newBank(name) {
    try {
      let bankObj = new Bank(name);
      Bank.allBank.push(bankObj);

      return bankObj;
    } catch (error) {
      throw error;
    }
  }

  static findBankId(bankid) {
    try {
      if (typeof bankid != "number") {
        throw new InvalidType("  invalid bankid");
      }

      for (let index = 0; index < Bank.allBank.length; index++) {
        if (bankid == allBank[index]) {
          return index;
        }
      }
      throw new NotFound("bank id Not found ");
    } catch (error) {
      throw error;
    }
  }
  static validateBankId(bankId) {
    try {
      if (typeof bankId != "number") {
        throw new InvalidType("  invalid bankid");
      }

      for (let index = 0; index < Bank.allBank.length; index++) {
        if (bankId == Bank.allBank[index].id) {
          return true;
        }
      }

      throw new NotFound("bank id Not found ");
    } catch (error) {
      throw error;
    }
  }

  updateBankDetails(bankid, parameter, newValue) {
    try {
      if (typeof parameter != "string") {
        throw InvalidType(" Invalid parameter ");
      }

      let indexOfbank = Bank.findBankId(bankid);

      switch (parameter) {
        case " name ":
          if (typeof newValue != "string") {
            throw new InvalidType("Invalid full name Format");
          }

        default:
          throw new NotFound("Parameter not found");
      }
    } catch (error) {
      throw error;
    }
  }

  getAllBank() {
    try {
      if (!this.isAdmin) {
        throw new UnauthorizedError("Unauthorized");
      }

      return Bank.allBank;
    } catch (error) {
      throw error;
    }
  }

  deleteBank(bankid) {
    try {
      let bankindex = Bank.findBankId(bankid);

      Bank.allBank.splice(bankindex, 1);
    } catch (error) {
      throw error;
    }
  }

  addAccount(bankId, accountInfo) {
    try {
      let indexOfBank = this.findBankId(bankId);

      this.accounts.push(accountInfo);
    } catch (error) {
      throw error;
    }
  }

  static findAccount(accountId) {
    try {
      if (typeof accountId != "number") {
        throw new InvalidType("  invalid bankid");
      }

      for (let index = 0; index < this.accounts.length; index++) {
        if (accountId == this.accounts[index].id) {
          return index;
        }
      }
      throw new NotFound("bank id Not found ");
    } catch (error) {
      throw error;
    }
  }

  static deleteAccount(bankId, accountId) {
    try {
      let indexofAccount = Bank.findAccount(accountId);

      this.accounts.splice(indexofAccount, 1);
    } catch (error) {
      throw error;
    }
  }

  static getBankDetail(bankid) {
    try {
      if (typeof bankid != "number") {
        throw new InvalidType("  invalid bankid");
      }

      for (let index = 0; index < Bank.allBank.length; index++) {
        if (bankid == Bank.allBank[index].id) {
          return Bank.allBank[index];
        }
      }

      throw new NotFound("bank id Not found ");
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Bank;
