//======================================================================
// NPM Directories
//======================================================================
const fs = require("fs");
const inquirer = require("inquirer");
const employee = require("./lib/employee")
const Engineer = require("./lib/engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");


// Array to hold Team Members
let team = [];
console.log(team);


//======================================================================
// Introduction
//======================================================================
console.log(
    "****|Welcome to Team Builder|****"
    + "\n" + "Greetings Manager!"
    + "\n" + "Take some time to build your team by adding team members."
    + "\n" + "You can add as many as you'd like, but you must start with your personal information.")

//======================================================================
// Inquirer Questions
//======================================================================
// inquirer
//     .prompt(

MgrQs = [
    ////////////// Start with prompting for information about the Manager
    {
        type: "input",
        name: "managerName",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "What is your employee ID?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "officenumber",
        message: "What is your office number?"
    },
    {
        type: "input",
        name: "yacht",
        message: "How big is your very impressive yacht?"
    },
];

////////////// Add a team member
MgrQs = [
    {
        type: "checkbox",
        message: "Would you like to add another team member?",
        name: "addMember",
        choices: [
            "Yes",
            "No",
        ]
    },
]

////////////// Questions about Team Members
MemberQs = [
    {
        type: "input",
        name: "name",
        message: "What is the team member's name?"
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is the team member's employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the team member's email?"
    },
    {
        type: "list",
        message: "What is the team member's company role?",
        name: "role",
        choices: [
            "engineer",
            "intern",
        ]
    },
];

/////// Divide the follow-questions by role
function (answer) {
    roleQuestions(answer.role)
}

function roleQuestions(role) {
    console.log("role:", role)
    const questions = [MgrQs];

    // Engineer Question
    if (role === "engineer") {
        questions.push(
            {
                type: "input",
                name: "username",
                message: "Please enter your GitHub Username"
            }
        )

        // Intern Question
    } else if (role === "intern") {
        questions.push(
            {
                type: "input",
                name: "school",
                message: "What school do you attend?"
            }
        )

        // Manager Question
    } else if (role === "manager") {
        questions.push(
            {
                type: "input",
                name: "officenumber",
                message: "What is your office number?"
            },
            {
                type: "input",
                name: "yacht",
                message: "How big is your very impressive yacht?"
            },
        )
    }
    inquirer.prompt(questions)
}

//======================================================================
// HTML Output
//======================================================================

