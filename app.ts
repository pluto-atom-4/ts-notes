// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));

function betterEcho<T>(data: T) {
  return data;
}

// Better Generic
console.log(betterEcho("Max").length);
console.log(betterEcho(27));
console.log(betterEcho({name: "Max", age: 27}));

// Built-in Generics
// Array is the generic type
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
// testResults.push("string"); // invalid operation
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach((elem) => console.log(elem));
}

printAll<string>(["Apple", "Banana"]);

// Generic Types
//         | type assignment   |
const echo2: <T> (data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;

  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<number, string>();

simpleMath.baseValue = 10;
// simpleMath.baseValue = "Something";
simpleMath.multiplyValue = "20";

console.log((simpleMath.calculate()));
