let number = window.prompt("Enter the number to check if it's a multiple of 5");

if (number % 5 == 0) {
  console.log(number, "is a multiple of 5");
} else {
  console.log(number, "is not a multiple of 5");
}

let score = prompt("Enter the score(0 to 100) to know the grade");
if (score >= 80 && score <= 100) console.log("A Grade");
else if (score >= 70 && score <= 79) console.log("B Grade");
else if (score >= 60 && score <= 69) console.log("C Grade");
else if (score >= 50 && score <= 59) console.log("D Grade");
else if (score >= 0 && score <= 49) console.log("Fail");
else console.log("Wrong Score");
