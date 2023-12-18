import validateNumberOfBeings from "./validate_number_of_beings";

test("Given an empty string, the function should return an empty array", () => {
  expect(validateNumberOfBeings("")).toEqual([]);
});

test("Given a number less than 1,000,000,000, the function should return an array with a single error message", () => {
  expect(validateNumberOfBeings("1")).toEqual([
    "Must be at least 1,000,000,000.",
  ]);
  expect(validateNumberOfBeings("10")).toEqual([
    "Must be at least 1,000,000,000.",
  ]);
  expect(validateNumberOfBeings("100")).toEqual([
    "Must be at least 1,000,000,000.",
  ]);
  expect(validateNumberOfBeings("999999999")).toEqual([
    "Must be at least 1,000,000,000.",
  ]);
});

test("Given a number of 1,000,000,000 or greater, the function should return an empty array", () => {
  expect(validateNumberOfBeings("1000000000")).toEqual([]);
  expect(validateNumberOfBeings("1000000001")).toEqual([]);
  expect(validateNumberOfBeings("10000000000")).toEqual([]);
});

test("Given a string with non-numerical characters, the function should return an array with a single error message", () => {
  expect(validateNumberOfBeings("1000000000s")).toEqual(["Numbers ONLY."]);
  expect(validateNumberOfBeings("One million")).toEqual(["Numbers ONLY."]);
  expect(validateNumberOfBeings("1000000000!")).toEqual(["Numbers ONLY."]);
  expect(validateNumberOfBeings("1,000,000,000")).toEqual(["Numbers ONLY."]);
  expect(validateNumberOfBeings("Test")).toEqual(["Numbers ONLY."]);
  expect(validateNumberOfBeings("@[?01f")).toEqual(["Numbers ONLY."]);
});
