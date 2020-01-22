const Employee = require("./Employee")

class Intern extends Employee {
    // Properties
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    // Methods
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern