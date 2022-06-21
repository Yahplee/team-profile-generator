const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const employeeArr = [];

const init = () => {
	inquirer
		.prompt([
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
		])
		.then(({ name, role, id, email }) => {
			let parameters = "";
			if (role === "Manager") {
				parameters = "office number";
			} else if (role === "Engineer") {
				parameters = "GitHub username";
			} else if (role === "Intern") {
				parameters = "school name";
			}

			inquirer
				.prompt([
					{
						type: "input",
						name: "parameter",
						message: `Please enter the team member's ${parameters}.`,
					},
					{
						type: "list",
						name: "continues",
						message: "Would you like to add more team members?",
						choices: ["Yes", "No"],
					},
				])
				.then(({ parameter, continues }) => {
					let employee;
					if (role === "Manager") {
						employee = new Manager(name, id, email, parameter);
					} else if (role === "Engineer") {
						employee = new Engineer(name, id, email, parameter);
					} else if (role === "Intern") {
						employee = new Intern(name, id, email, parameter);
					}

					employeeArr.push(employee);

					continues === "Yes"
						? init()
						: writeToFile("./dist/index.html", createHTMl(data));
				});
		});
};

const writeToFile = (fileName, data) => {
	fs.writeFile(fileName, data, (err) => {
		if (err) throw err;
		console.log("The file has been saved!");
	});
};

// function taht crreates html
const createHTML = () => `

`;
// function taht creates card
// card will need to be appended based on the choices from an if statement based on employeeArr

init();
