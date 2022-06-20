const Intern = require("../lib/intern");

describe("Intern", () => {
	it("should set the school of Intern when passing through constructor", () => {
		const intern = new Intern(
			"Andrew",
			"004",
			"something@gmail.com",
			"Fordham"
		);
		expect(intern.school).toEqual("Fordham");
	});

	describe("getSchool", () => {
		it("should return the school of the Intern", () => {
			const intern = new Intern(
				"Andrew",
				"004",
				"something@gmail.com",
				"Fordham"
			);
			expect(intern.getSchool()).toEqual("Fordham");
		});
	});
	describe("getRole", () => {
		it("should return the role of the Intern", () => {
			const intern = new Intern(
				"Andrew",
				"004",
				"something@gmail.com",
				"Fordham"
			);
			expect(intern.getRole()).toEqual("Intern");
		});
	});
});
