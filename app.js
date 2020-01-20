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
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub Username"
        },

        {
            type: "list",
            message: "Which color would you prefer?",
            name: "color",
            choices: [
                "green",
                "blue",
                "pink",
                "red"
            ]
        },
    ])



//======================================================================
// HTML Output
//======================================================================


