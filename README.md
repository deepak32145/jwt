function validateInput(input) {
// Define the regex pattern to match words, spaces, punctuation, and symbols
const pattern = /^[\w\s\p{P}\p{S}]\*$/u;

    // Test the input string against the regex pattern
    return pattern.test(input);

}

// Example usage:
console.log(validateInput("Hello, world!")); // true
console.log(validateInput("123456")); // true
console.log(validateInput("Test@#$%^&\*()")); // true
console.log(validateInput("New\nLine")); // false, because \n is not explicitly allowed
