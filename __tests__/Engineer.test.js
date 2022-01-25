//Import Engineer Class 
const Engineer = require('../lib/Engineer');


// Engineer object test 
test('Engineer object test', () => {
    const engineer = new Engineer('Alik', 1 , 'Alik@gmail.com', 'AM0726Github');
    // Expections from parameters
    expect(engineer.github) .toEqual(expect.any(String));
});


// get github method test
test('get github method test', () => {
    const engineer = new Engineer('Alik', 1 , 'Alik@gmail.com', 'AM0726Github');
    // Expections from parameters
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


// get role method test
test('get role method test', () => {
    const engineer = new Engineer('Alik', 1 , 'Alik@gmail.com', 'AM0726Github');
    // Expections from parameters to be "Engineer"
    expect(engineer.getRole()).toEqual("Engineer");
});