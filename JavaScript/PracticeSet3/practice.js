//Q1

const vowels = (str) => {
    let count = 0;
    for(let i of str) {
        if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            count++;
        }
    }
    if(count == 0) {
        return "No vowels";
    } else {
        return count;
    }
}

console.log(vowels("aeiou"));

console.log();

//Q2

let arr = [1,2,3,4,5,6,7,8,9,10];

arr.forEach((val) => {
    console.log(val ** 2);
})

console.log(arr.toString());

console.log();

//Q3

let marks = [90, 80, 65, 92, 89, 96, 91];

let toppers = marks.filter((val) => {
    return (val >= 90);
})

console.log(toppers);

console.log();

//Q4

let number = prompt("Enter a number");
let arrNo = [];
for(let i = 0; i < 5; i++) {
    arrNo[i] = i+1;
}
console.log(arrNo);
let sum = arrNo.reduce((prev, curr) => {
    return (prev + curr);
})
let multiply = arrNo.reduce((prev, curr) => {
    return (prev * curr);
})
console.log(sum);
console.log(multiply);


let twoSum = function(nums, target) {
    let numsLength = nums.length;
    let i;
    for(i = 0; i < nums.length; i++) {
        if(nums[i] + nums[i+1] == target) {
            break;
        }
    }
    let result = [i, i+1];
    return result;
};

console.log(twoSum);