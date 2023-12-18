const validateReasonsForSparing: (value: string) => string[] = (value) => {
  //Must be between 17 and 153 characters.
  const errorMessages: string[] = [];

  if ((value.length > 0 && value.length < 17) || value.length > 153) {
    errorMessages.push("Must be between 17 and 153 characters.");
  }

  return errorMessages;
};

export default validateReasonsForSparing;
