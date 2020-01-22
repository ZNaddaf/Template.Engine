//======================================================================
// NPM Directories
//======================================================================
const fs = require("fs");
const inquirer = require("inquirer");

//======================================================================
// Introduction
//======================================================================
console.log(
    "****|Welcome to Team Builder!|****"
    + "\n" + "Take some time to build your team by adding team members."
    + "\n" + "You can add as many as you'd like, but you must start with at least one manager.")

//======================================================================
// Inquirer Questions
//======================================================================
inquirer
    .prompt([
        ////////////// Start by prompting for basic information
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is your employee ID?"
        },
        {
            type: "list",
            message: "What is your company role?",
            name: "role",
            choices: [
                "engineer",
                "intern",
                "manager"
            ]
        }

        // Now we divide the follow-questions by role
    ]).then(
        function (answer) {
            roleQuestions(answer.role)
        }
    )

function roleQuestions(role) {
    console.log("role:", role)
    const questions = [];

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

