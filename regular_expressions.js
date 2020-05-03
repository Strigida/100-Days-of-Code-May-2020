//search for a specific string within another string, and return true or false
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

console.log(result);

//this regex checks for multiple possibilities within the string given
let titleString = "James and the Giant Peach.";
let titleRegex = /peach|Peach|peaches/;
let result2 = titleRegex.test(titleString);

console.log(result2);

//this ignore case flag will ignore the letter case to recognize the letters given in either case
let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // The "i" is short for ignorecase
let result3 = fccRegex.test(myString2);

console.log(result3);

//the .match() method allows one to extract the string in question from another string
//using the .match() method is the inverse of the .test method. See below.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let resultMatch = extractStr.match(codingRegex);
let resultTest = codingRegex.test(extractStr);

console.log(resultTest + ", " + resultMatch);

let twinkleStar = "Twinkle, twinkle, little star";
//the g flag finds all instances of the search word in the regex
let starRegex = /Twinkle/gi; 
let resultGTag = twinkleStar.match(starRegex);
let resultGTagTest = starRegex.test(twinkleStar);

console.log(resultGTagTest + ", " + resultGTag);