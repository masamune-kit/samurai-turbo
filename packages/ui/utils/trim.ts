const trim = (number: number | string = 0, precision = 0) => {
  if (typeof number === 'string') {
    number = Number(number);
  }

  const array = number.toString().split('.');

  if (array.length === 1) {
    return number.toString();
  }

  if (precision === 0) {
    return array[0].toString();
  }

  const poppedNumber = array.pop() || '0';
  array.push(poppedNumber.substring(0, precision));
  const trimmedNumber = array.join('.');

  return trimmedNumber;
};

export { trim };
