function getName() {
    setTimeout(() => {
        console.log("Kshitij");
    }, 1000);
};

async function getResult() {
    await getName();
}

getResult();
