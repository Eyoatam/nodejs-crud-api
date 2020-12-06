const { createUser } = require("../utils");

test("should create a new user", () => {
	const user = createUser("John", 27);
	expect(user).toBe("John is 27 years old");
});

test("shoud test for null data", () => {
	const user = createUser("", null);
	expect(user).toBe(" is null years old");
});

test("should test for underfined data", () => {
	const user = createUser();
	expect(user).toBe("undefined is undefined years old");
});
