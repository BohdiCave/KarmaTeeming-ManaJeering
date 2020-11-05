const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

let engineer = "";
let intern = "";
let manager = "";

inquirer
    .prompt([
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
            message: "What is your role on the team?",
            name: "role"
        }
    ])
    .then(function(response) {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let role = response.role.toLowerCase();

        if (role === "engineer") {
            inquirer
                .prompt({
                    type: "input",
                    message: "What is your GitHub user name?",
                    name: "github"
                })
                .then(function(response) {
                    let github = response.github;
                    console.log(`${github} is an engineer of human souls!`);
                    engineer = new Engineer(name, id, email, github);
                    console.log(engineer);
                })
        } else if (role === "manager") {
            inquirer 
                .prompt({
                    type: "input",
                    message: "What is your office number?",
                    name: "office"
                })
                .then(function(response) {
                    let office = response.office;
                    console.log(`The director of travelers' souls sits in room ${office}!`);
                    manager = new Manager(name, id, email, office);
                    console.log(manager);
                })
        } else if (role === "intern") {
            inquirer
                .prompt({
                    type: "input",
                    message: "What is the name of your college or university?",
                    name: "college"
                })
                .then(function(response) {
                    let college = response.college;
                    console.log(`The future shepherd of AI studies at ${college}!`);
                    intern = new Intern(name, id, email, college);
                    console.log(intern);
                })
        }
    });

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
