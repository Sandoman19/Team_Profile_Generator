const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UWA";
  const e = new Intern("Bradley", 1, "Bradley@fakemail.com", testValue, "Intern");
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Bradley", 1, "Bradley@fakemail.com", "UCLA", "Intern");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UoU";
  const e = new Intern("Bradley", 1, "Bradley@fakemail.com", testValue, "Intern");
  expect(e.getSchool()).toBe(testValue);
});