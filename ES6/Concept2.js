let obj = {
    fullName: "Kshitij Agrawal",
    mobile: 6389769480,
};
if('fullName' in obj) {   // true
    console.log(obj.fullName);
}
if('name' in obj) {    // false
    console.log(obj.mobile);
}


let map = new Map();
console.log(map);
map.set('Name', 'Kshitij Agrawal');
map.set('Mobile', 6389769480);
console.log(map);
console.log(map.get('Name'));

let set = new Set([1, 2, 5, 5, 7, 7, 9]);
console.log(set);
set.add(15);
set.add('Foo');
console.log(set);

let newSet = new Set();
newSet.add(13);
newSet.add(15);
newSet.add(15);
newSet.add(16);
console.log(newSet);

class car {
    constructor(brand) {
        console.log("I am constructor");
        this.brandName = brand;
    }
    start() {
        console.log("I am starting");
    }
    stop() {
        console.log("I am stopped");
    }
    printBrand() {
        console.log(`My brand is ${this.brandName}`);
    }
}

let thar = new car("Thar");
console.log(typeof thar);
thar.printBrand();
thar.start();
thar.stop();
let fortuner = new car();
fortuner.printBrand();

const getPromise = () => {
    return new Promise((resolve, reject) => { 
        console.log("I am promise");
        resolve("Success");
    })
}

getPromise()
    .then((value) => {
        console.log(value);
    })