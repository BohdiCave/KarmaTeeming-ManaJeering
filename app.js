const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

let engineer = "";
let intern = "";
let manager = "";
const employees = [];

inquirer
    .prompt({
            type: "input",
            message: "What is your role on the team?",
            name: "role"
    })
    .then(response => {
        let role = response.role.toLowerCase();
        if (role === "manager") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What are your first and last names?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is your employee ID#?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is your email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is your office number?",
                    name: "office"
                }                
            ])
            .then(response => {
                let name = response.name;
                let id = response.id;
                let email = response.email;
                let office = response.office;
                manager = new Manager(name, id, email, office);
                employees.push(manager);
                addMore();            
            })
        } else {
            console.log("This app is for managers' use only!");
            return;
        }
    })

function addMore() {
    inquirer
        .prompt({
            type: "input",
            message: "Do you want to enter additional employees? Y/N",
            name: "add"
        })
        .then(response => {
            let add = response.add.toLowerCase();
            if (add === "y") {
                addEmployee();
            } else if (add === "n" && employees.length < 2) {
                console.log("Your team must have more than 1 person!");
                addEmployee();
            } else {
                console.log(employees);
                fs.writeFileSync(outputPath, render(employees));
                return;
            }
        })
}
                                
function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the new employee's role on the team?",
                name: "role"
            },
            {
                type: "input",
                message: "What are the new employee's first and last names?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the new employee's id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the new employee's email?",
                name: "email"
            } 
        ])
        .then(response => {
            let empName = response.name;
            let empId = response.id;
            let empEmail = response.email;
            let empRole = response.role.toLowerCase();
            newEmpRole(empName, empId, empEmail, empRole);
        })            
}

function newEmpRole(empName, empId, empEmail, empRole) {
    if (empRole === "engineer") {
        inquirer
            .prompt({
                type: "input",
                message: "What is the new engineer's GitHub user name?",
                name: "github"
            })
            .then(response => {
                let github = response.github;
                engineer = new Engineer(empName, empId, empEmail, github);
                employees.push(engineer);
                addMore();
            })
    } else if (empRole === "intern") {
        inquirer
            .prompt({
                type: "input",
                message: "What school does the new intern attend?",
                name: "college"
            })
            .then(response => {
                let college = response.college;
                intern = new Intern(empName, empId, empEmail, college);
                employees.push(intern);
                addMore();
            })
    }
}