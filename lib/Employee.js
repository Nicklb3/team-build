//Create parent class with name, id and email properties and methods
class Employee {
    constructor (name, id , email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.name;
    }

    getEmail () {
       
        return this.email;
    }
    getRole () {
        return 'employee';
    }
}

module.exports = Employee;