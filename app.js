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
        message: "What is your employee-ID?"
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
expandTeam = [
    {
        type: "confirm",
        message: "Add another team member?",
        name: "addMember",
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
            "intern"
        ]
    },
];

////////////// Role Specific Questions
// Engineer Question
EngQ = [
    {
        type: "input",
        name: "username",
        message: "Please enter GitHub Username"
    }
];

// Intern Question
IntQ = [
    {
        type: "input",
        name: "school",
        message: "What school do they attend?"
    }
];

//======================================================================
// Functions for expanded questions
//======================================================================

//////// Function to add an additional team member
function confirmAddMember() {
    inquirer.prompt(expandTeam).then(answer => {
        console.log(answer)

        if (answer.addMember === true) {
            console.log("Let's get more info")
            askMoreQuestions()
        } else {
            console.log("Creating team...")
            generateHTML()
        }
    })
}


//////// Generic Employee questions function
function askMoreQuestions() {
    inquirer.prompt(MemberQs).then(answer => {
        console.log("answers to additional questions", answer)
        if (answer.role === "engineer") {
            roleSpecifcQs(EngQ, answer);
        } else { roleSpecifcQs(IntQ, answer) }
    })
}

//////// Determines which extra Q to ask
function roleSpecifcQs(roleQuestions, newEmp) {
    inquirer.prompt(roleQuestions).then(answer => {
        console.log("Role Specifc Questions: ", answer)
        if (newEmp.role === "engineer") {
            newEmp.github = answer.username;
            team.push(newEmp)
        } else {
            newEmp.school = answer.school;
            team.push(newEmp)
        }
        console.log(team)
        // Ask if an additional member is needed
        confirmAddMember()
    })
}

//======================================================================
// Function to begin the questions
//======================================================================
function questions() {
    inquirer.prompt(MgrQs).then(MgrData => {
        MgrData.role = "Manager";
        console.log(MgrData);
        team.push(MgrData);
        console.log(team);

        // Follow up with a request for more team members
        confirmAddMember()
    })
}

//////// Finally call the questions
questions()

//======================================================================
// HTML Output
//======================================================================


///// Generates HTML for the Main Page

function generateHTML() {

    const mainhtml =
        `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Page</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body>
    <!-- Generic Team Header -->
    <header>
        <div class="jumbotron jumbotron-fluid text-center" style="background-color: rebeccapurple; color: whitesmoke;">
            <h1 class="display-4">A Bunch of Productive* People</h1>
        </div>
    </header>

    <!-- Team goes here -->
    <div class="container">
        <div class="row">

        <!-- Manager Role Card Begins -->
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="../Assets/images/BillLumbergh.jpg" class="card-img" alt="very productive Manager">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <!-- Name -->
                        <h5 class="card-title">${team[0].managerName}</h5>
                        <!-- Role -->
                        <h5 class="card-title">Manager</h5>
                        <ul class="list-group">
                            <!-- ID -->
                            <li class="list-group-item">Employee ID:${team[0].managerId}</li>
                            <!-- Email -->
                            <li class="list-group-item">Employee Email:${team[0].managerEmail}</li>
                            <!-- Role Info -->
                            <li class="list-group-item">Office NUmber:${team[0].officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

            </div>
        </div>

    </div>

</body>

</html>
`
    fs.writeFile("./output/team.html", mainhtml, function (err, data) {
        console.log(err, data)
    })
}


//////// HTML for the Engineer Cards
function engCard() {
    const engHTML =
        `
    
    `
    return engHTML
}

//////// HTML for the Intern Cards
function engCard() {
    const engHTML =
        `
    
    `
    return engHTML
}