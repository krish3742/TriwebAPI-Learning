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