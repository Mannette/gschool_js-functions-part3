// add scripts

console.log("sanity check!");

var student = {name: 'Michael', age: 27};
function getStudentName (student) {
  return student.name;
}
console.log(getStudentName(student));

var stringArray = ['This', 'is', 'a', 'sentence'];
function getTotalLetters (arr) {
  var joined = arr.join('');
  var split = joined.split('');
  return split.length;
}
console.log(getTotalLetters(stringArray));

var newObject = {};
function createObject (objKey, objValue) {
  newObject[objKey] = objValue;
  return newObject;
}
createObject ('city', 'Denver');
console.log(newObject);

var letterArray = ['a', 'b', 'c', 'd', 'e'];
function getNegativeIndex (arr, num) {
  return arr[arr.length + num];
}
console.log(getNegativeIndex(letterArray, -4));

var toEdit = 'Hello there';
function editString (str, char) {
  
}

module.exports = {
  'getStudentName': getStudentName,
  'getTotalLetters': getTotalLetters,
  'createObject': createObject,
  'getNegativeIndex': getNegativeIndex
};
