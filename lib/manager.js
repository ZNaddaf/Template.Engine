const Employee = require("./Employee")

class Manager extends Employee {
    // Properties
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office;
        this.officeNumber = office;
    }
    // Methods
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager