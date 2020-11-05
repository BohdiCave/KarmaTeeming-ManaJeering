const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {        
        super(name, id, email); 
        this.school = school;
        this.role = "Intern";
    }
    
    getSchool() {
        console.log(`College or University: ${this.school}`);
        return this.school;
    }

    getRole() {
        console.log(`Role: ${this.role}`);
        return this.role;
    }
}

// getCollege(college);
// getRole(newRole);

module.exports = Intern;