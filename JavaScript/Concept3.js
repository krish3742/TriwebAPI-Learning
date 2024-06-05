let obj = {
    fullName: 'Kshitij',
    mobile: 6389769480,
    display() {
        console.log(`${this.fullName}`);
    },
};

// let obj1 = Object.create(obj);
let obj1 = {address: "India"};
obj1.__proto__ = obj;
console.log(obj1);
obj1.fullName = 'Kshitij Agrawal';
console.log(obj1);
console.log(obj1.__proto__);
obj1.display();

console.log();

let getSet = {
    age: 18,
    get getAge() {
        console.log(this.age);
    },
    set setAge(newAge) {
        this.age = newAge;
    }
};

let kshitij = Object.create(getSet);
kshitij.setAge = 22;
kshitij.getAge;
console.log(kshitij);

function* makeIterator() {
    yield 1;
    yield 2;
    yield 3;
}
const iter = makeIterator();

console.log(iter);
for (const itItem of iter) {
    console.log(itItem);
}
