function isPrimeNumber(num, callback) {
  if (num <= 1) {
    callback("Not Prime");
    return;
  }

  if (num === 2) {
    callback("Prime");
    return;
  }

  if (num % 2 === 0) {
    callback("Not Prime");
    return;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      callback("Not Prime");
      return;
    }
  }

  callback("Prime");
}

function logNumberType(inputString) {
  console.log(inputString);
}

isPrimeNumber(1, logNumberType);
isPrimeNumber(2, logNumberType);
isPrimeNumber(3, logNumberType);
isPrimeNumber(56, logNumberType);
