function testValue(value) {
  const regex = /^(?!0\.00$)(?!0$)([1-9]\d*(\.\d{1,2})?|0\.\d*[1-9]\d*)$/;
  if (regex.test(value)) {
    console.log(value + " is a valid number.");
  } else {
    console.log(value + " is NOT a valid number.");
  }
}

// Testing different cases
testValue("0.01"); // Valid: greater than 0, up to two decimal places
testValue("1.23"); // Valid: greater than 0, up to two decimal places
testValue("10"); // Valid: an integer greater than 0
testValue("0.00"); // Invalid: exactly zero
testValue("0"); // Invalid: zero
testValue("00.00"); // Invalid: zero with two decimal places
testValue("-1.23"); // Invalid: negative number
