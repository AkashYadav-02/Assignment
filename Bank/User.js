const UnauthorizedError = require("./Error/UnAuthorizedError");
const NotFound = require("./Error/NotFound");
const InvalidType = require("./Error/InvalidType");
const Account = require("./Account");
const Bank = require("./Bank");

class User {
  static allUser = [];
  static ID = 0;
  constructor(fullName, isAdmin) {
    this.id = User.ID++;
    this.fullName = fullName;
    this.isAdmin = isAdmin;
    this.accounts = [];
  }
  static newAdmin(fullName) {
    try {
      if (typeof fullName != "string") {
        throw new InvalidType("Invalid FullName");
      }
      return new User(fullName, true);
    } catch (error) {
      throw error;
    }
  }

  // CRUD User
  newUser(fullName) {
    try {
      if (!this.isAdmin) {
        throw new UnauthorizedError("Unauthorized");
      }
      if (typeof fullName != "string") {
        throw new InvalidType("Invalid FullName");
      }
      let userObj = new User(fullName, false);
      User.allUser.push(userObj);
      return userObj;
    } catch (error) {
      throw error;
    }
  }

  static findUser(userId) {
    for (let index = 0; index < User.allUser.length; index++) {
      if (userId == User.allUser[index].id) {
        return index;
      }
    }
    throw new NotFound("bank id Not found ");
  }
  updateUser(userId, newValue) {
    try {
      if (!this.isAdmin) {
        throw new UnauthorizedError("Unauthorized");
      }
      if (typeof userId != "number") {
        throw new InvalidType("Invalid userId");
      }
      let indexOfUser = User.findUser(userId);
      User.allUser[indexOfUser].fullName = newValue;

      return User.allUser[indexOfUser];
    } catch (error) {
      throw error;
    }
  }
  deleteUser(userId) {
    try {
      if (!this.isAdmin) {
        throw new UnauthorizedError("Unauthorized");
      }
      if (typeof userId != "number") {
        throw new InvalidType("Invalid userId");
      }
      let indexOfUser = User.findUser(userId);
      User.allUser.splice(indexOfUser, 1);

      return User.allUser[indexOfUser];
    } catch (error) {
      throw error;
    }
  }
  deleteAllUsers() {
    if (!this.isAdmin) {
      throw new UnauthorizedError("Unauthorized");
    }
    return (User.allUser = []);
  }

  getAllUsers() {
    if (!this.isAdmin) {
      throw new UnauthorizedError("Unauthorized");
    }
    return User.allUser;
  }

  //CRUD on Bank
  newBank(name) {
    try {
      if (!this.isAdmin) {
        throw new UnauthorizedError("Unauthorized");
      }

      let bankObj = Bank.newBank(name);
      return bankObj;
    } catch (error) {
      throw error;
    }
  }

