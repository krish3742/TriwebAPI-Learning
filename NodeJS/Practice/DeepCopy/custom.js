let user = {
    uname: {
        fname: "Kshitij",
        lname: "Agrawal"
    },
    age: 22,
    mobile: [1234, 5678]
};

function deepCopy(src, dest) {
    for(let key in src) {
        if(Array.isArray(src[key])) {
            dest[key] = [];
            deepCopy(src[key], dest[key]);
        } else if(typeof src[key] === 'object') {
            dest[key] = {};
            deepCopy(src[key], dest[key]);
        } else {
            dest[key] = src[key];
        }
    };
    return dest;
};

const newUser = deepCopy(user, {});
console.log(newUser);