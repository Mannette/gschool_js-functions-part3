// add scripts

console.log("sanity check!");

// -------------- //
// FIRST FUNCTION //
// -------------- //
// create student
var student = {name: 'Michael', age: 27};
function getStudentName (student) {
  // return name value
  return student.name;
}
console.log(getStudentName(student));

// --------------- //
// SECOND FUNCTION //
// --------------- //
// create array of strings
var stringArray = ['This', 'is', 'a', 'sentence'];
function getTotalLetters (arr) {
  // join strings to remove white space
  var joined = arr.join('');
  // split joined string
  var split = joined.split('');
  // return length
  return split.length;
}
console.log(getTotalLetters(stringArray));

// -------------- //
// THIRD FUNCTION //
// -------------- //
// create object
var newObject = {};
function createObject (objKey, objValue) {
  // make params as key and value
  newObject[objKey] = objValue;
  // return object
  return newObject;
}
createObject ('city', 'Denver');
console.log(newObject);

// --------------- //
// FOURTH FUNCTION //
// --------------- //
// create array of letters
var letterArray = ['a', 'b', 'c', 'd', 'e'];
function getNegativeIndex (arr, num) {
  // return index of length + negNum
  return arr[arr.length + num];
}
getNegativeIndex(letterArray, -4);

// -------------- //
// FIFTH FUNCTION //
// -------------- //
// create string
var toEdit = 'Hello there';
function removeCharacter (str, char) {
  // cache split string with removed character
  var cached = str.split(char).join('');
  // return cached string
  return cached;
}
removeCharacter(toEdit, 'e');

// -------------- //
// SIXTH FUNCTION //
// -------------- //
// create object
var nameObj = {jimmy: 15, greg: 20, tim: 14, cindy: 8};
function outputObject (obj) {
  // create array to cache each key and value
  var result = [];
  // for-in to loop through entire object
  for (i in obj) {
    // push key and value to array
    result.push(i + ' is ' + obj[i]);
    // join array with comma to make single string
    var final = result.join(', ');
  }
  return final;
}
console.log(outputObject(nameObj));

// ---------------- //
// SEVENTH FUNCTION //
// ---------------- //
// create a string
var daString = 'A string with some vowels';
function getVowels (str) {
  // create array with vowels
  var vowelArr = ['a', 'e', 'i', 'o', 'u'];
  // create array to hold present vowels
  var stringVowels = [];
  // convert string to lowercase
  var lowerStr = str.toLowerCase();
  // split the string at each character
  var splitStr = lowerStr.split('');
  // for-in to loop through entire array
  for (i in splitStr) {
    // check index of each vowel within string passed to function
    if (splitStr.indexOf(vowelArr[i]) !== -1) {
      // push vowels present in string to new array
      stringVowels.push(vowelArr[i]);
    }
  }
  // return new array
  return stringVowels;
}
console.log(getVowels(daString));

// --------------- //
// EIGHTH FUNCTION //
// --------------- //
// create array that will pass
var passArr = [];
// create array that will fail
var failArr = [];
function captureTwins (arr) {

}

// -------------- //
// NINTH FUNCTION //
// -------------- //
function testBooleanLogic (arr) {

}

// -------------- //
// TENTH FUNCTION //
// -------------- //
function getUniqueValues (arr) {

}

// -------------- //
// MODULE EXPORTS //
// -------------- //
module.exports = {
  'getStudentName': getStudentName,
  'getTotalLetters': getTotalLetters,
  'createObject': createObject,
  'getNegativeIndex': getNegativeIndex,
  'removeCharacter': removeCharacter,
  'outputObject': outputObject,
  'getVowels': getVowels,
  'captureTwins': captureTwins,
  'testBooleanLogic': testBooleanLogic,
  'getUniqueValues': getUniqueValues
};
