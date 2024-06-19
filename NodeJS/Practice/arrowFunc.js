//Arrow Function
let addTwoNo = (num1, num2) => {
    console.log(num1 + num2);
};

let addHi = uname => {
    console.log("Hi " + uname);
}

let addHello = uname => console.log("Hello " + uname);

addTwoNo(4, 5);
addHi("Kshitij");
addHello("Kshitij");

//This keyword
const isArrowThis = () => {
    console.log(this);
};

function isThis() {
    console.log(this);
};

isArrowThis();
console.log(this);
isThis();