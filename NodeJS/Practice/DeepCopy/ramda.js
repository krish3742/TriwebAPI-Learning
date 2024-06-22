const R = require('ramda');

const arr = [[1, 2, 3], [4, 5, 6], [7, 8 ,9]];
const newArr = R.clone(arr);
console.log(arr,"\n",newArr);
arr[0][1] = 98;
console.log(arr,"\n",newArr);

let user = {
    uname: {
        fname: "Kshitij",
        lname: "Agrawal"
    },
    age: 22
};
let newUser = R.clone(user);
console.log(user, newUser);
user.uname.fname = 25;
console.log(user, newUser);