let h2 = document.querySelector("h2");
console.log(h2);
console.log(h2.innerText);

h2.innerText += " from Kshitij Agrawal";

console.log(h2.innerText);

let divs = document.querySelectorAll(".box");
console.log(divs);

console.log(divs.length);

let idx = 1;
for(let div of divs) {
    div.innerText = `Unique text for div ${idx}`;
    idx++;
    console.log(div.innerText);
}

// divs[0].innerText = "Unique text for div 1";
// divs[1].innerText = "Unique text for div 2";
// divs[2].innerText = "Unique text for div 3";

let newButton = document.createElement("button");
newButton.innerText = "Click Me!";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";
document.querySelector("body").prepend(newButton);

let paraJs = document.querySelector(".para");
console.log(paraJs.getAttribute("class"));
// paraJs.setAttribute("class", "newPara");
console.log(paraJs.classList);
paraJs.classList.add("newPara");
console.log(paraJs.classList);