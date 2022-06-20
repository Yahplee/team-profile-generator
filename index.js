const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const questions = [
	{
		type: "input",
		name: "name",
		message: "What is your name?",
	},
];

inquirer.prompt([questions]).then((answers) => {
	fs;
});
