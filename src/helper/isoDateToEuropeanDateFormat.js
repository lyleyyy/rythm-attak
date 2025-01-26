function isoDateToEuropeanDateFormat(isoDate) {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("en-GB").format(date);
}

export default isoDateToEuropeanDateFormat;
