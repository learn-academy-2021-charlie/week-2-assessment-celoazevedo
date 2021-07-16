// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.split(" "))

// a) Your answer: the output will be an array with every individual character of the string stored in the cohort variable representing an element in the array.-> ['C', 'h', 'a', 'r','l', 'i', 'e', ' ','2', '0', '2', '1']
// b) Verify and explain: .split() is a bultin method that works on strings. It takes in as an argument "how you want your string to be split up". another example -- if we passed in a space character as an argument, the split(' ') would split up the string where there is a space --> in this case the output would be [ 'Charlie', '2021' ]


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: --> Undefined!!! I actually realized that halfway throuh my answer.... But before actually checking. Tricky tricky... -- No return statement
// b) Verify and explain: -- Nice! Very proud of myself for catching this one. I think that since we are only passing in one argument, we can also use the arrow function syntax with the implicit (i think that is how you call it) return statement -- I really like how it looks :).
const greeter2 = name => `Hello, ${name}!`
console.log(greeter2("LEARN Student"))


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:
// b) Verify and explain:


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer:
// b) Verify and explain:


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
// console.log(learnStudent)

// a) Your answer:
// b) Verify and explain:
