function f1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Resolved function 1");
        }, 500);
    });
};

function f2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Rejected function 2");
        }, 1000);
    });
};

function f3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Resolved function 3");
        }, 2000);
    });
};

Promise.all([f1(), f2(), f3()])
    .then((res) => {console.log(res)})
    .catch((rej) => {console.log(rej)});