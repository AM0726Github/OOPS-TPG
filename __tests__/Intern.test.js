// Import Intern Class
const Intern = require('../lib/Intern');


// Intern object test 
test('Intern object test ', () => {
    const intern = new Intern('Alik', 1 , 'Alik@gmail.com', 'Politechnik');
    // Expections from parameters
    expect(intern.school) .toEqual(expect.any(String));
});


// get school method test
test('get school method test', () => {
    const intern = new Intern('Alik', 1 , 'Alik@gmail.com', 'Politechnik');
    // Expections from parameters
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


// get role method test
test('get role method test', () => {
    const intern = new Intern('Alik', 1 , 'Alik@gmail.com', 'Politechnik');
    // Expections from parameters to be "Intern"
    expect(intern.getRole()).toEqual("Intern");
}); 