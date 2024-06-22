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
            res("Resolved function 2");
        }, 100);
    });
};

function f3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Resolved function 3");
        }, 2000);
    });
};

Promise.race([f1(), f2(), f3()])
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});