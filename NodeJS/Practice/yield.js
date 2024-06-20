function* getNum(num) {
    while(num <= 5) {
        yield num;
        num++;
    };
};

let generator = getNum(1);
console.log(generator.next());
console.log("Hello");
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
