
const UnauthorizedError = require("./Error/UnAuthorizedError");
const NotFound=require("./Error/NotFound");
const InvalidType = require("./Error/InvalidType");

class PassBook
{

 static Id=1
  
 constructor( )
{
  this.id=PassBook.ID++
  this.transaction=[]
     

}
static newPassbook(){
  try{

  }
  catch(error){
    
  }
}
 
   
createTransation()
{

}

 getTransation()
{
    
}
  
 deleteTransaction()
{
    
}
  
  

}

module.exports=PassBook