const regex = /^\d+\.\d{2}$/;

console.log("Testing '1.00':", regex.test("1.00")); // true
console.log("Testing '10.00':", regex.test("10.00")); // true
console.log("Testing '153.00':", regex.test("153.00")); // true
console.log("Testing '1.2':", regex.test("1.2")); // false
console.log("Testing '153.1':", regex.test("153.1")); // false
console.log("Testing '153.100':", regex.test("153.100")); // false
