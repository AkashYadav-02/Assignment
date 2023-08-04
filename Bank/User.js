const UnauthorizedError = require("./Error/UnAuthorizedError");
const NotFound = require("./Error/NotFound");
const InvalidType = require("./Error/InvalidType");
const Account = require("./Account");
class User {
  static allUser = [];
  static ID = 1;

  constructor(fullName, isAdmin) {
    this.ID = User.ID++;
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
  newUser(fullName) {
    try {
      if (!isAdmin) {
        throw new UnauthorizedError("Unauthorized");
      }
      if (typeof fullName != "string") {
        throw new InvalidType("Invalid FullName");
      }
      return new User(fullName, false);
    } catch (error) {
      throw error;
    }
  }
  getAllUsers() {
    if (!this.isAdmin) {
      throw new UnauthorizedError("Unauthorized");
    }
    return User.allUser;
  }

  findBank(bankId){
    try {
        if(typeof bankId != "number"){
            throw new InvalidType("bankId not valid")
        }
        for (let index = 0; index < User.allBanks.length; index++) {
            if(bankId == User.allBanks[index].getBankId()){
                return index
            }
        }
        throw new NotFound("bankId not found")
    } 
    catch (error) {
        throw error  
    }
}

  createAccount(bankId, Balance) {
    try {
      if (this.isAdmin) {
        throw new UnauthorizedError("Unauthorized");
      }
   
      let account = new Account(this.isAdmin, bankId, this.name, Balance);
      this.accounts.push(account);
      
    } catch (error) {
      throw error;
    }
  }
}
