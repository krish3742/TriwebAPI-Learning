function addTwo(callby, n1, n2) {
    console.log(callby, " : ", n1 + n2);
};

setImmediate(() => {
    addTwo("setImmediate", 1, 2);
}); // Its callback get register in CHECK QUEUE

setTimeout(() => {
    addTwo("setTimeout 2", 1, 2);
}); 

setTimeout(() => {
    addTwo("setTimeout 1", 1, 2);
}, 0); // Its callback get register in TIMER QUEUE

// TIMER QUEUE is faster than CHECK QUEUE and process.nextTick is faster than TIMER QUEUE
process.nextTick(() => {
    addTwo("process.nextTick", 1, 2);
});

addTwo("Direct", 1, 2);