const Engineer = require("../lib/engineer");

describe("Engineer", () => {
	it("should set the Github username of Engineer when passing through constructor", () => {
		const engineer = new Engineer(
			"Andrew",
			"004",
			"something@gmail.com",
			"Kapp"
		);
		expect(engineer.github).toEqual("Kapp");
	});

	describe("getGithub", () => {
		it("should return the GitHub username of the Engineer", () => {
			const engineer = new Engineer(
				"Andrew",
				"004",
				"something@gmail.com",
				"Kapp"
			);
			expect(engineer.getGithub()).toEqual("Kapp");
		});
	});
	describe("getRole", () => {
		it("should return the role of the Engineer", () => {
			const engineer = new Engineer(
				"Andrew",
				"004",
				"something@gmail.com",
				"Kapp"
			);
			expect(engineer.getRole()).toEqual("Engineer");
		});
	});
});
