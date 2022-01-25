// importing Employee constructor 
const Employee = require('./Employee');

//Class Manager which extends from Employee class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //Method for Parent class constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    };
    //Manager Class getRole method will be diferrent from parent class 
    getRole () {
        return "Manager";
    };
};

//Export class Manager
module.exports = Manager;