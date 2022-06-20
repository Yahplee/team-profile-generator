const Manager = require("../lib/manager");

describe("Manager", () => {
	it("should set the office number of Manager when passing through constructor", () => {
		const manager = new Manager("Andrew", "004", "something@gmail.com", "1111");
		expect(manager.officeNum).toEqual("1111");
	});

	describe("officeNumber", () => {
		it("should return the office number of the Manager", () => {
			const manager = new Manager(
				"Andrew",
				"004",
				"something@gmail.com",
				"1111"
			);
			expect(manager.officeNumber()).toEqual("1111");
		});
	});
	describe("getRole", () => {
		it("should return the role of the Manager", () => {
			const manager = new Manager(
				"Andrew",
				"004",
				"something@gmail.com",
				"1111"
			);
			expect(manager.getRole()).toEqual("Manager");
		});
	});
});
