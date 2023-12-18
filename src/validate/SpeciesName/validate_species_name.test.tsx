import validateSpeciesName from "./validate_species_name";

test("Given an empty string, the function should return an empty array", () => {
  expect(validateSpeciesName("")).toEqual([]);
});

test("Given a string that has one or two alphabetical characters the function should return an array with a single error message", () => {
  expect(validateSpeciesName("a")).toEqual([
    "Must be between 3 and 23 characters.",
  ]);
  expect(validateSpeciesName("ab")).toEqual([
    "Must be between 3 and 23 characters.",
  ]);
});

test("Given a string that has more than 23 alphabetical characters, the function should return an array with a single error message", () => {
  expect(
    validateSpeciesName("the quick brown fox jumped over the lazy dog")
  ).toEqual(["Must be between 3 and 23 characters."]);
});

test("Given a string that has between 3 and 23 alphabetical characters, the function should return an empty array", () => {
  expect(validateSpeciesName("abc")).toEqual([]);
  expect(validateSpeciesName("some text here")).toEqual([]);
  expect(validateSpeciesName("the quick brown fox ran")).toEqual([]);
});

test("Given a string that has between 3 and 23 characters, including numbers or special characters, the function should return an array with a single error message", () => {
  expect(validateSpeciesName("ab2")).toEqual([
    "No numbers or special characters allowed!",
  ]);
  expect(validateSpeciesName("1@#g")).toEqual([
    "No numbers or special characters allowed!",
  ]);
  expect(validateSpeciesName("the quick brown fox!!")).toEqual([
    "No numbers or special characters allowed!",
  ]);
});

test("Given a string that has one or two characters, including numbers or special characters, the function should return an array with two error messages", () => {
  expect(validateSpeciesName("#1")).toEqual([
    "Must be between 3 and 23 characters.",
    "No numbers or special characters allowed!",
  ]);
  expect(validateSpeciesName("@b")).toEqual([
    "Must be between 3 and 23 characters.",
    "No numbers or special characters allowed!",
  ]);
  expect(validateSpeciesName("!")).toEqual([
    "Must be between 3 and 23 characters.",
    "No numbers or special characters allowed!",
  ]);
});

test("Given a string that has more than 23 characters, including special characters, the function should return an array with two error messages", () => {
  expect(
    validateSpeciesName("the quick brown fox jumped over the lazy dog!")
  ).toEqual([
    "Must be between 3 and 23 characters.",
    "No numbers or special characters allowed!",
  ]);
  expect(
    validateSpeciesName("the quick br0wn f0# jump3d over the l@zy dog!")
  ).toEqual([
    "Must be between 3 and 23 characters.",
    "No numbers or special characters allowed!",
  ]);
});
