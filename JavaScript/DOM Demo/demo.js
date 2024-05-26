console.log("Hello!");

// let heading = document.getElementById("heading1");
// console.log(heading);
// console.dir(heading);

// let headingClass = document.getElementsByClassName("heading");
// console.log(headingClass);
// console.dir(headingClass);

// let para = document.getElementsByTagName("p");
// console.log(para);
// console.dir(para);

let queryHeading = document.querySelector("#heading4");
console.log(queryHeading);

let allQueryHeading = document.querySelectorAll(".heading");
console.dir(allQueryHeading);

let div = document.querySelector("div");
console.dir(div);

console.log(div.getAttribute("class"));

div.setAttribute("id", "myDivId");

console.log(div.getAttribute("id"));

let button = document.querySelector("#button");
console.log(button);

console.log(button.style);

button.style.color = "whitesmoke";
button.style.backgroundColor = "brown";

queryHeading.style.fontSize = "30px";

let newButton = document.createElement("button");
console.log(newButton);
console.log(newButton.innerText);
newButton.innerText = "Reset";
console.log(newButton.innerText);

button.after(newButton);
newButton.style.backgroundColor = "black";
newButton.style.color = "white";

let newHeading = document.createElement("h1");
document.querySelector("body").prepend(newHeading);
newHeading.innerText = "Hi! I'm new Heading";

button.remove();



