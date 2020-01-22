const Employee = require("./Employee")

class Engineer extends Employee {
    // Properties
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    // Methods
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer