let student = {
    sname: "Kshitij",
    age: 22,
    gender: "Male"
};

console.log(student);

let strFromObj = JSON.stringify(student);
console.log(strFromObj);
// for(let i = 0; i < strFromObj.length; i++) {
//     console.log(strFromObj.charAt(i) + " ");
// } 
let objFromStr = JSON.parse(strFromObj);
console.log(objFromStr);