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