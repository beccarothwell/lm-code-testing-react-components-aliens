const validateNumberOfBeings: (value: string) => string[] = (value) => {
  //Numbers ONLY. Must be at least 1,000,000,000.
  const errorMessages: string[] = [];

  if (value.length > 0 && value.match(/\D/)) {
    errorMessages.push("Numbers ONLY.");
  }
  if (value.length > 0 && Number(value) < 1000000000) {
    errorMessages.push("Must be at least 1,000,000,000.");
  }

  return errorMessages;
};

export default validateNumberOfBeings;
