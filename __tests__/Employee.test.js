const Employee = require("../lib/Employee");

test("new Employee object", () => {
  const obj = new Employee();
  expect(typeof(obj)).toBe("object");
});

