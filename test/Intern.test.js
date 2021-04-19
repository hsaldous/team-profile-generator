const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "DU";
  const e = new Intern("Henry", 1, "henry@swisher.com", testValue);
  expect(e.school).toBe(testValue);
});


test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Henry", 1, "henry@swisher.com", "DU");
  expect(e.getRole()).toBe(testValue);
});


test("Can get school via getSchool()", () => {
  const testValue = "DU";
  const e = new Intern("Henry", 1, "henry@swisher.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});