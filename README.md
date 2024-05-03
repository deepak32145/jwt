function validateString(input) {
const regex = /^[a-zA-Z0-9 ?'".]\*$/;
return regex.test(input);
}

console.log(validateString("Hello, who are you?")); // true
console.log(validateString("I'm testing some 'quotes', and \"double quotes\".")); // true
console.log(validateString("Notice the period at the end.")); // true
console.log(validateString("Invalid string 😜")); // false
