const validatePlanetName: (value: string) => string[] = (value) => {
  //Must be between 2 and 49 characters. Numbers are allowed, but no special characters.
  const errorMessages: string[] = [];

  if ((value.length > 0 && value.length < 2) || value.length > 49) {
    errorMessages.push("Must be between 2 and 49 characters");
  }
  if (value.match(/[^a-zA-Z0-9 ]/)) {
    errorMessages.push("No special characters allowed!");
  }

  return errorMessages;
};

export default validatePlanetName;
