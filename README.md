function isValidInput(input) {
const regex = /^[a-zA-Z0-9.\/]+$/;
return regex.test(input);
}

console.log(isValidInput("abc123")); // true
console.log(isValidInput("abc123./")); // true
console.log(isValidInput("abc123\*/")); // false
console.log(isValidInput("Hello.World/2024")); // true
