const inquirer = require("inquirer");
const questions = require("./utils/questions");

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

function pickRole(role){


    if (role.toLowerCase() === 'engineer'){
        return inquirer.prompt(questions.engineerQuestions)
    } 
    if (role.toLowerCase() === "intern"){
        return inquirer.prompt(questions.internQuestions)
    }
    return false;
}

inquirer.prompt(questions.managerQuestions)
    .then (response => {
        return askWhoElse()
    })