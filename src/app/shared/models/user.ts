import { Address } from "./address";

export class User {
  id: String = '';
  firstName: String = '';
  lastName: String = '';
  email: String = '';
  password: String = '';
  

 
    /**
     *  constructor
     */
    constructor (user?: any) {
      if (user) {
        this.id = user._id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
      }
    }
  }