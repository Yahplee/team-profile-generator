const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const init = () => {
	inquirer.prompt([
	{
		type: "input",
		name: "name",
		message: "What is your name?",
	},
	{
		type: "list",
		name: "role",
		message: "Which team member would you like to add?",
		choices: ["Manager", "Engineer", "Intern"],
	},
	{
		type: "input",
		name: "id",
		message: "What is your employee ID?",
	},
	{
		type: "input",
		name: "email",
		message: "What is your email address?",
	},
	]).then(({name, role, id, email}) => {
		let parameters = "";
		if (role === "Manager") {
			parameters = "office number"
		} else if (role === "Engineer") {
			parameters = "GitHub username";
		} else if (role === "Intern") {
			parameters = "school name"
		}
		
		inquirer.prompt([
			{
				type: "input",
				name: "parameter",
				message: `Please enter the team member's ${parameters}.`
			},
			{
				type: "list",
				name: "continue",
				message: "Would you like to add more team members?",
				choices: ["Yes", "No"],
			},
	]).then(({continue}) => {
		if(continue === "Yes")
	});
});
};

init();
