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