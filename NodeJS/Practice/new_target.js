function sayHelloOrHi(){
    if(new.target == undefined) {
        console.log("Hello");
    } else {
        console.log("Hi");
    }
};

sayHelloOrHi();

let s1 = new sayHelloOrHi();