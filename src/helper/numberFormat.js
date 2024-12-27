function numberFormat(num) {
  const formattedNum = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(num);

  return formattedNum;
}

export default numberFormat;
