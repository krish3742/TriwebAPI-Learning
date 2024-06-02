console.log("Kshitij Agrawal");
console.log("I love JavaScript!");

console.log(Math.PI);

let a;
let name = "Kshitij";
const b = 5;

console.log(a);
console.log(b);
console.log(name);
let type = typeof b;
console.log(type);

let student1 = {
  fullName: "Aditya",
  age: 22,
  semester: 8,
  isPass: true,
};

console.log(student1);

student1 = {
  fullName: "Aditya Kumar Singh",
  isPass: false,
};

console.log(student1);

const student2 = {
  fullName: "Kshitij Agrawal",
  age: 22,
  semester: 8,
  isPass: true,
};

student2.isPass = false;
student2.age = 23;

console.log(student2);
console.log(typeof student2);
console.log(student2.isPass);

// if the onject is decalared by let, whole object can be changed at once or single wise like in const whereas if it is declared by const it should be changed one by one

let x = 5;
let y = 2;
console.log(x / y);
console.log(x ** y);

let m = 5;
let n = "6";
console.log(m !== n);

console.log();

for (let i in student2) {
  console.log(student2[i]);
}

let str = `Hello! ${1 + 2 + 3 + 4 + 5}`;
console.log(str);

console.log(`Hello! My rating is ${1 + 2 + 3 + 4}`);

let info = ["Kshitij", 22, "Delhi"];
let info_du = [201310, 301457, 897908, "sndsij"];
console.log(info);
console.log(info.length);

for (let bio in info) {
  console.log(bio + " : " + info[bio]);
}

let store = info_du.concat(info);
console.log(store);
console.log(store.toString());

console.log();

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

console.log();

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.forEach((value, indx, companies) => { // 1st - value of array, 2nd - Index of array, 3rd - array itself
  console.log(indx);
})

console.log();

let number = [1, 2, 3, 4, 5];
let newNumber = number.map((val) => {
  return (val+5);
})
console.log(newNumber);
 
let evenArr = number.filter((val) => {
  return (val % 2 === 0);
})
console.log(evenArr);

let largestNo = number.reduce((prev, curr) => {
  return (prev > curr ? prev : curr); 
})
console.log(largestNo);
