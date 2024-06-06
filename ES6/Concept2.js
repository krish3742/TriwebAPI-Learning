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