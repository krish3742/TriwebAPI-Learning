//Pattern
for(let x = 1; x < 5; x++) {
    let str = "* ";
    console.log(str.repeat(x));
}

for(let x = 5; x > 0; x--) {
    let str = "* ";
    console.log(str.repeat(x));
}
 
//Recursion
function factorial(n) {
    if(n == 0){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(7));
