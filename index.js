let score = 0; //starting score

//Question 1
const answer1 = prompt(
  "Question 1: What color is the sky?\nA) Blue\nB) Red\nType A or B:",
);

if (answer1 === "A") {
  score = score + 1;
  alert("Correct!");
} else if (answer1 === "B") {
  alert("Wrong!");
} else {
  alert("Input not valid. Type A or B");
}

//Question 2
const answer2 = prompt(
  "Question 2: What is the language we are currently learning?\nA) Java\nB) Javascript\nType A or B:",
);

if (answer2 === "B") {
  score = score + 1;
  alert("Correct!");
} else if (answer2 === "A") {
  alert("Wrong!");
} else {
  alert("Input not valid. Type A or B");
}

//Question 3
const answer3 = prompt(
  "Question 3: Is coding fun?\nA) Yes\nB) No\nType A or B:",
);

if (answer3 === "A") {
  score = score + 1;
  alert("Correct! Coding is so fun!");
} else if (answer3 === "B") {
  alert("Incorrect! You could never be more wrong!");
} else {
  alert("Input not valid. Type A or B");
}

//Results post quiz
console.log(`Results: ${score} out of 3`);

if (score === 0) {
  alert("You need to do some studying!");
} else if (score === 3) {
  alert("Perfect Score! Nice Job!");
} else {
  alert(`Your score is ${score} out of 3. Keep Trying! You'll get there!`);
}
