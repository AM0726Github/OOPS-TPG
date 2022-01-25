// Import Manager Class
const Manager = require('../lib/Manager');


// Manager object test  
test('Manager object test ', () => {
    const manager = new Manager('Alik', 1 , 'Alik@gmail.com', 101);
    // Expections from parameters
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


// get role method test
test('get role method test', () => {
    const manager = new Manager('Alik', 1 , 'Alik@gmail.com', 101);
    // Expections from parameters to be "Manager"
    expect(manager.getRole()).toEqual("Manager");
}); 