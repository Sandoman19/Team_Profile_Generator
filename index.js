// link to page creation
const generateHTML = require('./src/generateHTML');
// Profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// modules
const inquirer = require("inquirer");
const fs = require("fs");

// add empty array to house empolyees
const teamArray = [];

const addManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is the managers name?', 
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log ("Please enter the manager's name!");
          return false; 
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Manager's ID.",
      validate: nameInput => {
        if  (isNaN(nameInput)) {
          console.log ("Please enter the manager's ID!")
          return false; 
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Manager's email.",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log ('Please enter an email!')
          return false; 
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Manager's office number",
      validate: nameInput => {
        if  (isNaN(nameInput)) {
          console.log ('Please enter office number!')
          return false; 
        } else {
          return true;
        }
      }
    }
  ])
  .then(managerInput => {
    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager); 
    console.log(manager); 
  })
};


const addEmployee = () => {
  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: "Please choose your employee's role",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the employee?", 
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log ("Please enter an employee's name!");
          return false; 
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Employee's ID.",
      validate: nameInput => {
        if  (isNaN(nameInput)) {
          console.log ("Please enter the employee's ID!")
          return false; 
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Employee's email.",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log ('Please enter an email!')
          return false; 
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Engineer's github username.",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput ) {
          return true;
        } else {
          console.log ("Please enter the employee's github username!")
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "Intern's school",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log ("Please enter the intern's school!")
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add more team members?',
      default: false
    }
  ])
  .then(employeeData => {
    // data for employee types 
    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
    let employee; 

    if (role === "Engineer") {
      employee = new Engineer (name, id, email, github);
      console.log(employee);
    } 
    else if (role === "Intern") {
      employee = new Intern (name, id, email, school);
      console.log(employee);
    }
    teamArray.push(employee); 

    if (confirmAddEmployee) {
      return addEmployee(teamArray); 
    } 
    else {
      return teamArray;
    }
  })

};

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
.then(teamArray => {
  return generateHTML(teamArray);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});