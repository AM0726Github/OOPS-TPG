// Manager card
const generateManager = function (manager) {
    return `
    <div class=".g-col-4 m-4">
        <div class="card h-100 border border-warning">
            <div class="card-header .bg-info">
                <h3>Manager</h4>
                <h4>${manager.name}</h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class=".g-col-4 m-4">
        <div class="card h-100 border border-warning">
            <div class="card-header .bg-info">
                <h4>Engineer</h4>
                <h3>${engineer.name}</h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

//Intern card 
const generateIntern = function (intern) {
    return `
    <div class=".g-col-4 m-4">
        <div class="card h-100 border border-warning">
            <div class="card-header .bg-info">
                <h4>Intern</h4>
                <h3>${intern.name}</h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
`
};

// Add cards to page 
generateHTML = (data) => {

    // cards array is empty
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }

        // add function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
        
    }

    // add to one string 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
        <nav class="navbar navbar-light bg-success">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Team Profile</a>
            </div>
        </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

// export to index
module.exports = generateHTML;