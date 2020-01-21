//======================================================================
// NPM Directories
//======================================================================
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

//======================================================================
// Inquirer Questions
//======================================================================

inquirer
    .prompt([
        ////////////// Start by prompting for user role
        {
            type: "list",
            message: "What is your company role?",
            name: "role",
            choices: [
                "employee",
                "engineer",
                "intern",
                "manager"
            ]
        },

        ////////////// if engineer
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub Username"
        },

        ////////////// if intern
        {
            type: "input",
            name: "school",
            message: "What school do you attend?"
        },

        ////////////// if manager
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

    ])



//======================================================================
// HTML Output
//======================================================================


//======================================================================
// Unit Tests
//======================================================================
