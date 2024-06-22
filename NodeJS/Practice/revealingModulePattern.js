function user() {
    userList = [];
    function addUser(user){
        userList.push(user);
        addUserConfirmation(user);
    };
    function addUserConfirmation(user){
        console.log("User added:", user);
    };
    return {addNewUser: addUser};
};

const u1 = user();
u1.addNewUser("Krish");