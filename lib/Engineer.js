const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }
    
    getGitHub() {
        console.log(`GitHub Profile: ${this.github}`);
        return this.github;
    }

    getRole() {
        console.log(`Role: ${this.role}`);
        return this.role;
    }
}

// getRole(newRole);
// getGitHub(github);

module.exports = Engineer;
