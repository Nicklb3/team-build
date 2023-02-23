// Imported parent class
const Employee = require ('./Employee');

// Created an Engineer class thats extends from Employee class and includes github username and property
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // Overrides the role as Engineer
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;