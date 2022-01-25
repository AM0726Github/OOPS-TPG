// Import Employee 
const Employee = require('./Employee');

//Class Intern which extends from Employee class 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        //Method for Parent class constructor
        super (name, id, email); 
        //school uniq parameter for Intern class 
        this.school = school; 
    };
    //returning school parameter
    getSchool () {
        return this.school;
    };
    //Intern Class getRole method will be diferrent from parent class
    getRole () {
        return "Intern";
    };
}

//Export class Intern
module.exports = Intern;