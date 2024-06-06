let a;
let name = "Kshitij";
const b = 5;
console.log(a);
console.log(b);
console.log(name);
let type = typeof b;

let str = `Hello! ${1 + 2 + 3 + 4 + 5}`;
console.log(str);
console.log(`Hello! My rating is ${1 + 2 + 3 + 4}`);

function addTwoNumbers(num1, num2) {
    return num1 + num2;
  }
console.log(addTwoNumbers(4, 5));
let multiplyNumbers = (number1, number2) => {
return number1*number2;
}
console.log(multiplyNumbers(5, 6));
console.log(addTwoNumbers);
console.log(multiplyNumbers);
multiplyNumbers = 7;
console.log(multiplyNumbers);

function add3(...arr) {
    let sum = 0;
    console.log(arr);
    console.log(...arr);
    arr.forEach((ele) => {
        sum += ele;
    })
    console.log(sum);
}
add3(1,2,3,4,5);
