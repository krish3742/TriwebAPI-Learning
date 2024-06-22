let arr = [1, 2, 3, 4];
// Method 1
// let newArr = [...arr];

// Method 2
// let newArr = [];
// Object.assign(newArr, arr);

// Method 3
// let newArr = arr.slice();

// Method 4
let newArr = Array.from(arr);
console.log(arr, newArr);
arr[0] = 6;
console.log(arr, newArr);

let obj = {
    uname: "Kshitij",
    age: 22
};
// let newObj = {...obj};
let newObj = {};
Object.assign(newObj, obj)
console.log(obj, newObj);
obj.age = 25;
console.log(obj, newObj);