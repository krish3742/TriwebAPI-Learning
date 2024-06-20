function addTwo(callby, n1, n2) {
    console.log(callby, " : ", n1 + n2);
};

setImmediate(() => {
    addTwo("setImmediate", 1, 2);
}); // Its callback get register in CHECK QUEUE

setTimeout(() => {
    addTwo("setTimeout", 1, 2);
}, 0); // Its callback get register in TIMER QUEUE

// TIMER QUEUE is faster than CHECK QUEUE

addTwo("Direct", 1, 2);