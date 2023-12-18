import validatePlanetName from "./validate_planet_name";

test("Given an empty string, the function should return an empty array", () => {
  expect(validatePlanetName("")).toEqual([]);
});

test("Given a string that has one alphanumeric character the function should return an array with a single error message", () => {
  expect(validatePlanetName("1")).toEqual([
    "Must be between 2 and 49 characters.",
  ]);
  expect(validatePlanetName("a")).toEqual([
    "Must be between 2 and 49 characters.",
  ]);
});

test("Given a string that has more than 49 alphanumeric characters, the function should return an array with a single error message", () => {
  expect(
    validatePlanetName("hey look the quick brown fox jumped over the lazy dog")
  ).toEqual(["Must be between 2 and 49 characters."]);
});

test("Given a string that has between 2 and 49 alphanumeric characters, the function should return an empty array", () => {
  expect(validatePlanetName("ab")).toEqual([]);
  expect(validatePlanetName("abc2")).toEqual([]);
  expect(
    validatePlanetName("the quick brown fox jumped over the lazy 1")
  ).toEqual([]);
});

test("Given a string that has between 2 and 49 characters, including special characters, the function should return an array with a single error message", () => {
  expect(validatePlanetName("#a")).toEqual(["No special characters allowed!"]);
  expect(validatePlanetName("abc@2")).toEqual([
    "No special characters allowed!",
  ]);
  expect(
    validatePlanetName("the quick brown fox jumped over the lazy!")
  ).toEqual(["No special characters allowed!"]);
});

test("Given a string that has 1 character, which is not alphanumeric, the function should return an array with two error messages", () => {
  expect(validatePlanetName("#")).toEqual([
    "Must be between 2 and 49 characters.",
    "No special characters allowed!",
  ]);
  expect(validatePlanetName("@")).toEqual([
    "Must be between 2 and 49 characters.",
    "No special characters allowed!",
  ]);
  expect(validatePlanetName("!")).toEqual([
    "Must be between 2 and 49 characters.",
    "No special characters allowed!",
  ]);
});

test("Given a string that has more than 49 characters, including special characters, the function should return an array with two error messages", () => {
  expect(
    validatePlanetName("yeah the quick brown fox jumped over the lazy dog!")
  ).toEqual([
    "Must be between 2 and 49 characters.",
    "No special characters allowed!",
  ]);
  expect(
    validatePlanetName("hey look the quick br0wn f0# jump3d over the l@zy dog!")
  ).toEqual([
    "Must be between 2 and 49 characters.",
    "No special characters allowed!",
  ]);
});
