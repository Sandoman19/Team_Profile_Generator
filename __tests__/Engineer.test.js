const Engineer = require("../lib/Engineer");

test('Can set GitHUb account via constructor', () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Sando", 1, "Sando@fakemail.com", testValue, "Engineer");
  expect(e.github).toBe(testValue);
});

test('should return role when "getRole()" is called', () => {
  const testValue = "Engineer";
  const e = new Engineer("Sando", 1, "Sando@fakemail.com", "GitHubUser", "Engineer");
  expect(e.getRole()).toBe(testValue);
});

test('Can get GitHub username via getGithub()', () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Sando", 1, "Sando@fakemail.com", testValue, "Engineer");
  expect(e.getGithub()).toBe(testValue);
});