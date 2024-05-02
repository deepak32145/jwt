function matchString(inputString) {
const pattern = /^[a-zA-Z0-9 .]+$/;
return pattern.test(inputString);
}

// Test the function with some example strings
const testStrings = ["Hello World", "Hello123", "Hello 123.", "Hello@123", "Hello World!"];
const results = testStrings.map(text => `${text}: ${matchString(text)}`);

console.log(results);
