const UnauthorizedError = require("./Error/UnAuthorizedError");
const NotFound=require("./Error/NotFound");
const InvalidType = require("./Error/InvalidType");


class Transaction{
     static id=1
    constructor( date,transactionType,amount,balance  )
    {   
        this.id=Transaction.id++
        this.date=date
        this.transactionType=transactionType
        this.amount=amount
        this.balance=balance
    
    }

    newTransation( transactionType,amount,balance)
    {
     
          try{
            if (typeof transactionType != "string") {
                throw new InvalidType("Invalid transactionType");
              }
              if (typeof amount != "number") {
                throw new InvalidType("Invalid amount");
              }
              if (typeof balance != "number") {
                throw new InvalidType("Invalid balance");
              }
              if(transactionType.toLocaleLowerCase==="credit")
              {
                this.transactionType="credit";
              }
              else{
                this.transactionType="debit";
              }

            let date=new Date();

            new Transaction(date,transactionType,amount,balance)

          
          }
          catch(error){
            throw error
          }







    }


    // updateTransaction()
    

}

module.exports= Transaction