class ContactDetails{
 static Id=0

    constructor(typeOfContact,valueOfContact){
    this.Id=ContactDetails.Id++
    this.typeOfContact=typeOfContact
    this.valueOfContact=valueOfContact
    }
    updateContactInfo(newValue) {
        return this.valueOfContact = newValue
    }

    

}

module.exports=ContactDetails