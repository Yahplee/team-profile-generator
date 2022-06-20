const Employee = require("../lib/employee");

describe("Employee", () => {
	it("should create a new object when referencing Employee class", () => {
		const employee = new Employee();
		expect(typeof employee).toEqual("object");
	});

	it("should set the name of Employee when passing through constructor", () => {
		const employee = new Employee("Andrew");
		expect(employee.name).toEqual("Andrew");
	});

	it("should set the id of Employee when passing through constructor", () => {
		const employee = new Employee("Andrew", "004");
		expect(employee.id).toEqual("004");
	});

	it("should set the email of Employee when passing through constructor", () => {
		const employee = new Employee("Andrew", "004", "something@gmail.com");
		expect(employee.email).toEqual("something@gmail.com");
	});

	describe("getName", () => {
		it("should return the name of the Employee", () => {
			const employee = new Employee("Andrew", "004", "something@gmail.com");
			expect(employee.getName()).toEqual("Andrew");
		});
	});

	describe("getId", () => {
		it("should return the Id of the Employee", () => {
			const employee = new Employee("Andrew", "004", "something@gmail.com");
			expect(employee.getId()).toEqual("004");
		});
	});
	describe("getEmail", () => {
		it("should return the email of the Employee", () => {
			const employee = new Employee("Andrew", "004", "something@gmail.com");
			expect(employee.getEmail()).toEqual("something@gmail.com");
		});
	});
	describe("getRole", () => {
		it("should return the role of the Employee", () => {
			const employee = new Employee("Andrew", "004", "something@gmail.com");
			expect(employee.getRole()).toEqual("Employee");
		});
	});
});
