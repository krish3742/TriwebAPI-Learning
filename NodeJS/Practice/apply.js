function marksObtained(...marks) {
    [this.subject1, this.subject2, this.subject3, this.subject4, this.subject5] = marks;
    this.status = marks.every((ele) => {
        return (ele > 33);
    });
};

function student(sname, ...marks) {
    this.sname = sname;
    marksObtained.apply(this, marks);
};

let s1 = new student("Kshitij", 33, 78, 87, 76, 56);
console.log(s1);