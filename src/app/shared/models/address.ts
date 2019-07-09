export class Address {
    address1: String = '';
    address2: String = '';
    zip: String = '';
    state: String = '';
    city: String = '';
    country: String = '';
  
    /**
     *  constructor
     */
    constructor(address?: any, includeEverything?: boolean) {
      if (address) {
        this.address1 = address.address1;
        this.address2 = address.address2;
        this.zip = address.zip;
        this.state = address.state;
        this.city = address.city;
        this.country = address.country;
      }
    }
  
    /**
     * Get Full Address
     */
    getFullAddress(): String {
      return this.address1 + ' ' +
             this.address2 + ', ' +
             this.city + ', ' +
             this.state + ' ' +
             this.country + ' ' +
             this.zip;
    }
  }