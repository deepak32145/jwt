function validateDecimal(input) {
const regex = /^\d+\.\d{2}$/;
return regex.test(input);
}

console.log(validateDecimal("0.00")); // true
console.log(validateDecimal("1.22")); // true
console.log(validateDecimal("21.33")); // true
console.log(validateDecimal("-1.23")); // false
console.log(validateDecimal("123.4")); // false
console.log(validateDecimal("1234.567")); // false
