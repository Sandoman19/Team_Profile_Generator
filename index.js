// one group spot for question
const questions = require("./utils/questions");

// Profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// modules
const inquirer = require("inquirer");
const fs = require("fs");

// add empty array to house empolyees
const people = [];

function askWhoElse(){
  return inquirer.prompt([
    {
      message: "Would you like to add more roles?",
      name: "role",
      type: "list",
      choices:[
        "Engineer",
        "Intern",
        "No one else to add"
      ]
    }
  ]).then(response => {
    return pickRole(response.role);
  }).then(response => {
    if(response !== false){
      return askWhoElse();
    }
  })
}

const addManager = () => {
  inquirer.prompt(questions.managerQuestions)
    .then (response => {
      const peopleManager = new Manager(response.name, response.id, response.email, response.officeNumber);
      people.push(peopleManager)
      return askWhoElse()
    })
    .then (() => {
      console.log(people);
    })
}

const addEmployee = () => {
  console.log(`
  =================
  Adding employees to the team
  =================
  `);

  function pickRole(role){
    if (role.toLowerCase() === 'engineer'){
      return inquirer.prompt(questions.engineerQuestions)
        .then (response => {
          const peopleEngineer = new Engineer(response.name, response.id, response.email, response.github);
          people.push(peopleEngineer)
        })
    } 
    if (role.toLowerCase() === "intern"){
      return inquirer.prompt(questions.internQuestions)
        .then (response => {
          const peopleIntern = new Intern(response.name, response.id, response.email, response.school);
          people.push(peopleIntern)
        })
    }
    return false;
  }

}

// function to generate HTML page file using file system 
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
      // if there is an error 
      if (err) {
          console.log(err);
          return;
      // when the profile has been created 
      } else {
          console.log("People have been made! index.html made")
      }
  })
}; 

addManager()
.then(addEmployee)
.then(people => {
  return generateHTML(people);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});