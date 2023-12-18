import validateMathChallenge from "./validate_math_challenge";

test("Given an empty string, the function should return an empty array", () => {
  expect(validateMathChallenge("")).toEqual([]);
});

test("Given a string '4', the function should return an empty array", () => {
  expect(validateMathChallenge("4")).toEqual([]);
});

test("Given a string 'not4', the function should return an array with a single error message", () => {
  expect(validateMathChallenge("not4")).toEqual(["Incorrect. 2 + 2 = 4."]);
});

test("Given any string other than '4', 'not4', or an empty string, the function should return an array with a single error message", () => {
  expect(validateMathChallenge("banana")).toEqual([
    "There were only two options. How have you selected something else?",
  ]);
});
