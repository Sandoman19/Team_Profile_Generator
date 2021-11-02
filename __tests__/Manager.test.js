const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 123;
  const e = new Manager("Aaron", 1, "Aaron@fakemail.com", testValue, "Manager");
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Aaron", 1, "Aaron@fakemail.com", 123, "Manager");
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 123;
  const e = new Manager("Aaron", 1, "Aaron@fakemail.com", testValue, "Manager");
  expect(e.getOfficeNumber()).toBe(testValue);
});