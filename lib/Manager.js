const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    
    getOfficeNumber() {
        console.log(`Office #: ${this.officeNumber}`);
        return this.officeNumber;
    }

    getRole() {
        console.log(`Role: ${this.role}`);
        return this.role;
    }
}

// getOffice(office);
// getRole(newRole);

module.exports = Manager;