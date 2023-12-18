const validateSpeciesName: (value: string) => string[] = (value) => {
  //Must be between 3 and 23 characters. No numbers or special characters allowed!
  const errorMessages: string[] = [];

  if ((value.length > 0 && value.length < 3) || value.length > 23) {
    errorMessages.push("Must be between 3 and 23 characters.");
  }
  if (value.match(/[^a-zA-Z ]/)) {
    errorMessages.push("No numbers or special characters allowed!");
  }

  return errorMessages;
};

export default validateSpeciesName;
