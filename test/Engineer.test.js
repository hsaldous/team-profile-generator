const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "hank1234";
  const e = new Engineer("Hank", 1, "hank@aldous.com", testValue);
  expect(e.github).toBe(testValue);
});


test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Hank", 1, "hank@aldous.com", "hank1234");
  expect(e.getRole()).toBe(testValue);
});


test("Can get GitHub username via getGithub()", () => {
  const testValue = "hank1234";
  const e = new Engineer("Hank", 1, "hank@aldous.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});