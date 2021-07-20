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
console.log(multBy2)

// a) Your answer: --> the output will be a new array stored in the multBy2 variable. The new array will have the elements from the array that we are applying the .map method multiplied by 2. ---> [8, 10, 12, 14, 16]
// b) Verify and explain: --> .map() is a built in array method that takes in an anonymous (i think) function as its argument. The anonymous function can take in 3 diferent parameters - 1) the actual value of the element, 2) the index position of that element, 3) the actual array. This built in method iterates through the array, and performs an action to each element of that array. The output will be a new array!


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: -- [12, 14] 
// b) Verify and explain: -- the .filter() built in array method takes in a function as its argument. Inside the filter method we can access the value of each element, the index position and the array itself. The function will determine a condition so we can filter out only the elements that meets this condition. In this case we are filtering all of the elements that when divided by 2 will have 0 as a remainder --> even numbers.


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
console.log(learnStudent)

// a) Your answer: -- i think that everything is correct except that when we are instantiating the class and storing the created object in the learnStudent variable we still need the have the parentesis after the class name (even if we are not passing in any arguments when intantiating it). var learnStudent = new Learn()
// b) Verify and explain: I was wrong. But now I know that we do not need the parentesis when instantiating a class that does not take any arguments.
