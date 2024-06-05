let addBtn = document.querySelector("#Add");
let deleteBtn = document.querySelector("#Delete");
let toRed = document.querySelector("#toRed");
let toGreen = document.querySelector("#toGreen");
let toYellow = document.querySelector("#toYellow");
let toBlue = document.querySelector("#toBlue");
let input = document.querySelector("input");
let redBlock = document.querySelector("#red");
let greenBlock = document.querySelector("#green");
let blueBlock = document.querySelector("#blue");
let yellowBlock = document.querySelector("#yellow");
// let blocks = document.querySelectorAll("color");
let para = null;

addBtn.addEventListener("click", () => {
    let text = input.value;
    if(text.length !== 0) {
        input.disabled = true;
        para = document.createElement("p");
        para.innerText = text;
        redBlock.append(para);
        addBtn.disabled = true;
        deleteBtn.disabled = false;
    }
})

deleteBtn.addEventListener("click", () => {
    input.value = "";
    input.disabled = false;
    addBtn.disabled = false;
    para.remove();
    deleteBtn.disabled = true;
})

toRed.addEventListener("click",() => {
    redBlock.append(para);
})

toGreen.addEventListener("click",() => {
    greenBlock.append(para);
})

toBlue.addEventListener("click",() => {
    blueBlock.append(para);
})

toYellow.addEventListener("click",() => {
    yellowBlock.append(para);
})


