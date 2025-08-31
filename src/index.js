module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number === 0) return 'zero';

  let result = '';
  let n = number;

  if (Math.floor(n / 100) > 0) {
    result += `${ones[Math.floor(n / 100)]} hundred`;
    n %= 100;
    if (n > 0) result += ' ';
  }

  if (n >= 10 && n < 20) {
    result += teens[n - 10];
  } else {
    if (Math.floor(n / 10) > 0) {
      result += tens[Math.floor(n / 10)];
      if (n % 10 > 0) result += ' ';
    }
    if (n % 10 > 0) {
      result += ones[n % 10];
    }
  }

  return result;
};
