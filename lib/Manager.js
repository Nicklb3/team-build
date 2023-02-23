// Import parent class
const Employee = require ('./Employee');

// Create a Manager class that extends from Employee class and includes a school property
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // Override role to Manager
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;