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
						: writeToFile("./dist/index.html", createHTML(employeeArr));
				});
		});
};

const writeToFile = (fileName, data) => {
	fs.writeFile(fileName, data, (err) => {
		if (err) throw err;
		console.log("The file has been saved!");
	});
};

// function taht creates card
const generateCard = (employee) => {
	let confirmRole;

	switch (employee.role) {
		case "Manager":
			confirmRole = `Office Number: ${employee.parameter}`;
			break;
		case "Engineer":
			confirmRole = `Github: <a href="https://github.com/${employee.parameter} target="_blank">${employee.parameter}</a>`;
			break;
		case "Intern":
			confirmRole = `School Name: ${employee.parameter}`;
			break;
	}

	return `
	<section class="card mb-3" style="width: 18rem">
				<div class="card-header text-white bg-primary">
					<h2 class="card-title">${employee.name}</h2>
					<h3 class="card-subtitle">${employee.role}</h3>
				</div>
				<div class="card-body">
					<ul class="d-flex flex-column list-group bg-white text-body">
						<li class="list-group-item">ID: ${employee.id}</li>
						<li class="list-group-item"><a href="mailto:${employee.email}">${employee.email}</a></li>
						<li class="list-group-item">${confirmRole}</li>
					</ul>
				</div>
			</section>
	`;
};

// card will need to be appended based on the choices from an if statement based on employeeArr

// function taht crreates html
const createHTML = (employeeData) => `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
			crossorigin="anonymous"
		/>
		<link rel="stylesheet" href="../dist/asset/css/style.css" />
		<title>Team Profile Generator</title>
	</head>
	<body>
		<header class="jumbotron jumbotron-fluid bg-danger text-white">
			<div class="container">
				<h1 class="display-4 text-center">My Team</h1>
			</div>
		</header>
		<main class="container d-flex flex-row justify-content-around">
			${generateCard(employeeArr)}
		</main>
	</body>
</html>
`;

init();
