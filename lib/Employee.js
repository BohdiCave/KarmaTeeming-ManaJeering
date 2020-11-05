class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    
    getName() {
        console.log(`Name: ${this.name}`);
        return this.name;
    }

    getId () {
        console.log(`ID: ${this.id}`);
        return this.id;
    }

    getEmail(email) {
        console.log(`Email: ${this.email}`);
        return this.email;
    }

    getRole() {
        console.log(`Role: ${this.role}`);
        return this.role;
    }

}

module.exports = Employee;