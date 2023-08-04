const UnauthorizedError = require("./Error/UnAuthorizedError");
const NotFound = require("./Error/NotFound");
const InvalidType = require("./Error/InvalidType");
class Bank {
  
  static ID = 1;
  constructor(name) {
    this.id = Bank.ID++;
    this.name = name;
    this.accounts = [];
  }

  static newBank(isAdmin, name) {
    try {
      if (!isAdmin) {
        throw new UnauthorizedError("Unauthorized");
      }
      if (typeof id != "number") {
        throw new InvalidType(" Id should  number ");
      }
      if (typeof name != "string") {
        throw new InvalidType(" Id should  String  ");
      }

      let bank = new Bank(name);

       return bank
    } catch (error) {
      throw error;
    }
  }


  getBankId(){
    return this.id
  }


  updateBankName(bankName){
 try{
   
     if( typeof(bankName)!="string"){
      throw InvalidType(" Invalid bankName format")
     }
    }
 catch(error){

   throw error
 }

  }
}



module.exports = Bank;
