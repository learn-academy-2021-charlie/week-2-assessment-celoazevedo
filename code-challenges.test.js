// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

///////////////

// Process

// 1: Write the test first!
// 2: Run your testing suit to see a failing test
// 3: Write the code
// 4: Run your testing suit to see your test pass
// 5: Refactor if necessary
// This is known as Red-Green Refactor

// -- describe() - Jest uses a method called describe() that runs other nested methods.
// Here we provide an argument of a string, with the name of our function, or the name of this particular test.
// -- test() or it() - test() or it() are methods nested within the describe's code block.
// Here we provide an argument of string, which is a statement that explains in regular words what the test is doing.
// -- expect() - expect() is a method that is nested within the test's code block. It calls the function being tested, passes any test-case arguments.
// Here we follow it with a matcher ( Example: .toEqual() or .toBe() ) that compares the output.

///////////////

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// create a function
// that takes in one argument -- number
// use conditinals to check if number is divisible by 3 (num % 3 === 0)
// if it is ---> use string interpolation and return '${num} is divisible by three'
// if not ----> use string interpolation and return '${num} is not divisible by three'

// const divisibleByThree = (num) => {
//     if (num % 3 === 0) {
//         return `${num} is divisible by three`
//     } else {
//         return `${num} is not divisible by three`
//     }
// }

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"

// describe("divisibleByThree", () => {
// // a describe method that lists the name of the function OR naming of the particular test.
//     // a test method, nested within the describe block, that in plain words, describes that the function does.
//     test("returns a string that says if number is divisible by 3 or not", () => {
  
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
//       expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
//       expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")
//     })
//   })

  // !!! -- the test passed but I am still not 100% sure on this. Should I have declared the variables that will be used in the expect() inside the describe method?? 

// b) Create the function that makes the test pass. 
// --> if I ran the test correctly the function that I had in part a) should work.
// const divisibleByThree = (num) => {
//     if (num % 3 === 0) {
//         return `${num} is divisible by three`
//     } else {
//         return `${num} is not divisible by three`
//     }
// }

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// create a function that takes in one argument (an array)
// iterate through the array accessing each element that in this case are strings
// to iterate over the array an create another array with the new values use the .map() built in array method
// access the first character of each string using the .charAt(0) and apply the toUpperCase() method to capitalize the string character
// use the slice method to get the remaining characters (all of the characters by the one in the index 0 position) of each string element and concatenate the result to the first character that was capitalized. 
// return the new array

// const capitalizeThisArrayOfWordsPlease = (arr) => {
//     return arr.map(element => element.charAt(0).toUpperCase() + element.slice(1))
// }

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// describe('capitalizeThisArrayOfWordsPlease', () => {
// // a describe method that lists the name of the function OR naming of the particular test.
//     // a test method, nested within the describe block, that in plain words, describes that the function does.
//     test("returns an array with strings as elements, strings will be capitalized", () => {
  
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(capitalizeThisArrayOfWordsPlease(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//       expect(capitalizeThisArrayOfWordsPlease(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//     })
//   })


// b) Create the function that makes the test pass.
// -- the same function should work. -- i did not come up with the logic myself but I do understand how the function is working.

// const capitalizeThisArrayOfWordsPlease = (arr) => {
//     return arr.map(element => element.charAt(0).toUpperCase() + element.slice(1))
// }


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// create a function that takes a string as an argument
// use toLowerCase() to convert all of the characters of the string to lowercase
// use the split() string method to convert the string into an array 
// iterate through the array -- using forEach() -- i dont need to return a new array
// use conditionals to check if character is === 'a' or 'e' or 'i' or 'o' or 'u'
// if it is --- return the index position of the character

/// !!! --- REMEMBER TO WRITE THE TEST FIRST --- !!!!!

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

describe('firstVowel', () => {
// a describe method that lists the name of the function OR naming of the particular test.
    // a test method, nested within the describe block, that in plain words, describes that the function does.
    test("returns a number with the value of the index position of the first vowel in the string", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(firstVowel(vowelTester1)).toEqual(1)
      expect(firstVowel(vowelTester2)).toEqual(0)
      expect(firstVowel(vowelTester3)).toEqual(2)
    })
  })

// b) Create the function that makes the test pass. 
// - a function that takes in a string and logs the index of the first vowel.

// create a function that takes a string as an argument
// use toLowerCase() to convert all of the characters of the string to lowercase
// use the split() string method to convert the string into an array 
// iterate through the array -- using a forloop (old school?)
// use conditionals to check if character is === 'a' or 'e' or 'i' or 'o' or 'u'
// if it is --- return the index position (indexOf()) of the character -- this will return the index value of the first vowel encountered while iterating over.

const firstVowel = (str) => {
  let arr = str.toLowerCase().split('')
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
      return arr.indexOf(arr[i])
    }
  }
}