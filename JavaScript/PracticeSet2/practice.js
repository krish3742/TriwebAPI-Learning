//Q1

let gameNo = 25;
let userNo = prompt("Guess the number");
while (gameNo != userNo) {
  userNo = prompt("Wrong number! Guess the number again");
}
console.log("You guessed the right number");
console.log(typeof userNo);

//Q2

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
