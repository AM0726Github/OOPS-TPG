// Class Employee parent class For Engineer Intern and Manager 
class Employee {
    //Employee class Constructor With 3 parameters
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    };
    //returning name
    getName () {
        return this.name;
    };
    //returning ID 
    getId () {
        return this.id;
    };  
    //returning email
    getEmail () {
        return this.email;
    };
    //returning "employee" as role
    getRole () {
        return 'Employee'; 
    };
};

//Export Class Employee 
module.exports = Employee; 