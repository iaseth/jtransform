const { toLower, toUpper } = require("../dist/strings");


test("toUpper", () => {
	expect(toUpper("foo")).toBe("FOO");
	expect(toUpper(false)).toBe(false);
});

test("toLower", () => {
	expect(toLower("Foo")).toBe("foo");
	expect(toLower(false)).toBe(false);
});
