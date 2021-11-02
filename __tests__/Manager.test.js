const Manager = require("../lib/Manager");

test("set office number as per constructor", () => {
  const value = 50;
  const obj = new Manager("Any", 1, "test@fakemail.com", value);
  expect(obj.getOfficeNumber()).toBe(value);
});

test("getRole() should return \"Engineer\"", () => {
  const value = "Manager";
  const obj = new Manager("Any", 1, "test@fakemail.com", 50);
  expect(obj.getRole()).toBe(value);
});