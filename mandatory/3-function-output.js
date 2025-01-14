// The Math.random() function returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range.
function getRandomNumber() {
  return Math.random() * 10;
}


// the concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
function combine2Words(word1, word2) {
  return word1.concat(word2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  return `${firstWord} ${secondWord} ${thirdWord}`;
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 3-function-output` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test("concatenate example #1", () => {
  expect(concatenate("code", "your", "future")).toEqual("code your future");
});

test("concatenate example #2", () => {
  expect(concatenate("I", "like", "pizza")).toEqual("I like pizza");
});

test("concatenate doesn't only accept strings", () => {
  expect(concatenate("I", "am", 13)).toEqual("I am 13");
});
