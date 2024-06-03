function add1() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

function add2() {
    let sum;
    let arr = Array.from(arguments);
    arr.forEach((ele) => {
        sum += ele;
    })
    console.log(sum);
}

function add3(...arr) {
    let sum = 0;
    arr.forEach((ele) => {
        sum += ele;
    })
    console.log(sum);
}

add3(1,2,3,4,5);

let a = '1+2';
console.log(eval(a));

let x = (1,2,3,4);
console.log(x);

let obj = {
    fullName: "Kshitij Agrawal",
    mobile: 6389769480,
};

if('fullName' in obj) {   // true
    console.log(obj.fullName);
}

if('name' in obj) {    // false
    console.log(obj.mobile);
}

function xyz() {
    this.x = 5;
}

let newObj = new xyz();
console.log(newObj);

console.log(newObj instanceof xyz); // true
console.log(obj instanceof xyz); // false