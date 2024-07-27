// Q1: Create an array with the numbers 1 through 10. Write a function to remove all even numbers from this array and return the new array.

function removeEvenNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(removeEvenNumbers(arr1));
  
  // **********************************************************
  
  // Q2: Write a function that takes a string as an argument and returns the number of vowels in the string. Ignore case sensitivity.
  
  function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const str2 = "Hello World";
  console.log(countVowels(str2));
  
  // **********************************************************
  
  // Q3: Write a for loop that prints the first 10 Fibonacci numbers.
  
  function printFibonacci() {
    let a = 0, b = 1;
    console.log(a);
    console.log(b);
    for (let i = 2; i < 10; i++) {
      let c = a + b;
      console.log(c);
      a = b;
      b = c;
    }
  }
  
  printFibonacci();
  
  // **********************************************************
  
  // Q4: Write a function that takes a month as an argument (e.g., "January") and returns the number of days in that month. Consider leap years for February. Use a switch statement.
  
  function daysInMonth(month) {
    const year = new Date().getFullYear();
    const isLeap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  
    switch (month.toLowerCase()) {
      case 'january':
      case 'march':
      case 'may':
      case 'july':
      case 'august':
      case 'october':
      case 'december':
        return 31;
      case 'april':
      case 'june':
      case 'september':
      case 'november':
        return 30;
      case 'february':
        return isLeap ? 29 : 28;
      default:
        return 'Invalid month';
    }
  }
  
  console.log(daysInMonth("February"));
  
  // **********************************************************
  
  // Q6: Write a function that takes three numbers and returns the largest of the three without using the Math.max() method.
  
  function findLargest(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
  }
  
  console.log(findLargest(3, 5, 1));
  
  // ********************************************************
  
  // Q8: Write a function that takes a string and an optional character. The function should return the number of times the character appears in the string. If the character is not provided, count the number of spaces in the string.
  
  function countCharacter(str, char = ' ') {
    let count = 0;
    for (let c of str) {
      if (c === char) count++;
    }
    return count;
  }
  
  console.log(countCharacter("Hello World", "o"));
  console.log(countCharacter("Hello World"));
  
  // **********************************************************
  
  // Q9: Write a function that takes a score (0-100) and returns the corresponding grade (A, B, C, D, F) based on standard grading scale. Use a switch statement with a default case for invalid scores.
  
  function getGrade(score) {
    switch (true) {
      case (score >= 90 && score <= 100):
        return 'A';
      case (score >= 80 && score < 90):
        return 'B';
      case (score >= 70 && score < 80):
        return 'C';
      case (score >= 60 && score < 70):
        return 'D';
      case (score >= 0 && score < 60):
        return 'F';
      default:
        return 'Invalid score';
    }
  }
  
  console.log(getGrade(85));
  
  // **********************************************************
  
  // Q10: Write a function that takes an array of strings and returns an object where the keys are the strings and the values are the lengths of those strings. The function should exclude strings that have a length of 3 or less.
  
  function stringLengths(arr) {
    const result = {};
    arr.forEach(str => {
      if (str.length > 3) {
        result[str] = str.length;
      }
    });
    return result;
  }
  
  const arrKey = ["apple", "bat", "car", "dolphin"];
  console.log(stringLengths(arrKey));
  
  // **********************************************************
  