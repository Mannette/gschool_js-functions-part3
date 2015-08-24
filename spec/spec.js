var code = require('../js/main.js');

var student1 = {name: 'Ethan', age: 23};

describe('Get Name', function () {
  it('should return the value of the name property', function () {
    expect(code.getStudentName(student1)).toEqual('Ethan');
  });
});


var stringArr = ['This', 'is', 'to', 'test'];

describe('Get Letters', function () {
  it('should return total number of letters', function () {
    expect(code.getTotalLetters(stringArr)).toEqual(12);
  });
});

describe('Create Object', function () {
  it('should return a new object with a key of the first argument and the value of the second argument', function () {
    // code.createObject('city', 'Denver');
    expect(code.createObject('city', 'Denver')).toEqual({city: 'Denver'});
  });
});

var letterArray = ['a', 'b', 'c', 'd', 'e'];
describe('Negative Index', function () {
  it('should return the value from the array at the given negative index', function () {
    expect(code.getNegativeIndex(letterArray, -2)).toEqual('d');
  });
});

var str = 'This is a string';
describe('Remove Character', function () {
  it('should remove characters passed as the second argument', function () {
    expect(code.removeCharacter(str, 'i')).toEqual('Ths s a strng');
  });
  it('should not alter original string', function () {
    code.removeCharacter(str);
    expect(str).toEqual('This is a string');
  });
});

var newObj = {john: 10, jerry: 11, jenny: 12};
describe('Output Object', function () {
  it('should output key and value pairs', function () {
    expect(code.outputObject(newObj)).toEqual('john is 10, jerry is 11, jenny is 12');
  });
});

var testString = "I am the best string!";
describe('Get Vowels', function () {
  it('should return an array of all the vowels in a string with no duplicates', function () {
    expect(code.getVowels(testString)).toEqual(['a', 'e', 'i']);
  });
});

var pairedArr = ['a', 'a', 'l', 'l', 'o', 'o'];
var notPairedArr = ['a', 'a', 't', 't', 'u'];
describe('Capture Twins', function () {
  it('should return true if every adjacent pair in array is the same', function () {
    expect(code.captureTwins(pairedArr)).toEqual(true);
  });
  it('should return false if each adjacent pair is not the same', function () {
    expect(code.captureTwins(notPairedArr)).toEqual(false);
  });
});

describe('Test Boolean Logic', function () {
  it('should return true if any value is true', function () {
    expect(code.testBooleanLogic()).toEqual(true);
  });
  it('should return false if there are no true values', function () {
    expect(code.testBooleanLogic()).toEqual(false);
  });
});
