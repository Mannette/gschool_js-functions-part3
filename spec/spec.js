var code = require('../js/main.js');

var student1 = {name: 'Ethan', age: 23}

describe('Get Name', function() {
  it('should return the value of the name property', function() {
    expect(code.getStudentName(student1)).toEqual('Ethan');
  });
});


var stringArr = ['This', 'is', 'to', 'test'];

describe('Get Letters', function() {
  it('should return total number of letters', function() {
    expect(code.getTotalLetters(stringArr)).toEqual(12);
  });
});

describe('Create Object', function() {
  it('should return a new object with a key of the first argument and the value of the second argument', function() {
    // code.createObject('city', 'Denver');
    expect(code.createObject('city', 'Denver')).toEqual({city: 'Denver'});
  });
});

var letterArray = ['a', 'b', 'c', 'd', 'e'];
describe('Negative Index', function() {
  it('should return the value from the array at the given negative index', function() {
    expect(code.getNegativeIndex(letterArray, -2)).toEqual('d');
  });
});

describe('Remove Character', function() {
  it('should remove characters passed as the second argument', function() {
    expect(code.removeCharacter()).toEqual();
  });
});
