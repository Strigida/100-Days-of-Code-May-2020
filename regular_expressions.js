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

//the dot/period character is a wildcard marker, allowing it to match any letter. 
//for example, "fun" could instead have been "bun", "sun", or any other variation, including misspellings
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let resultWildTest = unRegex.test(exampleStr);
let resultWildMatch = exampleStr.match(unRegex);

console.log(resultWildTest + ", " + resultWildMatch);

//a character class ([abcd]) looks for all characters within the square brackets
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; //
let resultCharacter = quoteSample.match(vowelRegex);

console.log(resultCharacter);

//match a range of characters (alphabetical or numeric) inside the square brackets by hyphenating them
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let AlphaResult = quoteSample2.match(alphabetRegex);

console.log(AlphaResult);

//a range can be concatenated to search for multiple ranges
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let conCatRegex = /[h-s2-6]/gi; // Change this line
let conCatResult = quoteSample3.match(conCatRegex);

console.log(conCatResult);

//negated character sets
//add a carrot (^) into the square brackets ahead of the characters you DON'T want found
//this regex excludes all vowels and numbers
let negString = "001 Why, sometimes I've believed as many as six impossible things before breakfast!";
let negRegex = /[^aeiou0-9]/gi;
let negResult = negString.match(negRegex);

console.log("everything that isn't negated is: " + negResult);

//to find characters that occur more than once (in a row) add "+" directly after the character you want checked
let difficultSpelling = "Mississippi";
//if there's only one set of multiple characters being tested for, the square brackets aren't needed (as it's not a set)
let diffRegex = /[s+p+]/gi; // Change this line
let diffResult = difficultSpelling.match(diffRegex);

console.log(difficultSpelling + ": " + diffResult);

//to search for something at the beginning of a string use carrot (^) outside of a set (square brackets/[])
let startRegex = /^Harry/;

//to search for something at the end of a string use the dollar sign ($) in the same way
let endRegex = /Harry$/;

