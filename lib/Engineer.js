// Import Employee 
const Employee = require("./Employee");

// Class Engineer which extends from Employee class 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //Method for Parent class constructor 
        super (name, id, email);
        //Github uniq parameter for Engineer class 
        this.github = github; 
    };
    //returning github parameter 
    getGithub () {
        return this.github;
    };
    //Engineer Class etRole method will be diferrent from parent class
    getRole () {
        return "Engineer";
    };
};

//Export class Engineer
module.exports = Engineer; 