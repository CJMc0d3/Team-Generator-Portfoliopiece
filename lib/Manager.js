const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, officenumber) {
        super(name, email, id);
        this.officenumber = officenumber;
    }
    getOfficeNumber() {
        return this.officenumber;
    }
    getRole() {
        return 'Manager'
    }
};

module.exports = Manager;