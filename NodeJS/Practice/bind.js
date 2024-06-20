let st1 = {
    sname: "Kshitij",
    mobile_no: 6389769480
};

let st2 = {
    sname: "Vartika",
    mobile_no: 7394849689,
    getDetails: function() {
        return this.sname + " " + this.mobile_no;
    }
}

let student = st2.getDetails.bind(st1);
console.log(student());
console.log(st2.getDetails());

let details = st2.getDetails.call(st1);
console.log(details);