function commonQuestions(role="Manager"){
	return [
		{
			name: "name",
			type: "input",
			message: `what is the ${role}s name`,
		},
		{
			name: "id",
			type: "input",
			message: `what is the ${role}s ID`,
		},
		{
			name: "email",
			type: "input",
			message: `what is the ${role}s email`,
		},
	];
}

const managerQuestions = [
	...commonQuestions("Manager"),
	{
    name: "officeNumber",
    type: "input",
    message: `what is the Managers office number`,
  },
];

const engineerQuestions = [
	...commonQuestions("Engineer"),
	{
    name: "github",
    type: "input",
    message: `what is the Engineers github user`,
  },
];

const internQuestions = [
	...commonQuestions("Intern"),
	{
    name: "school",
    type: "input",
    message: `what is the Interns schools name`,
  },
];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions
}
