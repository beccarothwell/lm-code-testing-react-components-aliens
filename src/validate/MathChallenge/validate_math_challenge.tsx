const validateMathChallenge: (value: string) => string[] = (value) => {
  //"4" must be selected. Selecting "Not 4" should display an error.
  const errorMessages: string[] = [];

  if (value === "not4") {
    errorMessages.push("Incorrect. 2 + 2 = 4.");
  } else if (value !== "" && value !== "Not 4" && value !== "4") {
    errorMessages.push(
      "There were only two options. How have you selected something else?"
    );
  }

  return errorMessages;
};

export default validateMathChallenge;
