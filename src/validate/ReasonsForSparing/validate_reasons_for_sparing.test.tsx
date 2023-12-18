import validateReasonsForSparing from "./validate_reasons_for_sparing";

test("Given an empty string, the function should return an empty array", () => {
  expect(validateReasonsForSparing("")).toEqual([]);
});

test("Given a string that has between 17 and 153 characters, the function should return an empty array", () => {
  expect(
    validateReasonsForSparing("the quick brown fox jumped over the lazy dog")
  ).toEqual([]);
  expect(
    validateReasonsForSparing("the quick brown fox jumped over the lazy dog!!!")
  ).toEqual([]);
  expect(
    validateReasonsForSparing("here's some numbers 12345 and a #hastag")
  ).toEqual([]);
  expect(
    validateReasonsForSparing(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    )
  ).toEqual([]);
});

test("Given a string that has less than 17 characters, the function should return an array with a single error message", () => {
  expect(validateReasonsForSparing("some fox story")).toEqual([
    "Must be between 17 and 153 characters.",
  ]);
  expect(validateReasonsForSparing("1 fox & 1 dog")).toEqual([
    "Must be between 17 and 153 characters.",
  ]);
});

test("Given a string that has more than 153 characters, the function should return an array with a single error message", () => {
  expect(
    validateReasonsForSparing(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. "
    )
  ).toEqual(["Must be between 17 and 153 characters."]);
});
