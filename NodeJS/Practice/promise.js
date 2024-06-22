function f1() {
    return "Function 1";
};

function f2() {
    return new Promise((res, rej) => {
        rej("Rejected function 2");
        setTimeout(() => {
            res("Resolved function 2");
        }, 500);
    });
};

function f3() {
    return "Function 3";
};

function start() {
    const res1 = f1();
    console.log(res1);
    f2()
        .then((res) => {console.log(res)})
        .catch((rej) => {console.log(rej)});
    const res3 = f3();
    console.log(res3);
};

start();