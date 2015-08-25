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
var passArr = ['q', 'q', 'y', 'y'];
// create array that will fail
var failArr = ['o', 'o', 'p', 'o'];
function captureTwins (arr) {
  // create arrays to hold seperate indices
  var oddIndex = [];
  var evenIndex = [];
  // loop through passed array
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      // push elements with an odd index
      oddIndex.push(arr[i]);
    }
    else {
      // push elements with an even index
      evenIndex.push(arr[i]);
    }
  }
  // iterate over length of even index array
  for(i = 0; i < evenIndex.length; i++) {
    // compare values at index
    if (oddIndex[i] === evenIndex[i]) {
      var result = true;
    }
    else {
      result = false;
    }
  }
  // return result
  return result;
}
console.log(captureTwins(failArr));

// -------------- //
// NINTH FUNCTION //
// -------------- //
// create arrays to pass and fail
var booleanPass = [false, false, false, true, false];
var booleanFail = [false, false, false, false];
function testBooleanLogic (arr) {
  // check entire array
  for (var i = 0; i < arr.length; i++) {
    // if true exists in array
    if (arr.indexOf(true) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(testBooleanLogic(booleanPass));
testBooleanLogic(booleanFail);

// -------------- //
// TENTH FUNCTION //
// -------------- //
var someArr = ['e', 'r', 'b', 'this', 'that', 'e', 'this', 'b'];

function getUniqueValues (arr) {
  var uniqueValues = [];
  for (var i = 0; i < arr.length; i++) {
    if (uniqueValues.indexOf(arr[i]) === -1) {
      uniqueValues.push(arr[i]);
    }
  }
  return uniqueValues
}
console.log(getUniqueValues(someArr));

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
