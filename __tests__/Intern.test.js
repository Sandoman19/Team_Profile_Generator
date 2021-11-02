const Intern = require("../lib/Intern");

test("set school as per constructor", () => {
  const value = "UWA";
  const obj = new Intern("Any", 1, "test@fakemail.com", "UWA");
  expect(obj.getSchool()).toBe(value);
});

test("getRole() should return \"Intern\"", () => {
  const value = "Intern";
  const obj = new Intern("Any", 1, "test@fakemail.com", "UWA");
  expect(obj.getRole()).toBe(value);
});