function product(pname, price) {
    this.pname = pname;
    this.price = price;
};

function student(sname, pname, price) {
    product.call(this, pname, price);
    this.sname = sname;
};

let s1 = new student("Kshitij", "Laptop", 20000);
console.log(`${s1.sname}
${s1.pname}
${s1.price}`);