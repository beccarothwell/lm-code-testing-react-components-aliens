const validateNumberOfBeings: (value: string) => string[] = (value) => {
  //Numbers ONLY. Must be at least 1,000,000,000.
  const errorMessages: string[] = [];

  if (value.match(/\D/)) {
    errorMessages.push("Numbers ONLY.");
  }
  if (Number(value) < 1000000000) {
    errorMessages.push("Must be at least 1,000,000,000.");
  }

  return errorMessages;
};

export default validateNumberOfBeings;
