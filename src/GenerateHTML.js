// add GenerateHTML information here

// create Manager card
const generateManager = function (manager) {
  return `
  <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
    <div class="card-header">
      <h4>${manager.name}</h4>
    </div>
    <div class="card-header">    
      <h4>Manager</h4>
    </div>
    <ul class="list-group list-group-flush text">
      <li class="list-group-item">ID: ${manager.id}</p>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
      <li class="list-group-item">Office Number: ${manager.officeNumber}
    </ul>
  </div>
  `;
}

// create Engineer card
const generateEngineer = function (engineer) {
  return `
  <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
    <div class="card-header">
      <h4>${engineer.name}</h4>
    </div>
    <div class="card-header">    
      <h4>Engineer</h4>
    </div>
    <ul class="list-group list-group-flush text">
      <li class="list-group-item">ID: ${engineer.id}</p>
      <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a>
    </ul>
  </div>
  `
}

// create Intern card 
const generateIntern = function (intern) {
  return `
  <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
    <div class="card-header">
      <h4>${intern.name}</h4>
    </div>
    <div class="card-header">    
      <h4>Intern</h4>
    </div>
    <ul class="list-group list-group-flush text">
      <li class="list-group-item">ID: ${intern.id}</p>
      <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
      <li class="list-group-item"<p class="school">School: ${intern.school}
    </ul>
  </div>
</div>
  `
};

// push array to page 
generateHTML = (data) => {

  // array for cards 
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

      // call intern function 
      if (role === 'Intern') {
          const internCard = generateIntern(employee);

          pageArray.push(internCard);
      }
      
  }

  // joining strings 
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
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- add bootstrap -->
    <link 
      rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
      crossorigin="anonymous">
    <!-- title -->
    <title>Team Profile</title>
    <!-- basic styling so I dont need a CSS -->
    <style>
      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .card {
        padding: 15px;
        border-radius: 6px;
        background-color: white;
        color: lightskyblue;
        margin: 15px;
      }
      .text {
        padding: 10px;
        border-radius: 6px;
        background-color: lightskyblue;
        color: black;
        margin: 10px;
      }
      .col {
        flex: 1;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <!-- basic header -->
    <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
      <span class="navbar-brand mb-0 h1">
        <h1>My Team</h1>
      </span>
    </nav>
    <main>
      <div class="row">
      <!--Team Cards-->
        ${employeeCards}
      </div>
    </main>     
  </body>
</html>
`;
}

// export to index
module.exports = generateHTML;