  //  CRUD on ACCOUNT
  findAccount(accountId) {
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
  createAccount(bankId, Balance) {
    try {
      if (this.isAdmin) {
        throw new UnauthorizedError("Unauthorized");
      }

      let bankInfo = Bank.getBankDetail(bankId);

      let account = new Account(
        bankInfo.id,
        bankInfo.name,
        this.fullName,
        Balance
      );
      this.accounts.push(account);
      return account;
    } catch (error) {
      throw error;
    }
  }
  deleteAccount(bankId, accountId) {
    try {
      let indexofAccount = this.findAccount(accountId);
      Bank.deleteAccount(bankId, accountId);
      this.accounts.splice(indexofAccount, 1);
      return this.accounts[indexofAccount];
    } catch (error) {
      throw error;
    }
  }

  updateAccount(accountId, parameter, newValue) {
    try {
      if (this.isAdmin) {
        throw new UnauthorizedError("Unauthorized");
      }

      let indexofAccount = this.findAccount(accountId);
      this.accounts[indexofAccount].updateAccountInfo(parameter, newValue);
      return this.accounts[indexofAccount];
    } catch (error) {
      throw error;
    }
  }

  getAccount(accountId) {
    try {
      let indexofAccount = this.findAccount(accountId);
      this.accounts.splice(indexofAccount, 1);
      return this.accounts[indexofAccount];
    } catch (error) {
      throw error;
    }
  }
  getAllAccount() {
    try {
      return this.accounts;
    } catch (error) {
      throw error;
    }
  }

  deposit(accountId, amount) {
    try {
      if (typeof amount !== "number" || amount <= 0) {
        throw new InvalidType("Invalid amount");
      }

      let accountindex = this.findAccount(accountId);

      let deposit = this.accounts[accountindex].deposit(amount);
      return deposit;
    } catch (error) {
      throw error;
    }
  }
  withdraw(accountId, amount) {
    try {
      if (typeof amount !== "number" || amount <= 0) {
        throw new InvalidType("Invalid amount");
      }

      let accountindex = this.findAccount(accountId);
      lthis.accounts[accountindex].withdraw(amount);

      return newObj;
    } catch (error) {
      throw error;
    }
  }

  getPassBook(accountId) {
    try {
      if (this.isAdmin) {
        throw new UnauthorizedError("you are not user");
      }
      if (typeof accountId != "number") {
        throw new InvalidType("Account ID not valid");
      }
      let indexofAccount = this.findAccount(accountId);
      return this.accounts[indexofAccount].getPassBook();
    } catch (error) {
      return error;
    }
  }

  getNetworth(userId) {
    try {
      if (typeof userId != "number") {
        throw new ValidationError("user ID not valid");
      }
      let indexOfUser = this.findUser(userId);
      let userAccounts = User.allUsers[indexOfUser].getAllAccount();
      let netWorth = 0;
      for (let index = 0; index < userAccounts.length; index++) {
        netWorth = netWorth + userAccounts[index].getBalance();
      }
      return netWorth;
    } catch (error) {
      return error;
    }
  }

  findReceiverAccount(obj, accountId) {
    try {
      if (obj.isAdmin) {
        throw new UnauthorizedError("you are not user");
      }
      if (typeof accountId != "number") {
        throw new ValidationError("receiver account ID not valid");
      }
      for (let index = 0; index < obj.accounts.length; index++) {
        if (accountId == obj.accounts[index].id) {
          return index;
        }
      }
      throw new NotFound("receiver account not found");
    } catch (error) {
      throw error.specificMessage;
    }
  }

  transfer(amount, fromAccoutId, receiverUserId, receiverAccountId) {
    try {
      if (this.isAdmin) {
        throw new UnauthorizedError("you are not user");
      }
      let indexOfReceiver = this.findUser(receiverUserId);
      let reciever = User.allUsers[indexOfReceiver];
      let indexOfReceiverAccount = this.findReceiverAccount(
        reciever,
        receiverAccountId
      );
      let indexOfSenderAccount = this.findAccount(fromAccoutId);
      this.accounts[indexOfSenderAccount].withdraw(amount);
      reciever.accounts[indexOfReceiverAccount].deposit(amount);
      return this.accounts;
    } catch (error) {
      return error;
    }
  }

  getAccountsInBank(bankId) {
    try {
      if (!this.isAdmin) {
        throw new UnauthorizedError("you are not admin");
      }
      if (typeof bankId != "number") {
        throw new ValidationError("user ID not valid");
      }
      let indexOfBank = this.findBank(bankId);
      return Bank.allBanks[indexOfBank];
    } catch (error) {
      return error;
    }
  }
}

let admin = User.newAdmin("Akash Yadav");
let bank1 = admin.newBank("HDFC Bank");
let bank2 = admin.newBank("HDFC Bank");
let user = admin.newUser("yash shinde");
let user1 = admin.newUser("nitesh kamat");
user1.createAccount(1, 2000);
user1.createAccount(2, 56000);
user.createAccount(2, 2000);
user.createAccount(1, 56000);
// user1.deleteAccount(1,1)
// user.createAccount()
console.log(user1);
console.log(admin.getAllUsers());
let a = User.newAdmin("akash")
let u1 = a.newUser("yash" )
let u2 = a.newUser("nitesh")
let b1 = a.newBank("hdfc")
let b2 = a.newBank("Icici")

u1.createAccount(0, 19000)
u1.createAccount(1, 25000)
console.log(u1.getAllAccount());

u1.deposit(0, 7000)
console.log(u1.getAllAccount());

u2.createAccount(0, 15000)
console.log(u2.getAllAccount());

console.log(u2.transfer(50000, 2, 1, 0))
console.log(a.getAccountsInBank(0));
console.log( u1.getNetworth(0))
console.log( u2.getNetworth(1))
console.log(u1.getPassBook(0));

console.log(u2.getPassBook(2));

;