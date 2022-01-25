// Import Employee Class
const Employee = require('../lib/Employee');


// Employee object test
test('Employee object test', () => {
    const employee = new Employee('Alik', 1, 'Alik@gmail.com');
    // Expections from parameters
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


// get name method test 
test('get name method test', () => {
    const employee = new Employee('Alik', 1, 'Alik@gmail.com');
    // Expections from parameters
    expect(employee.getName()).toEqual(expect.any(String));
});


// get id method test 
test('get id method test', () => {
    const employee = new Employee('Alik', 1, 'Alik@gmail.com');
    // Expections from parameters
    expect(employee.getId()).toEqual(expect.any(Number));
});


// gets email method test
test('gets email method test', () => {
    const employee = new Employee('Alik', 1, 'Alik@gmail.com');
    // Expections from parameters
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


// get role method test
test('get role method test', () => {
    const employee = new Employee('Alik', 1, 'Alik@gmail.com');
    // Expections from parameters
    expect(employee.getRole()).toEqual("Employee");
}); 