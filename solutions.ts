// Exercise 1
const double = (value: number)  => value * 2;
console.log(double(10));


// Exercise 2
const myGreeting = (name = "Max") => console.log("Hello " + name);

myGreeting();
myGreeting("Anna");

// Exercise 3
const myNumbers = [-3, 33, 38, 5];
console.log(Math.min(...myNumbers));

// Exercise 4
const newArray = [55, 20];
newArray.push(...myNumbers);
console.log(newArray);

// Exercise 5
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6
var scientist = {firstName: "WIll", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);
