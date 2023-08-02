class Contact{

    static Id=0
    constructor(fullName ){
    this.Id=Contact.Id++
    this.fullName=fullName
    this.contactInfos=[]

}
getcontactInfoByid(contactInfoId){
    let [indexOfContactInfo, isContactFind] = this.findContact(contactInfoId);

    if(!isContactFind){

        return "Contact Info Not found "
        }
     return this.contactInfos[indexOfContactInfo]
   

  
}

deleteContactDetails(){
   this.contactInfos.splice(0,this.contactInfos.length)
   return "All contacts Info deleted"
}
deleteContactDetailsById(contactInfoId){
  let [indexOfContactInfo, isContactFind] = this.findContact(contactInfoId);

  if(!isContactFind){

      return "Contact Info Not found "
      }
      this.contactInfos.splice(contactInfoId,1)
      return `Contact Info  ID${contactInfoId} deleted`
    

}

findContact(contactId) {
    for (let index = 0; index < this.contactInfos.length; index++) {
      if (contactId == this.contactInfos[index].Id) {
        return [index, true];
      }
    }
    return [-1, false];
  }

}
module.exports=Contact