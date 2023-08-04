const UnauthorizedError = require("./Error/UnAuthorizedError");
const NotFound=require("./Error/NotFound");
const InvalidType = require("./Error/InvalidType");

const Bank=require("./Bank")

class Account{

  
   
 
    
     static Id=1
     constructor( bankId,bankName,name,balance){
        this.id=Account.Id
         this.bankId=bankId
         this.bankName=bankName
         this.name=name
         this.balance=balance
         this.passbook=[]

     }


   static  newAccount( isAdmin,bankId,name,balance){
  
        try {
            if(isAdmin){
                throw new UnauthorizedError("Unauthorized")
            }
          if (typeof(name) != "string") {
            throw new InvalidType("Invalid name");
          }
          if (typeof(bankId) != "number") {
            throw new InvalidType("Invalid bankId");
          }
          if (typeof(balance) != "number") {
            throw new InvalidType("Invalid balance");
          }
          let bank=Bank.findBank(bankId)
          

           let account=new Account(bank,name,balance)
           
            return account
        
          
        } catch (error) {
           throw error
        }

   }



   getAllAccou




}


module.exports=Account