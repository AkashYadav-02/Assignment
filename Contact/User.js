const Contact = require("./Contact");
const ContactDetail = require("./ContactDetail");
const UnAuthorized = require("./Error/UnAuthorizedError");
const NotFound = require("./Error/NotFound");
const InvalidType = require("./Error/InvalidType");
class User {
  static allUser = [];
  static ID = 1;

  constructor(fullName, isAdmin, gender, country) {
    this.ID = User.ID++;
    this.fullName = fullName;
    this.isAdmin = isAdmin;
    this.gender = gender;
    this.country = country;
    this.contacts = [];
  }

  static newAdmin(fullName, gender, country) {
    try {
      if (typeof fullName != "string") {
        throw new InvalidType("Invalid FullName");
      }
      if (typeof gender != "string") {
        throw new InvalidType("Invalid gender");
      }
      if (typeof country != "string") {
        throw new InvalidType("Invalid country");
      }
      return new User(fullName, true, gender, country);
    } catch (error) {
      //
      throw error;
    }
  }

  newUser(fullName, gender, country) {
    try {
      if (!this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }
      if (typeof fullName != "string") {
        throw new InvalidType("Invalid FullName");
      }
      if (typeof gender != "string") {
        throw new InvalidType("Invalid gender");
      }
      if (typeof country != "string") {
        throw new InvalidType("Invalid country");
      }
      let user = new User(fullName, false, gender, country);
      User.allUser.push(user);

      return user;
    } catch (e) {
      throw e;
    }
  }
  getAllUsers() {
    try {
      if (!this.isAdmin) {
        throw new UnAuthorized("Unauthorized");
      }
      return User.allUser;
    } catch (error) {
      throw error;
    }
  }

  getUserById(userId) {
    // console.log(userId)

    try {
      if (!this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }
      let indexOfuser = User.findUser(userId);
      return User.allUser[indexOfuser];
    } catch (error) {
      throw error;
    }
  }
  static findUser(userId) {
    try {
      for (let index = 0; index < User.allUser.length; index++) {
        // console.log(User.allUser[index]);
        if (userId == User.allUser[index].ID) {
          return index;
        }
      }
    } catch (error) {
      throw error;
    }
  }

  updateUsers(userId, parameter, newValue) {
    try {
      if (!this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }
      let indexOfuser = User.findUser(userId);

      switch (parameter) {
        case " fullName ":
          if (typeof newValue != "string") {
            throw new InvalidType( "Invalid full Name Format");
          }
          User.allUser[indexOfuser].fullName = newValue;
          break;
        case " gender ":
          if (typeof newValue != "string") {
            throw new InvalidType( "Invalid gender Format ");
          }
          User.allUser[indexOfuser].gender = newValue;
          break;
        case " country ":
          if (typeof newValue != "string") {
            throw new InvalidType("Invalid country Format");
          }
          User.allUser[indexOfuser].country = newValue;
          break;
        default:
           throw new NotFound("Parameter not found");
      }
    } catch (error) {
      throw error;
    }
  }

  deleteUser(userId) {
    try {
      if (!this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }
      let indexOfuser  = User.findUser(userId);
      
      User.allUser.splice(indexOfuser, 1);
    } catch (error) {
      throw error;
    }
  }

  createContact(contactfullName) {
    try {
      if (this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }
      if (typeof contactfullName != "string") {
        throw new InvalidType(" Invalid contactfullName");
      }
      let contactCreated = new Contact(contactfullName);
      this.contacts.push(contactCreated);
      return contactCreated;
    } catch (error) {
      throw error;
    }
  }

  getAllContacts(userId) {
    try {
      if (this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }
      User.findUser(userId);

      return this.contacts;
    } catch (error) {
      throw error;
    }
  }

  findContact(contactId) {
    try {
      for (let index = 0; index < this.contacts.length; index++) {
        if (contactId == this.contacts[index].Id) {
          return index;
        }
      }
      throw new NotFound("ContactId Not Found");
    } catch (error) {
      throw error;
    }
  }

  updateContact(contactId, newValue) {
    try {
      if (this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }
      if (typeof newValue != "string") {
        throw new InvalidType(" Invalid newValue");
      }

      let indexOfContact = this.findContact(contactId);

      this.contacts[indexOfContact] = newValue;
      return contacts[indexOfContact];
    } catch (error) {
      throw error;
    }
  }

  createContactDetails(contactId, typeOfContact, valueOfContact) {
    try {
      if (this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }
      if (typeof typeOfContact != "string") {
        throw new InvalidType(" Invalid typeOfContact");
      }
      if (typeof valueOfContact != "string") {
        throw new InvalidType(" Invalid valueOfContact");
      }
      let indexOfContact = this.findContact(contactId);

      let contactDetailsCreated = new ContactDetail(
        typeOfContact,
        valueOfContact
      );

      this.contacts[indexOfContact].contactInfos.push(contactDetailsCreated);

      return contactDetailsCreated;
    } catch (error) {
      throw error;
    }
  }

  getAllContactInfo(contactId) {
    try {
      let index=  this.findContact(contactId)
       
      return contacts[index].getAllContactInfo()

        
    } catch (error) {
      throw error;
    }
  }
  getContactByid(contactId) {
    try {
      if (this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }
    
      let indexOfContact = this.findContact(contactId);

      return this.contacts[indexOfContact];
    } catch (error) {
      throw error;
    }
  }
  getContactInfoByid(contactId, contactInfoId) {
    try {
      if (this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }

      let indexOfContact = this.findContact(contactId);

      return this.contacts[indexOfContact].getcontactInfoByid(contactInfoId);
    } catch (error) {
      throw error;
    }
  }

  deleteContact(contactId) {
    try {
      if (this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }
      let indexOfContact = this.findContact(contactId);

      this.contacts[indexOfContact].deleteContactDetails();
      this.contacts.splice(indexOfContact, 1);
    } catch (error) {
      throw error;
    }
  }

  deleteContactInfo(contactId) {
    try {
      if (this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }
      let [indexOfContact, isContactExist] = this.findContact(contactId);
      if (!isContactExist) {
        return " Contact Not Found";
      }
      this.contacts[indexOfContact].deleteContactDetails();
      //  this.contacts.splice(indexOfContact, 1);
    } catch (error) {
      throw error;
    }
  }
  deleteContactInfoById(contactId, contactInfoId) {
    try {
      if (this.isAdmin) {
        throw new UnAuthorized("UnAuthorized");
      }
      let indexOfContact = this.findContact(contactId);

      this.contacts[indexOfContact].deleteContactDetailsById(contactInfoId);
    } catch (error) {
      throw error;
    }
  }
}

let admin = User.newAdmin("Akash Yadav", "M", "India");
let user1 = admin.newUser("aman Yadav", "M", "India");
let user2 = admin.newUser("om Yadav", "M", "India");

user1.createConact("nitesh");
user1.createContact("rohit");
user1.createContactDetails(0, "mobile", "1234561133");
user1.createContactDetails(0, "mobile", "1234561133");
console.log(user1);
