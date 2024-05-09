const regex = /^\d+(\.\d{1,2})?$/;

console.log(regex.test("123")); // true
console.log(regex.test("0")); // true
console.log(regex.test("1.2")); // true
console.log(regex.test("1.23")); // true
console.log(regex.test("123.")); // false
console.log(regex.test("1.20")); // false
console.log(regex.test(".123")); // false
