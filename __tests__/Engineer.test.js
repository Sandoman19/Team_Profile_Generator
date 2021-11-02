const Engineer = require("../lib/Engineer");

test("set GitHub user as per constructor", () => {
  const value = "GitHubUser";
  const obj = new Engineer("Any", 1, "test@fakemail.com", value);
  expect(obj.getGithub()).toBe(value);
});

test("getRole() should return \"Engineer\"", () => {
  const value = "Engineer";
  const obj = new Engineer("Any", 1, "test@fakemail.com", "GitHubUser");
  expect(obj.getRole()).toBe(value);
});