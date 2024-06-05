//Q1
let arr = [12];
Array.prototype.last = function() {
    return (this.length === 0 ? -1 : this[this.length - 1]);
};
console.log(arr.last());

//Q2
function printName() {
    console.log(`${this.firstName} ${this.lastName}`);
};
const obj = {
    firstName: "Kshitij",
    lastName: "Agrawal",
};
printName.call(obj);
printName.apply(obj);
let bindObj = printName.bind(obj);
bindObj();

//Q3
function isTwoPassed(...rest) {
    if(rest.indexOf(2) >= 0) {
        console.log("Passed");
    } else {
        console.log("Not Passed");
    }
};
isTwoPassed(3, 2);

//Q3 
// //Method 1
// function getNextDate() {
//     let date = this.getDate();
//     console.log(date+1);
// };
// const getDate = new Date();
// Date.prototype.getNextDate = getNextDate;
// getDate.getNextDate();
// const getNewDate = new Date();
// getNewDate.getNextDate();

//Method 2
function getNextDate() {
    let date = this.getDate();
    console.log(date+1);
};
const getDate = new Date();
getDate.getNextDate = getNextDate;
getDate.getNextDate();
// const getNewDate = new Date();
// getNewDate.getNextDate();

//Q4
function addPrefix(str) {
    const prefix = "$ ";
    let arr = str.split("\n");
    let arrPrefix = arr.map((ele) => {
        return (prefix + ele);
    });
    let newStr = arrPrefix.join("\n");
    // let newStr = arrPrefix.toString();
    console.log(newStr);
};
const text = `My First line
My Second Line`;
addPrefix(text);

//Q5
const maxArr = [1, 13, 56, 78, -98, 87];
console.log(Math.max(...maxArr)); //Method 1
console.log(Math.max.apply(null, maxArr)); //Method 2

//Q6 
//Method 1
let dupArr = [[1, 2]];
Array.prototype.duplicate = function() {
    return this.concat(this);
};
console.log(dupArr.duplicate());

//Method 2
// function duplicate() {
//     return this.concat(this);
// };
// let dupArr = new Array();
// dupArr.duplicate = duplicate;
// console.log(dupArr.duplicate());