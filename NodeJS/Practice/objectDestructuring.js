//Object Destructuring
const student = {
    "name": "Kshitij",
    "mobile_no": 6389769480,
    "address": "India"
};
let {name, mobile_no, address} = student;
console.log(name, mobile_no, address);

//Array Destructuring
const marks = [98, 78, 76, 95, 87];
[s1, s2] = marks;
console.log(s1, s2);