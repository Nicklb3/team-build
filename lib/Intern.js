// Import parent class
const Employee = require ('./Employee');

// Create an Intern class that extends from Employee class and includes a school property
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    // Override role as Intern
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;